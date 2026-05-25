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
                        <span className="bg-teal-100 text-teal-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Organizzazione
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            L&apos;Arte delle Mappe Mentali per Memorizzare Concetti
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 7 min</p>
                    </div>
                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Non scrivere frasi lunghe</h2>
                            <p>
                                Il modo peggiore di prendere appunti è trascrivere parola per parola quello che dice il professore. Il cervello non impara copiando come una stampante, ma rielaborando. Le mappe mentali, teorizzate da Tony Buzan, sfruttano il modo in cui il nostro cervello organizza naturalmente le informazioni: in modo radiale, non lineare.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come strutturare la Mappa Perfetta</h2>
                            <p>
                                Metti l&apos;argomento principale al centro (es. &quot;La Rivoluzione Industriale&quot;). Da lì fai partire dei rami spessi, ognuno con un colore diverso (Cause, Innovazioni Tecnologiche, Conseguenze Sociali). 
                            </p>
                            <p>
                                Usa parole chiave, non frasi! Ogni nodo della mappa deve contenere al massimo due parole. Usa disegnini stilizzati: il cervello ricorda un disegno rudimentale di una fabbrica fumante molto più velocemente della parola scritta &quot;Industrializzazione&quot;.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Generare strutture con Geniotto</h2>
                            <p>
                                Puoi usare Geniotto per generare l&apos;albero gerarchico della tua mappa. Chiedi: &quot;Sto facendo una mappa concettuale sull&apos;Apparato Digerente. Quali dovrebbero essere i 5 rami principali e le relative sotto-categorie? Scrivimelo a elenco puntato&quot;. Poi prendi dei pennarelli e disegnala fisicamente su un foglio A4 in orizzontale. Meno tempo a cercare di capire come organizzarla, più tempo a memorizzarla!
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
