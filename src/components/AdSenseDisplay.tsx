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
        <div className="w-full flex items-center justify-center my-4 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 min-h-[250px]">
            {/* Geniotto_Popup_Premio */}
            <ins className="adsbygoogle w-full h-full min-w-[250px] min-h-[250px]"
                style={{ display: "block" }}
                data-ad-client="ca-pub-1319471899981485"
                data-ad-slot="2038476836"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
}
