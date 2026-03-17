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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1319471899981485"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${outfit.variable} ${quicksand.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
