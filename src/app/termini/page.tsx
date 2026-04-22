import Navbar from "@/components/Navbar";

export default function TerminiPage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            
            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-24 px-6">
                <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-white/50">
                    <div className="mb-12">
                        <span className="bg-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Documentazione Legale
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-4">
                            Termini e Condizioni
                        </h1>
                        <p className="text-slate-500 font-medium">Ultimo aggiornamento: Aprile 2026</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">1. Accettazione dei Termini</h2>
                            <p>
                                Accedendo e utilizzando il sito web web (&quot;Geniotto AI&quot;, &quot;ilmiogeniotto.it&quot;), si accettano i presenti Termini e Condizioni di utilizzo. Qualora non si sia d&apos;accordo con tali termini, si prega di non utilizzare i nostri servizi.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">2. Descrizione del Servizio</h2>
                            <p>
                                Geniotto è una piattaforma di assistenza educativa basata su Intelligenza Artificiale progettata per fungere da tutor virtuale per gli studenti. Il servizio fornisce supporto nello svolgimento dei compiti, ma l&apos;utente accetta che Geniotto è un ausilio didattico e non sostituisce l&apos;insegnamento scolastico ufficiale né garantisce risultati accademici specifici.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">3. Limitazioni d&apos;uso (Per i Minori)</h2>
                            <p>
                                L&apos;utilizzo di Geniotto da parte di minori deve essere supervisionato da un genitore o da un tutore legale. Gli utenti non sono autorizzati a utilizzare il servizio per generare e inviare contenuti illegali, diffamatori o a violare l&apos;integrità del sistema.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">4. Acquisto Gettoni e Rimborsi</h2>
                            <p>
                                La piattaforma offre una quantità limitata di gettoni giornalieri gratuiti. Nel caso l&apos;utente decida di acquistare pacchetti (&quot;PRO&quot;) per aumentare il limite di interazioni, tali acquisti sono considerati definitivi e vincolanti. Le politiche di rimborso seguiranno le direttive standard dell&apos;Unione Europea relative ai beni digitali consumabili.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">5. Disclaimer ed Esclusione di Responsabilità</h2>
                            <p>
                                Sebbene ci impegniamo a fornire risposte accurate attraverso i modelli di Intelligenza Artificiale, non garantiamo che il contenuto generato sia sempre esente da errori al 100%. L&apos;utente si assume la responsabilità di revisionare e verificare le risposte fornite prima di utilizzarle per compiti scolastici o professionali.
                            </p>
                        </section>

                         <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">6. Modifiche ai Termini</h2>
                            <p>
                                Ci riserviamo il diritto, a nostra esclusiva discrezione, di modificare o sostituire i presenti Termini. È responsabilità dell&apos;utente controllare periodicamente questa pagina per verificare eventuali modifiche. L&apos;uso continuato del servizio dopo l&apos;aggiornamento costituisce l&apos;accettazione dei nuovi Termini.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
