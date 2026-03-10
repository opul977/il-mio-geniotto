"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 z-[200] animate-in slide-in-from-bottom-10 fade-in duration-500">
            <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-blue-50 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center md:text-left">
                    <p className="text-sm font-bold text-slate-700 leading-relaxed">
                        🍪 Usiamo i cookie per far funzionare Geniotto e per proporti pubblicità che ti aiutano a guadagnare gettoni gratis!
                        Se continui ad usare il sito, accetti la nostra{" "}
                        <Link href="/privacy" className="text-primary underline font-black">Privacy Policy</Link> e{" "}
                        <Link href="/cookie-policy" className="text-primary underline font-black">Cookie Policy</Link>.
                    </p>
                </div>
                <div className="flex gap-4 shrink-0">
                    <button
                        onClick={acceptCookies}
                        className="bg-primary text-white px-8 py-3 rounded-2xl font-black text-sm shadow-lg shadow-blue-200 hover:scale-105 active:scale-95 transition-all"
                    >
                        Accetto tutto! 🚀
                    </button>
                </div>
            </div>
        </div>
    );
}
