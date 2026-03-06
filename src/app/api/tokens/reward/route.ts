import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const forwarded = req.headers.get("x-forwarded-for");
        const ip = forwarded ? forwarded.split(/, /)[0] : "127.0.0.1";

        // Verifica lo stato dell'IP
        const { data: usage, error: fetchError } = await supabase
            .from('guest_usage')
            .select('tokens_remaining, ads_watched_today, last_ad_watched_at')
            .eq('ip_address', ip)
            .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
            console.error("Errore fetch usage per ads:", fetchError);
            return NextResponse.json({ error: "Errore di connessione al server." }, { status: 500 });
        }

        const now = new Date();
        let adsWatchedToday = 0;
        let lastAdWatched = new Date(0);

        if (usage) {
            // Nota: Se `ads_watched_today` o `last_ad_watched_at` non esistono nel database,
            // Supabase restituirà undefined. Questo blocco gestisce l'aggiornamento sicuro.
            lastAdWatched = usage.last_ad_watched_at ? new Date(usage.last_ad_watched_at) : new Date(0);

            // Controlla se è un nuovo giorno rispetto all'ultimo ad visto
            const isNewDayForAds = lastAdWatched.toDateString() !== now.toDateString();

            adsWatchedToday = isNewDayForAds ? 0 : (usage.ads_watched_today || 0);

            if (adsWatchedToday >= 10) {
                return NextResponse.json({ error: "Hai raggiunto il limite massimo di 10 video premio giornalieri! Torna domani. ✨" }, { status: 403 });
            }

            const newTokens = (usage.tokens_remaining || 0) + 10;
            const newAdsWatched = adsWatchedToday + 1;

            const { error: updateError } = await supabase
                .from('guest_usage')
                // Se la colonna non esiste nel DB, questa operazione potrebbe fallire, 
                // la catturiamo nel try-catch
                .update({
                    tokens_remaining: newTokens,
                    ads_watched_today: newAdsWatched,
                    last_ad_watched_at: now.toISOString()
                } as any)
                .eq('ip_address', ip);

            if (updateError) {
                // Fallback nel caso in cui le colonne degli ads non esistano ancora:
                // Ignoriamo i limiti giornalieri per ora e aggiungiamo solo i token
                console.warn("Possibile colonna mancante nel DB, applico fallback...", updateError);
                await supabase
                    .from('guest_usage')
                    .update({ tokens_remaining: newTokens } as any)
                    .eq('ip_address', ip);
            }

            return NextResponse.json({ success: true, newTokens });

        } else {
            // Se non esiste ancora l'IP, crea un nuovo record
            const { error: insertError } = await supabase
                .from('guest_usage')
                .insert([{
                    ip_address: ip,
                    tokens_remaining: 10, // il primo regalo
                    ads_watched_today: 1,
                    last_ad_watched_at: now.toISOString()
                } as any]);

            if (insertError) {
                // Fallback column check
                await supabase
                    .from('guest_usage')
                    .insert([{ ip_address: ip, tokens_remaining: 10 }]);
            }

            return NextResponse.json({ success: true, newTokens: 10 });
        }

    } catch (error) {
        console.error("Reward Token Error:", error);
        return NextResponse.json({ error: "Errore interno durante il riscatto." }, { status: 500 });
    }
}
