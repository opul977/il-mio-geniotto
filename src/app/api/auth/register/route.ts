import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/mailer";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!email || !password || !name) {
            return NextResponse.json({ error: "Mancano dei dati! Controlla bene 🧐" }, { status: 400 });
        }

        // Cripta la password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Genera il token di verifica univoco
        const verificationToken = crypto.randomUUID();

        // Salva l'utente su Supabase (tabella 'profiles')
        // Usiamo l'ID generato o lasciamo che Supabase lo generi se non usiamo Supabase Auth direttamente
        const { data, error } = await supabase
            .from('profiles')
            .insert([
                {
                    email,
                    password: hashedPassword,
                    full_name: name,
                    tokens: 10, // Token omaggio alla registrazione
                    email_verified: false,
                    verification_token: verificationToken
                }
            ])
            .select();

        if (error) {
            if (error.code === '23505') {
                return NextResponse.json({ error: "Questa email è già registrata! Prova ad accedere 🚀" }, { status: 400 });
            }
            throw error;
        }

        // Invia l'email di verifica
        try {
            await sendVerificationEmail(email, verificationToken);
        } catch (mailError) {
            console.error("Errore invio email:", mailError);
            // Non bloccare la registrazione, l'utente è creato, ma non verificato.
            // Potrebbe essere necessario un tasto "Rinvia email di verifica".
        }

        return NextResponse.json({ message: "Registrazione completata! Controlla la tua email per attivare l'account ✨", user: data[0] }, { status: 201 });
    } catch (error: unknown) {
        console.error("Registration Error:", error);
        return NextResponse.json({ error: "Errore tecnico. Riprova più tardi!" }, { status: 500 });
    }
}
