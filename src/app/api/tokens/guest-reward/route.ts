import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const { duration } = await req.json();
        if (![15, 20, 30, 60].includes(duration)) {
            return NextResponse.json({ error: "Durata non valida." }, { status: 400 });
        }

        const forwarded = req.headers.get("x-forwarded-for");
        const guestIp = forwarded ? forwarded.split(/, /)[0] : "127.0.0.1";
        const rewardAmount = (duration === 30 || duration === 60) ? 2 : 1;
        const now = new Date();
        const COOLDOWN_MINUTES = 10;

        const { data: usage, error: fetchError } = await supabase
            .from('guest_usage')
            .select('tokens_remaining, last_ad_watched_at')
            .eq('ip_address', guestIp)
            .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
            return NextResponse.json({ error: "Errore di connessione." }, { status: 500 });
        }

        if (usage?.last_ad_watched_at) {
            const lastAdWatched = new Date(usage.last_ad_watched_at);
            const diffMs = now.getTime() - lastAdWatched.getTime();
            const diffMins = diffMs / (1000 * 60);
            if (diffMins < COOLDOWN_MINUTES) {
                const remainingMins = Math.ceil(COOLDOWN_MINUTES - diffMins);
                return NextResponse.json({
                    error: `Devi aspettare ancora ${remainingMins} ${remainingMins === 1 ? 'minuto' : 'minuti'} per guardare un'altra pubblicità! ⏳`,
                    timeRemaining: remainingMins
                }, { status: 429 });
            }
        }

        if (usage) {
            const newTokens = (usage.tokens_remaining || 0) + rewardAmount;
            const { error: updateError } = await supabase
                .from('guest_usage')
                .update({ tokens_remaining: newTokens, last_ad_watched_at: now.toISOString() })
                .eq('ip_address', guestIp);
            if (updateError) return NextResponse.json({ error: "Errore aggiornamento." }, { status: 500 });
            return NextResponse.json({ success: true, newTokens });
        } else {
            const newTokens = 10 + rewardAmount;
            const { error: insertError } = await supabase
                .from('guest_usage')
                .insert([{ ip_address: guestIp, tokens_remaining: newTokens, last_ad_watched_at: now.toISOString() }]);
            if (insertError) return NextResponse.json({ error: "Errore creazione profilo." }, { status: 500 });
            return NextResponse.json({ success: true, newTokens });
        }
    } catch (error) {
        console.error("Guest Reward Error:", error);
        return NextResponse.json({ error: "Errore interno." }, { status: 500 });
    }
}
