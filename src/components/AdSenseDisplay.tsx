"use client";

import { useEffect, useRef } from "react";

interface AdSenseDisplayProps {
    type?: 'square' | 'horizontal' | 'vertical';
    slot?: string;
}

export default function AdSenseDisplay({ type = 'square', slot = "2038476836" }: AdSenseDisplayProps) {
    const hasLoaded = useRef(false);

    useEffect(() => {
        let isMounted = true;
        
        const initAd = () => {
            if (isMounted) {
                try {
                    // @ts-expect-error adsbygoogle global
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                    hasLoaded.current = true;
                } catch (error) {
                    console.error("Errore AdSense:", error);
                }
            }
        };

        // Small delay to ensure the script has time to initialize after interactive
        const timer = setTimeout(() => {
            if (!hasLoaded.current) {
                initAd();
            }
        }, 100);

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, []);

    const isHorizontal = type === 'horizontal';
    const isVertical = type === 'vertical';

    return (
        <div className={`relative w-full flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-purple-50/70 border-2 border-indigo-100/60 p-4 shadow-inner 
            ${isHorizontal ? 'my-2 min-h-[120px]' : isVertical ? 'h-full min-h-[500px]' : 'my-4 min-h-[260px]'}`}>
            
            <div className="absolute top-2 left-3 flex items-center gap-1.5 opacity-60">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
                <span className="text-[9px] text-indigo-900 font-black uppercase tracking-[0.2em]">Spazio Sponsor</span>
            </div>

            {/* Fallback promozionale animato sempre presente sotto */}
            <div className="flex flex-col items-center justify-center text-center p-4 space-y-3 z-0">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-indigo-100 flex items-center justify-center text-2xl animate-bounce">
                    ✨🤖
                </div>
                <div className="space-y-1 max-w-xs">
                    <h4 className="font-black text-slate-800 text-sm">Geniotto Premium Partner</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Compiti facili e spiegazioni magiche ogni giorno. Grazie per supportare il nostro progetto! ❤️
                    </p>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-indigo-100/80 text-[10px] font-black text-indigo-600 shadow-xs">
                    <span>🌟</span>
                    <span>Studio Smart & Semplice</span>
                </div>
            </div>

            {/* Inserimento AdSense sopra */}
            <ins className="adsbygoogle z-10 w-full"
                style={{ 
                    display: "block", 
                    width: "100%", 
                    height: isVertical ? "100%" : "auto"
                }}
                data-ad-client="ca-pub-1319471899981485"
                data-ad-slot={slot}
                data-ad-format={isHorizontal ? "horizontal" : isVertical ? "vertical" : "rectangle"}
                data-full-width-responsive="true"></ins>
        </div>
    );
}
