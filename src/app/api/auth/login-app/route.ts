import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Email e password obbligatorie!" }, { status: 400 });
        }

        // Cerca l'utente nella tabella 'profiles'
        const { data: user, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('email', email.trim())
            .single();

        if (error || !user) {
            return NextResponse.json({ error: "Credenziali non valide o utente non trovato." }, { status: 401 });
        }

        // Verifica la password con bcrypt
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return NextResponse.json({ error: "Credenziali non valide." }, { status: 401 });
        }

        // Controlla se l'email è verificata
        if (user.email_verified === false) {
            return NextResponse.json({ error: "Devi prima verificare la tua email! Controlla la posta." }, { status: 403 });
        }

        // Restituisci i dati dell'utente (senza la password!)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userWithoutPassword } = user;
        
        const secret = process.env.NEXTAUTH_SECRET || "fallback-secret-12345";
        const payload = Buffer.from(JSON.stringify({ id: user.id, email: user.email })).toString('base64');
        const signature = crypto.createHmac('sha256', secret).update(payload).digest('base64');
        const mobileToken = `${payload}.${signature}`;
        
        return NextResponse.json({ 
            message: "Login effettuato con successo!", 
            user: userWithoutPassword,
            token: mobileToken
        }, { status: 200 });

    } catch (error: unknown) {
        console.error("Login App Error:", error);
        return NextResponse.json({ error: "Errore interno del server." }, { status: 500 });
    }
}
