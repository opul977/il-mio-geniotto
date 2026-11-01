import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studiare Filosofia Senza Noia: Metodo e Comprensione | Il Mio Geniotto",
  description: "Guida pratica per affrontare la filosofia a scuola e all'università. Come collegare il pensiero di Platone, Kant e Nietzsche ai dilemmi moderni del nostro tempo.",
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
                            Filosofia
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Filosofia: Come Smettere di Annoiarsi e Capire Davvero i Grandi Pensatori
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Giugno 2026 • Tempo di lettura: 9 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Per molti studenti liceali, la filosofia rischia di apparire come una sterile galleria di nomi bizzarri e tesi astruse su sostanze, idee e noumeni. Eppure, ogni grande filosofo stava semplicemente cercando di rispondere alle stesse domande che ci poniamo tutti i giorni.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il vero scopo della filosofia: non nozioni, ma attrezzi per pensare</h2>
                            <p>
                                L'errore didattico più comune consiste nell'affrontare la filosofia come una materia di pura memoria storica: ricordarsi la data di nascita di Spinoza o ripetere come una filastrocca le quattro cause aristoteliche. 
                            </p>
                            <p>
                                In realtà, i grandi pensatori non scrivevano per superare un'interrogazione scolastica, ma perché vivevano in epoche di crisi profonda, guerra, innovazione scientifica e disorientamento morale. Quando Platone scrive la <em>Repubblica</em>, ha appena visto la democrazia ateniese condannare a morte l'uomo più giusto della città, Socrate. Quando Cartesio formula il <em>Cogito ergo sum</em>, il cannocchiale di Galileo ha appena dimostrato che i sensi possono ingannare l'umanità da millenni.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il metodo delle tre domande per ogni filosofo</h2>
                            <p>
                                Per comprendere e ricordare qualsiasi autore senza impazzire tra tomi voluminosi, applica sempre questa griglia analitica prima di memorizzare i singoli testi:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Qual era il problema ossessivo dell'autore?:</strong> Ogni filosofo ha una questione centrale: per Hobbes è come evitare la guerra civile; per Kant è come distinguere la vera scienza dalle illusioni metafisiche; per Nietzsche è come trovare senso dopo il tramonto dei valori tradizionali.</li>
                                <li><strong>Qual è la sua risposta fondamentale?:</strong> Riassumi la sua intuizione principale in una sola frase limpida prima di scendere nei tecnicismi lessicali.</li>
                                <li><strong>Quali conseguenze pratiche comporta oggi?:</strong> Se la tesi dell'autore fosse vera, come dovremmo comportarci oggi davanti ai social network, all'intelligenza artificiale, alle disuguaglianze o all'emergenza climatica?</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Socrate e gli influencer: attualizzare i classici</h2>
                            <p>
                                Prendiamo il metodo socratico: l'ironia e la maieutica. Socrate girava per le piazze smascherando chi pretendeva di possedere la verità assoluta ponendo semplici domande progressive ("Cosa intendi per giustizia?"). Oggi, nell'era delle echo chamber e dei post polarizzati sui social, l'approccio socratico è il più potente antidoto alla manipolazione e alla superficialità dei contenuti virali.
                            </p>
                            <p>
                                Allo stesso modo, il panottico di Jeremy Bentham anticipa con precisione millimetrica la società della sorveglianza digitale teorizzata da Shoshana Zuboff; il dubbio metodico cartesiano è la base logica di ogni rigorosa verifica delle fonti contro le fake news online.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Studiare filosofia con curiosità non significa essere d'accordo con tutti i pensatori, ma allenare la palestra mentale del dubbio critico. Quando smetti di vedere i filosofi come statue di marmo polverose e inizi a guardarli come interlocutori vivi che discutono appassionatamente al tuo stesso tavolo, la materia si trasforma da un fardello noioso nel più affascinante viaggio di scoperta intellettuale.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Hadot, P. (1995). <em>Philosophy as a Way of Life: Spiritual Exercises from Socrates to Foucault</em>. Blackwell.</li>
                                <li>• Russell, B. (1945). <em>A History of Western Philosophy</em>. Simon and Schuster.</li>
                                <li>• Zuboff, S. (2019). <em>The Age of Surveillance Capitalism</em>. PublicAffairs.</li>
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
