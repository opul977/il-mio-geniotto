import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Dati mockati per le landing pages delle materie. In futuro possono arrivare dal database.
const subjectsData = {
    "matematica": {
        title: "Studiare Matematica con l'Intelligenza Artificiale",
        description: "Scopri come Geniotto può aiutarti a comprendere i passaggi logici delle espressioni, della geometria e dell'algebra senza darti solo il freddo risultato finale.",
        icon: "🔢",
        color: "blue",
        image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80",
        benefits: ["Spiegazioni passo-passo", "Esempi presi dalla vita reale", "Correzione degli errori senza giudizio"]
    },
    "storia": {
        title: "Studiare Storia come un'avventura epica",
        description: "Basta date mnemoniche e testi noiosi. Fatti raccontare l'Impero Romano o la Rivoluzione Francese come se fosse la trama del miglior film esistente.",
        icon: "🏛️",
        color: "amber",
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&q=80",
        benefits: ["Riassunti per mappe concettuali", "Interrogazioni simulate", "Contestualizzazione degli eventi"]
    },
    "italiano": {
        title: "Grammatica e Letteratura senza segreti",
        description: "Dal riconoscimento dei verbi transitivi all'analisi del Decameron. Geniotto ti aiuta a strutturare temi e perfezionare la lingua italiana.",
        icon: "📚",
        color: "emerald",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=800&q=80",
        benefits: ["Creazione scalette per i temi", "Analisi logica e grammaticale", "Spiegazione poesie complesse"]
    }
};

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    // @ts-expect-error - index signature
    const subject = subjectsData[resolvedParams.slug];

    if (!subject) {
        notFound();
    }

    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            
            <div className="flex-1 max-w-5xl mx-auto w-full pt-32 pb-24 px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <Link href="/" className="text-primary font-black text-sm uppercase tracking-wider mb-8 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
                        ← Torna alla Home
                    </Link>
                    
                    <h1 className="text-5xl sm:text-6xl font-black text-slate-800 tracking-tight leading-tight mb-6">
                        {subject.icon} <br/> 
                        {subject.title}
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                        {subject.description}
                    </p>

                    <div className="space-y-4 mb-10">
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Come Geniotto ti aiuta:</h3>
                        {subject.benefits.map((benefit: string, index: number) => (
                             <div key={index} className="flex items-center gap-3">
                                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                                 <span className="text-slate-600 font-bold">{benefit}</span>
                             </div>
                        ))}
                    </div>

                    <a href="/chat" className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all inline-block">
                        INIZIA A STUDIARE ORA 🚀
                    </a>
                </div>

                <div className="flex-1 w-full">
                    <div className="relative h-96 w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50">
                         <Image 
                            src={subject.image} 
                            alt={subject.title} 
                            fill 
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export function generateStaticParams() {
    return Object.keys(subjectsData).map((slug) => ({
        slug: slug,
    }));
}
