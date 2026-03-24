import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
        return NextResponse.redirect(new URL("/auth/login?error=TokenMancante", req.url));
    }

    try {
        // Cerca l'utente con questo token
        const { data: user, error: fetchError } = await supabase
            .from("profiles")
            .select("id")
            .eq("verification_token", token)
            .single();

        if (fetchError || !user) {
            return NextResponse.redirect(new URL("/auth/login?error=TokenInvalido", req.url));
        }

        // Aggiorna l'utente impostando email_verified a true e cancellando il token
        const { error: updateError } = await supabase
            .from("profiles")
            .update({ email_verified: true, verification_token: null })
            .eq("id", user.id);

        if (updateError) {
            console.error("Errore aggiornamento utente:", updateError);
            return NextResponse.redirect(new URL("/auth/login?error=ErroreServer", req.url));
        }

        // Redirect alla pagina di verifica o login con successo
        return NextResponse.redirect(new URL("/auth/verify?success=true", req.url));

    } catch (error) {
        console.error("Verification Error:", error);
        return NextResponse.redirect(new URL("/auth/login?error=ErroreServer", req.url));
    }
}
