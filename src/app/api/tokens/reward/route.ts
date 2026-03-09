import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json({ error: "Devi essere loggato per riscattare i premi! 🚀" }, { status: 401 });
        }

        const { duration } = await request.json();
        if (![30, 60].includes(duration)) {
            return NextResponse.json({ error: "Durata non valida." }, { status: 400 });
        }

        const userId = (session.user as { id: string }).id;
        const rewardAmount = duration === 30 ? 1 : 2;

        // Verifica lo stato dell'utente
        const { data: usage, error: fetchError } = await supabase
            .from('user_usage')
            .select('tokens_remaining, last_ad_watched_at')
            .eq('user_id', userId)
            .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
            console.error("Errore fetch user usage per ads:", fetchError);
            return NextResponse.json({ error: "Errore di connessione al server." }, { status: 500 });
        }

        const now = new Date();
        const COOLDOWN_MINUTES = 10;

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
                .from('user_usage')
                .update({
                    tokens_remaining: newTokens,
                    last_ad_watched_at: now.toISOString()
                })
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
                    tokens_remaining: 10 + rewardAmount, // 10 Base + premio
                    last_ad_watched_at: now.toISOString()
                }]);

            if (insertError) {
                console.error("Insert user usage error:", insertError);
                return NextResponse.json({ error: "Errore durante la creazione del profilo uso." }, { status: 500 });
            }

            return NextResponse.json({ success: true, newTokens: 10 + rewardAmount });
        }

    } catch (error) {
        console.error("Reward Token Error:", error);
        return NextResponse.json({ error: "Errore interno durante il riscatto." }, { status: 500 });
    }
}
