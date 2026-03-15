"use client";

import AdSenseDisplay from "./AdSenseDisplay";

export default function StickyAdBanner() {
    return (
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl overflow-hidden shadow-sm">
                    <AdSenseDisplay type="horizontal" />
                    <div className="px-4 pb-2 text-center">
                        <p className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">
                            Grazie per il tuo supporto! ❤️ Geniotto resta gratis grazie a questi sponsor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
