import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function POST() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json({ error: "Devi essere loggato per riscattare i premi! 🚀" }, { status: 401 });
        }

        const userId = (session.user as any).id;

        // Verifica lo stato dell'utente
        const { data: usage, error: fetchError } = await supabase
            .from('user_usage')
            .select('tokens_remaining, ads_watched_today, last_ad_watched_at')
            .eq('user_id', userId)
            .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
            console.error("Errore fetch user usage per ads:", fetchError);
            return NextResponse.json({ error: "Errore di connessione al server." }, { status: 500 });
        }

        const now = new Date();
        let adsWatchedToday = 0;
        let lastAdWatched = new Date(0);

        if (usage) {
            lastAdWatched = usage.last_ad_watched_at ? new Date(usage.last_ad_watched_at) : new Date(0);

            // Controlla se è un nuovo giorno
            const isNewDayForAds = lastAdWatched.toDateString() !== now.toDateString();
            adsWatchedToday = isNewDayForAds ? 0 : (usage.ads_watched_today || 0);

            if (adsWatchedToday >= 10) {
                return NextResponse.json({ error: "Hai raggiunto il limite massimo di 10 video premio giornalieri! Torna domani. ✨" }, { status: 403 });
            }

            const newTokens = (usage.tokens_remaining || 0) + 10;
            const newAdsWatched = adsWatchedToday + 1;

            const { error: updateError } = await supabase
                .from('user_usage')
                .update({
                    tokens_remaining: newTokens,
                    ads_watched_today: newAdsWatched,
                    last_ad_watched_at: now.toISOString()
                } as any)
                .eq('user_id', userId);

            if (updateError) {
                console.error("Update user usage error:", updateError);
                return NextResponse.json({ error: "Errore durante l'aggiornamento dei token." }, { status: 500 });
            }

            return NextResponse.json({ success: true, newTokens });

        } else {
            // Se non esiste ancora l'uso, crealo
            const { error: insertError } = await supabase
                .from('user_usage')
                .insert([{
                    user_id: userId,
                    tokens_remaining: 10 + 10, // Base + premio
                    ads_watched_today: 1,
                    last_ad_watched_at: now.toISOString()
                } as any]);

            if (insertError) {
                console.error("Insert user usage error:", insertError);
                return NextResponse.json({ error: "Errore durante la creazione del profilo uso." }, { status: 500 });
            }

            return NextResponse.json({ success: true, newTokens: 20 });
        }

    } catch (error) {
        console.error("Reward Token Error:", error);
        return NextResponse.json({ error: "Errore interno durante il riscatto." }, { status: 500 });
    }
}
