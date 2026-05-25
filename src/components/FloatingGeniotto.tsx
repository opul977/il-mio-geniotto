"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const messages = [
    "Hai bisogno di aiuto? 📚",
    "Cerchi qualcosa di particolare? ✨",
    "Vuoi fare i compiti insieme? ✍️",
    "Sono qui se hai domande! 🤖",
    "Tutto chiaro fin qui? 🌈"
];

export default function FloatingGeniotto() {
    const [isVisible, setIsVisible] = useState(false);
    const [messageIndex, setMessageIndex] = useState(0);

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
                <div className="bg-white p-2 rounded-full shadow-2xl border-4 border-primary hover:scale-110 transition-transform cursor-pointer w-[80px] h-[80px] flex items-center justify-center overflow-hidden">
                    <Image 
                        src="/mascot.png.PNG" 
                        alt="Geniotto" 
                        width={80} 
                        height={80} 
                        className="w-full h-auto"
                    />
                </div>

                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-bounce" />
            </Link>
        </div>
    );
}
