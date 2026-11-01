import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pensiero Critico e Fake News: Guida per Studenti | Il Mio Geniotto",
  description: "Come verificare le fonti, riconoscere i bias cognitivi e difendersi dalla disinformazione digitale. Metodi pratici di fact-checking per studenti.",
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
                            Cittadinanza
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Pensiero Critico: La Bussola Indispensabile Contro le Fake News nell'Era dell'AI
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Ottobre 2026 • Tempo di lettura: 9 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Viviamo nella prima epoca della storia umana in cui il problema non è reperire informazioni, ma difendersi dall'eccesso di contenuti tossici, manipolati o inventati ad arte per catturare la nostra attenzione o orientare le nostre opinioni.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L'illusione della verità a portata di clic: deepfake e allucinazioni</h2>
                            <p>
                                Con la diffusione di massa di immagini fotorealistiche generate dall'AI, voci clonate e testi sintetici generati in pochi istanti, la vecchia massima 'vedere per credere' non ha più alcun valore. 
                            </p>
                            <p>
                                I contenuti falsi si diffondono statisticamente sei volte più velocemente delle notizie verificate sui social network, perché sono progettati appositamente per suscitare reazioni emotive primarie: indignazione, paura, meraviglia o conferma dei propri pregiudizi.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I 4 trucchi dei professionisti del Fact-Checking</h2>
                            <p>
                                Gli analisti di informazioni digitali non leggono le pagine dall'alto in basso: usano il metodo della <em>lettura laterale</em> (lateral reading):
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Lettura Laterale:</strong> Invece di restare sul sito sospetto a valutare se 'sembra professionale', apri subito una nuova scheda del browser e cerca cosa dicono le fonti autorevoli e indipendenti su quel dominio o su quella notizia.</li>
                                <li><strong>Verifica dell'Autore e della Trasparenza:</strong> Chi ha firmato l'articolo? È una persona reale con un percorso documentato? Esiste una redazione con recapiti fisici o è una pagina anonima creata per monetizzare click pubblicitari?</li>
                                <li><strong>Ricerca inversa per immagini:</strong> Carica una foto su motori di ricerca visuale per verificare se è reale o se è un'immagine vecchia decontestualizzata per manipolare l'opinione pubblica.</li>
                                <li><strong>Riconoscere i propri Bias di Conferma:</strong> Quando una notizia sembra 'troppo perfetta' per confermare le tue idee politiche o personali, è proprio quello il momento in cui devi raddoppiare la prudenza.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come usare l'intelligenza artificiale come alleata contro le bufale</h2>
                            <p>
                                La tecnologia non è solo parte del problema, ma anche della soluzione: puoi chiedere agli assistenti virtuali di individuare fallacie logiche in un testo, riassumere le argomentazioni opposte su un tema controverso o suggerire pubblicazioni scientifiche con peer-review per verificare un'affermazione medica o ambientale.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Il pensiero critico è la più preziosa forma di difesa civile e intellettuale del XXI secolo. Non significa cadere nel cinismo e non fidarsi più di nulla, ma imparare a calibrare la propria fiducia in base al rigore delle prove e delle fonti. Essere studenti liberi significa essere capaci di pensare con la propria testa.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Wineburg, S., & McGrew, S. (2019). Lateral Reading and the Nature of Expertise: Reading Less and Learning More When Evaluating Digital Information. <em>Stanford History Education Group Working Paper</em>.</li>
                                <li>• Vosoughi, S., Roy, D., & Aral, S. (2018). The spread of true and false news online. <em>Science</em>, 359(6380), 1146–1151.</li>
                                <li>• Kahneman, D. (2011). <em>Thinking, Fast and Slow</em>. Farrar, Straus and Giroux.</li>
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
