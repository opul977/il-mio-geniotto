"use client";

import Navbar from "@/components/Navbar";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-20 px-6">
                <div className="bg-white/80 glass rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/50">
                    <h1 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">Privacy Policy</h1>

                    <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-xl font-black text-slate-800 mb-3">1. Informazioni Generali</h2>
                            <p>
                                Benvenuto su Geniotto (ilmiogeniotto.it). La privacy dei nostri utenti è estremamente importante per noi.
                                Questa Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni quando utilizzi il nostro servizio.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-800 mb-3">2. Raccolta dei Dati</h2>
                            <p>
                                Raccogliamo dati minimi necessari per il funzionamento del servizio:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Informazioni di autenticazione (tramite Google Auth o registrazione diretta).</li>
                                <li>Cronologia delle chat (per permetterti di ritrovare i tuoi compiti).</li>
                                <li>Dati tecnici anonimi (indirizzo IP, tipo di browser) per fini statistici e di sicurezza.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-800 mb-3">3. Google AdSense</h2>
                            <p>
                                Utilizziamo Google AdSense per mostrare annunci pubblicitari sul nostro sito. Google, come fornitore di terze parti,
                                utilizza i cookie per pubblicare annunci in base alle precedenti visite dell&apos;utente a questo o ad altri siti web.
                            </p>
                            <p className="mt-2">
                                L&apos;uso dei cookie per la pubblicità da parte di Google consente a Google e ai suoi partner di pubblicare annunci per i tuoi utenti
                                in base alla loro visita ai tuoi siti e/o ad altri siti su Internet. Gli utenti possono scegliere di disattivare la pubblicità
                                personalizzata visitando le <a href="https://www.google.com/settings/ads" className="text-primary underline">Impostazioni annunci</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-800 mb-3">4. Cookie</h2>
                            <p>
                                Utilizziamo i cookie per migliorare l&apos;esperienza dell&apos;utente e per fini pubblicitari. Per maggiori dettagli,
                                consulta la nostra <a href="/cookie-policy" className="text-primary underline">Cookie Policy</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-800 mb-3">5. Sicurezza</h2>
                            <p>
                                Adottiamo misure di sicurezza adeguate per proteggere i tuoi dati da accessi non autorizzati o alterazioni.
                                Tuttavia, nessun metodo di trasmissione su Internet è sicuro al 100%.
                            </p>
                        </section>

                        <section id="delete-account" className="bg-red-50/50 border-2 border-red-100 p-6 rounded-2xl mt-8">
                            <h2 className="text-xl font-black text-red-600 mb-3 flex items-center gap-2">
                                <span>🗑️</span> 6. Richiesta di Eliminazione Account e Dati
                            </h2>
                            <p className="mb-4">
                                Rispettiamo il tuo diritto alla cancellazione dei dati. Puoi richiedere l&apos;eliminazione completa del tuo account Geniotto AI e di tutti i dati associati in qualsiasi momento.
                            </p>

                            <h3 className="font-bold text-slate-800 mt-4 mb-2">Come richiedere l&apos;eliminazione:</h3>
                            <ul className="bg-white/60 border-l-4 border-red-400 p-4 rounded-r-xl mb-4 space-y-2">
                                <li><strong>Metodo 1 — Tramite app:</strong> Apri Geniotto AI → Menu → Impostazioni → &quot;Elimina Account&quot; → Conferma la cancellazione.</li>
                                <li><strong>Metodo 2 — Via email:</strong> Invia una richiesta di cancellazione a:<br/>
                                    <span className="bg-primary/10 text-primary px-2 py-1 rounded font-bold inline-block mt-1 mb-1">giupy.wolf77@gmail.com</span><br/>
                                    con oggetto <em>&quot;Richiesta eliminazione account Geniotto&quot;</em> e il tuo indirizzo email di registrazione.
                                </li>
                            </ul>

                            <h3 className="font-bold text-slate-800 mt-4 mb-2">Cosa viene eliminato:</h3>
                            <ul className="mb-4 space-y-1">
                                <li>✅ Account utente e credenziali di accesso</li>
                                <li>✅ Tutta la cronologia delle conversazioni</li>
                                <li>✅ Immagini caricate per l&apos;analisi</li>
                                <li>✅ Preferenze e impostazioni personali</li>
                            </ul>

                            <h3 className="font-bold text-slate-800 mt-4 mb-2">Tempi di elaborazione:</h3>
                            <p className="mb-2">
                                La richiesta sarà elaborata entro <strong>30 giorni</strong> dalla ricezione. Riceverai una conferma via email al completamento della cancellazione.
                            </p>
                            <p className="text-sm italic text-slate-500">
                                Nota: alcune informazioni potrebbero essere conservate per obblighi legali o fiscali per il periodo minimo richiesto dalla legge.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-black text-slate-800 mb-3">7. Contatti</h2>
                            <p>
                                Per qualsiasi domanda riguardante questa Privacy Policy o per esercitare i tuoi diritti, puoi contattarci all&apos;indirizzo email: <span className="font-bold text-primary">giupy.wolf77@gmail.com</span>
                            </p>
                        </section>

                        <p className="text-sm italic pt-8 border-t border-slate-100">
                            Ultimo aggiornamento: 9 Maggio 2026
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
