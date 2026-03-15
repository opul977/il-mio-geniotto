"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import RewardAdModal from "./RewardAdModal";
import { useSession } from "next-auth/react";

const messages = [
    "Ciao, sono Geniotto! 👋",
    "Vuoi imparare con me? 🚀",
    "Quale compito facciamo oggi? 📚",
    "Sono il tuo amico geniale! 🧠",
    "I compiti? Una passeggiata! 🍦"
];

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [messageIndex, setMessageIndex] = useState(0);
    const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
    const { data: session, update } = useSession();
    const mascotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!mascotRef.current) return;
        const rect = mascotRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    return (
        <section
            className="relative pt-44 pb-32 overflow-hidden mesh-gradient-light"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
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

                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                        <Link href="/chat" className="group relative bg-primary text-white px-12 py-6 rounded-[2.5rem] text-xl font-black shadow-2xl shadow-blue-200 hover:shadow-blue-400 hover:-translate-y-1 active:scale-95 transition-all overflow-hidden flex items-center justify-center">
                            <span className="relative z-10 flex items-center gap-3">
                                Inizia ora <span className="group-hover:translate-x-2 transition-transform">🚀</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="/come-funziona" className="glass px-10 py-6 rounded-[2.5rem] text-xl font-black hover:bg-white hover:border-primary/20 transition-all border border-transparent flex items-center justify-center text-slate-800">
                            Guarda come funziona
                        </Link>
                        <button
                            onClick={() => setIsRewardModalOpen(true)}
                            className="bg-emerald-50 border-2 border-emerald-100 text-emerald-600 px-10 py-6 rounded-[2.5rem] text-xl font-black hover:bg-emerald-100 transition-all flex items-center justify-center gap-3 group animate-pulse hover:animate-none"
                        >
                            <span className="text-2xl group-hover:scale-125 transition-transform">💎</span>
                            Gettoni Gratis
                        </button>
                    </div>

                </div>

                {/* Mascot / Visual */}
                <div className="relative z-10 lg:mt-24" ref={mascotRef}>
                    {/* Speech Bubble */}
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 transform hover:scale-110">
                        <div className="bg-white/90 glass px-6 py-4 rounded-[2rem] rounded-bl-none shadow-2xl border-2 border-primary/20 relative animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <p className="text-lg font-black text-slate-800 whitespace-nowrap">
                                {messages[messageIndex]}
                            </p>
                            {/* Little triangle for the bubble */}
                            <div className="absolute -bottom-3 left-0 w-6 h-6 bg-white/90 border-r-2 border-b-2 border-primary/20 rotate-45 -z-10" />
                        </div>
                    </div>

                    <div className="relative w-full aspect-square bg-white/40 glass rounded-[4rem] p-12 flex items-center justify-center group overflow-visible transition-all duration-500 ease-out"
                        style={{ transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)` }}>
                        {/* Animated backdrop circles */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-highlight/5 to-accent/10 opacity-50 rounded-[4rem]" />

                        {/* Mascot Robot */}
                        <div className="relative z-20 floating group-hover:scale-105 transition-transform duration-700 ease-out"
                            style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}>
                            <svg width="340" height="340" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Robot Head group moved by mouse */}
                                <g style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`, transition: 'transform 0.1s ease-out' }}>
                                    <rect x="55" y="30" width="90" height="70" rx="30" fill="white" className="shadow-inner" />
                                    <rect x="55" y="30" width="90" height="70" rx="30" stroke="#3b82f6" strokeWidth="6" />
                                    {/* Face Screen */}
                                    <rect x="68" y="45" width="64" height="40" rx="12" fill="#1e293b" />
                                    {/* Glowing Eyes following mouse */}
                                    <g style={{ transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)` }}>
                                        <circle cx="85" cy="65" r="4" fill="#60a5fa" className="animate-pulse" />
                                        <circle cx="115" cy="65" r="4" fill="#60a5fa" className="animate-pulse" />
                                    </g>
                                    {/* Smile */}
                                    <path d="M90 75C90 75 95 80 100 80C105 80 110 75 110 75" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                                </g>

                                {/* Robot Body */}
                                <rect x="65" y="105" width="70" height="60" rx="20" fill="white" stroke="#3b82f6" strokeWidth="6" />
                                <circle cx="100" cy="135" r="10" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="2" />

                                {/* Hands floating with parallax and waving */}
                                <g className="animate-wave" style={{ transformOrigin: '45px 100px' }}>
                                    <rect x="35" y="90" width="20" height="20" rx="8" fill="white" stroke="#3b82f6" strokeWidth="4"
                                        style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }} />
                                </g>
                                <rect x="145" y="110" width="20" height="20" rx="8" fill="white" stroke="#3b82f6" strokeWidth="4"
                                    className="animate-bounce [animation-delay:0.5s]" style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }} />
                            </svg>
                        </div>

                        {/* Orbiting Icons with parallax */}
                        <div className="absolute top-[10%] right-[10%] w-20 h-20 glass rounded-3xl flex items-center justify-center text-4xl floating shadow-2xl"
                            style={{ animationDelay: '0.2s', transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}>🧪</div>
                        <div className="absolute bottom-[20%] left-[-5%] w-16 h-16 glass rounded-2xl flex items-center justify-center text-3xl floating shadow-xl"
                            style={{ animationDelay: '1s', transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}>📚</div>
                        <div className="absolute top-[40%] left-[10%] w-14 h-14 glass rounded-2xl flex items-center justify-center text-2xl floating shadow-lg"
                            style={{ animationDelay: '0.5s', transform: `translate(${mousePos.x * 50}px, ${mousePos.y * -20}px)` }}>🎨</div>
                    </div>
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
