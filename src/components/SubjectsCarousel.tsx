"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Subject {
    id: string;
    icon?: string;
    image?: string;
    title: string;
    description: string;
    color: string;
    extraText: string;
}

const primarySubjects: Subject[] = [
    {
        id: "math",
        icon: "🧮",
        title: "Matematica",
        description: "Risoluzioni spiegate passo passo per non sbagliare più.",
        color: "bg-blue-100 text-blue-600",
        extraText: "Risolviamo ogni problema insieme! 🔢",
    },
    {
        id: "history",
        icon: "🌍",
        title: "Storia e Geografia",
        description: "Riassunti e mappe per ricordare date e luoghi.",
        color: "bg-amber-100 text-amber-600",
        extraText: "Esploriamo il mondo e il passato! 🌍",
    },
    {
        id: "science",
        icon: "🧪",
        title: "Scienze",
        description: "Esperimenti e concetti spiegati in modo semplice.",
        color: "bg-emerald-100 text-emerald-600",
        extraText: "Scopriamo i segreti della natura! 🧪",
    },
    {
        id: "languages",
        image: "/images/flags.png",
        title: "Lingue",
        description: "Grammatica e vocaboli per parlare come un vero pro.",
        color: "bg-rose-100 text-rose-600",
        extraText: "Impariamo a parlare come veri pro! 🇬🇧🇫🇷",
    },
    {
        id: "tech",
        icon: "⌨️",
        title: "Tecnologia",
        description: "Scopriamo come funzionano i computer e internet.",
        color: "bg-slate-100 text-slate-600",
        extraText: "Siamo nel futuro! ⌨️",
    },
    {
        id: "civics",
        icon: "🤝",
        title: "Ed. Civica",
        description: "Impariamo a essere bravi cittadini del mondo.",
        color: "bg-green-100 text-green-600",
        extraText: "Insieme per un mondo migliore! 🤝",
    },
    {
        id: "literature",
        icon: "📚",
        title: "Italiano",
        description: "Grammatica, temi e letteratura senza segreti.",
        color: "bg-indigo-100 text-indigo-600",
        extraText: "Amo leggere e scrivere! 📚",
    },
    {
        id: "art",
        icon: "🎨",
        title: "Arte",
        description: "Scopri i grandi artisti e libera la tua creatività.",
        color: "bg-pink-100 text-pink-600",
        extraText: "Diamo colore alla realtà! 🎨",
    },
    {
        id: "music",
        icon: "🎵",
        title: "Musica",
        description: "Spartiti, ritmi e stili musicali da tutto il mondo.",
        color: "bg-purple-100 text-purple-600",
        extraText: "Senti questo ritmo? 🎵",
    },
    {
        id: "coding",
        icon: "💻",
        title: "Coding",
        description: "Impara a programmare e crea i tuoi videogiochi.",
        color: "bg-cyan-100 text-cyan-600",
        extraText: "Costruiamo qualcosa di epico! 💻",
    },
];

