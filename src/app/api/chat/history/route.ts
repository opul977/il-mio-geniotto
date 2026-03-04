import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json({ messages: [] });
        }

        // Recupera gli ultimi 50 messaggi dell'utente
        const { data: messages, error } = await supabase
            .from('chat_messages')
            .select('*')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .eq('user_id', (session.user as any).id)
            .order('created_at', { ascending: true })
            .limit(50);

        if (error) throw error;

        return NextResponse.json({ messages: messages || [] });
    } catch (error) {
        console.error("History Error:", error);
        return NextResponse.json({ error: "Impossibile caricare la cronologia" }, { status: 500 });
    }
}
