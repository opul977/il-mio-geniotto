import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import crypto from "crypto";

function getItalianDateString(date: Date): string {
    return date.toLocaleDateString('en-CA', { timeZone: 'Europe/Rome' });
}

function verifyMobileToken(token: string): { id: string; email: string } | null {
    try {
        const secret = process.env.NEXTAUTH_SECRET || "fallback-secret-12345";
        const [payload, signature] = token.split('.');
        if (!payload || !signature) return null;
        const expectedSig = crypto.createHmac('sha256', secret).update(payload).digest('base64');
        if (signature !== expectedSig) return null;
        return JSON.parse(Buffer.from(payload, 'base64').toString('utf-8'));
    } catch {
        return null;
    }
}

export async function GET(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        // Supporto MobileToken (login da app con email/password)
        const authHeader = req.headers.get("authorization");
        let mobileUserId: string | null = null;
        let mobileUserEmail: string | null = null;
        if (!session?.user && authHeader?.startsWith("MobileToken ")) {
            const payload = verifyMobileToken(authHeader.slice(12));
            if (payload) {
                mobileUserId = payload.id;
                mobileUserEmail = payload.email;
            }
        }

        // Determina userId e email (da sessione web o da token mobile)
        const resolvedUserId = session?.user ? (session.user as { id: string }).id : mobileUserId;
        const resolvedEmail = session?.user ? (session.user as { email?: string }).email : mobileUserEmail;

        if (resolvedUserId) {
            const userId = resolvedUserId;
            const userEmail = resolvedEmail;

            // Admin bypass
            const adminEmails = ["admin@ilmiogeniotto.it", "opul977@gmail.com", "crociolina@gmail.com"];
            if (userEmail && adminEmails.includes(userEmail)) {
                return NextResponse.json({ tokens: 9999 });
            }

            // Cerca l'uso dei token per questo Utente
            const { data: usage } = await supabase
                .from('user_usage')
                .select('tokens_remaining, last_used_at')
                .eq('user_id', userId)
                .single();

            if (usage) {
                const lastUsedDate = getItalianDateString(new Date(usage.last_used_at || '1970-01-01T00:00:00Z'));
                const nowDate = getItalianDateString(new Date());
                const isNewDay = lastUsedDate !== nowDate;

                if (isNewDay) {
                    // Reset tokens per il nuovo giorno
                    const newTokens = Math.max(10, usage.tokens_remaining || 0);
                    await supabase
                        .from('user_usage')
                        .update({ tokens_remaining: newTokens, last_used_at: new Date().toISOString() })
                        .eq('user_id', userId);
                    return NextResponse.json({ tokens: newTokens });
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
            const ip = forwarded ? forwarded.split(',')[0].trim() : "127.0.0.1";

            const { data: usage } = await supabase
                .from('guest_usage')
                .select('tokens_remaining, last_used_at')
                .eq('ip_address', ip)
                .single();

            if (usage) {
                const lastUsedDate = getItalianDateString(new Date(usage.last_used_at || '1970-01-01T00:00:00Z'));
                const nowDate = getItalianDateString(new Date());
                const isNewDay = lastUsedDate !== nowDate;

                if (isNewDay) {
                    const newTokens = Math.max(10, usage.tokens_remaining || 0);
                    await supabase
                        .from('guest_usage')
                        .update({ tokens_remaining: newTokens, last_used_at: new Date().toISOString() })
                        .eq('ip_address', ip);
                    return NextResponse.json({ tokens: newTokens });
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
