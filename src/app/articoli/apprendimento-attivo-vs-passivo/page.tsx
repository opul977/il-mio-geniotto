import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apprendimento Attivo vs Passivo: Guida e Tecniche di Studio | Il Mio Geniotto",
  description: "Scopri la differenza fondamentale tra apprendimento attivo e passivo. Active recall, spaced repetition e metodi scientifici per studiare meno e ricordare di più.",
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
                            Apprendimento Attivo vs Passivo: Perché Rileggere non Serve e Come Studiare Davvero
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Maggio 2026 • Tempo di lettura: 8 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Passare un evidenziatore giallo su pagine e pagine di testo dà una forte sensazione di sicurezza. Purtroppo, la scienza cognitiva dimostra che rileggere ed evidenziare passivamente sono le strategie meno efficaci per trattenere informazioni a lungo termine.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L'illusione di competenza: la trappola dello studio passivo</h2>
                            <p>
                                Quando rileggiamo un capitolo di storia o biologia per la terza volta, il testo ci appare familiare. Il nostro cervello riconosce le parole e interpreta questa facilità di riconoscimento come una prova di memorizzazione solida: è la cosiddetta <em>illusione di competenza</em>. In realtà, riconoscere un concetto già pronto davanti agli occhi è un processo cognitivo radicalmente diverso rispetto a richiamarlo dalla memoria senza aiuti.
                            </p>
                            <p>
                                Lo studio passivo comprende attività come: rileggere gli appunti senza fare pause di verifica, ascoltare lezioni registrate senza prendere appunti strutturati, evidenziare interi blocchi di testo e guardare tutorial video senza applicare immediatamente quanto appreso. Queste attività richiedono un basso sforzo cognitivo e creano l'impressione rassicurante di lavorare sodo, ma lasciano tracce mnemoniche effimere, che svaniscono nel giro di 48 ore.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I pilastri dell'apprendimento attivo: sforzo cognitivo e recupero</h2>
                            <p>
                                L'apprendimento attivo si basa su un principio biologico consolidato dalle neuroscienze: la memoria si consolida non quando un'informazione entra nel cervello, ma quando il cervello compie uno sforzo attivo per recuperarla (il cosiddetto <em>testing effect</em> o <em>active recall</em>).
                            </p>
                            <p>
                                Ogni volta che chiudiamo il libro e ci chiediamo "cosa ho appena letto?", costringiamo le reti neuronali a ricostruire i percorsi sinaptici associati a quel concetto. Più questo recupero richiede sforzo, più la traccia mnemonica si rafforza e diventa resistente all'oblio.
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Active Recall (Richiamo Attivo):</strong> Invece di rileggere una pagina, copri il paragrafo con la mano e prova a riassumere i concetti chiave ad alta voce o per iscritto senza guardare. Se sbagli o ti blocchi, solo allora torna a controllare la fonte.</li>
                                <li><strong>Spaced Repetition (Ripetizione Spaziata):</strong> Basata sulla curva dell'oblio di Hermann Ebbinghaus. Ripetere un concetto a intervalli crescenti (dopo 1 giorno, dopo 3 giorni, dopo una settimana, dopo un mese) trasforma la memoria di lavoro a breve termine in memoria dichiarativa a lungo termine.</li>
                                <li><strong>Metodo delle Domande (Flashcard e Cornell):</strong> Scrivi domande sul margine dei tuoi appunti invece di semplici riassunti. Quando ripassi, rispondi alle domande prima di leggere la soluzione.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come trasformare la tua sessione di studio da passiva ad attiva</h2>
                            <p>
                                Adottare l'apprendimento attivo non significa raddoppiare le ore di studio: al contrario, consente spesso di dimezzare i tempi complessivi garantendo voti più stabili e una comprensione profonda.
                            </p>
                            <p>
                                Per iniziare subito, applica la regola del 30-70: dedica il 30% del tempo alla prima lettura esplorativa e il 70% a compiti pratici: testare te stesso con domande aperte, risolvere problemi senza sbirciare la soluzione guidata, spiegare l'argomento a un compagno o utilizzare simulatori di quiz e tutor digitali per ricevere feedback immediato sui tuoi punti ciechi.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Imparare a studiare in modo attivo richiede di accettare una certa dose di fatica iniziale: non è rilassante come passare un pennarello colorato su un foglio stampato. Tuttavia, quella leggera frustrazione che provi quando cerchi di ricordare un concetto senza guardare è esattamente il momento in cui stai realmente imparando. Sostituire la rilettura con il richiamo attivo è il singolo investimento più redditizio che ogni studente possa compiere per la propria carriera scolastica e universitaria.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Dunlosky, J., et al. (2013). Improving students' learning with effective learning techniques: Promising directions from cognitive and educational psychology. <em>Psychological Science in the Public Interest</em>, 14(1), 4–58.</li>
                                <li>• Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborative studying with concept mapping. <em>Science</em>, 331(6018), 772–775.</li>
                                <li>• Ebbinghaus, H. (1885). <em>Memory: A contribution to experimental psychology</em>. Teachers College, Columbia University.</li>
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
