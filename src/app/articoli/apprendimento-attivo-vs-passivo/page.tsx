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
                        <span className="bg-yellow-100 text-yellow-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Teorie dell&apos;Apprendimento
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Apprendimento Attivo vs Passivo: Perché evidenziare i libri non funziona
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 7 min</p>
                    </div>
                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;illusione della competenza</h2>
                            <p>
                                Quando leggi un capitolo ed evidenzi con un colore fluo le frasi importanti, il tuo cervello prova soddisfazione. Pensi &quot;sto studiando molto duramente&quot;. Ma in realtà, stai facendo un lavoro passivo. Quando chiudi il libro, spesso non ricordi assolutamente nulla. Questo fenomeno psicologico si chiama &quot;Illusione di competenza&quot;. Riconosci il testo perché ce l&apos;hai davanti, ma non saresti in grado di spiegarlo a qualcun altro.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Active Recall (Il recupero attivo)</h2>
                            <p>
                                La scienza dell&apos;apprendimento ci insegna che il vero studio avviene solo e unicamente quando fai fatica a ricordare qualcosa. Devi forzare il tuo cervello a &quot;recuperare&quot; l&apos;informazione (Active Recall). Chiudi il libro e prova a spiegare a voce alta il concetto al muro, al tuo gatto o allo specchio. Se ti blocchi, apri il libro per controllare solo quel pezzetto, poi richiudilo e ricomincia.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Spaced Repetition (La ripetizione dilazionata)</h2>
                            <p>
                                Oltre all&apos;Active Recall, per evitare che la &quot;curva dell&apos;oblio&quot; cancelli le informazioni, devi usare la ripetizione dilazionata. Ripassa il concetto il giorno stesso, poi 3 giorni dopo, poi 1 settimana dopo. Puoi usare Geniotto per generare flashcard automatiche dai tuoi appunti: farsi interrogare è il modo più rapido per scoprire cosa si sa per davvero e cosa no.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
