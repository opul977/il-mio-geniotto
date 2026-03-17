"use client";

import Navbar from "@/components/Navbar";

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-20 px-6">
                <div className="bg-white/80 glass rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/50">
                    <h1 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">Cookie Policy</h1>

                    <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-xl font-black text-slate-800 mb-3">Cosa sono i Cookie?</h2>
                            <p>
                                I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web.
                                Aiutano il sito a funzionare correttamente e forniscono informazioni ai proprietari del sito.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-800 mb-3">Tipi di Cookie che utilizziamo</h2>
                            <ul className="list-disc pl-6 space-y-4 text-slate-600">
                                <li>
                                    <strong>Cookie Tecnici/Essenziali:</strong> Necessari per il login, la gestione della sessione e la sicurezza dell&apos;account.
                                    Senza questi cookie, il servizio non potrebbe funzionare correttamente.
                                </li>
                                <li>
                                    <strong>Cookie di Terze Parti (Google AdSense):</strong> Utilizzati per mostrare annunci pubblicitari pertinenti.
                                    Google utilizza i cookie per pubblicare annunci in base alle tue visite precedenti su questo o altri siti.
                                </li>
                                <li>
                                    <strong>Cookie Analitici:</strong> Ci aiutano a capire come gli utenti interagiscono con il sito (es. quali pagine sono più visitate)
                                    per migliorare continuamente Geniotto.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-800 mb-3">Come disabilitare i Cookie</h2>
                            <p>
                                Puoi gestire le tue preferenze sui cookie direttamente dalle impostazioni del tuo browser.
                                Tieni presente che disabilitando i cookie tecnici potresti non essere in grado di utilizzare alcune funzioni del sito (come l&apos;accesso alla chat).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-800 mb-3">Google AdSense e il Cookie DART</h2>
                            <p>
                                Google utilizza il cookie DART per pubblicare annunci in base agli interessi degli utenti.
                                Puoi revocare l&apos;utilizzo del cookie DART visitando la pagina relativa alle norme sulla privacy della rete di contenuti e degli annunci di Google.
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
