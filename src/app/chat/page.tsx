"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

type Message = {
    role: "user" | "assistant";
    content: string;
    image?: string;
};

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Ciao! Io sono Geniotto, il tuo amico speciale! 🚀 Quale compito facciamo insieme oggi? Puoi anche caricarmi una foto dei tuoi esercizi!" }
    ]);
    const [input, setInput] = useState("");
    const [level, setLevel] = useState<"primary" | "middle" | "highschool">("primary");
    const [tokens, setTokens] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Funzione per far parlare Geniotto
    const speak = (text: string) => {
        if (!('speechSynthesis' in window)) return;

        // Interrompiamo eventuali letture precedenti
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'it-IT';
        utterance.rate = 1.0;
        utterance.pitch = 1.1; // Voce un po' più simpatica per i bambini

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
    };

    const startSpeechRecognition = () => {
        const SpeechRecognition =
            (typeof window !== 'undefined' && (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).SpeechRecognition ||
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).webkitSpeechRecognition
            ));

        if (!SpeechRecognition) {
            alert("Il tuo browser non supporta la dettatura vocale. Prova con Chrome!");
            return;
        }

        const recognition = new SpeechRecognition();
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

    // Definiamo i tipi minimi necessari per evitare errori di 'any'
    interface SpeechRecognitionEvent extends Event {
        results: {
            [index: number]: {
                [index: number]: {
                    transcript: string;
                };
            };
        };
    }

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
                handleSend("Ecco la foto del mio compito!", base64);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSend = async (customText?: string, imageFile?: string) => {
        const messageText = customText || input;
        if ((!messageText.trim() && !imageFile) || isLoading) return;

        if (tokens <= 0) {
            alert("Hai finito i token! Guarda un video o abbonati per continuare. 🪙");
            return;
        }

        const userMessage: Message = { role: "user", content: messageText, image: imageFile };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            // Aggiungiamo un controller per il timeout (30 secondi)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000);

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: messageText,
                    image: imageFile,
                    level: level,
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorText = await response.text();
                let errorMessage = "Errore del server";
                try {
                    const errorJson = JSON.parse(errorText);
                    errorMessage = errorJson.details || errorJson.error || errorMessage;
                } catch {
                    errorMessage = `Errore ${response.status}: Il server ha risposto in modo inatteso.`;
                }
                throw new Error(errorMessage);
            }

            // Gestione dello Streaming
            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) throw new Error("Impossibile leggere la risposta.");

            // Aggiungiamo un messaggio vuoto dell'assistente che aggiorneremo
            setMessages(prev => [...prev, { role: "assistant", content: "" }]);

            let assistantMessage = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                assistantMessage += chunk;

                // Aggiorniamo solo l'ultimo messaggio
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = assistantMessage;
                    return newMessages;
                });
            }

            // Quando ha finito di scrivere, Geniotto legge la risposta a voce alta!
            speak(assistantMessage);

            setTokens(prev => prev - 1);
        } catch (error) {
            console.error("Chat Error:", error);
            const msg = error instanceof Error && error.name === 'AbortError'
                ? "Geniotto sta pensando troppo... 🤖 Il server è un po' lento, riprova!"
                : `Problema tecnico: ${error instanceof Error ? error.message : "Riprova tra poco"}`;

            setMessages(prev => [...prev, {
                role: "assistant",
                content: msg
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-5xl mx-auto w-full pt-32 pb-6 px-6 flex flex-col gap-4 h-[calc(100vh-2rem)] overflow-hidden">
                {/* Chat Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between bg-white/40 glass p-4 rounded-[2rem] gap-4">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 overflow-visible">
                                <svg width="50" height="40" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="10" y="10" width="80" height="60" rx="25" fill="white" stroke="#3b82f6" strokeWidth="4" />
                                    <rect x="22" y="24" width="56" height="32" rx="12" fill="#1e293b" />
                                    <circle cx="38" cy="40" r="4" fill="#60a5fa" className="animate-pulse" />
                                    <circle cx="62" cy="40" r="4" fill="#60a5fa" className="animate-pulse" />
                                    <g className="animate-wave" style={{ transformOrigin: '20px 70px' }}>
                                        <rect x="5" y="55" width="15" height="15" rx="6" fill="white" stroke="#3b82f6" strokeWidth="3" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-lg font-black text-slate-800 leading-tight">Geniotto AI</h2>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                Ti saluta! 👋
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
                            <button onClick={() => setLevel("primary")} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${level === "primary" ? "bg-white text-primary shadow-sm" : "text-slate-400"}`}>Primaria</button>
                            <button onClick={() => setLevel("middle")} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${level === "middle" ? "bg-white text-orange-500 shadow-sm" : "text-slate-400"}`}>Media</button>
                            <button onClick={() => setLevel("highschool")} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${level === "highschool" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-400"}`}>Superiori</button>
                        </div>

                        <Link href="/prezzi" className="bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-xl flex items-center gap-2 group hover:bg-amber-400/20 transition-all">
                            <span className="text-amber-500 text-sm">🪙</span>
                            <span className="text-[12px] font-black text-amber-600">{tokens} <span className="hidden sm:inline">Token</span></span>
                        </Link>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 bg-white/60 glass rounded-[2.5rem] p-6 flex flex-col gap-4 overflow-hidden shadow-2xl">
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-4">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[85%] flex flex-col gap-2 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                                    <div className={`p-5 rounded-[1.8rem] text-md font-bold shadow-sm ${msg.role === "user"
                                        ? "bg-primary text-white rounded-tr-none"
                                        : "bg-white text-slate-800 rounded-tl-none border border-slate-100"
                                        }`}>
                                        {msg.image && (
                                            <div className="mb-3 relative w-full h-40 rounded-xl overflow-hidden border-2 border-white/20">
                                                <Image src={msg.image} alt="Compito" fill className="object-cover" />
                                            </div>
                                        )}
                                        {msg.content}
                                        {msg.role === "assistant" && msg.content && (
                                            <button
                                                onClick={() => speak(msg.content)}
                                                className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-[10px] transition-all"
                                                title="Ascolta di nuovo"
                                            >
                                                🔊
                                            </button>
                                        )}
                                    </div>
                                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest px-2">
                                        {msg.role === "user" ? "Tu" : "Geniotto"} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white p-4 rounded-[1.5rem] rounded-tl-none border border-slate-100 shadow-sm flex gap-1.5">
                                    <div className="w-2 h-2 bg-primary/30 rounded-full animate-bounce" />
                                    <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                                    <div className="w-2 h-2 bg-primary/70 rounded-full animate-bounce [animation-delay:0.4s]" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="flex items-center gap-3 mt-auto">
                        <input
                            type="file"
                            className="hidden"
                            ref={fileInputRef}
                            id="file-upload"
                            accept="image/*"
                            onChange={handleFileUpload}
                            aria-label="Carica foto del compito"
                            title="Carica foto del compito"
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="w-14 h-14 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-2xl flex items-center justify-center text-2xl transition-all active:scale-95 shadow-inner shrink-0"
                            title="Carica foto compito"
                        >
                            📸
                        </button>
                        <button
                            onClick={startSpeechRecognition}
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all active:scale-95 shadow-inner shrink-0 ${isListening
                                ? "bg-red-500 text-white animate-pulse"
                                : "bg-slate-100 hover:bg-slate-200 text-slate-500"
                                }`}
                            title="Dettatura vocale"
                        >
                            {isListening ? "⏹️" : "🎙️"}
                        </button>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Scrivi la tua domanda qui..."
                                className="w-full bg-white border-2 border-slate-100 rounded-2xl py-4 pl-6 pr-20 text-md font-bold placeholder:text-slate-300 focus:outline-none focus:border-primary/30 transition-all shadow-md"
                                aria-label="Scrivi la tua domanda"
                                title="Scrivi la tua domanda"
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={isLoading || !input.trim()}
                                className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-blue-600 disabled:opacity-50 text-white px-5 rounded-xl font-black shadow-lg shadow-blue-100 hover:scale-105 active:scale-95 transition-all text-[11px] uppercase"
                            >
                                Invia 🚀
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
