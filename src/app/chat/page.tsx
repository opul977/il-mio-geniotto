"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useSession } from "next-auth/react";
import RewardAdModal from "@/components/RewardAdModal";
import AuthBlockModal from "@/components/AuthBlockModal";
import StickyAdBanner from "@/components/StickyAdBanner";
import RecommendedProducts from "@/components/RecommendedProducts";
import ReactMarkdown from "react-markdown";

type Message = {
    role: "user" | "assistant";
    content: string;
    image?: string;
};

// Interfacce per la Web Speech API (Speech Recognition)
interface SpeechRecognitionEvent extends Event {
    results: {
        [index: number]: {
            [index: number]: {
                transcript: string;
            };
        };
    };
}

interface SpeechRecognition extends EventTarget {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    onstart: () => void;
    onend: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onerror: (event: any) => void;
    onresult: (event: SpeechRecognitionEvent) => void;
    start: () => void;
    stop: () => void;
}

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        SpeechRecognition: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        webkitSpeechRecognition: any;
    }
}

export default function ChatPage() {
    const { data: session } = useSession();
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Ciao! Sono Geniotto. Come posso aiutarti oggi?" }
    ]);
    const [input, setInput] = useState("");
    const [level, setLevel] = useState<"primary" | "middle" | "highschool">("primary");
    const [tokens, setTokens] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isAudioEnabled, setIsAudioEnabled] = useState(false); // Default SPENTO come richiesto
    const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Fetch Tokens (for both Guests and Logged-in Users)
        fetch('/api/tokens/check')
            .then(res => res.json())
            .then(data => {
                if (data.tokens !== undefined) {
                    setTokens(data.tokens);
                }
            })
            .catch(err => console.error("Error fetching tokens:", err));

        if (session?.user) {
            // Fetch History only for logged-in users
            fetch("/api/chat/history")
                .then(res => res.json())
                .then(data => {
                    if (data.messages && data.messages.length > 0) {
                        setMessages([
                            { role: "assistant", content: "Bentornato! Ecco le nostre ultime conversazioni:" },
                            ...data.messages.map((m: { role: "user" | "assistant", content: string, image_url: string }) => ({
                                role: m.role,
                                content: m.content,
                                image: m.image_url
                            }))
                        ]);
                    }
                })
                .catch(err => console.error("Errore caricamento cronologia:", err));
        }
    }, [session]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            window.speechSynthesis.getVoices();
        }
    }, []);

    const cleanTextForSpeech = (text: string) => {
        return text
            .replace(/[*_#~`]/g, '')
            .replace(/[^\w\s.,!?;:áéíóúàèìòù\']|_/gi, ' ')
            .replace(/\s+/g, ' ')
            .replace(/\s+([.,!?;:])/g, '$1')
            .trim();
    };

    const speak = (text: string, clearQueue = true) => {
        if (!('speechSynthesis' in window)) return;

        if (clearQueue) {
            window.speechSynthesis.cancel();
        }

        const cleanedText = cleanTextForSpeech(text);
        if (!cleanedText || cleanedText.length < 2) return;

        const utterance = new SpeechSynthesisUtterance(cleanedText);
        utterance.lang = 'it-IT';

        const voices = window.speechSynthesis.getVoices();
        const italianVoices = voices.filter(v => v.lang.startsWith('it'));

        const premiumVoice =
            italianVoices.find(v => v.name.includes('Google') && v.name.includes('Natural')) ||
            italianVoices.find(v => v.name.includes('Google')) ||
            italianVoices.find(v => v.name.includes('Natural')) ||
            italianVoices.find(v => v.name.includes('High Quality')) ||
            italianVoices[0];

        if (premiumVoice) {
            utterance.voice = premiumVoice;
        }

        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = (e) => {
            console.error("Errore sintesi vocale:", e);
            setIsSpeaking(false);
        };

        window.speechSynthesis.speak(utterance);
    };

    const startSpeechRecognition = () => {
        const SpeechRecognitionClass =
            (typeof window !== 'undefined' && (
                window.SpeechRecognition ||
                window.webkitSpeechRecognition
            ));

        if (!SpeechRecognitionClass) {
            alert("Il tuo browser non supporta la dettatura vocale. Prova con Chrome!");
            return;
        }

        const recognition = new SpeechRecognitionClass() as SpeechRecognition;
        recognition.lang = 'it-IT';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onerror = () => setIsListening(false);

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const transcript = event.results[0][0].transcript;
            setInput(prev => prev ? `${prev} ${transcript}` : transcript);
        };

        recognition.start();
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                setSelectedImage(base64);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSend = async (customText?: string, imageFile?: string, customLevel?: "primary" | "middle" | "highschool") => {
        const messageText = customText || input;
        const finalImage = imageFile || selectedImage;
        if ((!messageText.trim() && !finalImage) || isLoading) return;

        if (tokens <= 0) {
            if (!session) {
                setIsAuthModalOpen(true);
            } else {
                setIsRewardModalOpen(true);
            }
            return;
        }

        const userMessage: Message = { role: "user", content: messageText || "Analizza questa foto", image: finalImage || undefined };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setSelectedImage(null);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: messageText || "Analizza questa foto",
                    image: finalImage,
                    level: customLevel || level,
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (response.status === 403) {
                    if (errorData.code === "GUEST_LIMIT_REACHED") {
                        setIsAuthModalOpen(true);
                    } else {
                        setIsRewardModalOpen(true);
                    }
                    throw new Error("Token esauriti");
                }
                throw new Error(errorData.error || "Errore del server");
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) throw new Error("Impossibile leggere la risposta.");

            setMessages(prev => [...prev, { role: "assistant", content: "" }]);

            let assistantMessage = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                assistantMessage += chunk;

                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = assistantMessage;
                    return newMessages;
                });
            }

            // Decrementa token localmente
            setTokens(prev => prev - 1);
        } catch (error: unknown) {
            const err = error as Error;
            console.error("Chat Error:", err);
            if (err.message !== "Token esauriti") {
                setMessages(prev => [...prev, {
                    role: "assistant",
                    content: err.message === "Unauthorized"
                        ? "Ehi! Per parlare con me devi prima fare l'accesso! 🐺"
                        : "wolf.G ha avuto un piccolo intoppo... Riprova tra un attimo! 🤖"
                }]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Auto-send initial query from URL
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('q');
            const urlLevel = urlParams.get('level') as "primary" | "middle" | "highschool" | null;

            if (urlLevel && ["primary", "middle", "highschool"].includes(urlLevel)) {
                setLevel(urlLevel);
            }

            if (query && !isLoading) {
                // Clear the URL so refreshing doesn't send it again
                window.history.replaceState({}, document.title, window.location.pathname);

                // Small delay to ensure state is ready
                setTimeout(() => {
                    handleSend(query, undefined, urlLevel && ["primary", "middle", "highschool"].includes(urlLevel) ? urlLevel : undefined);
                }, 500);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-5xl mx-auto w-full pt-32 pb-6 px-6 flex flex-col gap-4 h-[calc(100vh-2rem)] overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-between bg-white/40 glass p-4 rounded-[2rem] gap-4">
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/geniotto-head.png"
                                alt="Geniotto Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl font-black text-slate-800 tracking-tight">Geniotto AI</h2>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                {isSpeaking ? (
                                    <div className="flex items-center gap-2 text-emerald-600 animate-pulse">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                                        Ti sta parlando... 💬
                                    </div>
                                ) : (
                                    <>
                                        <span className="w-2 h-2 bg-slate-300 rounded-full" />
                                        {session ? `Ciao, ${session.user?.name?.split(' ')[0]}!` : "Modalità Ospite 🚀"}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex bg-slate-100 p-1 rounded-xl">
                            <button onClick={() => setLevel("primary")} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${level === "primary" ? "bg-white text-primary shadow-sm" : "text-slate-400"}`}>Primaria</button>
                            <button onClick={() => setLevel("middle")} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${level === "middle" ? "bg-white text-orange-500 shadow-sm" : "text-slate-400"}`}>Media</button>
                            <button onClick={() => setLevel("highschool")} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${level === "highschool" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-400"}`}>Superiori</button>
                        </div>

                        <div className="bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-xl flex items-center gap-2">
                            <span className="text-[10px] font-black text-amber-600">
                                {tokens} {session ? "PROVE RIMASTE" : "PROVE GUEST"}
                            </span>
                        </div>

                        <a
                            href="https://www.paypal.com/donate/?business=opul77@yahoo.it&no_recurring=0&item_name=Offrimi+un+caffè+per+Geniotto+☕&currency_code=EUR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border-2 border-amber-100 px-3 py-1.5 rounded-xl flex items-center gap-2 hover:bg-amber-50 transition-all hover:scale-105 active:scale-95"
                        >
                            <span className="text-[10px] font-black text-amber-600">
                                ☕ Offrimi un caffè
                            </span>
                        </a>

                        <button
                            onClick={() => {
                                const newState = !isAudioEnabled;
                                setIsAudioEnabled(newState);
                                if (!newState) window.speechSynthesis.cancel();
                            }}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 transition-all font-black text-[10px] uppercase ${isAudioEnabled
                                ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                                : "bg-slate-50 border-slate-200 text-slate-400"}`}
                        >
                            {isAudioEnabled ? "🔊 Voce Attiva" : "🔇 Voce Spenta"}
                        </button>
                    </div>
                </div>

                <div className="flex-1 bg-white/60 glass rounded-[2.5rem] p-6 flex flex-col md:flex-row gap-6 overflow-hidden shadow-2xl relative">
                    {/* Sidebar with Recommended Products (Desktop only) */}
                    <div className="hidden lg:flex flex-col w-72 shrink-0 h-full border-r border-slate-100 pr-6 gap-6">
                        <div className="flex flex-col gap-2">
                           <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-2">
                               <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                               Consigli dinamici di Geniotto
                           </span>
                           <RecommendedProducts layout="mini" />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-4 overflow-hidden h-full">
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-4">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[85%] flex flex-col gap-2 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                                    <div className={`p-5 rounded-[1.8rem] text-md font-bold shadow-sm ${msg.role === "user"
                                        ? "bg-primary text-white rounded-tr-none"
                                        : "bg-white text-slate-800 rounded-tl-none border border-slate-100"
                                        }`}>
                                        {msg.image && (
                                            <div className="mb-3 relative w-full h-48 rounded-xl overflow-hidden border-2 border-slate-100">
                                                <Image src={msg.image} alt="Compito" fill className="object-cover" />
                                            </div>
                                        )}
                                        {msg.role === "assistant" ? (
                                            <div className="markdown-content">
                                                <ReactMarkdown>
                                                    {msg.content}
                                                </ReactMarkdown>
                                            </div>
                                        ) : (
                                            msg.content
                                        )}
                                        {msg.role === "assistant" && msg.content && (
                                            <button
                                                onClick={() => speak(msg.content)}
                                                className="ml-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition-all shadow-sm"
                                                title="Ascolta Geniotto"
                                            >
                                                🔊
                                            </button>
                                        )}
                                    </div>
                                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest px-2">
                                        {msg.role === "user" ? "Tu" : "wolf.G"}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white p-4 rounded-[1.5rem] rounded-tl-none border border-slate-100 shadow-sm flex gap-1.5">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {selectedImage && (
                        <div className="mx-2 mb-2 relative inline-block animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                                <Image src={selectedImage} alt="Preview" fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors" />
                            </div>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all z-10 font-bold border-2 border-white"
                                title="Rimuovi immagine"
                            >
                                ✕
                            </button>
                        </div>
                    )}

                    <div className="px-2 pt-2">
                        <StickyAdBanner />
                    </div>

                    <div className="pt-4 flex items-center gap-3">
                        <input
                            type="file"
                            className="hidden"
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleFileUpload}
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="w-14 h-14 bg-slate-50 hover:bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center text-2xl transition-all shadow-inner shrink-0"
                        >
                            📸
                        </button>
                        <button
                            onClick={startSpeechRecognition}
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all shadow-inner shrink-0 ${isListening ? "bg-red-500 text-white animate-pulse" : "bg-slate-50 text-slate-400"}`}
                        >
                            {isListening ? "⏹️" : "🎙️"}
                        </button>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Scrivi al tuo amico Geniotto..."
                                aria-label="Messaggio per Geniotto"
                                className="w-full bg-white border-2 border-slate-50 rounded-2xl py-4 pl-6 pr-20 text-md font-bold placeholder:text-slate-300 focus:outline-none focus:border-primary/20 transition-all shadow-md"
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={isLoading || (!input.trim() && !selectedImage)}
                                className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-blue-600 disabled:opacity-50 text-white px-5 rounded-xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all text-[11px] uppercase"
                            >
                                INVIA 🚀
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <RewardAdModal
                isOpen={isRewardModalOpen}
                onClose={() => setIsRewardModalOpen(false)}
                onReward={(newTokens) => setTokens(newTokens)}
            />
            <AuthBlockModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </main>
    );
}
