import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mappe Mentali Efficaci per lo Studio: Guida Completa | Il Mio Geniotto",
  description: "Scopri come costruire mappe concettuali e mentali davvero utili per memorizzare e ripassare. Differenze con gli schemi lineari e consigli pratici.",
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
                            Organizzazione
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Come Creare Mappe Mentali Efficaci: Guida Pratica per Studenti
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Maggio 2026 • Tempo di lettura: 8 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Riassumere interi capitoli riscrivendo fiumi di testo identici al libro è un'abitudine diffusa ma poco efficiente. La nostra mente non memorizza in forma lineare: ragiona per associazioni visive, gerarchie e collegamenti radiali.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Mappa concettuale vs Mappa mentale: facciamo chiarezza</h2>
                            <p>
                                Spesso i termini vengono confusi, ma hanno scopi pedagogici differenti elaborati da pionieri dell'educazione come Joseph Novak e Tony Buzan:
                            </p>
                            <p>
                                Le <strong>mappe mentali</strong> hanno una struttura radiale a partire da un nucleo centrale. Usano parole chiave, rami colorati, icone e gerarchie visive. Sono perfette per il brainstorming, la creatività, la pianificazione di un saggio e la sintesi d'insieme di una materia complessa.
                            </p>
                            <p>
                                Le <strong>mappe concettuali</strong>, invece, hanno una struttura a rete in cui ogni nodo (concetto) è collegato agli altri tramite frecce orientate accompagnate da verbi di legame (es. "causa", "è formato da", "determina"). Sono ideali per materie scientifiche, diritto, anatomia o qualsiasi disciplina che richieda precisione logico-causale rigorosa.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I 4 errori più frequenti che rovinano una mappa di studio</h2>
                            <p>
                                Molti studenti provano le mappe e le abbandonano dicendo che "richiedono troppo tempo". Quasi sempre, il problema sta nel modo in cui vengono impostate:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Copiare intere frasi dentro i riquadri:</strong> Una mappa carica di frasi lunghe diventa un libro frammentato, perdendo il suo vantaggio cognitivo. Ogni nodo dovrebbe contenere da 1 a 3 parole chiave essenziali.</li>
                                <li><strong>Creare mappe 'troppo perfette' prima di aver capito:</strong> Se disegni la mappa durante la primissima lettura, rischi di includere dettagli insignificanti. La mappa si costruisce dopo aver compreso la gerarchia dell'argomento.</li>
                                <li><strong>Ignorare la scansione visiva e il colore:</strong> L'uso uniforme di una sola penna nera rende la mappa visivamente piatta. I colori e le forme geometriche diverse aiutano la memoria visiva a raggruppare i blocchi informativi.</li>
                                <li><strong>Non ripassare con la mappa attiva:</strong> Una mappa non va solo guardata: va usata come traccia per esporre a voce alta coprendo i sotto-rami e verificando se si riescono a ricostruire i legami.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Passo dopo passo: come costruire una mappa vincente</h2>
                            <p>
                                Per realizzare una mappa funzionale in meno di 25 minuti segui questo protocollo pratico:
                            </p>
                            <p>
                                1. <strong>Identifica il macro-argomento centrale:</strong> Posizionalo al centro del foglio orizzontale o della lavagna digitale (es. "La Rivoluzione Industriale" o "La respirazione cellulare").
2. <strong>Traccia i rami principali (I livello):</strong> Dividi l'argomento nelle sue 3-5 macro-categorie (es. Cause, Cronologia, Innovazioni tecnologiche, Conseguenze socio-economiche).
3. <strong>Sviluppa le ramificazioni secondarie:</strong> Aggiungi per ogni ramo gli elementi specifici, utilizzando parole chiave pregnanti ed eventuali frecce di rimando interdisciplinare.
4. <strong>Aggiungi elementi iconici o simboli:</strong> Un ingranaggio per l'industria, una bilancia per le leggi, un punto esclamativo sui punti chiave d'interrogazione.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                La mappa mentale non è un'opera d'arte da esporre, ma uno strumento di rielaborazione personale. Il vero apprendimento avviene durante l'atto stesso di decidere dove collocare un concetto e quale relazione lo unisce al resto. Quando una mappa è ben fatta, basta uno sguardo di 30 secondi per visualizzare mentalmente l'intera struttura di una lezione prima di entrare in classe per l'interrogazione.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Buzan, T. (2006). <em>The Mind Map Book: How to Use Radiant Thinking to Maximize Your Brain's Untapped Potential</em>. BBC Active.</li>
                                <li>• Novak, J. D., & Cañas, A. J. (2008). The Theory Underlying Concept Maps and How to Construct and Use Them. <em>Technical Report IHMC CmapTools</em>, Florida Institute for Human and Machine Cognition.</li>
                                <li>• Nesbit, J. C., & Adesope, O. O. (2006). Learning with concept and knowledge maps: A meta-analysis. <em>Review of Educational Research</em>, 76(3), 413–448.</li>
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