const middleSubjects: Subject[] = [
    {
        id: "literature-mid",
        icon: "📚",
        title: "Letteratura",
        description: "Analisi dei testi e dei grandi autori della storia.",
        color: "bg-indigo-100 text-indigo-600",
        extraText: "Analizziamo i classici insieme! 📚",
    },
    {
        id: "algebra",
        icon: "📐",
        title: "Algebra",
        description: "Equazioni, polinomi e calcoli complessi semplificati.",
        color: "bg-blue-100 text-blue-600",
        extraText: "Risolviamo ogni incognita! 📐",
    },
    {
        id: "geometry",
        icon: "📏",
        title: "Geometria",
        description: "Teoremi e figure piane e solide senza più misteri.",
        color: "bg-cyan-100 text-cyan-600",
        extraText: "Lo spazio non ha segreti! 📏",
    },
    {
        id: "history-mid",
        icon: "🏛️",
        title: "Storia",
        description: "Dal Medioevo all'età moderna: studia il passato per capire il presente.",
        color: "bg-amber-100 text-amber-600",
        extraText: "Viaggio nelle epoche storiche! 🏛️",
    },
    {
        id: "science-mid",
        icon: "🧬",
        title: "Scienze",
        description: "Biologia, Chimica e Fisica spiegate in modo brillante.",
        color: "bg-emerald-100 text-emerald-600",
        extraText: "Esploriamo la vita e la materia! 🧬",
    },
    {
        id: "languages-mid",
        image: "/images/flags.png",
        title: "Lingue Straniere",
        description: "Inglese, Spagnolo e Francese: diventa cittadino del mondo.",
        color: "bg-rose-100 text-rose-600",
        extraText: "Talk to the world! 🌍",
    },
    {
        id: "tech-mid",
        icon: "⚙️",
        title: "Tecnologia",
        description: "Disegno tecnico, energia e innovazione digitale.",
        color: "bg-slate-100 text-slate-600",
        extraText: "Progettiamo il domani! ⚙️",
    },
    {
        id: "art-mid",
        icon: "🖼️",
        title: "Arte",
        description: "Storia dell'arte e tecniche espressive avanzate.",
        color: "bg-pink-100 text-pink-600",
        extraText: "Evoluzione artistica! 🖼️",
    },
    {
        id: "music-mid",
        icon: "🎼",
        title: "Musica",
        description: "Teoria musicale, strumenti e grandi compositori.",
        color: "bg-purple-100 text-purple-600",
        extraText: "Armonia e ritmo! 🎼",
    },
    {
        id: "sports",
        icon: "🏀",
        title: "Ed. Fisica",
        description: "Salute, sport e coordinazione: muoviamoci insieme.",
        color: "bg-orange-100 text-orange-600",
        extraText: "Mente sana in corpo sano! 🏀",
    },
];

const highSchoolSubjects: Subject[] = [
    {
        id: "philosophy",
        icon: "⚖️",
        title: "Filosofia",
        description: "Dai presocratici all'esistenzialismo: i grandi pensieri della storia.",
        color: "bg-purple-100 text-purple-600",
        extraText: "Penso, dunque sono (con te)! ⚖️",
    },
    {
        id: "physics",
        icon: "⚛️",
        title: "Fisica",
        description: "Meccanica, termodinamica ed elettromagnetismo spiegati chiaramente.",
        color: "bg-blue-100 text-blue-600",
        extraText: "La forza sia con noi! ⚛️",
    },
    {
        id: "math-hi",
        icon: "📈",
        title: "Analisi",
        description: "Limiti, derivate e integrali: la matematica del cambiamento.",
        color: "bg-indigo-100 text-indigo-600",
        extraText: "Verso l'infinito e oltre! 📈",
    },
    {
        id: "science-hi",
        icon: "🧪",
        title: "Chimica e Bio",
        description: "Reazioni, genetica e biochimica: i mattoni della vita.",
        color: "bg-emerald-100 text-emerald-600",
        extraText: "Esperimenti geniali in arrivo! 🧪",
    },
    {
        id: "latin",
        icon: "🏛️",
        title: "Latino",
        description: "Sintassi e classici: la lingua che ha fondato il nostro mondo.",
        color: "bg-amber-100 text-amber-600",
        extraText: "Per aspera ad astra! 🏛️",
    },
    {
        id: "it-hi",
        icon: "👾",
        title: "Informatica",
        description: "Algoritmi, database e sviluppo web avanzato.",
        color: "bg-cyan-100 text-cyan-600",
        extraText: "Compiliamo il tuo successo! 👾",
    },
    {
        id: "history-hi",
        icon: "📅",
        title: "Storia Contemporanea",
        description: "Dalle guerre mondiali alla globalizzazione: capire il presente.",
        color: "bg-slate-100 text-slate-600",
        extraText: "Testimoni del tempo! 📅",
    },
    {
        id: "art-hi",
        icon: "🎨",
        title: "Storia dell'Arte",
        description: "Un viaggio visivo attraverso le epoche e i capolavori.",
        color: "bg-pink-100 text-pink-600",
        extraText: "Il bello è ovunque! 🎨",
    },
    {
        id: "civics-hi",
        icon: "🌍",
        title: "Ed. Civica",
        description: "Costituzione, sostenibilità e cittadinanza digitale.",
        color: "bg-green-100 text-green-600",
        extraText: "Cittadini del domani! 🌍",
    },
];

