"use client";

import { useEffect, useRef } from "react";

interface AdSenseDisplayProps {
    type?: 'square' | 'horizontal';
    slot?: string;
}

export default function AdSenseDisplay({ type = 'square', slot = "2038476836" }: AdSenseDisplayProps) {
    const hasLoaded = useRef(false);

    useEffect(() => {
        if (!hasLoaded.current) {
            try {
                // @ts-expect-error adsbygoogle global
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                hasLoaded.current = true;
            } catch (error) {
                console.error("Errore AdSense:", error);
            }
        }
    }, []);

    const isHorizontal = type === 'horizontal';

    return (
        <div className={`w-full flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-50/50 border border-slate-100 p-2 ${isHorizontal ? 'my-2 min-h-[100px]' : 'my-4 min-h-[280px]'}`}>
            <div className="text-[9px] text-slate-300 font-black uppercase tracking-[0.2em] mb-2 opacity-50">Sponsor</div>
            <ins className="adsbygoogle"
                style={{ 
                    display: "block", 
                    width: "100%", 
                    height: isHorizontal ? "90px" : "250px" 
                }}
                data-ad-client="ca-pub-1319471899981485"
                data-ad-slot={slot}
                data-ad-format={isHorizontal ? "horizontal" : "rectangle"}
                data-full-width-responsive="true"></ins>
        </div>
    );
}
