import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Il Metodo Feynman di Studio: Guida Pratica Passo Passo | Il Mio Geniotto",
  description: "La tecnica definitiva del premio Nobel Richard Feynman per padroneggiare qualsiasi argomento. Se non sai spiegarlo a un bambino, non lo hai capito davvero.",
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
                            Il Metodo Feynman: Come Capire e Ricordare Concetti Complessi Spiegandoli Semplicemente
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Settembre 2026 • Tempo di lettura: 8 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Richard Feynman, premio Nobel per la fisica e uno dei docenti più straordinari del Novecento, era soprannominato 'Il Grande Spiegatore'. Il suo segreto? Si rifiutava categoricamente di nascondersi dietro formule pompose e tecnicismi incomprensibili.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Sapere il nome di una cosa vs capire davvero una cosa</h2>
                            <p>
                                Feynman raccontava spesso un aneddoto della sua infanzia: suo padre gli mostrava un uccello e diceva: 'Vedi quell'uccello? In italiano si chiama tordo bruno, in portoghese si chiama in un altro modo, in cinese ancora in un altro. Ma anche quando conoscerai tutti i suoi nomi in tutte le lingue del pianeta, non saprai ancora nulla sull'uccello in sé: saprai solo cosa gli uomini hanno deciso di chiamarlo'.
                            </p>
                            <p>
                                La maggior parte degli studenti cade in questo equivoco: impara a memoria definizioni scolastiche preconfezionate credendo che ripetere termini aulici equivalga a dominare la materia. Quando il professore pone una domanda da un'angolazione leggermente diversa, l'impalcatura crolla all'istante.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I 4 passi del Metodo Feynman applicati allo studio</h2>
                            <p>
                                Puoi applicare questa tecnica a qualsiasi materia — dalle derivate matematiche alla filosofia di Hegel:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Passo 1: Scegli il concetto e intitola un foglio bianco:</strong> Scrivi in cima il tema specifico che vuoi padroneggiare (es. 'Il ciclo di Krebs' o 'La separazione dei poteri secondo Montesquieu').</li>
                                <li><strong>Passo 2: Spiegalo come se parlassi a un bambino di 10 anni:</strong> Usa un linguaggio semplice, chiaro, privo di gergo specialistico. Se devi usare una parola tecnica, sei obbligato a definirla subito con una metafora della vita reale.</li>
                                <li><strong>Passo 3: Individua i tuoi punti ciechi:</strong> In quali passaggi ti sei bloccato? Dove sei stato costretto a usare una frase fatta del libro perché non sapevi come spiegarla a parole tue? Quello è esattamente il confine della tua comprensione.</li>
                                <li><strong>Passo 4: Torna alle fonti e semplifica con metafore:</strong> Riapri il libro, colma la lacuna specifica e riscrivi la spiegazione finché non scorre liscia e intuitiva.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L'uso dei tutor intelligenti per testare le tue spiegazioni</h2>
                            <p>
                                Oggi non hai bisogno di avere sempre un compagno disponibile ad ascoltarti: puoi spiegare il concetto per iscritto o a voce a un tutor digitale e chiedergli: 'Agisci come uno studente di prima media, trova i passaggi poco chiari e fammi 3 domande difficili su quello che ho appena spiegato'. Questo genera un feedback immediato e potentissimo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                La vera maestria intellettuale non si misura dalla complessità delle parole che usi, ma dalla semplicità cristallina con cui riesci a renderla accessibile agli altri. Applicare il Metodo Feynman richiede l'umiltà di ammettere cosa non sappiamo ancora spiegare, ma è la strada maestra per una comprensione indistruttibile che dura per tutta la vita.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Feynman, R. P. (1985). <em>Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character</em>. W. W. Norton & Company.</li>
                                <li>• Gleick, J. (1992). <em>Genius: The Life and Science of Richard Feynman</em>. Pantheon Books.</li>
                                <li>• Chi, M. T. (2000). Self-explaining: The dual processes of generating inference and repairing mental models. <em>Advances in Instructional Psychology</em>, 5, 161–238.</li>
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
