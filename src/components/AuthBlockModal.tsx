"use client";

import Link from "next/link";

interface AuthBlockModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthBlockModal({ isOpen, onClose }: AuthBlockModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white max-w-md w-full rounded-[2.5rem] shadow-2xl overflow-hidden relative border-4 border-white flex flex-col p-8 text-center">
                <div className="text-6xl mb-6">🔒</div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">Area Riservata agli Amici!</h3>
                <p className="text-slate-600 font-bold mb-8 leading-relaxed">
                    Per parlare con Geniotto e ricevere ogni giorno <span className="text-primary font-black">10 PROVE GRATUITE</span>, devi prima registrarti o accedere al tuo account.
                </p>

                <div className="flex flex-col gap-4">
                    <Link
                        href="/auth/login"
                        className="bg-primary hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-95 text-center"
                    >
                        Accedi o Registrati 🚀
                    </Link>
                    <button
                        onClick={onClose}
                        className="py-3 font-bold text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        Continua solo a guardare
                    </button>
                </div>
            </div>
        </div>
    );
}
