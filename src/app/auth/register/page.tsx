"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function RegisterPage() {
    const [name, setName] = useState("");
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
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                router.push("/auth/login?registered=true");
            } else {
                const data = await response.json();
                setError(data.error || "Uffa! Non sono riuscito a registrarti. Riprova! 🧐");
            }
        } catch {
            setError("C'è stato un problemino tecnico. Riprova più tardi!");
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
                        <h1 className="text-3xl font-black text-slate-800 mb-2">Benvenuto! ✨</h1>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Crea il tuo profilo Geniotto</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="bg-red-50 border-2 border-red-100 text-red-500 p-4 rounded-2xl text-sm font-bold text-center animate-shake">
                                {error}
                            </div>
                        )}

                        <div className="space-y-1">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Nome</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-slate-700 font-bold focus:outline-none focus:border-primary/30 transition-all"
                                placeholder="Il tuo nome..."
                                required
                            />
                        </div>

                        <div className="space-y-1">
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

                        <div className="space-y-1">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-slate-700 font-bold focus:outline-none focus:border-primary/30 transition-all"
                                placeholder="Scegli una password..."
                                required
                                minLength={6}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98] disabled:opacity-50 uppercase tracking-widest text-sm mt-4"
                        >
                            {isLoading ? "Ti stiamo iscrivendo..." : "Registrati ora 🦄"}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-400 font-bold text-xs uppercase tracking-widest">
                        Hai già un account?{" "}
                        <Link href="/auth/login" className="text-primary hover:underline">
                            Accedi qui 🚀
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
