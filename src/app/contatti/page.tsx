import { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Contatti | Il Mio Geniotto — Assistenza, FAQ e Collaborazioni",
    description:
        "Contatta il team di Il Mio Geniotto per assistenza tecnica, collaborazioni scolastiche o informazioni commerciali. Rispondiamo entro 24-48 ore lavorative.",
    keywords: [
        "contatti il mio geniotto",
        "assistenza tutor AI studenti",
        "supporto geniotto",
        "collabora con noi scuola AI",
        "wolf.G AI contatti",
        "FAQ geniotto",
    ],
    openGraph: {
        title: "Contatti | Il Mio Geniotto",
        description:
            "Assistenza, FAQ e collaborazioni scolastiche. Il team di Il Mio Geniotto risponde entro 24-48 ore lavorative.",
        url: "https://ilmiogeniotto.it/contatti",
        siteName: "Il Mio Geniotto",
        type: "website",
    },
    alternates: {
        canonical: "https://ilmiogeniotto.it/contatti",
    },
};

export default function ContattiPage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-5xl mx-auto w-full pt-32 pb-24 px-6 flex flex-col lg:flex-row gap-12">

                {/* Colonna Sinistra: Info di Contatto */}
                <div className="flex-1">
                    <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                        Supporto Ufficiale
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-6">
                        Mettiti in contatto con noi 📩
                    </h1>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                        Siamo qui per aiutarti. Che tu sia uno studente con un dubbio, un genitore che
                        vuole capire come funziona il servizio o un insegnante interessato a collaborare,
                        il nostro team è a tua disposizione.
                    </p>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-12 flex items-center gap-2">
                        <span className="text-emerald-500 font-black">⏱️</span>
                        <strong>Tempi di risposta:</strong>&nbsp;Rispondiamo entro <strong>24–48 ore lavorative</strong> (dal lunedì al venerdì).
                    </p>

                    <div className="space-y-8 bg-white/60 p-8 rounded-3xl border border-white/50 shadow-lg mb-10">
                        <div>
                            <h3 className="text-xl font-black text-slate-800 mb-2">Assistenza Tecnica</h3>
                            <p className="text-slate-500 font-medium text-sm">
                                Hai problemi con il tuo account, con il reset dei gettoni o con il funzionamento
                                dell&apos;app Android? Scrivi a:
                            </p>
                            <a href="mailto:supporto@ilmiogeniotto.it" className="text-primary font-bold hover:underline mt-2 inline-block">
                                supporto@ilmiogeniotto.it
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-black text-slate-800 mb-2">Informazioni Commerciali</h3>
                            <p className="text-slate-500 font-medium text-sm">
                                Per partnership editoriali, proposte di collaborazione istituzionale, adozioni
                                scolastiche o richieste media:
                            </p>
                            <a href="mailto:info@ilmiogeniotto.it" className="text-primary font-bold hover:underline mt-2 inline-block">
                                info@ilmiogeniotto.it
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-black text-slate-800 mb-2">Dati Aziendali</h3>
                            <p className="text-slate-600 font-medium mb-1">
                                <strong>wolf.G AI di Marco Gennari</strong>
                            </p>
                            <p className="text-slate-500 font-medium text-sm mb-0.5">
                                P.IVA: 12345678901
                            </p>
                            <p className="text-slate-500 font-medium text-sm mb-0.5">
                                Sede legale: Milano, Italia
                            </p>
                            <p className="text-slate-500 font-medium text-sm">
                                Operante nell&apos;innovazione pedagogica digitale su tutto il territorio nazionale.
                            </p>
                        </div>
                    </div>

                    {/* Sezione Collabora con noi */}
                    <div className="bg-blue-50/70 p-8 rounded-3xl border border-blue-100 shadow-sm">
                        <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">🏫</span>
                            Collabora con noi — Per insegnanti e scuole
                        </h2>
                        <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4">
                            Il Mio Geniotto è a disposizione delle scuole italiane che vogliono integrare
                            strumenti AI nella didattica in modo sicuro ed etico. Offriamo:
                        </p>
                        <ul className="space-y-2 text-slate-600 font-medium text-sm list-none">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-0.5">✔</span>
                                <span><strong>Account scolastici gratuiti</strong> per classi e istituti convenzionati</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-0.5">✔</span>
                                <span><strong>Workshop di formazione</strong> per docenti sull&apos;uso consapevole dell&apos;AI in classe</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-0.5">✔</span>
                                <span><strong>Materiali didattici personalizzati</strong> sviluppati in co-creazione con il corpo docenti</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-0.5">✔</span>
                                <span><strong>Report di utilizzo</strong> anonimi per monitorare i progressi degli studenti</span>
                            </li>
                        </ul>
                        <p className="mt-6 text-slate-500 text-sm font-medium">
                            Sei un insegnante o un dirigente scolastico? Scrivici a{" "}
                            <a href="mailto:scuole@ilmiogeniotto.it" className="text-primary font-bold hover:underline">
                                scuole@ilmiogeniotto.it
                            </a>{" "}
                            per avviare una collaborazione.
                        </p>
                    </div>
                </div>

                {/* Colonna Destra: FAQ Dettagliate */}
                <div className="flex-1 lg:pl-12">
                    <h2 className="text-3xl font-black text-slate-800 mb-8">Domande Frequenti (FAQ)</h2>

                    <div className="space-y-5">

                        <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">Come funziona il limite di gettoni giornaliero?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                Ogni utente gratuito riceve 5.000 gettoni al giorno. I gettoni vengono consumati in base
                                alla lunghezza delle conversazioni. Il limite si resetta automaticamente ogni notte a
                                mezzanotte (UTC). Se hai bisogno di un uso intensivo, puoi passare al piano
                                <strong> Geniotto PRO</strong> con gettoni mensili aumentati.
                            </p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">Mio figlio è al sicuro mentre usa Geniotto?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                Assolutamente sì. Geniotto è programmato con rigidi filtri di sicurezza che bloccano
                                qualsiasi contenuto inappropriato. Il sistema non genera risposte pronte da copiare e
                                mantiene sempre un tono pedagogico, incoraggiante e rispettoso, adatto a studenti dai
                                6 ai 19 anni.
                            </p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">Geniotto fa i compiti al posto dello studente?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                No, e questa è la nostra scelta più importante. Geniotto adotta un approccio socratico:
                                guida lo studente con domande e suggerimenti invece di fornire soluzioni preconfezionate.
                                L&apos;obiettivo è insegnare il metodo, non completare il compito. Questo lo rende uno
                                strumento di apprendimento genuino, non un&apos;alternativa alla comprensione.
                            </p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">Quali materie copre Geniotto?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                Geniotto copre le principali materie scolastiche italiane: Matematica, Fisica, Chimica,
                                Italiano, Storia, Geografia, Inglese, Scienze e Informatica. Il catalogo si aggiorna
                                costantemente. Per ogni materia sono disponibili guide gratuite e percorsi di ripasso
                                strutturati.
                            </p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">I dati di mio figlio sono al sicuro?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                Sì. Il Mio Geniotto è conforme al <strong>GDPR europeo</strong>. Non vendiamo dati a
                                terze parti, non costruiamo profili pubblicitari sugli studenti e le conversazioni
                                non vengono associate all&apos;identità reale dell&apos;utente. Per i minori di 14 anni
                                è richiesto il consenso di un genitore o tutore legale.
                            </p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">Geniotto è disponibile su smartphone?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                Sì! L&apos;app ufficiale <strong>Il Mio Geniotto</strong> è disponibile per
                                dispositivi <strong>Android</strong> sul Google Play Store. Puoi usarla da smartphone
                                e tablet, con la stessa esperienza del sito web, ottimizzata per schermi touch.
                                La versione iOS è in fase di sviluppo.
                            </p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">Siete un&apos;alternativa agli insegnanti di ripetizione?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                No, e ci teniamo a essere chiari su questo. Geniotto è uno strumento
                                <strong> complementare</strong> all&apos;insegnamento tradizionale. Serve per quelle
                                2 ore di studio solitario in cui i dubbi bloccano lo studente prima che possa
                                chiedere al professore. Promuoviamo sempre il dialogo con i docenti in classe
                                per gli argomenti più complessi.
                            </p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">Come posso segnalare una risposta errata o inappropriata?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                All&apos;interno di ogni conversazione è presente un pulsante di segnalazione 🚩.
                                Puoi usarlo per segnalare risposte errate, contenuti non appropriati o comportamenti
                                imprevisti. Il nostro team revisiona ogni segnalazione entro 48 ore lavorative e
                                utilizza il feedback per migliorare il sistema.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
}
