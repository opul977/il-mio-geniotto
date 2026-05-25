"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import RewardAdModal from "./RewardAdModal";



const ExpandingLink = ({ href, icon, text }: { href: string, icon: React.ReactNode, text: string }) => (
    <Link 
        href={href} 
        className="group/link flex items-center w-[52px] hover:w-[135px] xl:w-auto xl:hover:w-auto xl:px-4 h-[52px] rounded-[20px] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] overflow-hidden hover:bg-[#e4e4e7] xl:hover:bg-slate-100 text-slate-600"
    >
        <div className="flex-shrink-0 w-[52px] h-[52px] xl:w-auto xl:h-auto xl:mr-2 flex items-center justify-center">
            {icon}
        </div>
        <span className="font-bold text-sm whitespace-nowrap opacity-0 group-hover/link:opacity-100 xl:opacity-100 transition-opacity duration-300 xl:duration-0 delay-75 xl:delay-0">
            {text}
        </span>
    </Link>
);

type ExpandingActionProps = {
    as?: React.ElementType | "Link" | "a" | "button" | string;
    href?: string;
    onClick?: () => void;
    target?: string;
    rel?: string;
    icon: React.ReactNode;
    text: string;
    expandClass?: string;
    className?: string;
};

const ExpandingAction = ({ as: Tag = "button", href, onClick, target, rel, icon, text, expandClass = "hover:w-[160px]", className = "" }: ExpandingActionProps) => {
    const content = (
        <>
            <div className="flex-shrink-0 w-[52px] h-[52px] xl:w-auto xl:h-auto xl:mr-2 flex items-center justify-center text-2xl">
                {icon}
            </div>
            <span className="font-black text-[11px] uppercase tracking-wider whitespace-nowrap opacity-0 group-hover/action:opacity-100 xl:opacity-100 transition-opacity duration-300 xl:duration-0 delay-75 xl:delay-0">
                {text}
            </span>
        </>
    );

    const baseClass = `group/action flex items-center h-[52px] w-[52px] xl:w-auto xl:px-4 rounded-[20px] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] overflow-hidden ${expandClass} xl:hover:w-auto cursor-pointer ${className}`;

    if (Tag === "Link") {
        return <Link href={href || "#"} className={baseClass}>{content}</Link>;
    }

    return (
        <Tag href={href} onClick={onClick} target={target} rel={rel} className={baseClass}>
            {content}
        </Tag>
    );
};
// ----------------------------------------------

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
    const { data: session, update } = useSession();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl px-4 md:px-6 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Image src="/geniotto-head.PNG" alt="Geniotto Logo" width={56} height={56} className="drop-shadow-md object-contain" />
                    </div>
                    <div className="flex flex-col hidden sm:flex">
                        <span className="text-[9px] font-black text-slate-400 tracking-widest uppercase leading-none">Il Mio</span>
                        <span className="text-lg font-black text-slate-900 leading-none tracking-tight">GENIOTTO</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 flex-1 justify-center px-4">
                    {/* Expanding Hover Menu */}
                    <div className="flex items-center gap-[4px] bg-white/85 backdrop-blur-[20px] rounded-[24px] border border-slate-100 p-1 shadow-sm">
                        <div className="relative group/materie flex items-center h-[44px]">
                            <button className="group/btn flex items-center h-[44px] w-[44px] xl:w-auto xl:px-3 hover:w-[120px] xl:hover:w-auto rounded-[16px] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] overflow-hidden hover:bg-[#e4e4e7] xl:hover:bg-slate-100 text-slate-600">
                                <div className="flex-shrink-0 w-[44px] h-[44px] xl:w-auto xl:h-auto xl:mr-2 flex items-center justify-center">
                                    <span className="text-xl drop-shadow-sm">📚</span>
                                </div>
                                <span className="font-bold text-[13px] whitespace-nowrap opacity-0 group-hover/btn:opacity-100 xl:opacity-100 transition-opacity duration-300 xl:duration-0">
                                    Materie
                                </span>
                            </button>
                            {/* ... dropdown remains same ... */}

                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/materie:opacity-100 group-hover/materie:translate-y-0 group-hover/materie:pointer-events-auto transition-all duration-300 z-50">
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

                        <ExpandingLink href="/come-funziona" icon={<span className="text-2xl drop-shadow-sm">💡</span>} text="Funziona" />
                        <ExpandingLink href="/guide/come-studiare-con-ia" icon={<span className="text-2xl drop-shadow-sm">🤖</span>} text="Guide IA" />
                        <ExpandingLink href="/chi-siamo" icon={<span className="text-2xl drop-shadow-sm">👋</span>} text="Chi Siamo" />
                        <ExpandingLink href="/contatti" icon={<span className="text-2xl drop-shadow-sm">💬</span>} text="Contatti" />
                    </div>

                    {session?.user?.email === "opul977@gmail.com" && (
                        <Link href="/admin" className="text-sm font-black text-secondary hover:underline underline-offset-4 transition-all whitespace-nowrap">Admin 🔐</Link>
                    )}

                    <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
                        <ExpandingAction 
                            as="a"
                            href="https://www.paypal.com/donate/?business=opul77@yahoo.it&no_recurring=0&item_name=Offrimi+un+caffè+per+Geniotto+☕&currency_code=EUR"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon="☕"
                            text="Caffè"
                            expandClass="hover:w-[100px]"
                            className="bg-amber-100 hover:bg-amber-200 text-amber-700 h-[44px] w-[44px] rounded-[16px]"
                        />

                        <ExpandingAction 
                            as="button"
                            onClick={() => setIsRewardModalOpen(true)}
                            icon="💎"
                            text="Gettoni"
                            expandClass="hover:w-[110px]"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white h-[44px] w-[44px] rounded-[16px] animate-pulse hover:animate-none"
                        />

                        {session ? (
                            <div className="flex items-center gap-2 xl:gap-4">
                                <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-2xl border border-slate-100">
                                    {session.user?.image ? (
                                        <Image src={session.user.image} alt="Avatar" width={24} height={24} className="rounded-full" />
                                    ) : (
                                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-[10px] text-white font-black">
                                            {session.user?.name?.[0] || "U"}
                                        </span>
                                    )}
                                    <span className="text-xs font-black text-slate-700 hidden xl:inline">{session.user?.name?.split(' ')[0]}</span>
                                </div>
                                <button
                                    onClick={() => signOut()}
                                    className="text-[10px] font-black text-red-400 hover:text-red-500 transition-colors uppercase tracking-widest px-2"
                                >
                                    Esci
                                </button>
                            </div>
                        ) : (
                            <ExpandingAction 
                                as="Link"
                                href="/auth/login"
                                icon="🚀"
                                text="Entra"
                                expandClass="hover:w-[100px]"
                                className="bg-primary hover:bg-blue-600 text-white h-[44px] w-[44px] rounded-[16px]"
                            />
                        )}
                    </div>
                </div>

                {/* Mobile Actions (Visible only on small screens to fill the void) */}
                <div className="flex md:hidden items-center gap-2 ml-auto mr-4">
                    <button 
                        onClick={() => setIsRewardModalOpen(true)}
                        className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg animate-pulse"
                    >
                        💎
                    </button>
                    {!session && (
                        <Link href="/auth/login" className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg">
                            🚀
                        </Link>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-800 p-2 hover:bg-slate-50 rounded-xl transition-colors"
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
                    <Link href="/guide/come-studiare-con-ia" className="text-lg font-bold text-slate-800" onClick={() => setIsOpen(false)}>Guide IA</Link>
                    <Link href="/chi-siamo" className="text-lg font-bold text-slate-800" onClick={() => setIsOpen(false)}>Chi Siamo</Link>
                    <Link href="/contatti" className="text-lg font-bold text-slate-800" onClick={() => setIsOpen(false)}>Contatti</Link>

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
