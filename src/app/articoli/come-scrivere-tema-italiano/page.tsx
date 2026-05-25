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
                        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Italiano
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            La Guida Definitiva per Scrivere un Tema di Italiano Perfetto
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 8 min</p>
                    </div>
                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il terrore del foglio bianco</h2>
                            <p>
                                Il tema in classe è spesso visto come un banco di prova spaventoso. Molti studenti fissano il foglio bianco (o lo schermo) sperando che l&apos;ispirazione cada dal cielo. Ma la scrittura non è (solo) magia, è anche ingegneria. Un buon testo ha una struttura architettonica solida.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La regola del 40-20-40</h2>
                            <p>
                                Il più grande errore che si possa fare è iniziare a scrivere non appena si legge la traccia. Usa la regola del 40-20-40: dedica il 40% del tempo alla pianificazione, il 20% alla scrittura di getto, e il 40% alla revisione spietata.
                            </p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>
                                    <strong>Pianificazione (La Mappa):</strong> Metti per iscritto la tua tesi principale. Se il tema riguarda il cambiamento climatico, quale sarà la tua posizione centrale? Fai un brainstorming veloce.
                                </li>
                                <li>
                                    <strong>Scrittura:</strong> Lascia fluire i pensieri senza preoccuparti troppo dell&apos;ortografia in questa fase. Trasforma la tua scaletta in paragrafi.
                                </li>
                                <li>
                                    <strong>Revisione:</strong> Questo è il momento in cui la brutta copia diventa un bel tema. Usa frasi brevi. Elimina gli aggettivi superflui.
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;aiuto dell&apos;AI nel brainstorming</h2>
                            <p>
                                Se proprio sei bloccato nella fase di pianificazione, l&apos;IA è il compagno ideale. Non chiederle mai di &quot;scrivere un tema al tuo posto&quot;. Questo ti penalizzerebbe a lungo termine. Invece, chiedi a Geniotto: &quot;Devo scrivere un testo argomentativo sui social media, mi dai tre tesi a favore e tre contro per aiutarmi a iniziare la scaletta?&quot;. Sarà come avere un professore che ti fa la scintilla per avviare il motore.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
