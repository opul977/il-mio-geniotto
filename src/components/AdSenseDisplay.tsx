"use client";

import { useEffect, useRef } from "react";

export default function AdSenseDisplay() {
    const hasLoaded = useRef(false);

    useEffect(() => {
        // Esegue l'inizializzazione dell'annuncio solo una volta
        if (!hasLoaded.current) {
            try {
                // @ts-expect-error L'oggetto adsbygoogle è fornito dallo script esterno
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                hasLoaded.current = true;
            } catch (error) {
                console.error("Errore nel caricamento di AdSense:", error);
            }
        }
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center my-4 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 min-h-[280px] p-2">
            <div className="text-[10px] text-slate-300 font-bold uppercase tracking-widest mb-2">Annuncio Sponsorizzato</div>
            {/* Geniotto_Popup_Premio */}
            <ins className="adsbygoogle"
                style={{ display: "inline-block", width: "100%", height: "250px" }}
                data-ad-client="ca-pub-1319471899981485"
                data-ad-slot="2038476836"
                data-ad-format="rectangle"
                data-full-width-responsive="true"></ins>
            <p className="text-[9px] text-slate-400 mt-2 italic px-4">
                Se non vedi l&apos;annuncio, assicurati che il tuo AdBlock sia disattivato.
            </p>
        </div>
    );
}
