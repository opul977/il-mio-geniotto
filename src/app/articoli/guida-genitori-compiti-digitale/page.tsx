import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genitori e Compiti Digitali: Guida Pratica Senza Litigi | Il Mio Geniotto",
  description: "Consigli per mamme e papà per affiancare i figli nello studio a casa. Come stimolare l'autonomia evitando conflitti pomeridiani.",
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
                            Guida Genitori
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Guida per i Genitori: Come Aiutare i Figli nei Compiti nell'Era Digitale Senza Stress
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Agosto 2026 • Tempo di lettura: 8 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Il pomeriggio dei compiti a casa è spesso il terreno di scontro più faticoso tra genitori e figli. Tra registri elettronici, materie complesse e stanchezza lavorativa, la tentazione di sostituirsi al bambino o di alzare la voce è sempre dietro l'angolo.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il ruolo del genitore: da controllore a facilitatore</h2>
                            <p>
                                Uno dei fraintendimenti più diffusi consiste nel credere che il dovere del genitore sia assicurarsi che ogni esercizio sia formalmente perfetto e senza errori. In realtà, l'errore è parte integrante del processo didattico: serve all'insegnante per capire le reali lacune dell'alunno. Se il genitore corregge tutto prima della consegna, la scuola riceve un segnale falsato.
                            </p>
                            <p>
                                Il compito del genitore non è spiegare la trigonometria o fare il disegno di educazione artistica, ma creare le condizioni ambientali ed emotive favorevoli: un tavolo ordinato, assenza di rumori molesti, orari regolari e un atteggiamento incoraggiante che valorizzi l'impegno prima del voto numerico.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I 4 pilastri per pomeriggi sereni senza litigi</h2>
                            <p>
                                Ecco un metodo testato per ridurre la tensione durante lo svolgimento dei compiti:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Stabilire una routine negoziata:</strong> Definisci un orario fisso concordato per l'inizio dei compiti dopo una meritata pausa merenda post-scuola. L'incertezza su 'quando' iniziare è la causa primaria di continue negoziazioni estenuanti.</li>
                                <li><strong>Incoraggiare la ricerca autonoma prima di chiedere aiuto:</strong> Quando tuo figlio dice 'non so farlo', non dare subito la risposta. Chiedigli: 'Cosa dice esattamente la consegna? Quale parola non ti è chiara? Dove possiamo cercare un esempio simile sul libro o su un tutor online?'.</li>
                                <li><strong>Evitare il giudizio sulla persona:</strong> Sostituisci frasi tossiche come 'Sei sempre distratto' o 'Non hai voglia di fare nulla' con feedback precisi sull'azione: 'Questa divisione non torna perché hai saltato un passaggio, riguardiamolo insieme con calma'.</li>
                                <li><strong>Valorizzare l'autonomia progressiva:</strong> Allontanati gradualmente: inizia sedendoti accanto per i primi 10 minuti di pianificazione, poi lascia che lo studente lavori da solo per blocchi di 20 minuti prima di un controllo finale rapido.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Quando l'ansia dei genitori contagia i figli</h2>
                            <p>
                                Spesso le reazioni rabbiose o ansiose degli adulti scaturiscono dalla proiezione delle proprie paure sul futuro accademico del figlio. È fondamentale ricordare che un brutto voto a scuola non è un verdetto sul valore del ragazzo, né una bocciatura delle capacità genitoriali. Mantenere la calma è la più grande dimostrazione di amorevole sicurezza che possiamo trasmettere.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                L'obiettivo finale del percorso scolastico a casa non è completare tutti gli esercizi alla perfezione, ma aiutare i nostri figli a costruire un metodo di lavoro autonomo, la capacità di tollerare le difficoltà e la consapevolezza che con costanza e gli strumenti giusti ogni ostacolo cognitivo può essere superato.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Pellai, A., & Tamborini, B. (2018). <em>L'età dello tsunami. Come sopravvivere a un figlio pre-adolescente</em>. De Agostini.</li>
                                <li>• Dweck, C. S. (2006). <em>Mindset: The New Psychology of Success</em>. Random House.</li>
                                <li>• Pomerantz, E. M., et al. (2007). The How, Whom, and Why of Parents’ Involvement in Children’s Academic Lives. <em>Child Development Perspectives</em>, 1(1), 8–15.</li>
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
