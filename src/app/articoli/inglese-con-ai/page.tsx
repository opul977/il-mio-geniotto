import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imparare l'Inglese con l'Intelligenza Artificiale | Il Mio Geniotto",
  description: "Come allenare speaking, listening e vocabolario in inglese grazie ai modelli di linguaggio. Giochi di ruolo, correzione in tempo reale e simulazioni.",
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
                            Lingue Straniere
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Imparare l'Inglese con l'AI: Come Superare il Blocco Parlato con un Tutor Personale
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Settembre 2026 • Tempo di lettura: 8 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Migliaia di studenti italiani conoscono alla perfezione le regole dei verbi irregolari e del present perfect, ma restano completamente paralizzati quando devono pronunciare due frasi in una conversazione reale.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Perché il metodo tradizionale della sola grammatica fallisce</h2>
                            <p>
                                La didattica linguistica tradizionale si è spesso concentrata sulla memorizzazione di tabelle sintattiche ed esercizi di completamento scritti (fill-in-the-blanks). Sebbene la grammatica sia un'impalcatura indispensabile, l'acquisizione naturale di una lingua avviene attraverso il cosiddetto <em>input comprensibile</em> e la produzione attiva in contesti comunicativi significativi (teoria di Stephen Krashen).
                            </p>
                            <p>
                                La paura di sbagliare pronuncia davanti ai compagni di classe o all'insegnante crea quello che i linguisti chiamano <em>filtro affettivo</em>: un blocco emotivo inconscio che impedisce al cervello di esprimersi fluidamente.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il vantaggio unico di un interlocutore artificiale</h2>
                            <p>
                                L'uso di assistenti linguistici e modelli vocali intelligenti rivoluziona l'apprendimento per tre motivi decisivi:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Zero ansia da giudizio:</strong> Un'AI non alza gli occhi al cielo se ripeti lo stesso errore dieci volte, non ti mette fretta e ha una pazienza infinita. Questo azzera il filtro affettivo.</li>
                                <li><strong>Role play e situazioni realistiche:</strong> Puoi chiedere al sistema di simulare di essere un cameriere a Londra, un receptionist a New York o un intervistatore per una borsa di studio universitaria.</li>
                                <li><strong>Feedback fonetico e grammaticale immediato:</strong> Ricevi spiegazioni gentili e alternative idiomatiche più naturali rispetto alla traduzione letterale dall'italiano.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Piano di allenamento quotidiano di 15 minuti</h2>
                            <p>
                                Non servono ore interminabili sui libri: bastano 15 minuti di pratica costante al giorno:
                            </p>
                            <p>
                                1. <strong>Minuti 1-5 (Shadowing):</strong> Ascolta un breve audio madrelingua e ripeti ad alta voce imitando fedelmente intonazione e ritmo.
2. <strong>Minuti 6-12 (Conversazione libera):</strong> Chatta o parla al microfono con il tuo assistente virtuale raccontando cosa hai fatto durante la giornata in inglese.
3. <strong>Minuti 13-15 (Revisione vocaboli):</strong> Salva 3 nuove espressioni utili incontrate durante la conversazione e usale in nuove frasi personali.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Una lingua straniera non è un insieme di regole da imparare a memoria, ma uno strumento vivo per comunicare con il resto del pianeta. Sfruttare le nuove tecnologie per fare conversazione quotidiana è la via più rapida ed economica per trasformare un inglese scolastico e titubante in una competenza fluida e spendibile nel mondo reale.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Krashen, S. (1982). <em>Principles and Practice in Second Language Acquisition</em>. Pergamon Press.</li>
                                <li>• Ellis, R. (2008). <em>The Study of Second Language Acquisition</em>. Oxford University Press.</li>
                                <li>• Council of Europe (2020). <em>Common European Framework of Reference for Languages: Learning, teaching, assessment – Companion volume</em>.</li>
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
