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
        <div className={`w-full flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-50/50 border border-slate-100 p-2 
            ${isHorizontal ? 'my-2 min-h-[100px]' : isVertical ? 'h-full min-h-[600px]' : 'my-4 min-h-[280px]'}`}>
            <div className="text-[9px] text-slate-300 font-black uppercase tracking-[0.2em] mb-2 opacity-50">Sponsor</div>
            <ins className="adsbygoogle"
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
