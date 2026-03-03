"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Email o password sbagliate! Prova ancora 🧐");
            } else {
                router.push("/chat");
            }
        } catch (err) {
            setError("Qualcosa è andato storto. Riprova più tardi!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-6 pt-32">
                <div className="w-full max-w-md bg-white/70 glass p-8 rounded-[2.5rem] shadow-2xl shadow-blue-100 border border-white">
                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center shadow-lg shadow-blue-200 mx-auto mb-6">
                            <svg width="60" height="50" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="10" width="80" height="60" rx="25" fill="white" stroke="#3b82f6" strokeWidth="4" />
                                <rect x="22" y="24" width="56" height="32" rx="12" fill="#1e293b" />
                                <circle cx="38" cy="40" r="4" fill="#60a5fa" className="animate-pulse" />
                                <circle cx="62" cy="40" r="4" fill="#60a5fa" className="animate-pulse" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-black text-slate-800 mb-2">Bentornato! 🚀</h1>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Accedi a Geniotto</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-50 border-2 border-red-100 text-red-500 p-4 rounded-2xl text-sm font-bold text-center animate-shake">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-slate-700 font-bold focus:outline-none focus:border-primary/30 transition-all"
                                placeholder="La tua email..."
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-slate-700 font-bold focus:outline-none focus:border-primary/30 transition-all"
                                placeholder="La tua password..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98] disabled:opacity-50 uppercase tracking-widest text-sm"
                        >
                            {isLoading ? "Entriamo..." : "Entra 🚀"}
                        </button>
                    </form>

                    <div className="mt-8 relative text-center">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-200"></span>
                        </div>
                        <span className="relative bg-white/70 px-4 text-xs font-black text-slate-300 uppercase tracking-widest">Oppure</span>
                    </div>

                    <button
                        onClick={() => signIn("google", { callbackUrl: "/chat" })}
                        className="w-full mt-8 bg-white border-2 border-slate-100 text-slate-600 font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all active:scale-[0.98] shadow-sm uppercase tracking-widest text-xs"
                    >
                        <svg width="20" height="20" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C43.368,34.561,44,29.859,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                        Accedi con Google
                    </button>

                    <p className="mt-8 text-center text-slate-400 font-bold text-xs uppercase tracking-widest">
                        Non hai un account?{" "}
                        <Link href="/auth/register" className="text-primary hover:underline">
                            Registrati 🦄
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
