import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { supabase } from "./supabase";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                // Cerca l'utente nel database Supabase (tabella 'profiles')
                const { data: user, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('email', credentials.email)
                    .single();

                if (error || !user) return null;

                // Verifica la password
                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

                if (!isPasswordCorrect) return null;

                // Controlla se l'email è stata verificata
                // Nota: se email_verified è null (vecchi account), li facciamo passare lo stesso per non bloccarli
                if (user.email_verified === false) {
                    throw new Error("Devi prima verificare la tua email! Controlla la casella di posta.");
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.full_name,
                    image: user.avatar_url,
                };
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        async session({ session, token }) {
            if (token && session.user) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (session.user as any).id = token.sub;
                session.user.email = token.email as string;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        }
    }
};
