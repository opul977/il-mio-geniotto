import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Studiare Geografia con Google Earth e AI | Il Mio Geniotto",
    description: "Trasforma il libro in un viaggio interattivo. Come esplorare la geopolitica e l'ambiente attraverso strumenti digitali gratuiti.",
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
                        <span className="bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Geografia
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Geografia Interattiva: Viaggiare nel Mondo senza Alzarsi dalla Scrivania
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Maggio 2026 • Tempo di lettura: 9 min</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Oltre l&apos;elenco dei fiumi</h2>
                            <p>
                                Per decenni, la geografia è stata percepita come la materia in cui bisognava imparare a memoria le capitali, i fiumi e le vette montuose. Un approccio che ha reso noioso lo studio di ciò che invece è lo studio del nostro pianeta vibrante. Oggi, grazie a strumenti come Google Earth e l&apos;Intelligenza Artificiale, la geografia diventa un&apos;esperienza immersiva e geopolitica.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Google Earth come macchina del tempo</h2>
                            <p>
                                Uno dei modi più potenti per studiare la geografia è vedere i cambiamenti del territorio nel tempo. Google Earth permette di osservare il ritiro dei ghiacciai o l&apos;espansione delle megalopoli. Affiancare queste immagini a una spiegazione di Geniotto che contestualizza le cause economiche e climatiche di quei cambiamenti rende l&apos;apprendimento indimenticabile.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La Geopolitica spiegata dall&apos;AI</h2>
                            <p>
                                Perché i confini sono fatti così? Perché determinate rotte commerciali passano per lo stretto di Malacca o per il canale di Suez? Geniotto può aiutarti a collegare la morfologia del terreno alle decisioni politiche e storiche. Invece di studiare solo la &quot;forma&quot; dell&apos;Egitto, puoi studiare il valore strategico del Nilo nell&apos;antichità e oggi.
                            </p>
                        </section>

                        <section className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 italic">
                            &quot;La geografia è il palcoscenico su cui si muove la storia. Senza conoscere il palco, non capiremo mai l&apos;attore.&quot;
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Consigli per una ricerca 10 e lode</h2>
                            <ul className="list-disc pl-6 space-y-4">
                                <li><strong>Usa le coordinate:</strong> Trova le coordinate esatte del luogo che studi e guardalo in 3D.</li>
                                <li><strong>Collega l&apos;economia:</strong> Chiedi a Geniotto come le risorse naturali di quel luogo influenzano la vita delle persone.</li>
                                <li><strong>Analizza il clima:</strong> Guarda come le catene montuose deviano le piogge e creano deserti o foreste.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Studiare geografia oggi significa diventare cittadini del mondo. Significa capire che un cambiamento climatico in Siberia ha effetti sulle coste del Mediterraneo. Con l&apos;aiuto della tecnologia, il mondo non è più un puntino su una mappa, ma una casa comune di cui comprendere ogni segreto.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl">🌍</div>
                        <div className="text-center sm:text-left">
                            <h4 className="font-black text-slate-800">Geografia Digitale</h4>
                            <p className="text-slate-500 text-sm font-medium">Esplorare il mondo con intelligenza.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
