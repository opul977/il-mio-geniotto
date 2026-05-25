import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Il Futuro della Scuola: L'AI come Tutor | Il Mio Geniotto",
    description: "Come cambieranno le aule nei prossimi 10 anni. Dall'apprendimento di massa alla personalizzazione totale grazie agli algoritmi.",
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
                        <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Educazione Digitale
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Il Futuro della Scuola: Verso l&apos;Apprendimento Personalizzato
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Maggio 2026 • Tempo di lettura: 12 min</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La fine del modello &quot;taglia unica&quot;</h2>
                            <p>
                                Il sistema scolastico attuale è figlio della rivoluzione industriale: un modello standardizzato dove 25 studenti devono imparare la stessa cosa, nello stesso modo e nello stesso tempo. Questo approccio è efficiente per la massa, ma ignora le differenze cognitive individuali. Alcuni studenti corrono troppo avanti e si annoiano, altri rimangono indietro e si scoraggiano. L&apos;Intelligenza Artificiale sta per porre fine a questo paradosso.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;AI come Tutor personale (e non come robot)</h2>
                            <p>
                                Immagina un&apos;aula dove ogni studente ha un tutor AI che conosce perfettamente il suo stile di apprendimento. Se uno studente capisce meglio attraverso le immagini, l&apos;AI genererà diagrammi; se un altro preferisce le storie, l&apos;AI trasformerà i concetti in narrazioni. Non è fantascienza, è ciò che Geniotto sta già iniziando a fare.
                            </p>
                            <p>
                                Il ruolo dell&apos;insegnante non sparirà, ma evolverà. Liberato dal compito ripetitivo di spiegare concetti di base o correggere test a crocette, il docente potrà finalmente dedicarsi alla parte più nobile dell&apos;insegnamento: il mentorship, l&apos;educazione emotiva e lo stimolo del pensiero critico.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Dati, non solo voti</h2>
                            <p>
                                Nel futuro, la valutazione non si baserà più su un singolo test ansioso a fine mese. L&apos;AI monitorerà i progressi quotidiani, identificando istantaneamente quando un concetto non è stato assimilato e proponendo rinforzi mirati. Il &quot;voto&quot; diventerà una bussola per il miglioramento continuo, non un giudizio definitivo sulle capacità del ragazzo.
                            </p>
                        </section>

                        <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10 italic">
                            &quot;In un mondo dove le risposte sono a portata di click, il valore di uno studente non sarà misurato da ciò che sa, ma da quali domande sa porre.&quot;
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La sfida dell&apos;equità</h2>
                            <p>
                                La vera rivoluzione dell&apos;AI sarà la democratizzazione dell&apos;eccellenza. Prima, solo chi poteva permettersi tutor privati costosi aveva un vantaggio competitivo. Oggi, uno studente in una zona rurale o in una famiglia svantaggiata può avere accesso allo stesso livello di supporto educativo di uno studente in un collegio d&apos;élite. L&apos;AI è il grande livellatore delle opportunità.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Il futuro della scuola non è fatto di schermi freddi, ma di esseri umani potenziati dalla tecnologia. Dobbiamo abbracciare questa trasformazione con consapevolezza, assicurandoci che l&apos;etica e la curiosità rimangano al centro di ogni riga di codice educativo.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl">🚀</div>
                        <div className="text-center sm:text-left">
                            <h4 className="font-black text-slate-800">Vision Geniotto</h4>
                            <p className="text-slate-500 text-sm font-medium">Laboratorio di ricerca sul futuro dell&apos;apprendimento digitale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
