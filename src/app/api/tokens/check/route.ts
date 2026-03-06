import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = (session.user as any).id;

        // Cerca l'uso dei token per questo Utente
        const { data: usage } = await supabase
            .from('user_usage') // Usiamo una tabella dedicata agli utenti o aggiungiamo colonne alla tabella users
            .select('tokens_remaining, last_used_at')
            .eq('user_id', userId)
            .single();

        if (usage) {
            const lastUsed = new Date(usage.last_used_at || new Date().toISOString());
            const now = new Date();
            const isNewDay = lastUsed.toDateString() !== now.toDateString();
            const isOver24h = now.getTime() - lastUsed.getTime() > 24 * 60 * 60 * 1000;

            if (isNewDay || isOver24h) {
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
        const { data: newData, error: insertError } = await supabase
            .from('user_usage')
            .insert([{ user_id: userId, tokens_remaining: 10, last_used_at: new Date().toISOString() }])
            .select()
            .single();

        if (insertError) {
            console.error("Insert user usage error:", insertError);
        }

        return NextResponse.json({ tokens: newData?.tokens_remaining ?? 10 });
    } catch (error) {
        console.error("Token Check Error:", error);
        return NextResponse.json({ tokens: 10 }); // Fallback
    }
}