export default function SubjectsCarousel() {
    const [level, setLevel] = useState<"primary" | "middle" | "highschool">("primary");

    // Sync level with URL hash
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === "#primaria") setLevel("primary");
            else if (hash === "#media") setLevel("middle");
            else if (hash === "#superiori") setLevel("highschool");
        };

        handleHashChange(); // Check on mount
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const getSubjects = () => {
        switch (level) {
            case "primary": return primarySubjects;
            case "middle": return middleSubjects;
            case "highschool": return highSchoolSubjects;
        }
    };

    const subjects = getSubjects();

    return (
        <section className="py-24 bg-soft-blue/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Per ogni materia, un aiuto speciale</h2>
                    <p className="text-xl text-slate-600 font-bold mb-10">Scegli il tuo indirizzo di studio o il grado della scuola</p>

                    {/* Level Selector */}
                    <div className="inline-flex p-1.5 bg-white shadow-xl rounded-full mb-8 border border-slate-100 flex-wrap justify-center">
                        <button
                            onClick={() => setLevel("primary")}
                            className={`px-6 py-3 rounded-full font-black transition-all ${level === "primary" ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-slate-400 hover:text-primary"}`}
                        >
                            🎒 Scuola Primaria
                        </button>
                        <button
                            onClick={() => setLevel("middle")}
                            className={`px-6 py-3 rounded-full font-black transition-all ${level === "middle" ? "bg-accent text-white shadow-lg shadow-accent/30" : "text-slate-400 hover:text-accent"}`}
                        >
                            🎓 Scuola Media
                        </button>
                        <button
                            onClick={() => setLevel("highschool")}
                            className={`px-6 py-3 rounded-full font-black transition-all ${level === "highschool" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "text-slate-400 hover:text-indigo-600"}`}
                        >
                            🏛️ Scuole Superiori
                        </button>
                    </div>

                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Il tuo amico Geniotto {level === "primary" ? "è pronto ad aiutarti a studiare!" : "ti aspetta nella chat."}</p>
                </div>

                {/* Subjects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-500">
                    {subjects.map((subject) => (
                        <div key={subject.id}>
                            <FeatureCard {...subject} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, image, title, description, color, extraText }: Subject) {
    return (
        <div className="group relative">
            {/* Geniotto Waving Popup (Appears on Hover) */}
            <div className="absolute -top-20 left-10 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-30">
                <div className="relative">
                    {/* Compact Speech Bubble */}
                    <div className="absolute -top-10 left-10 bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap shadow-xl">
                        {extraText}
                        <div className="absolute -bottom-1 left-4 w-2 h-2 bg-slate-900 rotate-45" />
                    </div>

                    {/* Mini Waving Geniotto SVG */}
                    <svg width="60" height="50" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                        <rect x="10" y="10" width="80" height="60" rx="25" fill="white" stroke="#3b82f6" strokeWidth="4" />
                        <rect x="22" y="24" width="56" height="32" rx="12" fill="#1e293b" />
                        <circle cx="38" cy="40" r="4" fill="#60a5fa" className="animate-pulse" />
                        <circle cx="62" cy="40" r="4" fill="#60a5fa" className="animate-pulse" />
                        <path d="M40 52C40 52 45 57 50 57C55 57 60 52 60 52" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                        {/* Waving Hand */}
                        <g className="animate-wave" style={{ transformOrigin: '20px 70px' }}>
                            <rect x="5" y="55" width="15" height="15" rx="6" fill="white" stroke="#3b82f6" strokeWidth="3" />
                        </g>
                    </svg>
                </div>
            </div>

            {/* Main Card (Small Rectangle) */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all relative z-20 flex items-center gap-5 h-full min-h-[120px]">
                <div className={`w-14 h-14 shrink-0 ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all relative overflow-hidden`}>
                    {image ? (
                        <Image src={image} alt={title} fill className="object-cover p-2 rounded-2xl" />
                    ) : (
                        <span className="text-2xl">{icon}</span>
                    )}
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-black text-slate-800 leading-tight mb-1">{title}</h3>
                    <p className="text-slate-500 text-sm font-medium line-clamp-2">{description}</p>
                </div>

                {/* Glow hint on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all -z-10" />
            </div>
        </div>
    );
}
