"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import RewardAdModal from "./RewardAdModal";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
    const { data: session, update } = useSession();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl px-8 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🚀</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] leading-none">Il Mio</span>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-black tracking-tight text-slate-800 leading-none uppercase">Geniotto</span>
                            <span className="hidden">v1.0.2</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="relative group/materie">
                        <button className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-primary transition-colors py-2">
                            Materie
                            <svg className="w-4 h-4 transition-transform group-hover/materie:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/materie:opacity-100 group-hover/materie:translate-y-0 group-hover/materie:pointer-events-auto transition-all duration-300">
                            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-4 min-w-[280px]">
                                <div className="flex flex-col gap-2">
                                    <Link href="/#primaria" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors group/item">
                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl group-hover/item:scale-110 transition-transform">🎒</div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-sm font-black text-slate-800">Scuola Primaria</span>
                                            <span className="text-[10px] font-bold text-slate-400">Elementari</span>
                                        </div>
                                    </Link>
                                    <Link href="/#media" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-50 transition-colors group/item">
                                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl group-hover/item:scale-110 transition-transform">🎓</div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-sm font-black text-slate-800">Scuola Media</span>
                                        </div>
                                    </Link>
                                    <Link href="/#superiori" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-indigo-50 transition-colors group/item">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl group-hover/item:scale-110 transition-transform">🏛️</div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-sm font-black text-slate-800">Scuole Superiori</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/come-funziona" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Come Funziona</Link>
                    {session?.user?.email === "opul977@gmail.com" && (
                        <Link href="/admin" className="text-sm font-black text-secondary hover:underline underline-offset-4 transition-all">Admin 🔐</Link>
                    )}

                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.paypal.com/donate/?business=opul77@yahoo.it&no_recurring=0&item_name=Offrimi+un+caffè+per+Geniotto+☕&currency_code=EUR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-amber-100 hover:bg-amber-200 text-amber-700 text-[10px] font-black px-4 py-2 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <span>☕</span> Offrimi un caffè
                        </a>

                        <button
                            onClick={() => setIsRewardModalOpen(true)}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-black px-4 py-2 rounded-xl shadow-lg shadow-emerald-100 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 animate-pulse hover:animate-none"
                        >
                            <span>💎</span> Ottieni Gettoni
                        </button>

                        {session ? (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
                                    {session.user?.image ? (
                                        <Image src={session.user.image} alt="Avatar" width={24} height={24} className="rounded-full" />
                                    ) : (
                                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-[10px] text-white font-black">
                                            {session.user?.name?.[0] || "U"}
                                        </span>
                                    )}
                                    <span className="text-xs font-black text-slate-700">{session.user?.name?.split(' ')[0]}</span>
                                </div>
                                <button
                                    onClick={() => signOut()}
                                    className="text-xs font-black text-red-400 hover:text-red-500 transition-colors uppercase tracking-widest"
                                >
                                    Esci
                                </button>
                            </div>
                        ) : (
                            <Link href="/auth/login" className="bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-2xl text-sm font-black shadow-lg shadow-blue-200 hover:scale-105 active:scale-95 transition-all">
                                Entra nel Genio 🚀
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-28 left-6 right-6 bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 flex flex-col gap-6 md:hidden animate-in fade-in zoom-in duration-300">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Scegli il tuo livello</span>
                        <Link href="/#primaria" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100" onClick={() => setIsOpen(false)}>
                            <span className="text-2xl">🎒</span>
                            <span className="font-black text-slate-800">Primaria</span>
                        </Link>
                        <Link href="/#media" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100" onClick={() => setIsOpen(false)}>
                            <span className="text-2xl">🎓</span>
                            <span className="font-black text-slate-800">Media</span>
                        </Link>
                        <Link href="/#superiori" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100" onClick={() => setIsOpen(false)}>
                            <span className="text-2xl">🏛️</span>
                            <span className="font-black text-slate-800">Superiori</span>
                        </Link>

                        <a 
                            href="https://www.paypal.com/donate/?business=opul77@yahoo.it&no_recurring=0&item_name=Offrimi+un+caffè+per+Geniotto+☕&currency_code=EUR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100" 
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="text-2xl">☕</span>
                            <span className="font-black text-amber-700">Offrimi un caffè</span>
                        </a>
                    </div>

                    <div className="h-px bg-slate-100 my-2" />

                    <Link href="/come-funziona" className="text-lg font-bold text-slate-800" onClick={() => setIsOpen(false)}>Come Funziona</Link>

                    {session ? (
                        <button
                            onClick={() => {
                                signOut();
                                setIsOpen(false);
                            }}
                            className="bg-red-50 text-red-500 py-4 rounded-2xl font-black shadow-sm text-center border-2 border-red-100"
                        >
                            Esci 👋
                        </button>
                    ) : (
                        <Link href="/auth/login" className="bg-primary text-white py-4 rounded-2xl font-black shadow-lg text-center" onClick={() => setIsOpen(false)}>
                            Accedi 🚀
                        </Link>
                    )}
                </div>
            )}

            <RewardAdModal
                isOpen={isRewardModalOpen}
                onClose={() => setIsRewardModalOpen(false)}
                onReward={() => {
                    update();
                }}
            />
        </nav>
    );
}
