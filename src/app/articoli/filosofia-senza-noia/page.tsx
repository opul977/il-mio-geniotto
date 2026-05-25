import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Filosofia: Smettere di annoiarsi con i classici | Il Mio Geniotto",
    description: "Perché Socrate parlerebbe meglio di un influencer e come i dilemmi di 2000 anni fa risolvono i problemi di oggi su internet.",
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
                        <span className="bg-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Filosofia
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Filosofia Senza Noia: Socrate, i Social e la Verità
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Maggio 2026 • Tempo di lettura: 10 min</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La materia &quot;inutile&quot; che spiega tutto</h2>
                            <p>
                                Spesso la filosofia viene percepita come un elenco noioso di vecchi signori che dicono cose complicate su concetti astratti. Ma la filosofia non è altro che il tentativo umano di capire come vivere bene. I dilemmi che affrontava Aristotele sono gli stessi che affrontiamo noi quando postiamo un commento su un social o quando scegliamo di chi fidarci.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Socrate vs Gli Influencer</h2>
                            <p>
                                Socrate passava le giornate ad Atene facendo domande alla gente, cercando di smascherare l&apos;ignoranza mascherata da saggezza. Non vi ricorda qualcuno che cerca di vendervi &quot;verità&quot; su Instagram o TikTok? Studiare la filosofia ci dà gli strumenti per distinguere chi ha davvero qualcosa da dire da chi sta solo recitando una parte per ottenere dei like.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;AI come compagno di dialoghi</h2>
                            <p>
                                La filosofia si impara discutendo. Geniotto può diventare il tuo &quot;compagno di dialoghi socratici&quot;. Puoi chiedergli: <em>&quot;Geniotto, se io fossi un epicureo, come dovrei comportarmi di fronte a una delusione amorosa?&quot;</em> o <em>&quot;Spiegami il concetto di Ubermensch di Nietzsche usando una metafora dei supereroi moderni&quot;</em>.
                            </p>
                            <p>
                                Questo rende la materia viva. La filosofia smette di essere un libro da sottolineare e diventa una lente attraverso cui guardare la tua vita reale.
                            </p>
                        </section>

                        <section className="bg-rose-50 p-8 rounded-3xl border border-rose-100 italic">
                            &quot;Una vita senza ricerca non è degna di essere vissuta.&quot; — Socrate
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Perché studiarla oggi?</h2>
                            <p>
                                In un mondo dominato dalla tecnica e dall&apos;efficienza, la filosofia è l&apos;unico spazio che ci obbliga a chiederci: <em>&quot;Cosa è giusto? Cosa è bene?&quot;</em>. Senza queste domande, diventiamo solo ingranaggi di una macchina. La filosofia ci restituisce la nostra umanità.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Non farti spaventare dai nomi difficili. La filosofia è la tua migliore alleata per capire chi sei e cosa vuoi davvero. Usa l&apos;IA per abbattere i muri del linguaggio accademico e scopri la rivoluzione che si nasconde dietro ogni grande idea.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center text-white text-2xl">🧠</div>
                        <div className="text-center sm:text-left">
                            <h4 className="font-black text-slate-800">Filosofia Moderna</h4>
                            <p className="text-slate-500 text-sm font-medium">Antichi pensieri per menti contemporanee.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
