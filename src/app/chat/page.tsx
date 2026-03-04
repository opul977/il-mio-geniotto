```javascript
"use client";

import { useState, useRef, useEffect } from "react";
// Link rimosso perché inutilizzato per ora
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useSession } from "next-auth/react";

type Message = {
    role: "user" | "assistant";
    content: string;
    image?: string;
};

// Extend Window interface for SpeechRecognition
declare global {
    interface Window {
        SpeechRecognition: typeof SpeechRecognition;
        webkitSpeechRecognition: typeof SpeechRecognition;
    }
}

export default function ChatPage() {
    const { data: session } = useSession();
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Ciao! Io sono Geniotto, il tuo amico speciale! 🚀 Quale compito facciamo insieme oggi? Puoi anche caricarmi una foto dei tuoi esercizi!" }
    ]);
    const [input, setInput] = useState("");
    const [level, setLevel] = useState<"primary" | "middle" | "highschool">("primary");
    const [tokens, setTokens] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isAudioEnabled, setIsAudioEnabled] = useState(false); // Default SPENTO come richiesto
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Caricamento cronologia se loggato
    useEffect(() => {
        if (session?.user) {
            fetch("/api/chat/history")
                .then(res => res.json())
                .then(data => {
                    if (data.messages && data.messages.length > 0) {
                        setMessages([
                            { role: "assistant", content: "Ciao! Bentornato! Ecco i nostri ultimi compiti insieme: 👇" },
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            ...data.messages.map((m: { role: "user" | "assistant"; content: string; image_url?: string }) => ({
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

    // Effetto per caricare le voci (alcuni browser le caricano pigramente)
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
    if (!isAudioEnabled) return; // Only speak if audio is enabled

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
    const SpeechRecognition =
        (typeof window !== 'undefined' && (
            window.SpeechRecognition ||
            window.webkitSpeechRecognition
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

const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
};

useEffect(() => {
    scrollToBottom();
    if (messages.length > 1 && messages[messages.length - 1].role === "assistant" && isAudioEnabled) {
        speak(messages[messages.length - 1].content, true);
    }
}, [messages, isAudioEnabled]);

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

    if (tokens <= 0 && !session) {
        alert("Accedi per continuare a usare Geniotto senza limiti! 🚀");
        return;
    }

    const userMessage: Message = { role: "user", content: messageText, image: imageFile };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: messageText,
                image: imageFile,
                level: level,
            })
        });

        if (!response.ok) throw new Error("Errore del server");

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

        if (!session) {
            setTokens(prev => prev - 1);
        }
    } catch (error) {
        console.error("Chat Error:", error);
        setMessages(prev => [...prev, {
            role: "assistant",
            content: "Geniotto ha avuto un piccolo intoppo... Riprova tra un attimo! 🤖"
        }]);
    } finally {
        setIsLoading(false);
    }
};

return (
    <main className="min-h-screen mesh-gradient-light flex flex-col">
        <Navbar />

        <div className="flex-1 max-w-5xl mx-auto w-full pt-32 pb-6 px-6 flex flex-col gap-4 h-[calc(100vh-2rem)] overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white/40 glass p-4 rounded-[2rem] gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-primary p-2 rounded-xl shadow-lg">
                        <svg width="32" height="32" viewBox="0 0 100 80" fill="none">
                            <rect x="10" y="10" width="80" height="60" rx="20" fill="white" />
                            <rect x="25" y="25" width="50" height="30" rx="10" fill="#1e293b" />
                            <circle cx="40" cy="40" r="4" fill="#60a5fa" />
                            <circle cx="60" cy="40" r="4" fill="#60a5fa" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-black text-slate-800">Geniotto AI</h2>
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

                    {!session && (
                        <div className="bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-xl flex items-center gap-2">
                            <span className="text-[10px] font-black text-amber-600">{tokens} PROVE RIMASTE</span>
                        </div>
                    )}

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

            <div className="flex-1 bg-white/60 glass rounded-[2.5rem] p-6 flex flex-col gap-4 overflow-hidden shadow-2xl relative">
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
                                    {msg.content}
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
                                    {msg.role === "user" ? "Tu" : "Geniotto"}
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
                            className="w-full bg-white border-2 border-slate-50 rounded-2xl py-4 pl-6 pr-20 text-md font-bold placeholder:text-slate-300 focus:outline-none focus:border-primary/20 transition-all shadow-md"
                        />
                        <button
                            onClick={() => handleSend()}
                            disabled={isLoading || !input.trim()}
                            className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-blue-600 disabled:opacity-50 text-white px-5 rounded-xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all text-[11px] uppercase"
                        >
                            INVIA 🚀
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
);
}
