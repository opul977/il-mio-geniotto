import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Come Scrivere un Tema Italiano Perfetto: Guida Completa | Il Mio Geniotto",
  description: "Guida pratica per scrivere un ottimo tema italiano. Struttura, argomentazione, stile e consigli per studenti delle medie e superiori.",
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
                        <span className="bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Scrittura
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Come Scrivere un Tema Italiano Perfetto: Struttura, Argomenti e Stile
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Maggio 2026 • Tempo di lettura: 9 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Scrivere un buon tema italiano non è un talento innato: è una competenza che si apprende con metodo. Chi conosce la struttura, sa argomentare e cura lo stile può passare dal sei al nove — indipendentemente dalla propria &quot;vena creativa&quot;.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La struttura di base: introduzione, svolgimento e conclusione</h2>
                            <p>
                                Prima di scrivere una sola parola del tema, è indispensabile pianificare. Questa fase — che molti studenti saltano per impazienza — è in realtà quella che determina la qualità finale del testo. Un tema scritto senza piano è come costruire una casa senza progetto: può reggere in piedi, ma di solito crolla nella struttura logica.
                            </p>
                            <p>
                                La struttura classica di un tema si divide in tre macro-sezioni. <strong>L&apos;introduzione</strong> occupa circa il 15-20% del testo totale e ha il compito di catturare l&apos;attenzione del lettore, presentare il tema e anticipare la tesi principale. L&apos;errore più comune è iniziare con frasi generiche e vuote del tipo &quot;Da sempre l&apos;uomo si è chiesto...&quot; o &quot;In questo tema parlerò di...&quot;. L&apos;introduzione deve essere originale e precisa, aprire con un dato, una citazione, un paradosso o una domanda retorica che agganci il lettore.
                            </p>
                            <p>
                                <strong>Lo svolgimento</strong>, che costituisce il cuore del tema (circa il 70% del testo), deve sviluppare la tesi centrale attraverso argomenti solidi e ben organizzati. Ogni paragrafo dovrebbe contenere un&apos;idea principale, supportata da esempi, dati, citazioni o riferimenti culturali. Il filo logico tra i paragrafi deve essere sempre evidente: usa connettivi come &quot;inoltre&quot;, &quot;tuttavia&quot;, &quot;d&apos;altra parte&quot;, &quot;è opportuno sottolineare che&quot; per guidare il lettore nel ragionamento.
                            </p>
                            <p>
                                <strong>La conclusione</strong> — circa il 10-15% del testo — non deve semplicemente ripetere ciò che è già stato detto. Deve sintetizzare il percorso argomentativo in modo originale, aprire a prospettive future o lasciare al lettore una riflessione su cui continuare a pensare. Una conclusione forte rimane impressa nella mente del correttore molto più di qualsiasi singolo paragrafo dello svolgimento.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I tipi di traccia e come affrontarli</h2>
                            <p>
                                In Italia, la prima prova dell&apos;esame di maturità prevede tre tipologie di traccia, ma anche nelle verifiche scolastiche ordinarie si incontrano formati simili. Conoscerli in anticipo permette di adottare strategie diverse per ciascuno.
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Tipologia A — Analisi del testo:</strong> Si analizza un testo letterario (poetico o in prosa). Richiede la capacità di identificare figure retoriche, strutture narrative, temi e stile dell&apos;autore. La chiave è bilanciare l&apos;analisi formale con l&apos;interpretazione personale motivata.</li>
                                <li><strong>Tipologia B — Testo argomentativo:</strong> Si parte da uno o più documenti e si costruisce un&apos;argomentazione su un tema di attualità. Richiede di citare le fonti fornite integrando il proprio punto di vista, senza limitarsi a riassumerle.</li>
                                <li><strong>Tipologia C — Tema di attualità:</strong> La traccia più &quot;libera&quot; e spesso quella più insidiosa. La libertà può portare alla dispersione. È fondamentale scegliere una tesi chiara e sostenerla con coerenza dall&apos;inizio alla fine.</li>
                            </ul>
                            <p>
                                Per ogni tipologia, la fase di pianificazione prevede: leggere attentamente la traccia almeno due volte, sottolineare le parole chiave, scrivere su una brutta copia uno schema degli argomenti principali e decidere la tesi prima di iniziare a scrivere in pulito.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Lo stile: come migliorare il registro e la qualità della scrittura</h2>
                            <p>
                                La grammatica e l&apos;ortografia sono la base, ma non bastano per ottenere un voto alto. Ciò che distingue un tema buono da uno eccellente è lo stile: la scelta delle parole, la varietà della costruzione sintattica, la precisione lessicale e la capacità di variare il ritmo della prosa.
                            </p>
                            <p>
                                Alcune regole pratiche per migliorare immediatamente la qualità stilistica:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Varia la lunghezza delle frasi:</strong> Alternare frasi brevi e incisive a periodi più lunghi e articolati crea un ritmo piacevole e mantiene alta l&apos;attenzione del lettore. Un testo fatto solo di frasi lunghe è pesante; uno fatto solo di frasi brevi è telegrafico e superficiale.</li>
                                <li><strong>Usa un lessico preciso e specifico:</strong> Evita parole generiche come &quot;cosa&quot;, &quot;fare&quot;, &quot;dire&quot; quando esistono termini più accurati. Un dizionario dei sinonimi è uno degli strumenti più utili per uno studente di italiano.</li>
                                <li><strong>Cita fonti culturali in modo pertinente:</strong> Un riferimento a Dante, Calvino, Leopardi o a un autore contemporaneo, inserito in modo organico e motivato, dimostra cultura e personalità. Ma attenzione: una citazione buttata lì solo per fare scena è peggio di nessuna citazione.</li>
                                <li><strong>Rileggi sempre ad alta voce:</strong> Leggere il proprio testo ad alta voce prima di consegnarlo è uno dei consigli più efficaci che esistano. L&apos;orecchio coglie incongruenze logiche, ripetizioni di parole e frasi che &quot;stonano&quot; molto prima dell&apos;occhio abituato a vedere il proprio testo.</li>
                                <li><strong>Rispetta i tempi della revisione:</strong> Gli ultimi 10-15 minuti dell&apos;ora di verifica non devono essere sprecati guardando nel vuoto. Usali per ricontrollare la coerenza logica, correggere errori ortografici e migliorare le frasi più deboli.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come usare l&apos;AI come supporto (senza farsi fare il tema)</h2>
                            <p>
                                L&apos;intelligenza artificiale può essere un supporto prezioso nella preparazione e nel miglioramento della scrittura, a patto di usarla in modo corretto. Non si tratta di far scrivere il tema all&apos;AI — questo sarebbe controproducente sia per l&apos;apprendimento che per l&apos;integrità accademica — ma di usarla come uno strumento di feedback e brainstorming.
                            </p>
                            <p>
                                Prima di scrivere, puoi usare un assistente AI per esplorare le diverse angolazioni di un tema, generare possibili argomentazioni pro e contro o trovare riferimenti culturali pertinenti che non ti vengono in mente. Dopo aver scritto il tuo testo, puoi chiedere all&apos;AI di identificare le parti meno convincenti, suggerire sinonimi per le parole ripetute o valutare la coerenza logica dell&apos;argomentazione. Questo tipo di utilizzo — riflessivo e critico — sviluppa le tue competenze invece di sostituirle.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Scrivere bene in italiano è una delle competenze più trasversali e durature che la scuola può darti: ti servirà all&apos;università, nel mondo del lavoro e nella vita civile. Non è un&apos;abilità che si acquisisce in una notte prima della verifica, ma cresce progressivamente attraverso la pratica regolare e la lettura attenta di buoni testi. Inizia ad allenarsi oggi: scrivi un piccolo testo argomentativo su qualsiasi argomento ti stia a cuore, rileggi, correggi e ripeti. Il talento non è un punto di partenza — è un traguardo.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Ministero dell&apos;Istruzione (2019). <em>Quadro di riferimento per la prima prova scritta dell&apos;Esame di Stato</em>. MIUR, Roma.</li>
                                <li>• Mortara Garavelli, B. (1988). <em>Manuale di retorica</em>. Bompiani. — Riferimento fondamentale per l&apos;argomentazione e le figure del discorso.</li>
                                <li>• Serianni, L., &amp; Benedetti, G. (2009). <em>Scritti sui banchi: l&apos;italiano a scuola tra alunni e insegnanti</em>. Carocci. — Analisi della scrittura scolastica italiana.</li>
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
