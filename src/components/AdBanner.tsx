"use client";

import { useEffect } from 'react';

type AdBannerProps = {
    dataAdSlot: string;
    dataAdFormat?: string;
    fullWidthResponsive?: boolean;
};

export default function AdBanner({
    dataAdSlot,
    dataAdFormat = 'auto',
    fullWidthResponsive = true
}: AdBannerProps) {
    useEffect(() => {
        try {
            // @ts-expect-error window.adsbygoogle is not typed
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error("AdSense Error:", err);
        }
    }, []);

    return (
        <div className="ad-container my-6 overflow-hidden flex justify-center w-full">
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-1319471899981485" // Sostituire con l'ID reale
                data-ad-slot={dataAdSlot}
                data-ad-format={dataAdFormat}
                data-full-width-responsive={fullWidthResponsive.toString()}
            />
        </div>
    );
}
