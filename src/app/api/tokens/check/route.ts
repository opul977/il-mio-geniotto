import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (session?.user) {
            const userId = (session.user as { id: string }).id;
            const userEmail = (session.user as { email?: string }).email;

            // Admin bypass
            if (userEmail === "admin@geniotto.it") {
                return NextResponse.json({ tokens: 9999 });
            }

            // Cerca l'uso dei token per questo Utente
            const { data: usage } = await supabase
                .from('user_usage')
                .select('tokens_remaining, last_used_at')
                .eq('user_id', userId)
                .single();

            if (usage) {
                const lastUsed = new Date(usage.last_used_at || new Date().toISOString());
                const now = new Date();
                const isNewDay = lastUsed.toDateString() !== now.toDateString();

                if (isNewDay) {
                    // Reset tokens per il nuovo giorno
                    await supabase
                        .from('user_usage')
                        .update({ tokens_remaining: 10, last_used_at: now.toISOString() })
                        .eq('user_id', userId);
                    return NextResponse.json({ tokens: 10 });
                }

                return NextResponse.json({ tokens: usage.tokens_remaining });
            }

            // Se non esiste, crea un nuovo record per questo Utente
            const { data: newData } = await supabase
                .from('user_usage')
                .insert([{ user_id: userId, tokens_remaining: 10, last_used_at: new Date().toISOString() }])
                .select()
                .single();

            return NextResponse.json({ tokens: newData?.tokens_remaining ?? 10 });
        } else {
            // Logica Guest (IP-based)
            const forwarded = req.headers.get("x-forwarded-for");
            const ip = forwarded ? forwarded.split(/, /)[0] : "127.0.0.1";

            const { data: usage } = await supabase
                .from('guest_usage')
                .select('tokens_remaining, last_used_at')
                .eq('ip_address', ip)
                .single();

            if (usage) {
                const lastUsed = new Date(usage.last_used_at || new Date().toISOString());
                const now = new Date();
                const isNewDay = lastUsed.toDateString() !== now.toDateString();

                if (isNewDay) {
                    await supabase
                        .from('guest_usage')
                        .update({ tokens_remaining: 10, last_used_at: now.toISOString() })
                        .eq('ip_address', ip);
                    return NextResponse.json({ tokens: 10 });
                }

                return NextResponse.json({ tokens: usage.tokens_remaining });
            }

            const { data: newData } = await supabase
                .from('guest_usage')
                .insert([{ ip_address: ip, tokens_remaining: 10, last_used_at: new Date().toISOString() }])
                .select()
                .single();

            return NextResponse.json({ tokens: newData?.tokens_remaining ?? 10 });
        }
    } catch (error) {
        console.error("Token Check Error:", error);
        return NextResponse.json({ tokens: 10 }); // Fallback
    }
}
