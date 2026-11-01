import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perché Studiare Latino e Greco Oggi: Il Valore delle Lingue Classiche | Il Mio Geniotto",
  description: "Latino e Greco antico non sono fossili polverosi, ma la palestra logica definitiva per il cervello. Dal coding al lessico scientifico, ecco perché servono ancora.",
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
                            Classici
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Perché le 'Lingue Morte' Sono Più Vive Che Mai: Il Valore Moderno di Latino e Greco
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Ottobre 2026 • Tempo di lettura: 8 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            'A cosa serve studiare una lingua che nessuno parla più?': è la domanda rituale che ogni studente del liceo classico o scientifico ha rivolto almeno una volta ai propri professori e genitori davanti a una versione ostica di Cicerone o Tucidide.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La palestra logica: la versione come esercizio di decodifica e coding</h2>
                            <p>
                                Tradurre un periodo latino di Tacito o un brano greco di Platone non è un esercizio di mera traduzione parola per parola come farebbe un traduttore automatico. È un'operazione di reverse-engineering semantico ed ermeneutico.
                            </p>
                            <p>
                                Il latino e il greco sono lingue ad alta densità sintattica e flessiva: prima di interpretare il senso, devi analizzare i casi, i modi verbali, le subordinate e le correlazioni logiche. Questo processo è formalmente identico al debug di una riga di codice in programmazione o alla scomposizione di un'equazione algebrica. Allena l'abitudine mentale a non dare nulla per scontato e a cercare la coerenza strutturale complessiva.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il DNA lessicale della medicina, del diritto e della scienza moderna</h2>
                            <p>
                                Oltre l'80% del vocabolario specialistico delle scienze contemporanee — dalla neurologia al diritto internazionale, dalla farmacologia all'informatica — affonda le sue radici direttamente nel greco e nel latino:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Precisione terminologica:</strong> Comprendere l'etimologia di una parola (es. 'diagnosi', 'giurisprudenza', 'fotosintesi') permette di capire all'istante il significato di migliaia di concetti senza doverli imparare a memoria.</li>
                                <li><strong>Padronanza straordinaria dell'italiano:</strong> Chi traduce dai classici acquisisce una sensibilità lessicale, una ricchezza di sfumature e una padronanza sintattica che si riflettono immediatamente nella qualità dei temi, dei saggi e dell'eloquio pubblico.</li>
                                <li><strong>Ponte verso le lingue moderne:</strong> Il latino è la radice diretta di tutte le lingue neolatine (italiano, francese, spagnolo, portoghese, romeno) e ha influenzato oltre il 60% del vocabolario colto della lingua inglese.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Dialogare con le radici della nostra civiltà</h2>
                            <p>
                                Le domande su cosa sia la giustizia, il dovere civico, l'amore, il dolore o il senso della vita non sono nate ieri su un social network: sono state dibattute con intensità insuperata da Seneca, Marco Aurelio, Sofocle e Orazio. Leggere questi autori senza il filtro opaco delle traduzioni moderne permette di entrare in contatto intimo con la radice più profonda della coscienza europea e occidentale.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Le lingue classiche non sono 'morte': sono immortali. Finché l'uomo avrà bisogno di pensare con rigore logico, esprimersi con eleganza e interrogarsi sulla propria condizione etica ed esistenziale, il latino e il greco rimarranno la più potente e raffinata tecnologia intellettuale a nostra disposizione.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Canfora, L. (2014). <em>La prima lezione di filologia</em>. Laterza.</li>
                                <li>• Settis, S. (2004). <em>Il futuro del 'classico'</em>. Einaudi.</li>
                                <li>• Gramsci, A. (1975). <em>Quaderni del carcere</em> (in particolare sulle ragioni dell'insegnamento del latino). Einaudi.</li>
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
