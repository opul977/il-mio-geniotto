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
  title: "Geniotto | Il tuo super amico per i compiti! 🐺",
  description: "L'intelligenza artificiale che spiega i compiti in modo semplice e divertente per bambini e ragazzi con il tocco magico di Geniotto.",
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Google AdSense - Sostituire 'pub-XXXXXXXXXXXXXXXX' con l'ID reale quando disponibile */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1319471899981485"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${outfit.variable} ${quicksand.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
