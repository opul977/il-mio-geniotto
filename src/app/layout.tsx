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
  title: "Il Mio Geniotto | Il tuo super amico per i compiti! 🚀",
  description: "L'intelligenza artificiale che spiega i compiti in modo semplice e divertente per bambini e ragazzi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${outfit.variable} ${quicksand.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
