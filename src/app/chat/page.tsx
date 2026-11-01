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
    images?: string[];
};

type Conversation = {
    id: string;
    title: string;
    messages: Message[];
    lastActivity: string;
};

const DEFAULT_WELCOME: Message = {
    role: "assistant",
    content: "Ciao! Sono Geniotto. Come posso aiutarti oggi?"
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
    const [messages, setMessages] = useState<Message[]>([DEFAULT_WELCOME]);
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [activeConversationId, setActiveConversationId] = useState<string>("");
    const [input, setInput] = useState("");
    const [level, setLevel] = useState<"primary" | "middle" | "highschool">("primary");
    const [tokens, setTokens] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isAudioEnabled, setIsAudioEnabled] = useState(false);
    const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [showTokenInfo, setShowTokenInfo] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Salva le conversazioni in localStorage
    const saveToLocalStorage = (convList: Conversation[]) => {
        try {
            if (typeof window !== "undefined") {
                localStorage.setItem("geniotto_conversations_v2", JSON.stringify(convList));
            }
        } catch (e) {
            console.error("Errore salvataggio localStorage:", e);
        }
    };

    // Aggiorna o crea la conversazione corrente sia in stato che su disco
    const updateCurrentConversation = (newMessages: Message[], convId: string) => {
        setConversations(prev => {
            const firstUser = newMessages.find(m => m.role === 'user');
            const newTitle = firstUser 
                ? (firstUser.content.length > 32 ? firstUser.content.substring(0, 32) + "..." : firstUser.content) 
                : "Nuova chat";

            let found = false;
            const updated = prev.map(c => {
                if (c.id === convId) {
                    found = true;
                    return {
                        ...c,
                        title: c.title === "Nuova chat" ? newTitle : c.title,
                        messages: newMessages,
                        lastActivity: new Date().toISOString()
                    };
                }
                return c;
            });

            if (!found) {
                updated.unshift({
                    id: convId,
                    title: newTitle,
                    messages: newMessages,
                    lastActivity: new Date().toISOString()
                });
            }

            // Ordina dalla più recente alla meno recente
            updated.sort((a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime());
            saveToLocalStorage(updated);
            return updated;
        });
    };

    // Inizializzazione: carica gettoni, localStorage e poi sincronizza con il server
    useEffect(() => {
        // 1. Gettoni
        fetch('/api/tokens/check')
            .then(res => res.json())
            .then(data => { if (data.tokens !== undefined) setTokens(data.tokens); })
            .catch(err => console.error("Error fetching tokens:", err));

        // 2. Carica da localStorage (immediato e sempre persistente)
        let localConvs: Conversation[] = [];
        try {
            const stored = localStorage.getItem("geniotto_conversations_v2");
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    localConvs = parsed;
                }
            }
        } catch (e) {
            console.error("Errore lettura cache locale:", e);
        }

        if (localConvs.length > 0) {
            setConversations(localConvs);
            const active = localConvs[0];
            setActiveConversationId(active.id);
            setMessages(active.messages);
        } else {
            const initialId = `conv-${Date.now()}`;
            const initialConv: Conversation = {
                id: initialId,
                title: "Nuova chat",
                messages: [DEFAULT_WELCOME],
                lastActivity: new Date().toISOString()
            };
            setConversations([initialConv]);
            setActiveConversationId(initialId);
            setMessages([DEFAULT_WELCOME]);
            saveToLocalStorage([initialConv]);
        }

        // 3. Prova a sincronizzare la cronologia server (se disponibile)
        fetch("/api/chat/history")
            .then(res => res.json())
            .then(data => {
                if (data.messages && data.messages.length > 0) {
                    setConversations(prev => {
                        const hasUser = prev.some(c => c.messages.some(m => m.role === 'user'));
                        if (!hasUser) {
                            // Importa cronologia remota
                            const remoteMsgs: Message[] = [
                                {
                                    role: "assistant",
                                    content: data.source === 'account'
                                        ? "Bentornato! Ecco le nostre ultime conversazioni:"
                                        : "Bentornato! Ho ritrovato la tua cronologia 🔍"
                                },
                                ...data.messages.map((m: { role: string; content: string; image_url?: string }) => {
                                    let imgList: string[] | undefined = undefined;
                                    if (m.image_url) {
                                        try {
                                            const parsed = JSON.parse(m.image_url);
                                            if (Array.isArray(parsed)) imgList = parsed;
                                        } catch {
                                            imgList = [m.image_url];
                                        }
                                    }
                                    return {
                                        role: m.role as "user" | "assistant",
                                        content: m.content,
                                        image: imgList?.[0] || m.image_url,
                                        images: imgList
                                    };
                                })
                            ];

                            const firstUser = data.messages.find((m: { role: string }) => m.role === 'user');
                            const remoteTitle = firstUser 
                                ? (firstUser.content.length > 30 ? firstUser.content.substring(0, 30) + "..." : firstUser.content) 
                                : "Chat precedente";

                            const remoteConv: Conversation = {
                                id: `remote-${Date.now()}`,
                                title: remoteTitle,
                                messages: remoteMsgs,
                                lastActivity: new Date().toISOString()
                            };

                            const merged = [remoteConv];
                            saveToLocalStorage(merged);
                            setActiveConversationId(remoteConv.id);
                            setMessages(remoteMsgs);
                            return merged;
                        }
                        return prev;
                    });
                }
            })
            .catch(err => console.warn("Cronologia remota non disponibile:", err));
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
        const files = e.target.files;
        if (files && files.length > 0) {
            const newImages: string[] = [];
            let filesRead = 0;
            const totalFiles = files.length;

            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (reader.result) {
                        newImages.push(reader.result as string);
                    }
                    filesRead++;
                    if (filesRead === totalFiles) {
                        setSelectedImages(prev => [...prev, ...newImages]);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const removeImage = (indexToRemove: number) => {
        setSelectedImages(prev => prev.filter((_, idx) => idx !== indexToRemove));
    };

    // Crea una nuova chat
    const handleNewChat = () => {
        const newId = `conv-${Date.now()}`;
        const newConv: Conversation = {
            id: newId,
            title: "Nuova chat",
            messages: [DEFAULT_WELCOME],
            lastActivity: new Date().toISOString()
        };

        setConversations(prev => {
            // Rimuovi eventuali chat vuote precedenti
            const cleaned = prev.filter(c => c.messages.some(m => m.role === 'user'));
            const updated = [newConv, ...cleaned];
            saveToLocalStorage(updated);
            return updated;
        });

        setActiveConversationId(newId);
        setMessages([DEFAULT_WELCOME]);
        setInput("");
        setSelectedImages([]);
        setIsSidebarOpen(false);
    };

    // Seleziona una conversazione dalla sidebar
    const handleSelectConversation = (convId: string) => {
        const target = conversations.find(c => c.id === convId);
        if (target) {
            setActiveConversationId(target.id);
            setMessages(target.messages);
            setIsSidebarOpen(false);
        }
    };

    // Elimina una conversazione
    const handleDeleteConversation = (convId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (!confirm("Sei sicuro di voler eliminare questa chat?")) return;

        setConversations(prev => {
            const filtered = prev.filter(c => c.id !== convId);
            saveToLocalStorage(filtered);

            if (activeConversationId === convId) {
                if (filtered.length > 0) {
                    setActiveConversationId(filtered[0].id);
                    setMessages(filtered[0].messages);
                } else {
                    const freshId = `conv-${Date.now()}`;
                    const freshConv: Conversation = {
                        id: freshId,
                        title: "Nuova chat",
                        messages: [DEFAULT_WELCOME],
                        lastActivity: new Date().toISOString()
                    };
                    saveToLocalStorage([freshConv]);
                    setActiveConversationId(freshId);
                    setMessages([DEFAULT_WELCOME]);
                    return [freshConv];
                }
            }
            return filtered;
        });
    };

    // Svuota l'intera cronologia
    const handleClearAllConversations = () => {
        if (!confirm("Sei sicuro di voler cancellare tutta la cronologia delle chat?")) return;
        const freshId = `conv-${Date.now()}`;
        const freshConv: Conversation = {
            id: freshId,
            title: "Nuova chat",
            messages: [DEFAULT_WELCOME],
            lastActivity: new Date().toISOString()
        };
        saveToLocalStorage([freshConv]);
        setConversations([freshConv]);
        setActiveConversationId(freshId);
        setMessages([DEFAULT_WELCOME]);
    };

    const handleSend = async (customText?: string, customImages?: string[], customLevel?: "primary" | "middle" | "highschool") => {
        const messageText = customText || input;
        const imagesToSend = customImages || selectedImages;
        if ((!messageText.trim() && imagesToSend.length === 0) || isLoading) return;

        if (tokens <= 0) {
            if (!session) setIsAuthModalOpen(true);
            else setIsRewardModalOpen(true);
            return;
        }

        const activeId = activeConversationId || `conv-${Date.now()}`;
        if (!activeConversationId) setActiveConversationId(activeId);

        const userMessage: Message = { 
            role: "user", 
            content: messageText || (imagesToSend.length > 1 ? "Analizza queste foto" : "Analizza questa foto"), 
            image: imagesToSend[0] || undefined,
            images: imagesToSend.length > 0 ? imagesToSend : undefined
        };

        const newMessagesWithUser = [...messages, userMessage];
        setMessages(newMessagesWithUser);
        updateCurrentConversation(newMessagesWithUser, activeId);
        setInput("");
        setSelectedImages([]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: messageText || (imagesToSend.length > 1 ? "Analizza queste foto" : "Analizza questa foto"),
                    images: imagesToSend,
                    image: imagesToSend[0] || null,
                    level: customLevel || level,
                    history: messages.slice(-10).map(m => ({ role: m.role, content: m.content })),
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
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

            let assistantMessage = "";
            let latestMessages = [...newMessagesWithUser, { role: "assistant" as const, content: "" }];
            setMessages(latestMessages);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                assistantMessage += decoder.decode(value, { stream: true });
                latestMessages = [...newMessagesWithUser, { role: "assistant" as const, content: assistantMessage }];
                setMessages(latestMessages);
            }

            // Salva la chat finale aggiornata
            updateCurrentConversation(latestMessages, activeId);
            setTokens(prev => Math.max(0, prev - 1));

            if (isAudioEnabled && assistantMessage) {
                speak(assistantMessage);
            }
        } catch (error: unknown) {
            const err = error as Error;
            console.error("Chat Error:", err);
            if (err.message !== "Token esauriti") {
                const errorMsg: Message = {
                    role: "assistant",
                    content: err.message === "Unauthorized"
                        ? "Ehi! Per parlare con me devi prima fare l'accesso! 🐺"
                        : "Geniotto ha avuto un piccolo intoppo... Riprova tra un attimo! 🤖"
                };
                const withError = [...newMessagesWithUser, errorMsg];
                setMessages(withError);
                updateCurrentConversation(withError, activeId);
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

    const userConversationsCount = conversations.filter(c => c.messages.some(m => m.role === 'user')).length;

    return (
        <main className="h-screen bg-[#f9fafb] flex overflow-hidden font-sans">
            {/* Sidebar con Cronologia Persistente */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 transition-transform duration-300 ease-in-out md:relative md:translate-x-0
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                {/* Nuova Chat */}
                <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-2">
                    <button 
                        onClick={handleNewChat}
                        className="flex-1 flex items-center justify-center gap-2.5 bg-blue-50/80 hover:bg-blue-100/90 border border-blue-200/80 p-3.5 rounded-2xl transition-all group shadow-sm active:scale-95"
                    >
                        <span className="text-lg group-hover:scale-110 transition-transform">➕</span>
                        <span className="font-black text-xs uppercase tracking-wider text-primary">Nuova Chat</span>
                    </button>
                    <button 
                        onClick={() => setIsSidebarOpen(false)} 
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 font-bold"
                    >
                        ✕
                    </button>
                </div>

                {/* Lista Chat Salvate */}
                <div className="flex-1 overflow-y-auto px-3 py-4 space-y-4 custom-scrollbar">
                    <div className="flex items-center justify-between px-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block">
                            Le tue Chat ({userConversationsCount})
                        </span>
                        {userConversationsCount > 1 && (
                            <button 
                                onClick={handleClearAllConversations}
                                className="text-[10px] text-slate-400 hover:text-red-500 font-bold transition-colors"
                                title="Elimina tutte le chat"
                            >
                                Svuota
                            </button>
                        )}
                    </div>

                    <div className="space-y-1.5">
                        {conversations.map((conv) => {
                            const isActive = conv.id === activeConversationId;
                            const userMsgCount = conv.messages.filter(m => m.role === 'user').length;
                            return (
                                <div
                                    key={conv.id}
                                    onClick={() => handleSelectConversation(conv.id)}
                                    className={`group w-full flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all border ${
                                        isActive
                                            ? "bg-blue-50/90 border-blue-200 text-primary shadow-sm"
                                            : "hover:bg-slate-50 border-transparent text-slate-600"
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                        <span className="text-base shrink-0">{isActive ? "💡" : "💬"}</span>
                                        <div className="flex flex-col min-w-0">
                                            <span className={`text-xs truncate font-bold ${isActive ? "text-primary" : "text-slate-800"}`}>
                                                {conv.title || "Nuova chat"}
                                            </span>
                                            <span className="text-[9px] text-slate-400 font-medium">
                                                {userMsgCount > 0 ? `${userMsgCount} messaggi` : "Inizia qui"}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => handleDeleteConversation(conv.id, e)}
                                        className="opacity-0 group-hover:opacity-100 hover:text-red-500 p-1.5 rounded-lg hover:bg-white text-slate-400 transition-all text-xs shrink-0 ml-1"
                                        title="Elimina chat"
                                    >
                                        ✕
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Profilo & Gettoni */}
                <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-xs text-white font-black shadow-sm shrink-0">
                            {session?.user?.name?.[0] || "👤"}
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                            <span className="text-[11px] font-black text-slate-800 truncate uppercase tracking-tight">
                                {session?.user?.name?.split(' ')[0] || "Ospite"}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 truncate tracking-tight">
                                {tokens} Gettoni rimasti
                            </span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay mobile */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Chat Area */}
            <div className="flex-1 flex flex-col relative h-full bg-white md:bg-[#f9fafb]">
                <header className="absolute top-0 left-0 right-0 z-30 p-4 md:p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => setIsSidebarOpen(true)}
                            className="md:hidden w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center text-xl"
                            title="Apri cronologia"
                        >
                            📜
                        </button>
                        <Navbar />
                    </div>
                    
                    {/* Badge Livello Scolastico */}
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
                                        {/* Supporto Immagini */}
                                        {msg.images && msg.images.length > 0 ? (
                                            <div className={`mb-4 grid gap-2 ${msg.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                                {msg.images.map((img, idx) => (
                                                    <div key={idx} className="relative w-full h-48 rounded-xl overflow-hidden border-2 border-white/20 shadow-md">
                                                        <Image src={img} alt={`Compito ${idx + 1}`} fill className="object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : msg.image ? (
                                            <div className="mb-4 relative w-full h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-md">
                                                <Image src={msg.image} alt="Compito" fill className="object-cover" />
                                            </div>
                                        ) : null}
                                        
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

                {/* Barra Input con Anteprima Foto Multiple */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent">
                    <div className="max-w-3xl mx-auto flex flex-col gap-3">
                        
                        {selectedImages.length > 0 && (
                            <div className="mx-4 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                {selectedImages.map((img, idx) => (
                                    <div key={idx} className="relative w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-2xl group">
                                        <Image src={img} alt={`Preview ${idx + 1}`} fill className="object-cover" />
                                        <button onClick={() => removeImage(idx)} className="absolute inset-0 bg-red-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-black text-xs">ELIMINA</button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-2xl group-focus-within:bg-primary/20 transition-all opacity-50" />
                            <div className="relative flex items-center bg-white border-2 border-slate-100 rounded-[2.5rem] p-2 shadow-2xl focus-within:border-primary/30 transition-all">
                                <input type="file" multiple className="hidden" ref={fileInputRef} accept="image/*" onChange={handleFileUpload} />
                                
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
                                    disabled={isLoading || (!input.trim() && selectedImages.length === 0)}
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
