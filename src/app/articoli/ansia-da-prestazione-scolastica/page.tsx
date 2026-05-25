import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ArticleTemplate() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-24 px-6">
                <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-white/50">
                    <Link href="/articoli" className="text-primary font-black text-sm uppercase tracking-wider mb-8 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
                        ← Torna al Blog
                    </Link>
                    <div className="mb-8">
                        <span className="bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Psicologia e Studio
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Come gestire l&apos;Ansia da prestazione scolastica
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 6 min</p>
                    </div>
                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Non sei un voto</h2>
                            <p>
                                Il sistema scolastico moderno pone un&apos;enfasi enorme sui voti numerici, trasformandoli spesso (nella mente dello studente) in un indicatore del valore personale. Prendere un brutto voto viene vissuto come &quot;io non valgo&quot;, piuttosto che &quot;non ho compreso questo specifico capitolo&quot;. L&apos;ansia nasce da questa identificazione tossica.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Ridimensionare l&apos;errore</h2>
                            <p>
                                Il segreto per combattere l&apos;ansia è cambiare la percezione dell&apos;errore. L&apos;errore non è un fallimento, ma un dato. È un&apos;informazione vitale che ti dice dove devi aggiustare il tiro. Studiare con piattaforme di AI personali come Geniotto aiuta enormemente in questo. Essendo un robot, la paura del giudizio sociale svanisce. Puoi fare le domande più banali o &quot;stupide&quot; del mondo senza sentirti ridicolo, permettendoti di colmare le lacune reali.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Tecniche di grounding prima della verifica</h2>
                            <p>
                                Quando ti siedi al banco e senti il cuore battere forte e la mente che si svuota, usa la tecnica del grounding &quot;5-4-3-2-1&quot;. Trova:
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>5 cose che puoi vedere nell&apos;aula.</li>
                                    <li>4 cose che puoi toccare (il banco, la penna, i vestiti).</li>
                                    <li>3 cose che puoi sentire (il ticchettio dell&apos;orologio).</li>
                                    <li>2 cose che puoi annusare.</li>
                                    <li>1 cosa che puoi gustare.</li>
                                </ul>
                                Questo riporterà il tuo cervello rettiliano (in preda al panico) nel momento presente, sbloccando le funzioni logiche superiori.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
