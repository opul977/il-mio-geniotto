import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Il Futuro della Scuola e Intelligenza Artificiale | Il Mio Geniotto",
  description: "Come cambierà l'istruzione nei prossimi anni grazie all'AI. Personalizzazione dell'apprendimento, ruolo dei docenti e nuove competenze del futuro.",
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
                            Educazione Digitale
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Il Futuro della Scuola con l'Intelligenza Artificiale: Oltre il Panico da Copiatura
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Luglio 2026 • Tempo di lettura: 9 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            L'arrivo dell'intelligenza artificiale generativa ha inizialmente provocato allarme nel mondo della scuola: la paura che gli studenti smettano di pensare delegando temi ed equazioni ai chatbot. Ma la storia della tecnologia dimostra che ogni grande strumento impone un'evoluzione del modello educativo, non la sua distruzione.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Dalla scuola standardizzata alla didattica personalizzata</h2>
                            <p>
                                Per oltre due secoli, la scuola pubblica ha operato su un modello industriale: classi numerose di studenti della stessa età che ascoltano la stessa spiegazione nello stesso momento, valutati con la stessa prova standardizzata. Tuttavia, ogni studente apprende con ritmi, stili cognitivi e preconoscenze profondamente differenti.
                            </p>
                            <p>
                                L'AI permette per la prima volta nella storia di realizzare la promessa della <em>personalizzazione di massa</em>: un tutor instancabile in grado di adattare la difficoltà degli esercizi in tempo reale, riformulare un passaggio di fisica attraverso una metafora musicale per chi ama la musica, o proporre esempi grafici per chi ha una prevalenza visiva. L'insegnante non è più costretto a tarare la lezione sul livello 'medio' della classe, lasciando indietro chi ha difficoltà o annoiando i più rapidi.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come cambia il ruolo dei docenti: da trasmettitori a mentori</h2>
                            <p>
                                Nessun algoritmo potrà mai sostituire l'empatia, l'ascolto e la guida pedagogica di un insegnante umano. Ciò che l'AI rende obsoleto è unicamente la trasmissione unidirezionale di nozioni facilmente reperibili online.
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Sgravio dai compiti burocratici:</strong> I docenti impiegano decine di ore settimanali nella correzione di compiti ripetitivi e nella stesura di griglie di valutazione. L'automazione di queste fasi libera tempo prezioso per il dialogo educativo individuale.</li>
                                <li><strong>Progettazione di compiti autentici:</strong> Se un'AI può svolgere il classico compito a crocette o riassumere un capitolo in 3 secondi, la scuola deve spostarsi verso compiti autentici: dibattiti orali, risoluzione di casi reali, esperimenti pratici e laboratori cooperativi.</li>
                                <li><strong>Educazione alle soft skills:</strong> Pensiero critico, collaborazione di gruppo, intelligenza emotiva ed etica applicata diventano il cuore pulsante del curricolo scolastico.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Le competenze decisive per gli studenti del prossimo decennio</h2>
                            <p>
                                Nel mondo del lavoro verso cui si affacciano gli studenti odierni, il valore non risiede più nel sapere a memoria formule che qualsiasi dispositivo calcola all'istante, ma nel saper formulare le domande corrette (il cosiddetto <em>prompting analitico</em>), valutare criticamente l'affidabilità delle risposte generate, individuare bias e allucinazioni e integrare saperi umanistici e competenze tecnologiche.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Vietare o demonizzare l'intelligenza artificiale nelle aule scolastiche è un'illusione destinata al fallimento. Il compito della scuola moderna è accogliere l'innovazione guidandola, insegnando ai ragazzi a non usare l'AI come una stampella per eludere la fatica intellettuale, ma come un amplificatore del loro potenziale umano e della loro creatività.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• UNESCO (2023). <em>Guidance for generative AI in education and research</em>. UNESCO Publishing.</li>
                                <li>• Luckin, R., et al. (2016). <em>Intelligence Unleashed: An argument for AI in Education</em>. Pearson Education.</li>
                                <li>• Mollick, E. R., & Mollick, L. (2023). Assigning AI: Seven Approaches for Students, with Prompts. <em>SSRN Electronic Journal</em>.</li>
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
