import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Preparare la Tesi con l'AI: Guida Etica | Il Mio Geniotto",
    description: "Dalla ricerca delle fonti alla strutturazione dell'indice. Come usare l'intelligenza artificiale per accelerare il lavoro senza barare.",
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
                        <span className="bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Università
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Preparare la Tesi con l&apos;Intelligenza Artificiale: Una Guida Etica e Strategica
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Maggio 2026 • Tempo di lettura: 13 min</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il timore del plagio e la realtà della ricerca</h2>
                            <p>
                                Scrivere la tesi di laurea è il traguardo di anni di sacrifici. Con l&apos;avvento dell&apos;AI generativa, molti studenti si chiedono: &quot;Posso usarla o rischio di essere accusato di plagio?&quot;. La risposta sta nel modo in cui usi lo strumento. L&apos;IA non deve scrivere la tesi al posto tuo, ma può essere il miglior assistente di ricerca che tu possa desiderare.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Brainstorming e Struttura dell&apos;Indice</h2>
                            <p>
                                Uno dei momenti più difficili è l&apos;inizio. Hai l&apos;argomento, ma non sai come articolarlo. Geniotto può aiutarti a creare una &quot;mappa dei concetti&quot;. Chiedigli: <em>&quot;Sto scrivendo una tesi sull&apos;impatto dei micro-influencer nel mercato della moda sostenibile. Quali potrebbero essere i 4 capitoli fondamentali per coprire l&apos;argomento in modo completo?&quot;</em>.
                            </p>
                            <p>
                                Questo ti fornisce una struttura logica solida su cui poi tu andrai a costruire la tua ricerca originale.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Ricerca e Sintesi delle Fonti</h2>
                            <p>
                                L&apos;IA è eccezionale nel riassumere articoli scientifici lunghi o nel trovare collegamenti tra diverse teorie. Puoi usare Geniotto per capire se un determinato paper è rilevante per la tua tesi prima di leggerlo interamente, risparmiando ore di lavoro. Ma ricorda: <strong>cita sempre le fonti originali</strong>. L&apos;IA è lo strumento di analisi, non la fonte della verità.
                            </p>
                        </section>

                        <section className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 italic">
                            &quot;L&apos;IA può aiutarti a lucidare i vetri, ma la vista deve essere la tua.&quot;
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Revisione e Stile Professionale</h2>
                            <p>
                                Una volta scritti i capitoli, puoi usare l&apos;IA per migliorare la fluidità del testo. Non per cambiare il contenuto, ma per rendere il linguaggio più accademico e corretto. Chiedi: <em>&quot;Rendi questo paragrafo più formale senza alterarne il significato originale&quot;</em>. È come avere un correttore di bozze professionista sempre al tuo fianco.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione: L&apos;etica prima di tutto</h2>
                            <p>
                                Usare l&apos;IA in modo etico significa essere trasparenti. La tesi è il tuo contributo originale al mondo accademico. Usa la tecnologia per elevare la qualità del tuo lavoro, non per sostituire il tuo impegno. Una tesi scritta con l&apos;aiuto consapevole dell&apos;AI sarà più approfondita, meglio strutturata e più professionale.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl">🎓</div>
                        <div className="text-center sm:text-left">
                            <h4 className="font-black text-slate-800">Supporto Universitario</h4>
                            <p className="text-slate-500 text-sm font-medium">Guida all&apos;eccellenza accademica digitale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
