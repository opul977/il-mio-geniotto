"use client";

import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import Link from "next/link";
import AdSenseDisplay from "./AdSenseDisplay";

interface RewardAdModalProps {
    isOpen: boolean;
    onClose: () => void;
    onReward: (newTokens: number) => void;
}

export default function RewardAdModal({ isOpen, onClose, onReward }: RewardAdModalProps) {
    const [step, setStep] = useState<'selection' | 'watching' | 'rewarded' | 'auth_required'>('selection');
    const [duration, setDuration] = useState<30 | 60>(30);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        if (isOpen && !session) {
            setStep('auth_required');
        } else if (isOpen && session && step === 'auth_required') {
            setStep('selection');
        }
    }, [isOpen, session, step]);

    const startAd = (d: 30 | 60) => {
        setDuration(d);
        setTimeLeft(d);
        setStep('watching');
    };

    const handleCompleteAd = useCallback(async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/tokens/reward', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ duration }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(`Ottimo! Hai guadagnato ${duration === 30 ? '1 gettone' : '2 gettoni'}! 🪙`);
                onReward(data.newTokens);
                setStep('rewarded');
            } else {
                toast.error(data.error || "Qualcosa è andato storto.");
                onClose();
            }
        } catch (err) {
            console.error(err);
            toast.error("Errore di connessione.");
            onClose();
        } finally {
            setIsSubmitting(false);
        }
    }, [duration, onClose, onReward]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (step === 'watching' && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (step === 'watching' && timeLeft === 0) {
            handleCompleteAd();
        }
        return () => clearInterval(timer);
    }, [step, timeLeft, handleCompleteAd]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 w-full max-w-lg overflow-hidden relative">

                {/* Close Button */}
                {step !== 'watching' && (
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                        aria-label="Chiudi"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

                <div className="p-8 md:p-12 text-center">
                    {step === 'selection' && (
                        <div className="space-y-6">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 animate-bounce">
                                📺
                            </div>
                            <h2 className="text-3xl font-black text-slate-800">Vinci Gettoni Gratis! 🎁</h2>
                            <p className="text-slate-500 font-bold leading-relaxed px-4">
                                Guarda un breve video sponsorizzato e Geniotto ti regala gettoni extra per i tuoi compiti! 🚀
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <button
                                    onClick={() => startAd(30)}
                                    disabled={isSubmitting}
                                    className="group bg-white border-2 border-slate-100 hover:border-primary/30 p-6 rounded-3xl transition-all hover:shadow-lg text-left disabled:opacity-50"
                                >
                                    <div className="text-2xl mb-2">⚡</div>
                                    <div className="font-black text-slate-800">Flash Ad</div>
                                    <div className="text-xs text-slate-400 mb-2">30 Secondi</div>
                                    <div className="inline-flex items-center gap-1 bg-blue-50 text-primary text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest">
                                        +1 Gettone
                                    </div>
                                </button>

                                <button
                                    onClick={() => startAd(60)}
                                    disabled={isSubmitting}
                                    className="group bg-white border-2 border-slate-100 hover:border-primary/30 p-6 rounded-3xl transition-all hover:shadow-lg text-left disabled:opacity-50"
                                >
                                    <div className="text-2xl mb-2">🎬</div>
                                    <div className="font-black text-slate-800">Full Ad</div>
                                    <div className="text-xs text-slate-400 mb-2">1 Minuto</div>
                                    <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest">
                                        +2 Gettoni
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 'watching' && (
                        <div className="space-y-8 py-4">
                            <div className="relative w-32 h-32 mx-auto">
                                <svg className="w-full h-full rotate-[-90deg]">
                                    <circle
                                        cx="64" cy="64" r="60"
                                        className="stroke-slate-100 fill-none"
                                        strokeWidth="8"
                                    />
                                    <circle
                                        cx="64" cy="64" r="60"
                                        className="stroke-primary fill-none transition-all duration-1000"
                                        strokeWidth="8"
                                        style={{
                                            strokeDasharray: '377',
                                            strokeDashoffset: (377 - (377 * timeLeft) / duration).toString()
                                        }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl font-black text-slate-800">{timeLeft}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-slate-800">Video in corso...</h3>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                                    Non chiudere questa finestra
                                </p>
                            </div>

                            <AdSenseDisplay />
                        </div>
                    )}

                    {step === 'rewarded' && (
                        <div className="space-y-6">
                            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl mx-auto mb-4 scale-110 animate-bounce">
                                👑
                            </div>
                            <h2 className="text-3xl font-black text-emerald-600">Gettoni Riscattati!</h2>
                            <p className="text-slate-500 font-bold leading-relaxed">
                                Ottimo lavoro! Hai ricevuto i tuoi gettoni. <br />
                                Puoi tornare a studiare con Geniotto.
                            </p>

                            <button
                                onClick={onClose}
                                className="w-full bg-slate-900 text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-slate-200 transition-all hover:scale-105 active:scale-95 mt-4"
                            >
                                Torna allo studio 🚀
                            </button>
                        </div>
                    )}

                    {step === 'auth_required' && (
                        <div className="space-y-8">
                            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl mx-auto mb-4 animate-pulse">
                                🔒
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-3xl font-black text-slate-800">Premio Riservato! 🎁</h2>
                                <p className="text-slate-500 font-bold leading-relaxed px-4">
                                    I regali di Geniotto sono riservati ai membri della nostra famiglia. <br />
                                    Entra ora per sbloccare i gettoni gratis!
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 mt-8">
                                <Link
                                    href="/auth/register"
                                    onClick={onClose}
                                    className="w-full bg-primary text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                                >
                                    Registrati Gratis 🚀
                                </Link>
                                <Link
                                    href="/auth/login"
                                    onClick={onClose}
                                    className="w-full bg-white border-2 border-slate-100 text-slate-600 py-4 rounded-[2rem] font-black text-lg transition-all hover:bg-slate-50 flex items-center justify-center gap-3"
                                >
                                    Hai già un account? Accedi
                                </Link>
                            </div>

                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest pt-4">
                                Ci vorranno solo 30 secondi! ⚡
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
