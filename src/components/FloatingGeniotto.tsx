"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingGeniotto() {
    const [isVisible, setIsVisible] = useState(false);
    const [messageIndex, setMessageIndex] = useState(0);

    const messages = [
        "Hai bisogno di aiuto? 📚",
        "Cerchi qualcosa di particolare? ✨",
        "Vuoi fare i compiti insieme? ✍️",
        "Sono qui se hai domande! 🤖",
        "Tutto chiaro fin qui? 🌈"
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Mostra Geniotto dopo 400px di scorrimento
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setMessageIndex((prev) => (prev + 1) % messages.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 animate-in fade-in slide-in-from-bottom-10 duration-500">
            {/* Speech Bubble */}
            <div className="bg-slate-900 shadow-2xl px-6 py-4 rounded-[2rem] rounded-br-none border-2 border-white/20 relative max-w-[250px]">
                <p className="text-white text-sm font-bold leading-tight">
                    {messages[messageIndex]}
                </p>
                <div className="absolute -bottom-2 right-4 w-4 h-4 bg-slate-900 border-r-2 border-b-2 border-white/20 rotate-45" />
            </div>

            {/* Geniotto Mascot (Simplified for Floating) */}
            <Link href="/chat" className="group relative">
                <div className="bg-white p-4 rounded-full shadow-2xl border-4 border-primary hover:scale-110 transition-transform cursor-pointer">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="25" width="60" height="50" rx="20" fill="white" stroke="#3b82f6" strokeWidth="4" />
                        <rect x="30" y="37" width="40" height="26" rx="10" fill="#1e293b" />
                        <circle cx="40" cy="50" r="3" fill="#60a5fa" className="animate-pulse" />
                        <circle cx="60" cy="50" r="3" fill="#60a5fa" className="animate-pulse" />
                        <path d="M42 58C42 58 46 62 50 62C54 62 58 58 58 58" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />

                        {/* Waving Hand */}
                        <g className="animate-wave" style={{ transformOrigin: '80px 80px' }}>
                            <rect x="75" y="65" width="12" height="12" rx="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                        </g>
                    </svg>
                </div>

                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-bounce" />
            </Link>
        </div>
    );
}
