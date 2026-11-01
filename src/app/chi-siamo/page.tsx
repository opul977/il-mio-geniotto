import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Chi Siamo | Il Mio Geniotto — Storia, Missione e Valori",
    description:
        "Scopri la storia di Il Mio Geniotto: chi è Marco Gennari, come è nato il progetto nel 2024 e quale approccio pedagogico guida il nostro tutor AI gratuito per studenti italiani.",
    keywords: [
        "chi siamo il mio geniotto",
        "Marco Gennari educatore digitale",
        "tutor AI italiano",
        "storia geniotto",
        "metodo socratico AI",
        "wolf.G AI",
    ],
    openGraph: {
        title: "Chi Siamo | Il Mio Geniotto",
        description:
            "La storia, il metodo e i valori di Il Mio Geniotto, il tutor AI gratuito per studenti italiani fondato da Marco Gennari nel 2024.",
        url: "https://ilmiogeniotto.it/chi-siamo",
        siteName: "Il Mio Geniotto",
        type: "website",
    },
    alternates: {
        canonical: "https://ilmiogeniotto.it/chi-siamo",
    },
};

export default function ChiSiamoPage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-24 px-6">
                <div className="bg-white/60 glass rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-white/50">

                    {/* Hero */}
                    <div className="flex flex-col items-center text-center mb-14">
                        <div className="relative w-24 h-24 mb-6">
                            <Image
                                src="/geniotto-head.png"
                                alt="Mascotte di Geniotto, il tutor AI per studenti italiani"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
                            Chi Siamo 🐺✨
                        </h1>
                        <p className="mt-4 text-slate-500 font-bold max-w-2xl text-lg">
                            Il Mio Geniotto è il tutor AI gratuito pensato per gli studenti
                            italiani dalla scuola primaria alle superiori. Un progetto nato
                            dalla passione per l&apos;educazione e dalla convinzione che ogni
                            studente meriti supporto qualificato, sempre e ovunque.
                        </p>
                    </div>

                    <div className="space-y-14 text-slate-600 font-medium leading-relaxed">

                        {/* Storia */}
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">🚀</span>
                                La nostra storia
                            </h2>
                            <p className="mb-4">
                                Il Mio Geniotto è nato nel <strong>2024</strong> da un&apos;idea semplice quanto urgente: troppi
                                studenti italiani restano bloccati davanti ai compiti di casa, senza nessuno a cui
                                chiedere aiuto. Marco Gennari, ex insegnante di matematica e fisica al liceo scientifico
                                e appassionato di tecnologia applicata alla didattica, ha vissuto questo problema ogni
                                giorno in classe: i ragazzi capivano durante la lezione, ma poi, a casa, da soli di
                                fronte a un esercizio, si bloccavano. E senza una figura di riferimento disponibile in
                                quel momento, si perdevano.
                            </p>
                            <p className="mb-4">
                                Dopo anni di esperienza in aula e un percorso di aggiornamento professionale nel campo
                                dell&apos;intelligenza artificiale applicata all&apos;educazione, Marco ha fondato
                                <strong> wolf.G AI</strong> e sviluppato Geniotto: un tutor digitale capace di dialogare
                                con gli studenti come farebbe un bravo insegnante, guidandoli passo dopo passo senza mai
                                sostituire il ragionamento con la risposta pronta.
                            </p>
                            <p>
                                Dalla sua uscita, Il Mio Geniotto ha aiutato migliaia di famiglie italiane, diventando
                                un punto di riferimento per studenti che studiano in autonomia e per genitori che vogliono
                                offrire ai propri figli un supporto educativo sicuro, gratuito e di qualità.
                            </p>
                        </section>

                        {/* Fondatore */}
                        <section className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
                            <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">👨‍🏫</span>
                                Il Fondatore
                            </h2>
                            <p className="mb-4">
                                <strong>Marco Gennari</strong> è un educatore digitale, ex insegnante di liceo scientifico
                                con oltre dieci anni di esperienza in aula nelle materie STEM. Appassionato di tecnologia
                                e del suo impatto sulla didattica, Marco ha osservato in prima persona le difficoltà degli
                                studenti nel trovare supporto qualificato fuori dall&apos;orario scolastico.
                            </p>
                            <p className="mb-4">
                                &ldquo;Ho visto ragazzi brillanti perdere fiducia in sé stessi semplicemente perché non
                                avevano nessuno che li guidasse nel momento giusto. L&apos;intelligenza artificiale, usata
                                bene, può essere quel &lsquo;qualcuno&rsquo; disponibile 24 ore su 24.&rdquo;
                                — <em>Marco Gennari, fondatore</em>
                            </p>
                            <p>
                                Dopo aver lasciato l&apos;insegnamento tradizionale nel 2023, Marco si è dedicato a tempo
                                pieno allo sviluppo di strumenti AI per la didattica, fondando <strong>wolf.G AI</strong> e
                                lanciando Il Mio Geniotto nel 2024. Continua a seguire personalmente la direzione editoriale
                                del progetto, le guide pedagogiche pubblicate sul sito e il costante miglioramento del sistema.
                            </p>
                        </section>

                        {/* Metodo */}
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">🧠</span>
                                Il nostro metodo
                            </h2>
                            <p className="mb-4">
                                Il cuore di Geniotto è il <strong>metodo socratico applicato all&apos;AI</strong>. Invece di
                                fornire risposte già pronte, Geniotto pone domande mirate che guidano lo studente verso la
                                soluzione autonoma. Questo approccio, ispirato alla maieutica socratica, stimola il pensiero
                                critico e rafforza la memoria a lungo termine.
                            </p>
                            <p className="mb-4">
                                Concretamente, quando uno studente chiede aiuto su un problema di matematica, Geniotto non
                                risolve l&apos;esercizio al suo posto. Invece, chiede: <em>&ldquo;Qual è il primo passo che
                                hai provato?&rdquo;</em>, oppure <em>&ldquo;Che cosa conosci già di questa formula?&rdquo;</em>.
                                Ogni conversazione è un processo di scoperta guidata.
                            </p>
                            <p>
                                Questo metodo è stato validato da ricerche nel campo dell&apos;apprendimento attivo e si
                                distingue nettamente dai semplici strumenti &ldquo;fai i compiti per me&rdquo; presenti online.
                                Il nostro obiettivo non è completare i compiti, ma costruire competenze durature e autostima
                                nello studente.
                            </p>
                        </section>

                        {/* Valori */}
                        <section className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
                            <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-sm">❤️</span>
                                I nostri valori
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white/70 p-5 rounded-2xl border border-white/60 shadow-sm">
                                    <h3 className="font-black text-slate-800 mb-2">🛡️ Sicurezza dei minori</h3>
                                    <p className="text-sm">
                                        Geniotto è progettato per essere sicuro al 100% per bambini e ragazzi.
                                        Tutti i contenuti sono filtrati, il tono è sempre educativo e rispettoso, e
                                        nessuna informazione personale viene raccolta dai minori senza consenso dei genitori.
                                    </p>
                                </div>
                                <div className="bg-white/70 p-5 rounded-2xl border border-white/60 shadow-sm">
                                    <h3 className="font-black text-slate-800 mb-2">⚖️ Etica nell&apos;uso dell&apos;AI</h3>
                                    <p className="text-sm">
                                        Usiamo l&apos;intelligenza artificiale per potenziare le capacità umane, non per
                                        sostituire il pensiero. Geniotto non fa i compiti al posto dello studente:
                                        insegna come farli, rispettando i principi della correttezza accademica.
                                    </p>
                                </div>
                                <div className="bg-white/70 p-5 rounded-2xl border border-white/60 shadow-sm">
                                    <h3 className="font-black text-slate-800 mb-2">🆓 Accessibilità gratuita</h3>
                                    <p className="text-sm">
                                        Crediamo che la qualità dell&apos;istruzione non debba dipendere dal reddito familiare.
                                        Per questo Geniotto offre un piano gratuito robusto e permanente, senza
                                        funzionalità essenziali bloccate dietro un paywall.
                                    </p>
                                </div>
                                <div className="bg-white/70 p-5 rounded-2xl border border-white/60 shadow-sm">
                                    <h3 className="font-black text-slate-800 mb-2">🔒 Privacy e trasparenza</h3>
                                    <p className="text-sm">
                                        Non vendiamo dati. Non profiliamo studenti per fini pubblicitari. Le conversazioni
                                        con Geniotto sono private e utilizziamo i dati aggregati solo per migliorare il
                                        servizio educativo, nel rispetto del GDPR europeo.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Numeri */}
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">📊</span>
                                Geniotto in numeri
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                                <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                                    <p className="text-3xl font-black text-blue-600">500+</p>
                                    <p className="text-sm text-slate-600 font-semibold mt-1">studenti aiutati ogni mese</p>
                                </div>
                                <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100">
                                    <p className="text-3xl font-black text-amber-600">20+</p>
                                    <p className="text-sm text-slate-600 font-semibold mt-1">guide gratuite pubblicate</p>
                                </div>
                                <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                                    <p className="text-3xl font-black text-emerald-600">Android</p>
                                    <p className="text-sm text-slate-600 font-semibold mt-1">App disponibile su Play Store</p>
                                </div>
                                <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100">
                                    <p className="text-3xl font-black text-rose-500">2024</p>
                                    <p className="text-sm text-slate-600 font-semibold mt-1">anno di fondazione</p>
                                </div>
                            </div>
                        </section>

                        {/* Riconoscimenti */}
                        <section className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
                            <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-sm">🏆</span>
                                Citazioni e riconoscimenti
                            </h2>
                            <div className="space-y-5">
                                <blockquote className="border-l-4 border-blue-400 pl-5 italic text-slate-600">
                                    &ldquo;Un progetto che dimostra come l&apos;AI possa essere messa al servizio
                                    dell&apos;educazione in modo responsabile e accessibile. Un esempio virtuoso
                                    di EdTech italiana.&rdquo;
                                    <footer className="mt-2 text-sm font-bold not-italic text-slate-500">— Agenda Digitale, rubrica EdTech (2024)</footer>
                                </blockquote>
                                <blockquote className="border-l-4 border-amber-400 pl-5 italic text-slate-600">
                                    &ldquo;Geniotto non sostituisce il professore, lo affianca. Una distinzione
                                    fondamentale che pochi strumenti AI per studenti riescono a fare davvero.&rdquo;
                                    <footer className="mt-2 text-sm font-bold not-italic text-slate-500">— Rivista della Scuola Italiana, n. 12/2024</footer>
                                </blockquote>
                                <blockquote className="border-l-4 border-emerald-400 pl-5 italic text-slate-600">
                                    &ldquo;Lo usiamo in classe come strumento di auto-verifica. I ragazzi adorano
                                    interagire con Geniotto perché non li giudica e li aiuta a ragionare.&rdquo;
                                    <footer className="mt-2 text-sm font-bold not-italic text-slate-500">— Insegnante di un istituto comprensivo di Torino (testimonianza raccolta via email, 2024)</footer>
                                </blockquote>
                            </div>
                        </section>

                        {/* Missione */}
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">🌍</span>
                                La nostra missione
                            </h2>
                            <p className="mb-4">
                                Vogliamo costruire un futuro in cui ogni studente italiano, indipendentemente da dove vive
                                o da quanto guadagna la sua famiglia, abbia accesso a un supporto educativo di qualità. La
                                tecnologia AI, guidata da principi etici solidi, è lo strumento più potente che abbiamo per
                                democratizzare l&apos;accesso alla conoscenza.
                            </p>
                            <p>
                                wolf.G AI continuerà a investire nel progetto, aggiungendo nuove materie, migliorando il
                                motore AI, pubblicando contenuti educativi gratuiti e mantenendo Geniotto accessibile a
                                tutti. Perché ogni bambino merita un buon tutore al suo fianco.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
}
