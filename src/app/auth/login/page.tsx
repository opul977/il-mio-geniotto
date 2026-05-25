"use client";

import { useState, useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BouncingLoader from "@/components/BouncingLoader";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Quando il video finisce, mostriamo il form
    const handleVideoEnd = () => {
        setShowForm(true);
    };

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
        } catch {
            setError("Qualcosa è andato storto. Riprova più tardi!");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isMounted) return null;

    return (
        <main className="min-h-screen bg-[#0f0c29] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col relative overflow-hidden">
            <Navbar />
            
            {/* Sfondo animato profondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-indigo-500 blur-[150px] rounded-full"
                />
            </div>

            <div className="flex-1 flex items-center justify-center p-6 pt-32 md:pt-40 w-full max-w-7xl mx-auto z-10 overflow-visible">
                <div className="w-full flex flex-col md:flex-row items-center justify-center relative gap-0 md:gap-12">
                    
                    {/* GENIOTTO: Video 3D Finale (Senza Loop) */}
                    <div className="relative z-20 hidden md:block">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative w-[500px] lg:w-[650px] h-[500px] lg:h-[650px] overflow-hidden rounded-[4rem]"
                        >
                            <video 
                                ref={videoRef}
                                muted 
                                playsInline
                                autoPlay
                                onTimeUpdate={(e) => {
                                    const video = e.currentTarget;
                                    if (video.currentTime >= 5.0 && !showForm) {
                                        setShowForm(true);
                                    }
                                }}
                                onEnded={handleVideoEnd}
                                className="w-full h-full object-cover scale-110"
                                style={{
                                    mixBlendMode: 'screen', // Trasparenza per sfondo nero
                                    filter: 'contrast(1.1) brightness(1.1) drop-shadow(0 0 50px rgba(99, 102, 241, 0.6))'
                                }}
                            >
                                <source src="/geniotto_final.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                        
                        {/* Ombra dinamica */}
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.2, 0.4] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-72 h-12 bg-black/50 blur-3xl rounded-[100%]"
                        />
                    </div>

                    {/* FORM DI LOGIN: Appare alla fine del video */}
                    <AnimatePresence>
                        {showForm && (
                            <motion.div 
                                initial={{ scale: 0.5, opacity: 0, x: 100 }}
                                animate={{ scale: 1, opacity: 1, x: 0 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    delay: 0.2 
                                }}
                                className="w-full max-w-md bg-white/10 backdrop-blur-[40px] p-8 md:p-12 rounded-[4rem] shadow-[0_50px_150px_rgba(0,0,0,0.9)] border border-white/20 z-30 relative overflow-hidden"
                            >
                                {/* Riflesso sul vetro */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                                
                                <div className="text-center mb-10 relative">
                                    <h1 className="text-4xl font-black text-white mb-3 tracking-tight">Bentornato! 🚀</h1>
                                    <p className="text-indigo-200/70 font-bold text-xs uppercase tracking-[0.4em]">Accedi a Geniotto</p>
                                </div>

                                {isLoading ? (
                                    <div className="py-12 flex flex-col items-center justify-center space-y-6">
                                        <BouncingLoader />
                                        <p className="text-indigo-200 font-bold animate-pulse text-sm uppercase tracking-widest">Accesso in corso...</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6 relative">
                                        {error && (
                                            <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-4 rounded-2xl text-sm font-bold text-center">
                                                {error}
                                            </div>
                                        )}

                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em] ml-4">Email</label>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white font-bold focus:outline-none focus:border-indigo-400 transition-all text-lg shadow-inner"
                                                    placeholder="La tua email..."
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em] ml-4">Password</label>
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white font-bold focus:outline-none focus:border-indigo-400 transition-all text-lg shadow-inner"
                                                    placeholder="La tua password..."
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black py-5 rounded-2xl shadow-2xl shadow-indigo-500/40 transition-all disabled:opacity-50 uppercase tracking-widest text-base mt-4 active:scale-95"
                                        >
                                            Entra Ora 🚀
                                        </button>

                                        <div className="mt-8 relative text-center">
                                            <div className="absolute inset-0 flex items-center">
                                                <span className="w-full border-t border-white/10"></span>
                                            </div>
                                            <span className="relative bg-[#1a173d] px-6 text-[10px] font-black text-indigo-300 uppercase tracking-widest rounded-full">Oppure</span>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => signIn("google", { callbackUrl: "/chat" })}
                                            className="w-full mt-8 bg-transparent border border-white/10 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 transition-all uppercase tracking-widest text-xs"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 48 48">
                                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C43.368,34.561,44,29.859,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                            </svg>
                                            Accedi con Google
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
