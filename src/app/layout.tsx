import type { Metadata } from "next";
import { Outfit, Quicksand } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Geniotto | Il tuo super amico per i compiti! 🚀",
  description:
    "L'intelligenza artificiale che spiega i compiti in modo semplice e divertente per bambini e ragazzi con il tocco magico di Geniotto.",
  keywords: [
    "aiuto compiti",
    "intelligenza artificiale scuola",
    "geniotto",
    "AI per bambini",
    "spiegazione compiti",
    "tutor AI",
    "studio con IA",
  ],
  authors: [{ name: "wolf.G AI", url: "https://www.ilmiogeniotto.it" }],
  creator: "wolf.G AI",
  metadataBase: new URL("https://www.ilmiogeniotto.it"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.ilmiogeniotto.it",
    siteName: "Geniotto",
    title: "Geniotto | Il tuo super amico per i compiti! 🚀",
    description:
      "L'intelligenza artificiale che spiega i compiti in modo semplice e divertente per bambini e ragazzi. Prova gratis!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Geniotto — Il tuo amico AI per i compiti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geniotto | Il tuo super amico per i compiti! 🚀",
    description:
      "L'IA che spiega i compiti in modo semplice e divertente per bambini e ragazzi italiani.",
    images: ["/og-image.png"],
    creator: "@geniotto_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Providers } from "@/components/Providers";
import CookieConsent from "@/components/CookieConsent";
import Script from 'next/script';
import AdSenseDisplay from "@/components/AdSenseDisplay";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1319471899981485"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${outfit.variable} ${quicksand.variable} font-sans antialiased bg-white`}
      >
        <Providers>
          <div className="flex min-h-screen w-full">
            {/* Sidebar Sinistra (AdSense) - Visibile solo su Desktop XL */}
            <aside className="hidden xl:flex w-[180px] flex-col p-4 sticky top-0 h-screen border-r border-slate-50">
              <div className="h-full w-full flex items-center justify-center">
                <AdSenseDisplay type="vertical" slot="2038476836" />
              </div>
            </aside>

            {/* Contenuto Principale */}
            <main className="flex-1 w-full max-w-full overflow-x-hidden">
              {children}
            </main>

            {/* Sidebar Destra (AdSense) - Visibile solo su Desktop XL */}
            <aside className="hidden xl:flex w-[180px] flex-col p-4 sticky top-0 h-screen border-l border-slate-50">
              <div className="h-full w-full flex items-center justify-center">
                <AdSenseDisplay type="vertical" slot="2038476836" />
              </div>
            </aside>
          </div>
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
