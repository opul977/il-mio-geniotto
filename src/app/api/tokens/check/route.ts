import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
    try {
        // Ottieni l'IP dell'utente
        const forwarded = req.headers.get("x-forwarded-for");
        const ip = forwarded ? forwarded.split(/, /)[0] : "127.0.0.1";

        // Cerca l'uso dei token per questo IP
        const { data: usage } = await supabase
            .from('guest_usage')
            .select('tokens_remaining, last_used_at')
            .eq('ip_address', ip)
            .single();

        if (usage) {
            const lastUsed = new Date(usage.last_used_at || new Date().toISOString());
            const now = new Date();
            const isNewDay = lastUsed.toDateString() !== now.toDateString();
            const isOver24h = now.getTime() - lastUsed.getTime() > 24 * 60 * 60 * 1000;

            if (isNewDay || isOver24h) {
                // Reset tokens per il nuovo giorno
                await supabase
                    .from('guest_usage')
                    .update({ tokens_remaining: 10, last_used_at: now.toISOString() })
                    .eq('ip_address', ip);
                return NextResponse.json({ tokens: 10 });
            }

            return NextResponse.json({ tokens: usage.tokens_remaining });
        }

        // Se non esiste, crea un nuovo record per questo IP
        const { data: newData, error: insertError } = await supabase
            .from('guest_usage')
            .insert([{ ip_address: ip, tokens_remaining: 10 }])
            .select()
            .single();

        if (insertError) {
            console.error("Insert guest usage error:", insertError);
        }

        return NextResponse.json({ tokens: newData?.tokens_remaining ?? 10 });
    } catch (error) {
        console.error("Token Check Error:", error);
        return NextResponse.json({ tokens: 10 }); // Fallback
    }
}
