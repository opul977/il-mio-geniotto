"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useSession } from "next-auth/react";
import RewardAdModal from "@/components/RewardAdModal";
import AuthBlockModal from "@/components/AuthBlockModal";
import ReactMarkdown from "react-markdown";

type Message = {
    role: "user" | "assistant";
    content: string;
    image?: string;
};

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
    const [isAudioEnabled, setIsAudioEnabled] = useState(false);
    const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [showTokenInfo, setShowTokenInfo] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Carica il contatore gettoni
        fetch('/api/tokens/check')
            .then(res => res.json())
            .then(data => { if (data.tokens !== undefined) setTokens(data.tokens); })
            .catch(err => console.error("Error fetching tokens:", err));

        // Carica cronologia: funziona per utenti loggati E ospiti (via IP)
        fetch("/api/chat/history")
            .then(res => res.json())
            .then(data => {
                if (data.messages && data.messages.length > 0) {
                    const welcomeMsg = data.source === 'account'
                        ? "Bentornato! Ecco le nostre ultime conversazioni:"
                        : "Bentornato! Ho ritrovato la tua cronologia 🔍";
                    setMessages([
                        { role: "assistant", content: welcomeMsg },
                        ...data.messages.map((m: { role: "user" | "assistant", content: string, image_url: string }) => ({
                            role: m.role,
                            content: m.content,
                            image: m.image_url
                        }))
                    ]);
                }
            })
            .catch(err => console.error("Errore caricamento cronologia:", err));
    }, []);

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
        if (clearQueue) window.speechSynthesis.cancel();

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

        if (premiumVoice) utterance.voice = premiumVoice;

        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = (e) => { console.error("Errore sintesi vocale:", e); setIsSpeaking(false); };

        window.speechSynthesis.speak(utterance);
    };

    const startSpeechRecognition = () => {
        const SpeechRecognitionClass =
            typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

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

    useEffect(() => { scrollToBottom(); }, [messages]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setSelectedImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSend = async (customText?: string, imageFile?: string, customLevel?: "primary" | "middle" | "highschool") => {
        const messageText = customText || input;
        const finalImage = imageFile || selectedImage;
        if ((!messageText.trim() && !finalImage) || isLoading) return;

        if (tokens <= 0) {
            if (!session) setIsAuthModalOpen(true);
            else setIsRewardModalOpen(true);
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
                    history: messages.slice(-10).map(m => ({ role: m.role, content: m.content })),
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (response.status === 403) {
                    if (errorData.code === "GUEST_LIMIT_REACHED") setIsAuthModalOpen(true);
                    else setIsRewardModalOpen(true);
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
                assistantMessage += decoder.decode(value, { stream: true });
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = assistantMessage;
                    return newMessages;
                });
            }

            setTokens(prev => prev - 1);

            if (isAudioEnabled && assistantMessage) {
                speak(assistantMessage);
            }
        } catch (error: unknown) {
            const err = error as Error;
            console.error("Chat Error:", err);
            if (err.message !== "Token esauriti") {
                setMessages(prev => [...prev, {
                    role: "assistant",
                    content: err.message === "Unauthorized"
                        ? "Ehi! Per parlare con me devi prima fare l'accesso! 🐺"
                        : "Geniotto ha avuto un piccolo intoppo... Riprova tra un attimo! 🤖"
                }]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('q');
            const urlLevel = urlParams.get('level') as "primary" | "middle" | "highschool" | null;

            if (urlLevel && ["primary", "middle", "highschool"].includes(urlLevel)) setLevel(urlLevel);

            if (query && !isLoading) {
                window.history.replaceState({}, document.title, window.location.pathname);
                setTimeout(() => {
                    handleSend(query, undefined, urlLevel && ["primary", "middle", "highschool"].includes(urlLevel) ? urlLevel : undefined);
                }, 500);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="h-screen bg-[#f9fafb] flex overflow-hidden font-sans">
            {/* Sidebar - Stile ChatGPT/Gemini */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 transition-transform duration-300 ease-in-out md:relative md:translate-x-0
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                <div className="p-6 flex items-center justify-between md:block">
                    <button 
                        onClick={() => {
                            setMessages([{ role: "assistant", content: "Ciao! Sono Geniotto. Come posso aiutarti oggi?" }]);
                            setInput("");
                            setIsSidebarOpen(false);
                        }}
                        className="flex-1 flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 border-2 border-slate-100 p-4 rounded-2xl transition-all group"
                    >
                        <span className="text-xl group-hover:scale-110 transition-transform">➕</span>
                        <span className="font-black text-xs uppercase tracking-widest text-slate-700">Nuova Chat</span>
                    </button>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 text-slate-400">✕</button>
                </div>
                {/* ... rest of sidebar remains ... */}
                <div className="flex-1 overflow-y-auto px-4 space-y-6">
                    <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2 mb-4 block">La tua cronologia</span>
                        <div className="space-y-1">
                            {messages.filter(m => m.role === 'user').slice(-5).map((m, i) => (
                                <button key={i} className="w-full text-left p-3 rounded-xl hover:bg-slate-50 text-slate-600 font-bold text-xs truncate transition-colors">
                                    💬 {m.content.substring(0, 30)}...
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="p-6 border-t border-slate-100">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-[10px] text-white font-black shadow-sm">
                            {session?.user?.name?.[0] || "U"}
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-black text-slate-700 truncate uppercase tracking-tight">
                                {session?.user?.name?.split(' ')[0] || "Ospite"}
                            </span>
                            <span className="text-[9px] font-bold text-slate-400 truncate tracking-tighter">
                                {tokens} Gettoni
                            </span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay per mobile */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Area Chat Principale */}
            <div className="flex-1 flex flex-col relative h-full bg-white md:bg-[#f9fafb]">
                <header className="absolute top-0 left-0 right-0 z-30 p-4 md:p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => setIsSidebarOpen(true)}
                            className="md:hidden w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center text-xl"
                        >
                            📜
                        </button>
                        <Navbar />
                    </div>
                    
                    {/* Badge Livello Desktop */}
                    <div className="hidden lg:flex bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-slate-100 gap-2 mt-4">
                        <button onClick={() => setLevel("primary")} className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all ${level === "primary" ? "bg-primary text-white" : "text-slate-400 hover:text-slate-600"}`}>Elementari</button>
                        <button onClick={() => setLevel("middle")} className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all ${level === "middle" ? "bg-orange-500 text-white" : "text-slate-400 hover:text-slate-600"}`}>Medie</button>
                        <button onClick={() => setLevel("highschool")} className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all ${level === "highschool" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-600"}`}>Superiori</button>
                    </div>
                </header>


                {/* Container Messaggi */}
                <div className="flex-1 overflow-y-auto pt-32 pb-32 custom-scrollbar">
                    <div className="max-w-3xl mx-auto px-6 flex flex-col gap-8">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                {/* Avatar */}
                                <div className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl shadow-sm ${msg.role === "user" ? "bg-primary text-white" : "bg-white border border-slate-200"}`}>
                                    {msg.role === "user" ? (session?.user?.name?.[0] || "👤") : "🤖"}
                                </div>

                                {/* Bubble */}
                                <div className={`flex flex-col max-w-[85%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                                    <div className={`group relative p-6 rounded-[2rem] shadow-sm transition-all ${msg.role === "user" 
                                        ? "bg-primary text-white rounded-tr-none shadow-blue-100" 
                                        : "bg-white text-slate-800 rounded-tl-none border border-slate-100 shadow-slate-100"
                                    }`}>
                                        {msg.image && (
                                            <div className="mb-4 relative w-full h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-md">
                                                <Image src={msg.image} alt="Compito" fill className="object-cover" />
                                            </div>
                                        )}
                                        
                                        <div className={`prose max-w-none font-bold leading-relaxed text-[15px] sm:text-base ${msg.role === "user" ? "prose-invert" : "prose-slate"}`}>
                                            {msg.role === "assistant" ? (
                                                <div className="markdown-content">
                                                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                                                </div>
                                            ) : (
                                                msg.content
                                            )}
                                        </div>

                                        {/* Azioni veloci bolla */}
                                        {msg.role === "assistant" && msg.content && (
                                            <div className="absolute -bottom-10 left-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => speak(msg.content)} className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-xs shadow-sm hover:bg-slate-50 transition-colors" title="Ascolta">🔊</button>
                                                <button onClick={() => {
                                                    navigator.clipboard.writeText(msg.content);
                                                    alert("Copiato!");
                                                }} className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-xs shadow-sm hover:bg-slate-50 transition-colors" title="Copia">📋</button>
                                            </div>
                                        )}
                                    </div>
                                    <span className="mt-2 text-[9px] font-black text-slate-300 uppercase tracking-widest px-4">
                                        {msg.role === "user" ? "Tu" : "Geniotto AI"}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex gap-4 animate-pulse">
                                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex-shrink-0" />
                                <div className="bg-white p-6 rounded-[2rem] rounded-tl-none border border-slate-100 shadow-sm w-32 flex gap-1.5 items-center justify-center">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-4" />
                    </div>
                </div>

                {/* Input Bar - Moderna e Galleggiante */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent">
                    <div className="max-w-3xl mx-auto flex flex-col gap-3">
                        
                        {selectedImage && (
                            <div className="mx-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-2xl group">
                                    <Image src={selectedImage} alt="Preview" fill className="object-cover" />
                                    <button onClick={() => setSelectedImage(null)} className="absolute inset-0 bg-red-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-black text-xs">ELIMINA</button>
                                </div>
                            </div>
                        )}

                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-2xl group-focus-within:bg-primary/20 transition-all opacity-50" />
                            <div className="relative flex items-center bg-white border-2 border-slate-100 rounded-[2.5rem] p-2 shadow-2xl focus-within:border-primary/30 transition-all">
                                <input type="file" className="hidden" ref={fileInputRef} accept="image/*" onChange={handleFileUpload} />
                                
                                <button onClick={() => fileInputRef.current?.click()} className="w-12 h-12 flex items-center justify-center text-xl hover:bg-slate-50 rounded-full transition-all shrink-0" title="Allega foto">📸</button>
                                
                                <button onClick={startSpeechRecognition} className={`w-12 h-12 flex items-center justify-center text-xl rounded-full transition-all shrink-0 ${isListening ? "bg-red-500 text-white animate-pulse" : "hover:bg-slate-50 text-slate-400"}`}>
                                    {isListening ? "⏹️" : "🎙️"}
                                </button>

                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Chiedi aiuto al tuo Geniotto..."
                                    className="flex-1 bg-transparent border-none py-4 px-4 text-sm sm:text-base font-bold text-slate-800 placeholder:text-slate-300 focus:outline-none"
                                />

                                <button
                                    onClick={() => handleSend()}
                                    disabled={isLoading || (!input.trim() && !selectedImage)}
                                    className="bg-primary hover:bg-blue-600 disabled:opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all shrink-0"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rotate-45">
                                        <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p className="text-center text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                            Geniotto AI può commettere errori. Verifica sempre le informazioni importanti. 🐺
                        </p>
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

