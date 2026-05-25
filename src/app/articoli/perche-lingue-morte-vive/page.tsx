import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Perché le Lingue Morte sono le più vive | Il Mio Geniotto",
    description: "Latino e Greco antico non sono solo grammatica: sono la palestra perfetta per il pensiero logico e la base del mondo moderno.",
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
                        <span className="bg-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Classici
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Perché le &quot;Lingue Morte&quot; sono in realtà le più vive
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Maggio 2026 • Tempo di lettura: 10 min</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;illusione della &quot;morte&quot;</h2>
                            <p>
                                Ogni anno, migliaia di studenti si pongono la stessa domanda: &quot;A cosa serve studiare il Latino o il Greco se nessuno li parla più?&quot;. Questa domanda nasce da un malinteso fondamentale sullo scopo dell&apos;istruzione. Non studiamo queste lingue per parlare con i fantasmi di Cicerone o Sofocle, ma per imparare a pensare con la stessa precisione e profondità che loro hanno iniettato nella nostra cultura.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La palestra del pensiero logico</h2>
                            <p>
                                Il Latino e il Greco sono lingue altamente strutturate. A differenza dell&apos;inglese o dell&apos;italiano moderno, dove l&apos;ordine delle parole spesso determina il senso, nelle lingue classiche è la morfologia (le desinenze) a dettare il gioco. Tradurre una versione di Latino è l&apos;equivalente intellettuale di risolvere un set di equazioni o di scrivere un codice di programmazione complesso.
                            </p>
                            <p>
                                Devi analizzare ogni singola parola, capirne la funzione logica e poi ricomporre il mosaico. Questa &quot;gymnastique de l&apos;esprit&quot; sviluppa un&apos;area del cervello dedicata al problem-solving che nessuna materia moderna riesce a stimolare con la stessa intensità.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Le radici del nostro software linguistico</h2>
                            <p>
                                Oltre l&apos;80% dei termini scientifici, giuridici e filosofici che usiamo oggi derivano direttamente dal Greco e dal Latino. Studiare queste lingue significa accedere al codice sorgente dell&apos;italiano. Quando conosci l&apos;etimologia, smetti di memorizzare le parole e inizi a comprenderle. Sapevi che &quot;Intelligenza&quot; deriva da <em>intus legere</em> (leggere dentro)? Capire la radice cambia completamente il modo in cui percepisci il concetto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;IA e i classici: Un binomio inaspettato</h2>
                            <p>
                                Molti pensano che l&apos;Intelligenza Artificiale sia la nemica dello studio dei classici (perché può tradurre in un secondo). In realtà, è lo strumento migliore per riscoprirli. Con Geniotto, non chiedi la traduzione &quot;già pronta&quot;, ma chiedi: <em>&quot;Spiegami perché Cicerone ha usato questo congiuntivo qui e non l&apos;indicativo&quot;</em>.
                            </p>
                            <p>
                                L&apos;IA può aiutarti a visualizzare la retorica, a capire i doppi sensi politici e a contestualizzare le opere. Geniotto trasforma la versione da un compito arido a un&apos;indagine investigativa sulla mente dei giganti che hanno costruito la nostra civiltà.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Le lingue classiche sono &quot;morte&quot; solo se le consideriamo strumenti di comunicazione. Se le consideriamo strumenti di pensiero, sono più vive che mai. Sono la bussola che ci permette di navigare nel mare di informazioni confuse di oggi con rigore, logica e un vocabolario degno di un cittadino consapevole.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl">🏛️</div>
                        <div className="text-center sm:text-left">
                            <h4 className="font-black text-slate-800">Team Geniotto</h4>
                            <p className="text-slate-500 text-sm font-medium">Esperti in lettere classiche e tecnologie educative.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
