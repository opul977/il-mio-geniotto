import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!email || !password || !name) {
            return NextResponse.json({ error: "Mancano dei dati! Controlla bene 🧐" }, { status: 400 });
        }

        // Cripta la password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Salva l'utente su Supabase (tabella 'profiles')
        // Usiamo l'ID generato o lasciamo che Supabase lo generi se non usiamo Supabase Auth direttamente
        const { data, error } = await supabase
            .from('profiles')
            .insert([
                {
                    email,
                    password: hashedPassword,
                    full_name: name,
                    tokens: 10 // Token omaggio alla registrazione
                }
            ])
            .select();

        if (error) {
            if (error.code === '23505') {
                return NextResponse.json({ error: "Questa email è già registrata! Prova ad accedere 🚀" }, { status: 400 });
            }
            throw error;
        }

        return NextResponse.json({ message: "Registrazione completata! Ora puoi entrare ✨", user: data[0] }, { status: 201 });
    } catch (error: unknown) {
        console.error("Registration Error:", error);
        return NextResponse.json({ error: "Errore tecnico. Riprova più tardi!" }, { status: 500 });
    }
}
