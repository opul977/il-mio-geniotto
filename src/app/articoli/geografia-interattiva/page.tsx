import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studiare Geografia in Modo Interattivo con Strumenti Digitali | Il Mio Geniotto",
  description: "Guida per trasformare la geografia da sterile elenco di fiumi e capitali a materia viva. Esplorazione 3D, dati satellitari e storytelling.",
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
                            Geografia
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Studiare Geografia con Google Earth e AI: Dal Libro al Viaggio Interattivo
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Luglio 2026 • Tempo di lettura: 7 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Imparare a memoria l'elenco dei fiumi, dei capoluoghi e della produzione di barbabietole da zucchero ha reso la geografia una delle materie più ingiustamente bistrattate della scuola. Eppure, la geografia è l'avventura di come l'uomo abita e trasforma il pianeta Terra.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Dalle mappe bidimensionali ai paesaggi dinamici in 3D</h2>
                            <p>
                                Quando uno studente osserva una mappa cartacea della pianura alluvionale del Bangladesh o dei fiordi norvegesi, vede solo linee colorate e sfumature di verde. Con strumenti gratuiti come Google Earth Studio e i visori satellitari della NASA e dell'ESA (Sentinel), la lezione si trasforma istantaneamente in una spedizione geologica immersiva.
                            </p>
                            <p>
                                È possibile scendere a livello stradale nei quartieri di Tokyo, misurare la pendenza delle faglie tettoniche nelle Ande, osservare il ritiro progressivo dei ghiacciai alpini confrontando le foto satellitari degli ultimi quarant'anni e comprendere perché le città siano sorte proprio lungo le anse dei fiumi navigabili.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come costruire una sessione di studio geocreativa</h2>
                            <p>
                                Per preparare un'interrogazione o un approfondimento che lasci il segno nei professori, sperimenta questi passaggi:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>I tour narrativi di Google Earth:</strong> Crea un itinerario a tappe aggiungendo schede informative, foto e video sui nodi storici e naturalistici di una regione.</li>
                                <li><strong>Incrociare clima, rilievi ed economia:</strong> Non memorizzare i dati economici come numeri isolati: chiediti sempre perché in quella specifica zona si produce quell'alimento o sorge quell'industria in base alla conformazione geografica.</li>
                                <li><strong>Simulare spedizioni geologiche con l'AI:</strong> Chiedi a un assistente virtuale di descrivere il clima, la flora e le sfide ambientali che un esploratore incontrerebbe attraversando la steppa asiatica o la foresta boreale.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Geopolitica e sostenibilità: la geografia del XXI secolo</h2>
                            <p>
                                La geografia moderna non riguarda solo la morfologia fisica, ma la geopolitica delle risorse critiche: i corridoi marittimi di Suez e Malacca, la corsa ai minerali rari per la transizione energetica, le migrazioni climatiche e l'urbanizzazione selvaggia. Comprendere la geografia significa capire le prime pagine dei quotidiani internazionali e le tensioni che muovono il nostro mondo contemporaneo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                La geografia insegna a collocarsi nello spazio e a comprendere le diversità culturali e ambientali del nostro pianeta. Quando utilizziamo gli strumenti digitali per viaggiare virtualmente all'interno delle valli, delle metropoli e dei deserti, la materia smette di essere una lista noiosa da dimenticare il giorno dopo l'interrogazione e diventa una bussola permanente per leggere il mondo.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• National Geographic Education (2022). <em>Geospatial Technologies in the K-12 Classroom</em>. NatGeo Press.</li>
                                <li>• European Space Agency (ESA) Climate Change Initiative (2024). <em>Observing Earth from Space: Educational Materials</em>.</li>
                                <li>• Diamond, J. (1997). <em>Guns, Germs, and Steel: The Fates of Human Societies</em>. W. W. Norton & Company.</li>
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
