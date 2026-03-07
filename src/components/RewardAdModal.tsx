"use client";

import { useState, useEffect } from "react";

interface RewardAdModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRewardEarned: () => void;
}

export default function RewardAdModal({ isOpen, onClose, onRewardEarned }: RewardAdModalProps) {
    const [timeLeft, setTimeLeft] = useState(15);
    const [isCounting, setIsCounting] = useState(false);
    const [rewardReady, setRewardReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (isOpen) {
            setTimeLeft(15);
            setRewardReady(false);
            setIsCounting(true);
            setErrorMsg("");
        }
    }, [isOpen]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isCounting && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
        } else if (isCounting && timeLeft === 0) {
            setIsCounting(false);
            setRewardReady(true);
        }
        return () => clearTimeout(timer);
    }, [isCounting, timeLeft]);

    const handleClaimReward = async () => {
        setIsLoading(true);
        setErrorMsg("");
        try {
            const res = await fetch("/api/tokens/reward", { method: "POST" });
            const data = await res.json();

            if (res.ok) {
                onRewardEarned();
                onClose();
            } else {
                setErrorMsg(data.error || "Errore durante il riscatto.");
            }
        } catch (err) {
            console.error("Reward claim error:", err);
            setErrorMsg("Impossibile connettersi al server.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white max-w-lg w-full rounded-[2rem] shadow-2xl overflow-hidden relative border-4 border-slate-100 flex flex-col">

                {/* Header Timer */}
                <div className="bg-slate-900 text-white p-4 flex justify-between items-center z-10">
                    <span className="font-bold text-sm uppercase tracking-widest text-slate-400">Messaggio Promozionale</span>
                    <div className="bg-slate-800 px-3 py-1 rounded-full text-sm font-black flex items-center gap-2">
                        {rewardReady ? (
                            <span className="text-emerald-400">Ricompensa pronta! ✨</span>
                        ) : (
                            <>
                                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                <span className="text-slate-300">Attendi {timeLeft}s</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Video Area (Simulation) */}
                <div className="relative aspect-video bg-slate-100 flex items-center justify-center border-b border-slate-200 overflow-hidden group">
                    {/* Simulated Ad Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20" />

                    <div className="text-center z-10 p-6">
                        <div className="text-5xl mb-4 animate-bounce">🎁</div>
                        <h3 className="text-xl font-black text-slate-800 mb-2">Simulazione Sponsor</h3>
                        <p className="text-sm font-bold text-slate-500">
                            Qui apparirà il video del tuo partner pubblicitario.
                        </p>
                    </div>

                    {/* Progress Bar inside video */}
                    {!rewardReady && (
                        <div className="absolute bottom-0 left-0 h-1 bg-slate-300 w-full">
                            <div
                                className="h-full bg-primary transition-all duration-1000 ease-linear"
                                style={{ width: `${((15 - timeLeft) / 15) * 100}%` }}
                            />
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="p-6 flex flex-col items-center">
                    <p className="text-center text-slate-600 font-bold mb-6 text-sm uppercase tracking-tight">
                        Guarda lo sponsor fino alla fine per ricevere <br />
                        <span className="text-primary text-xl font-black">10 Prove Extra con Geniotto! 🐺</span>
                    </p>

                    {errorMsg && (
                        <div className="mb-4 text-red-500 text-sm font-bold px-4 py-2 bg-red-50 rounded-lg w-full text-center border border-red-100">
                            {errorMsg}
                        </div>
                    )}

                    <div className="flex w-full gap-4">
                        {rewardReady ? (
                            <button
                                onClick={handleClaimReward}
                                disabled={isLoading}
                                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all active:scale-95 disabled:opacity-50"
                            >
                                {isLoading ? "Riscatto..." : "Ottieni 10 Prove ✨"}
                            </button>
                        ) : (
                            <button
                                disabled
                                className="flex-1 bg-slate-100 text-slate-400 font-black py-4 rounded-2xl cursor-not-allowed"
                            >
                                Attendi la fine del video
                            </button>
                        )}

                        <button
                            onClick={onClose}
                            className="px-6 py-4 font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-700 rounded-2xl transition-colors border border-transparent hover:border-slate-200"
                        >
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
