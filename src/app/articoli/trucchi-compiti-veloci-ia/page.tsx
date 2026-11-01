import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trucchi per Finire i Compiti Velocemente con l'AI | Il Mio Geniotto",
  description: "Strategie pratiche per usare l'intelligenza artificiale nello studio quotidiano. Come finire i compiti prima senza rinunciare alla qualità dell'apprendimento.",
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
                        <span className="bg-yellow-100 text-yellow-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Produttività
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Trucchi per Finire i Compiti Velocemente con l&apos;AI (Senza Imbrogli)
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Giugno 2026 • Tempo di lettura: 8 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            L&apos;obiettivo non è fare i compiti in fretta per poi guardare Netflix. L&apos;obiettivo è fare i compiti in modo efficiente, imparando davvero, e avere poi del tempo libero guadagnato con merito. L&apos;AI può aiutarti a fare esattamente questo — se la usi nel modo giusto.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La differenza tra efficienza e scorciatoia</h2>
                            <p>
                                Prima di entrare nelle strategie pratiche, è fondamentale chiarire una distinzione cruciale: lavorare in modo efficiente non significa fare le cose in modo superficiale o, peggio, far fare il lavoro a qualcun altro (o qualcosa d&apos;altro). Significa eliminare le perdite di tempo inutili, concentrare l&apos;energia cognitiva dove conta di più e usare gli strumenti disponibili per accelerare i processi meccanici, liberando tempo per quelli che richiedono vera comprensione.
                            </p>
                            <p>
                                Far scrivere all&apos;AI il proprio tema o farsi risolvere dall&apos;AI tutti gli esercizi di matematica senza capirli non è efficienza: è autolesionismo. Stai privando te stesso dell&apos;apprendimento che quei compiti erano progettati a produrre. E durante un&apos;interrogazione o un esame — situazioni in cui l&apos;AI non è disponibile — ti ritroverai con lacune gravi. L&apos;intelligenza artificiale è il tuo assistente, non il tuo sostituto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Strategie AI per ogni tipo di compito</h2>
                            <p>
                                Diverse discipline richiedono approcci diversi. Ecco come usare l&apos;AI in modo intelligente per le principali categorie di compito scolastico:
                            </p>

                            <h3 className="text-xl font-black text-slate-700 mt-6 mb-3">Per la comprensione di testi e teorie</h3>
                            <p>
                                Quando ti trovi davanti a un capitolo di libro difficile da capire — che sia un testo di filosofia, una pagina di biologia o un brano letterario complesso — invece di rileggere le stesse righe dieci volte senza capirle, usa un assistente AI per chiedergli di spiegartelo in modo diverso. Puoi chiedere: &quot;Spiegami questo concetto come se avessi 14 anni&quot;, oppure &quot;Fai un esempio pratico di questo fenomeno&quot;, o ancora &quot;Quali sono i tre punti chiave di questo testo?&quot;. Questo non sostituisce la lettura — che devi comunque fare — ma accelera la comprensione.
                            </p>

                            <h3 className="text-xl font-black text-slate-700 mt-6 mb-3">Per la matematica e la fisica</h3>
                            <p>
                                Quando sei bloccato su un esercizio, non chiedere subito all&apos;AI di risolverlo. Chiedigli invece: &quot;Qual è il primo passo per affrontare questo tipo di problema?&quot; o &quot;Quale formula dovrei applicare in questa situazione?&quot;. Ricevere un suggerimento direzionale ti permette di continuare a lavorare autonomamente, sviluppando il pensiero matematico, invece di limitarti a copiare una soluzione che non capisci.
                            </p>
                            <p>
                                Se hai già una soluzione ma vuoi verificarla, puoi mostrarla all&apos;AI e chiedere dove eventualmente hai sbagliato il ragionamento — non solo se il risultato finale è corretto.
                            </p>

                            <h3 className="text-xl font-black text-slate-700 mt-6 mb-3">Per lo studio a memoria</h3>
                            <p>
                                L&apos;AI è eccellente per creare materiali di ripasso personalizzati. Puoi copiare i punti chiave del tuo testo e chiedere all&apos;AI di generare domande di ripasso, carte di memorizzazione (flashcard) o un quiz a risposta multipla. Questo trasforma una sessione di studio passivo in una sessione di pratica attiva con sforzo di recupero — uno dei metodi più efficaci scientificamente per la memorizzazione a lungo termine.
                            </p>

                            <h3 className="text-xl font-black text-slate-700 mt-6 mb-3">Per la scrittura</h3>
                            <p>
                                Per i temi e i testi argomentativi, usa l&apos;AI nella fase di pianificazione e revisione, non nella scrittura. Chiedi all&apos;AI di aiutarti a strutturare la scaletta degli argomenti, poi scrivi il testo tu. Alla fine, chiedi all&apos;AI di segnalarti le parti meno chiare o le frasi da migliorare. Questo processo mantiene la tua voce e le tue idee al centro del lavoro.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Organizzazione del tempo con l&apos;AI</h2>
                            <p>
                                Uno dei modi meno sfruttati dell&apos;AI in ambito scolastico è come strumento di pianificazione. Molti studenti perdono tempo prezioso decidendo <em>cosa</em> studiare prima invece di studiare. Un assistente AI può aiutarti a:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Stimare il tempo necessario:</strong> Digli quali compiti hai e chiedigli di aiutarti a stimare quanto tempo richiederebbe ciascuno, ordinandoli per priorità e difficoltà.</li>
                                <li><strong>Creare un piano di studio settimanale:</strong> Se gli dai le tue materie, le date dei prossimi compiti in classe e le ore disponibili al giorno, può aiutarti a costruire un calendario di studio realistico.</li>
                                <li><strong>Spezzare i compiti grandi:</strong> Un compito come &quot;studia il capitolo 5 di storia&quot; è vago e opprimente. Chiedi all&apos;AI di aiutarti a dividerlo in sotto-task concreti e misurabili: leggere le pagine, sottolineare i punti chiave, costruire una mappa concettuale, fare le domande di fine capitolo.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I limiti da conoscere</h2>
                            <p>
                                Usare l&apos;AI in modo intelligente richiede anche consapevolezza dei suoi limiti. I modelli di linguaggio possono fare errori — soprattutto in matematica complessa, in date storiche precise e in informazioni molto aggiornate. Non trattare mai l&apos;output di un AI come una fonte certa e definitiva: usalo come punto di partenza da verificare, non come risposta finale.
                            </p>
                            <p>
                                Inoltre, sviluppa un senso critico per riconoscere quando una risposta AI &quot;suona bene&quot; ma è sbagliata — i modelli attuali possono essere convincenti anche quando producono informazioni false (il cosiddetto fenomeno delle &quot;allucinazioni&quot;). Confronta sempre le informazioni importanti con le fonti originali: il manuale scolastico, l&apos;enciclopedia, le fonti accademiche.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                L&apos;intelligenza artificiale è lo strumento di studio più potente mai messo a disposizione degli studenti — ma come tutti gli strumenti potenti, il risultato dipende dall&apos;uso che se ne fa. Usata con intelligenza, può comprimere le ore di noia improduttiva, accelerare la comprensione dei concetti difficili e rendere lo studio un processo più attivo e soddisfacente. Usata male, può illuderti di aver imparato qualcosa che in realtà non sai. La differenza sta tutta nella tua consapevolezza e onestà intellettuale.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Roediger, H. L., &amp; Karpicke, J. D. (2006). Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention. <em>Psychological Science</em>, 17(3), 249–255.</li>
                                <li>• Mollick, E., &amp; Mollick, L. (2023). Assigning AI: Seven Approaches for Students. <em>SSRN Electronic Journal</em>. — Ricerca sull&apos;integrazione etica dell&apos;AI nell&apos;educazione.</li>
                                <li>• Newport, C. (2016). <em>Deep Work: Rules for Focused Success in a Distracted World</em>. Grand Central Publishing.</li>
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
