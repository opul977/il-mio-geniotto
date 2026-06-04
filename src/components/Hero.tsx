"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RewardAdModal from "./RewardAdModal";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

// Caricamento dinamico per evitare SSR del canvas
const ParticleEmoji = dynamic(() => import("./ParticleEmoji"), {
    ssr: false,
    loading: () => (
        <div className="w-full aspect-square bg-slate-900 rounded-[3rem] flex items-center justify-center text-8xl animate-pulse">
            🚀
        </div>
    )
});

const messages = [
    "Ciao, sono Geniotto! 👋",
    "Vuoi imparare con me? 🚀",
    "Quale compito facciamo oggi? 📚",
    "Sono il tuo amico geniale! 🧠",
    "I compiti? Una passeggiata! 🍦"
];

export default function Hero() {
    const [messageIndex, setMessageIndex] = useState(0);
    const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
    const { update } = useSession();

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);



    return (
        <section
            className="relative pt-44 pb-32 overflow-hidden mesh-gradient-light"
        >
            {/* Dynamic Background Elements */}
            <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Decorative Doodles Background (Pattern) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                {/* Text Content */}
                <div className="flex flex-col gap-6 md:gap-10 text-center lg:text-left z-10">
                    <div className="inline-flex items-center gap-2 bg-white/80 glass px-5 py-2.5 rounded-full self-center lg:self-start hover:scale-105 transition-transform cursor-default">
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-xs font-black uppercase tracking-widest text-slate-600">Geniotto è qui per te!</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter text-slate-900">
                        Imparare diventa una <span className="text-gradient italic">super Abilità.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-lg mx-auto lg:mx-0 leading-tight">
                        Il tuo amico <span className="text-primary underline decoration-4 underline-offset-4">Geniotto</span> ti spiega il perché di ogni cosa. ✨
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                        <Link href="/chat" className="group relative bg-primary text-white px-8 py-5 rounded-[2rem] text-lg font-black shadow-xl shadow-blue-200 hover:shadow-blue-400 hover:-translate-y-1 active:scale-95 transition-all overflow-hidden flex items-center justify-center">
                            <span className="relative z-10 flex items-center gap-2">
                                Inizia ora <span className="group-hover:translate-x-2 transition-transform">🚀</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        
                        <a href="https://expo.dev/artifacts/eas/4kWCJnJwsSxC3kR2Ph892X.apk" download className="group relative bg-slate-800 text-white px-8 py-5 rounded-[2rem] text-lg font-black shadow-xl hover:-translate-y-1 active:scale-95 transition-all overflow-hidden flex items-center justify-center border-2 border-slate-700 hover:border-emerald-500">
                            <span className="relative z-10 flex items-center gap-2">
                                Scarica App V2.9.9 <span className="text-emerald-400 group-hover:scale-125 transition-transform duration-300">📱</span>
                            </span>
                        </a>

                        <Link href="/come-funziona" className="glass px-8 py-5 rounded-[2rem] text-lg font-black hover:bg-white hover:border-primary/20 transition-all border border-transparent flex items-center justify-center text-slate-800">
                            Come funziona
                        </Link>

                        <button
                            onClick={() => setIsRewardModalOpen(true)}
                            className="bg-emerald-50 border-2 border-emerald-100 text-emerald-600 px-8 py-5 rounded-[2rem] text-lg font-black hover:bg-emerald-100 transition-all flex items-center justify-center gap-2 group animate-pulse hover:animate-none"
                        >
                            <span className="text-xl group-hover:scale-125 transition-transform">💎</span>
                            Gettoni Gratis
                        </button>
                    </div>

                </div>

                {/* Mascot / Visual — Particle Emoji Interattivo */}
                <div className="relative z-10 lg:mt-16">
                    {/* Speech Bubble */}
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 transform hover:scale-110">
                        <div className="bg-white/90 glass px-6 py-4 rounded-[2rem] rounded-bl-none shadow-2xl border-2 border-primary/20 relative animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <p className="text-lg font-black text-slate-800 whitespace-nowrap">
                                {messages[messageIndex]}
                            </p>
                            <div className="absolute -bottom-3 left-0 w-6 h-6 bg-white/90 border-r-2 border-b-2 border-primary/20 rotate-45 -z-10" />
                        </div>
                    </div>

                    {/* Canvas Particle Emoji — interattivo */}
                    <ParticleEmoji />
                </div>
            </div>
            <RewardAdModal
                isOpen={isRewardModalOpen}
                onClose={() => setIsRewardModalOpen(false)}
                onReward={() => {
                    update();
                }}
            />
        </section>
    );
}
