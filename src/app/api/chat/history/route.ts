import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        // Controlla Bearer token (usato dall'app mobile con Supabase auth)
        const authHeader = req.headers.get("authorization");
        const bearerToken = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;

        let userId: string | null = null;

        if (session?.user) {
            // Utente loggato via web (NextAuth)
            userId = (session.user as { id: string }).id;
        } else if (bearerToken) {
            // Utente loggato via app mobile (Supabase token)
            try {
                const { data: { user }, error } = await supabase.auth.getUser(bearerToken);
                if (!error && user) userId = user.id;
            } catch (authErr) {
                console.warn("Mobile auth check warning:", authErr);
            }
        }

        if (userId) {
            // Cronologia account — identica su web e app mobile
            const { data: messages, error } = await supabase
                .from('chat_messages')
                .select('role, content, image_url, created_at')
                .eq('user_id', userId)
                .order('created_at', { ascending: true })
                .limit(200);

            if (error) {
                console.warn("Supabase history error (account):", error);
                return NextResponse.json({ messages: [], source: 'account', warning: 'DB temporarily offline' });
            }
            return NextResponse.json({ messages: messages || [], source: 'account' });
        } else {
            // Ospite: identificato dall'IP (funziona su web e app)
            const forwarded = req.headers.get("x-forwarded-for");
            const guestIp = forwarded ? forwarded.split(',')[0].trim() : "127.0.0.1";

            const { data: messages, error } = await supabase
                .from('chat_messages')
                .select('role, content, image_url, created_at')
                .eq('guest_ip', guestIp)
                .order('created_at', { ascending: true })
                .limit(100);

            if (error) {
                console.warn("Supabase history error (guest):", error);
                return NextResponse.json({ messages: [], source: 'guest_ip', warning: 'DB temporarily offline' });
            }
            return NextResponse.json({ messages: messages || [], source: 'guest_ip' });
        }
    } catch (error) {
        console.warn("History Route Fallback:", error);
        return NextResponse.json({ messages: [], source: 'fallback', warning: "Impossibile recuperare cronologia server" });
    }
}
