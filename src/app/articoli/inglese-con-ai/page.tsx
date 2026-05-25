import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ArticleTemplate() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-24 px-6">
                <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-white/50">
                    <Link href="/articoli" className="text-primary font-black text-sm uppercase tracking-wider mb-8 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
                        ← Torna al Blog
                    </Link>
                    <div className="mb-8">
                        <span className="bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Lingue Straniere
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Imparare l&apos;Inglese con l&apos;AI: Il tuo madrelingua personale
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 7 min</p>
                    </div>
                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La barriera della conversazione</h2>
                            <p>
                                Nelle scuole italiane, lo studio dell&apos;inglese è spesso focalizzato sulla grammatica rigida. Gli studenti conoscono perfettamente i verbi irregolari e il Present Perfect, ma si bloccano totalmente quando devono sostenere una conversazione reale. Il problema principale? La mancanza di pratica e la paura di sbagliare davanti agli altri.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Superare la paura con Geniotto</h2>
                            <p>
                                L&apos;Intelligenza Artificiale non giudica. Questo semplice fatto psicologico sblocca l&apos;apprendimento. Puoi usare Geniotto per simulare conversazioni reali. Puoi chiedergli: &quot;Simuliamo che tu sia un cameriere a Londra e io un turista che deve ordinare la cena. Parla solo in inglese, fai tu la prima domanda e correggi i miei errori grammaticali in modo gentile alla fine di ogni mia risposta&quot;.
                            </p>
                            <p>
                                Questo tipo di gioco di ruolo (Roleplay) abbatte l&apos;ansia e permette al cervello di acquisire vocaboli nel contesto, piuttosto che da sterili liste su un libro di testo.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;aiuto nelle traduzioni</h2>
                            <p>
                                Dimentica Google Translate che ti fornisce la frase fatta senza spiegarti il perché. Quando non capisci una traduzione, usa l&apos;AI in modo proattivo: &quot;Devo tradurre la parola &apos;Affidabile&apos;, quali sinonimi inglesi esistono e in quali contesti si usano?&quot;. Così impari le sfumature della lingua, non solo il suo scheletro.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
