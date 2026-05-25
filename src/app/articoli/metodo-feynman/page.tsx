import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Il Metodo Feynman: Capire tutto spiegandolo | Il Mio Geniotto",
    description: "La tecnica definitiva per padroneggiare concetti complessi. Se non sai spiegarlo a un bambino di 6 anni, non lo hai capito davvero.",
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
                            Metodo di Studio
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Il Metodo Feynman: Se non lo sai spiegare a un bambino, non lo hai capito
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Maggio 2026 • Tempo di lettura: 8 min</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Chi era Richard Feynman?</h2>
                            <p>
                                Richard Feynman non era solo un Premio Nobel per la fisica e uno dei mentori del Progetto Manhattan. Era conosciuto come &quot;The Great Explainer&quot; (il Grande Spiegatore). La sua capacità di ridurre concetti incredibilmente complessi (come l&apos;elettrodinamica quantistica) in analogie semplici era leggendaria. Feynman sosteneva che la complessità è spesso una maschera per la mancanza di comprensione profonda.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I 4 Step del Metodo Feynman</h2>
                            <p>
                                Questa tecnica è diventata il pilastro dell&apos;apprendimento rapido moderno. Ecco come puoi applicarla oggi stesso ai tuoi compiti:
                            </p>
                            <ol className="list-decimal pl-6 space-y-4 mt-4">
                                <li>
                                    <strong>Scegli un concetto e scrivilo in cima a un foglio:</strong> Che sia la fotosintesi, il teorema di Pitagora o la causa della Prima Guerra Mondiale.
                                </li>
                                <li>
                                    <strong>Spiegalo come se lo stessi insegnando a un bambino di 10 anni:</strong> Evita i paroloni tecnici. Usa un linguaggio semplice. Se ti blocchi e non trovi le parole &quot;facili&quot;, hai appena trovato un buco nella tua comprensione.
                                </li>
                                <li>
                                    <strong>Torna sui libri dove ti sei bloccato:</strong> Rileggi la fonte originale finché non riesci a spiegare quella parte specifica con parole tue.
                                </li>
                                <li>
                                    <strong>Semplifica e crea analogie:</strong> Raffina la tua spiegazione finché non scorre come una storia.
                                </li>
                            </ol>
                        </section>

                        <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10 italic">
                            &quot;Il primo principio è che non devi prendere in giro te stesso, e tu sei la persona più facile da prendere in giro.&quot; — Richard Feynman
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come Geniotto potenzia il Metodo Feynman</h2>
                            <p>
                                Tradizionalmente, per applicare questo metodo, avresti bisogno di un fratellino o di un amico disposto ad ascoltarti. Oggi hai Geniotto. Puoi dire all&apos;IA: <em>&quot;Geniotto, ora ti spiego io cos&apos;è l&apos;inflazione. Dimmi se la mia spiegazione è chiara per un bambino o se sto usando concetti che non ho capito bene&quot;</em>.
                            </p>
                            <p>
                                Questo tipo di interazione trasforma lo studio da una ricezione passiva a una produzione attiva (Active Recall). Quando spieghi qualcosa, il tuo cervello crea nuovi percorsi neurali che rendono quel ricordo quasi impossibile da cancellare.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione: Verso la maestria</h2>
                            <p>
                                Il Metodo Feynman non serve solo a prendere un bel voto. Serve a possedere la conoscenza. Quando padroneggi un argomento a tal punto da poterlo spiegare con semplicità, acquisisci una sicurezza che si rifletterà in ogni area della tua vita scolastica e professionale. Smetti di memorizzare, inizia a spiegare.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">🤖</div>
                        <div className="text-center sm:text-left">
                            <h4 className="font-black text-slate-800">Team Geniotto</h4>
                            <p className="text-slate-500 text-sm font-medium">Esperti in pedagogia digitale e intelligenza artificiale applicata all&apos;apprendimento.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
