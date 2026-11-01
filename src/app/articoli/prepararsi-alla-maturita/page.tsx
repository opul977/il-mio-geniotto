import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guida Esame di Maturità: Metodo di Studio e Collegamenti | Il Mio Geniotto",
  description: "Come organizzare gli ultimi mesi prima dell'Esame di Stato. Gestione del tempo, tesine, collegamenti interdisciplinari e simulazione dell'orale.",
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
                            Esami di Stato
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Prepararsi all'Esame di Maturità Senza Andare nel Panico: Metodo e Collegamenti
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Ottobre 2026 • Tempo di lettura: 9 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            L'Esame di Stato è il primo grande rito di passaggio accademico nella vita di uno studente italiano. Tra l'ansia del credito scolastico, le prove scritte e il colloquio orale, la mole di lavoro può sembrare schiacciante se affrontata senza una strategia chiara.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Cronoprogramma a ritroso: la pianificazione dei 60 giorni</h2>
                            <p>
                                Il segreto per arrivare a giugno con serenità consiste nel non aspettare le ultime due settimane per il ripasso generale. Costruisci una tabella di marcia a ritroso dividendo il programma di ogni materia in blocchi settimanali tematici.
                            </p>
                            <p>
                                Alterna ogni giorno materie teoriche e materie pratiche (es. storia al mattino, versioni o matematica al pomeriggio). Dedica l'ultimo mese quasi esclusivamente alla simulazione delle prove scritte e all'esposizione orale a voce alta con timer alla mano.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come costruire collegamenti interdisciplinari intelligenti per l'orale</h2>
                            <p>
                                Il colloquio orale moderno non premia la ripetizione mnemonica di una singola materia, ma la capacità di tessere connessioni sensate tra discipline diverse a partire da uno spunto iniziale (un'immagine, un testo letterario, una formula, un'opera d'arte).
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Evita i collegamenti banali e forzati:</strong> I commissari hanno sentito mille volte il collegamento scontato Pirandello-Maschere-Nietzsche. Cerca percorsi più originali legati a temi storici o civici autentici.</li>
                                <li><strong>Pensa per macro-temi trasversali:</strong> Prepara 4 o 5 grandi assi tematici: Il concetto di limite e infinito (matematica, Leopardi, fisica relativistica), La crisi delle certezze d'inizio '900 (Svevo, prima guerra mondiale, cubismo), Natura e tecnologia, Diritti e cittadinanza.</li>
                                <li><strong>Includi l'Educazione Civica con naturalezza:</strong> Collega sempre un passaggio alla Costituzione italiana o all'Agenda 2030, dimostrando maturità di cittadino oltre che di studente.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La gestione emotiva durante il colloquio</h2>
                            <p>
                                La commissione non è lì per tendere trabocchetti, ma per valutare la tua maturità complessiva. Se ricevi una domanda su un argomento che ricordi poco, non andare in panico e non restare in silenzio: ammetti con serenità la difficoltà e proponi subito un collegamento pertinente con un tema affine che conosci a fondo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                La Maturità è il coronamento di cinque anni di crescita, fatiche e amicizie scolastiche. Una volta superata la porta dell'aula, scoprirai che l'ansia svanisce lasciando spazio alla soddisfazione indimenticabile di aver concluso con dignità e competenza il tuo primo grande traguardo di vita adulta.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Ministero dell'Istruzione e del Merito (MIM) (2025/2026). <em>Ordinanza Ministeriale sugli Esami di Stato conclusivi del secondo ciclo di istruzione</em>.</li>
                                <li>• Recalcati, M. (2014). <em>L'ora di lezione. Per un'erotica dell'insegnamento</em>. Feltrinelli.</li>
                                <li>• Cialdini, R. B. (2007). <em>Influence: The Psychology of Persuasion</em>. Harper Business.</li>
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
