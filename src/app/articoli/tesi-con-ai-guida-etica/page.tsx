import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preparare la Tesi con l'Intelligenza Artificiale: Guida Etica | Il Mio Geniotto",
  description: "Come usare gli strumenti di intelligenza artificiale per scrivere la tesi senza violare l'etica accademica. Brainstorming, revisione bibliografica e prompt efficaci.",
};

export default function ArticlePage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-24 px-6">
                <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-white/50">
                    <Link href="/articoli" className="text-primary font-black text-sm uppercase tracking-wider mb-8 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
                        ← Torna al Blog
                    </Link>

                    <div className="mb-8">
                        <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Università
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Preparare la Tesi di Laurea con l'AI: Guida Etica e Metodologica per Universitari
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Ottobre 2026 • Tempo di lettura: 9 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Scrivere una tesi di laurea o un elaborato finale è uno dei compiti più impegnativi dell'intero percorso universitario. L'avvento dei modelli di intelligenza artificiale ha acceso un dibattito acceso negli atenei: dove finisce l'assistenza metodologica lecita e dove inizia il plagio?
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La linea rossa tra assistenza lecita e frode accademica</h2>
                            <p>
                                Diciamolo con la massima chiarezza: chiedere a un'AI di generare interi capitoli della tesi da copiare e incollare è una grave violazione dell'etica accademica e può comportare l'annullamento della prova di laurea e sanzioni disciplinari severe. Inoltre, i modelli linguistici tendono a produrre allucinazioni citazionali, inventando autori e volumi inesistenti.
                            </p>
                            <p>
                                Al contrario, utilizzare gli strumenti di intelligenza artificiale come assistenti di ricerca per il brainstorming iniziale, per ristrutturare l'indice analitico o per perfezionare la sintassi di bozze già scritte dall'autore è un utilizzo virtuoso, moderno e ampiamente riconosciuto dalle migliori università internazionali.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I 4 utilizzi etici e virtuosi dell'AI per la tesi</h2>
                            <p>
                                Ecco le modalità operative raccomandate dai regolamenti universitari più avanzati:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Brainstorming e affinamento dell'Indice:</strong> Sottoponi al sistema il tuo quesito di ricerca e chiedi: 'Quali aspetti metodologici sto trascurando? Quali contro-argomentazioni dovrei prevedere nel capitolo secondo?'.</li>
                                <li><strong>Ricerca di articoli scientifici e letteratura accademica:</strong> Utilizza motori specializzati (come Semantic Scholar, Perplexity o Consensus) che citano papers reali con DOI verificabili, invece di chatbot generici.</li>
                                <li><strong>Revisione stilistica e correzione bozze:</strong> Incolla i paragrafi scritti da te e chiedi: 'Rendi il tono più accademico, segnala le ripetizioni e correggi eventuali refusi ortografici senza alterare il significato'.</li>
                                <li><strong>Dichiarazione di trasparenza (AI Disclosure):</strong> Inserisci sempre nella premessa o nei ringraziamenti una breve nota trasparente che spieghi quali strumenti di supporto linguistico o computazionale hai utilizzato.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La verifica delle fonti e il primato dell'autorevolezza</h2>
                            <p>
                                Ogni singola affermazione presente nella tua tesi deve essere supportata da un testo, un esperimento o un documento primario che tu stesso hai letto e verificato personalmente. La responsabilità intellettuale di ogni riga rimane al 100% tua, non del software. È questa responsabilità critica a fare di te un vero laureato e un ricercatore autonomo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                L'intelligenza artificiale non rende superflua la fatica intellettuale della tesi, ma ne cambia la natura: elimina i colli di bottiglia meccanici e ti consente di dedicare la parte migliore del tuo tempo alla riflessione critica, all'originalità interpretativa e alla qualità delle tue conclusioni scientifiche.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• CRUI (Conferenza dei Rettori delle Università Italiane) (2024). <em>Linee guida per l'utilizzo responsabile dell'intelligenza artificiale generativa nella didattica e ricerca universitaria</em>.</li>
                                <li>• Eco, U. (1977). <em>Come si fa una tesi di laurea</em>. Bompiani.</li>
                                <li>• COPE (Committee on Publication Ethics) (2023). <em>Authorship and AI tools: Position statement</em>.</li>
                            </ul>
                        </section>
                    </div>

                    {/* Firma Autore */}
                    <div className="mt-12 pt-8 border-t border-slate-100 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                            👨‍🏫
                        </div>
                        <div>
                            <p className="font-black text-slate-800 text-sm">Marco Gennari</p>
                            <p className="text-xs text-slate-500 font-medium mt-1">Educatore digitale e fondatore di Il Mio Geniotto. Con oltre 10 anni di esperienza nell&apos;educazione italiana e nella tecnologia applicata all&apos;apprendimento, Marco si dedica a rendere lo studio accessibile a tutti gli studenti italiani.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
