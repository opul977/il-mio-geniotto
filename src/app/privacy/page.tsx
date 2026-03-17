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

                        <section>
                            <h2 className="text-xl font-black text-slate-800 mb-3">6. Contatti</h2>
                            <p>
                                Per qualsiasi domanda riguardante questa Privacy Policy, puoi contattarci all&apos;indirizzo email fornito nel footer del sito.
                            </p>
                        </section>

                        <p className="text-sm italic pt-8 border-t border-slate-100">
                            Ultimo aggiornamento: 17 Marzo 2026
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
