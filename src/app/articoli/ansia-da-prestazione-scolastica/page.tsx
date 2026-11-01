import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ansia da Prestazione Scolastica: Come Riconoscerla e Superarla | Il Mio Geniotto",
  description: "Guida completa sull'ansia da prestazione scolastica. Cause, sintomi e strategie pratiche per studenti e genitori per affrontarla con successo.",
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
                        <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Benessere
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Ansia da Prestazione Scolastica: Come Riconoscerla e Superarla
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Giugno 2026 • Tempo di lettura: 9 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Il batticuore prima di un&apos;interrogazione, le mani sudate durante un compito in classe, la mente che va in bianco proprio quando devi parlare: l&apos;ansia da prestazione scolastica è reale, diffusa e — con le strategie giuste — si può affrontare.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Cos&apos;è l&apos;ansia da prestazione scolastica e quanto è diffusa</h2>
                            <p>
                                L&apos;ansia da prestazione scolastica è una forma specifica di ansia situazionale che si manifesta in risposta a situazioni valutative — interrogazioni, compiti in classe, esami, presentazioni orali. Non è semplicemente &quot;essere nervosi&quot;: quando raggiunge una certa intensità, interferisce concretamente con le prestazioni cognitive, rendendo paradossalmente più difficile quel che già si sa.
                            </p>
                            <p>
                                I dati sono eloquenti: secondo una ricerca dell&apos;OCSE, circa il 60% degli studenti quindicenni nei paesi sviluppati riporta di sentirsi ansioso davanti ai test, anche quando si è preparato bene. In Italia, uno studio condotto dall&apos;Università di Bologna ha rilevato che il 30% degli studenti delle superiori manifesta livelli di ansia da esame clinicamente significativi, con un picco evidente durante il terzo e il quinto anno.
                            </p>
                            <p>
                                È importante distinguere tra l&apos;ansia &quot;fisiologica&quot; — quel livello moderato di attivazione che in realtà migliora le prestazioni, affinando l&apos;attenzione e aumentando la motivazione — e l&apos;ansia &quot;patologica&quot;, che supera la soglia di utilità e diventa un ostacolo. La curva di Yerkes-Dodson descrive questo fenomeno: le prestazioni crescono con l&apos;attivazione fino a un certo punto, poi calano drasticamente se l&apos;ansia diventa eccessiva.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Le cause: perché alcuni studenti ne soffrono più di altri</h2>
                            <p>
                                L&apos;ansia da prestazione scolastica non ha una causa unica. È il risultato di un intreccio di fattori individuali, familiari e ambientali:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Perfezionismo e paura del fallimento:</strong> Gli studenti che associano il proprio valore personale ai risultati scolastici — &quot;se prendo un brutto voto, sono una persona meno valida&quot; — sono particolarmente vulnerabili. Il voto diventa una minaccia all&apos;identità, non solo una valutazione delle conoscenze.</li>
                                <li><strong>Aspettative alte (proprie o altrui):</strong> La pressione dei genitori, l&apos;ambiente familiare competitivo o la paura di deludere le aspettative degli insegnanti possono amplificare significativamente l&apos;ansia da prestazione.</li>
                                <li><strong>Esperienze negative pregresse:</strong> Un&apos;interrogazione andata male, un esame fallito, un episodio di umiliazione davanti alla classe — questi eventi lasciano tracce emotive che condizionano le situazioni successive.</li>
                                <li><strong>Preparazione insufficiente o percepita tale:</strong> Spesso l&apos;ansia si alimenta del dubbio: &quot;non mi sono preparato abbastanza&quot; o &quot;non lo so mai abbastanza bene&quot;. Paradossalmente, anche studenti molto preparati possono soffrirne se hanno una bassa autostima scolastica.</li>
                                <li><strong>Fattori biologici:</strong> Alcune persone hanno una reattività del sistema nervoso autonomo geneticamente più elevata, e quindi rispondono con un&apos;attivazione fisiologica più intensa alle situazioni di stress percepito.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Strategie pratiche per gestire l&apos;ansia</h2>
                            <p>
                                La buona notizia è che l&apos;ansia da prestazione scolastica risponde molto bene a interventi mirati, sia di natura cognitiva che comportamentale. Ecco le strategie più efficaci e supportate dalla ricerca:
                            </p>

                            <h3 className="text-xl font-black text-slate-700 mt-6 mb-3">Prima dell&apos;interrogazione o del compito</h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Preparazione progressiva e simulazioni:</strong> Studia con largo anticipo e simula le condizioni dell&apos;interrogazione — chiedi a un familiare di interrogarti, metti il timer durante un esercizio come se fosse il compito vero. La familiarità con la situazione riduce la sua minaccia percepita.</li>
                                <li><strong>Tecnica del &quot;writing espressivo&quot;:</strong> Studi dell&apos;Università di Chicago hanno dimostrato che scrivere liberamente per 10 minuti le proprie preoccupazioni prima di un esame riduce significativamente l&apos;ansia. Esternalizzare i pensieri negativi libera risorse cognitive che altrimenti sarebbero impegnate a &quot;gestirli&quot; durante la performance.</li>
                                <li><strong>Riformulazione cognitiva:</strong> Invece di dirsi &quot;sono ansioso&quot;, prova a riformulare con &quot;sono emozionato&quot;. La ricerca mostra che questa piccola differenza linguistica cambia il modo in cui il cervello interpreta l&apos;attivazione fisiologica, trasformandola da minaccia a risorsa.</li>
                            </ul>

                            <h3 className="text-xl font-black text-slate-700 mt-6 mb-3">Durante la valutazione</h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Respirazione diaframmatica:</strong> Quattro respiri lenti e profondi (inspirazione 4 secondi, pausa 4, espirazione 6) attivano il sistema nervoso parasimpatico, contrastando fisicamente la risposta ansiosa. È una tecnica usata da atleti professionisti, chirurghi e forze speciali prima di situazioni ad alta pressione.</li>
                                <li><strong>Inizia dagli elementi che conosci:</strong> Se il compito in classe ha domande di difficoltà variabile, inizia da quelle che sai rispondere con sicurezza. Questo costruisce fiducia e crea uno slancio positivo prima di affrontare le parti più difficili.</li>
                                <li><strong>Riporta l&apos;attenzione al presente:</strong> Quando la mente vaga verso scenari catastrofici (&quot;e se prendo un brutto voto?&quot;), riportala attivamente al compito immediato: la prossima frase, la prossima equazione, la prossima parola.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il ruolo dei genitori e degli insegnanti</h2>
                            <p>
                                L&apos;ansia da prestazione non si sviluppa nel vuoto: l&apos;ambiente circostante gioca un ruolo fondamentale. I genitori possono aiutare i figli comunicando chiaramente che il loro affetto e la loro stima non dipendono dai voti. Frasi come &quot;quello che conta è che ci hai messo impegno&quot; e &quot;un brutto voto ci aiuta a capire cosa studiare meglio la prossima volta&quot; costruiscono una relazione con lo studio basata sulla crescita piuttosto che sulla performance.
                            </p>
                            <p>
                                Gli insegnanti, a loro volta, possono fare molto attraverso la valutazione formativa — cioè un feedback continuo durante il percorso di apprendimento, invece della valutazione a sorpresa. Sapere esattamente cosa verrà chiesto, in quale formato e con quali criteri riduce enormemente l&apos;incertezza che alimenta l&apos;ansia.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                L&apos;ansia da prestazione scolastica è una delle esperienze più comuni e allo stesso tempo più silenziose dell&apos;adolescenza: molti ragazzi la vivono senza nominarla, senza parlarne, convinti che sia una debolezza da nascondere. Non lo è. È una risposta umana comprensibile a situazioni di valutazione, e riconoscerla è già il primo passo per gestirla. Con le strategie giuste, il supporto degli adulti di riferimento e — quando necessario — l&apos;aiuto di un professionista, ogni studente può imparare a trasformare l&apos;energia dell&apos;ansia in carburante per la performance, invece che in ostacolo.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Ramirez, G., &amp; Beilock, S. L. (2011). Writing about testing worries boosts exam performance in the classroom. <em>Science</em>, 331(6014), 211–213.</li>
                                <li>• Yerkes, R. M., &amp; Dodson, J. D. (1908). The relation of strength of stimulus to rapidity of habit-formation. <em>Journal of Comparative Neurology and Psychology</em>, 18(5), 459–482.</li>
                                <li>• OCSE (2017). <em>PISA 2015 Results: Students&apos; Well-Being</em> (Volume III). OECD Publishing, Paris.</li>
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
