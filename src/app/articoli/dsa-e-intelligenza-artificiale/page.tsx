import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSA e Intelligenza Artificiale: Una Rivoluzione per l'Apprendimento | Il Mio Geniotto",
  description: "Come l'intelligenza artificiale sta cambiando la vita degli studenti con DSA. Strumenti, strategie e opportunità concrete per dislessia, discalculia e disortografia.",
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
                        <span className="bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Inclusione
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            DSA e Intelligenza Artificiale: Una Rivoluzione per l&apos;Apprendimento
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 9 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Ogni studente con DSA porta con sé un talento unico che spesso i sistemi scolastici tradizionali non riescono a vedere. L&apos;intelligenza artificiale sta cambiando questa storia — non sostituendo gli insegnanti, ma abbattendo le barriere che separano questi ragazzi dal loro pieno potenziale.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Cosa sono i DSA e perché il sistema tradizionale spesso non basta</h2>
                            <p>
                                I Disturbi Specifici dell&apos;Apprendimento — comunemente abbreviati in DSA — comprendono un insieme di condizioni neurologiche che influenzano la capacità di leggere (dislessia), scrivere correttamente (disortografia e disgrafia) e fare calcoli matematici (discalculia). Secondo i dati del Ministero dell&apos;Istruzione italiano, circa il 5-6% degli studenti italiani presenta una diagnosi di DSA certificata, ma si stima che molti altri casi rimangano non diagnosticati, soprattutto nelle aree meno servite.
                            </p>
                            <p>
                                È fondamentale chiarire fin dall&apos;inizio cosa i DSA NON sono: non sono una forma di pigrizia, non sono un deficit di intelligenza e non dipendono da problemi famigliari o educativi. Al contrario, numerose ricerche mostrano che molte persone con dislessia presentano capacità di pensiero visivo-spaziale, creativo e divergente significativamente superiori alla media. Albert Einstein, Leonardo da Vinci, Steve Jobs e Richard Branson sono tra le figure storiche e contemporanee per cui viene documentato o ipotizzato un profilo neurodivergente.
                            </p>
                            <p>
                                Il problema non è nel cervello di questi studenti: è nella rigidità del sistema scolastico, costruito per secoli attorno alla parola scritta come unico canale valido di conoscenza. Un ragazzo con dislessia grave che riesce a comprendere perfettamente un concetto fisico ma non riesce a leggerlo sul libro di testo non ha un problema di fisica: ha un problema di accessibilità al testo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come l&apos;AI trasforma concretamente il supporto allo studio</h2>
                            <p>
                                L&apos;intelligenza artificiale offre una serie di vantaggi concreti e misurabili per gli studenti con DSA, diversi e complementari rispetto agli strumenti compensativi tradizionali già previsti dalla Legge 170/2010.
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Riformulazione adattiva dei testi:</strong> Un assistente AI può prendere un paragrafo complesso di storia o scienze e riscriverlo in frasi più brevi, con lessico semplificato, senza perdere il contenuto informativo essenziale. Questo riduce drasticamente il carico cognitivo nella decodifica del testo, lasciando più energia mentale per la comprensione e la memorizzazione.</li>
                                <li><strong>Pazienza infinita e ripetizione senza giudizio:</strong> Ogni insegnante umano, per quanto dedito, ha un limite di tempo e una soglia di pazienza comprensibile. Un sistema AI può rispiegare lo stesso concetto dieci, venti, cinquanta volte, con metafore sempre diverse, senza mai mostrare frustrazione o far sentire lo studente inadeguato. Questo è di fondamentale importanza per preservare l&apos;autostima di ragazzi che spesso hanno già accumulato anni di esperienze negative.</li>
                                <li><strong>Interrogazione socratica guidata:</strong> Invece di limitarsi a fornire risposte, un AI ben configurato può guidare lo studente attraverso domande progressive verso la scoperta autonoma della soluzione. Questo approccio, ispirato al metodo socratico, è particolarmente efficace per chi ha una memoria procedurale forte ma difficoltà con la memoria dichiarativa.</li>
                                <li><strong>Generazione di mappe concettuali e riassunti visivi:</strong> Per gli studenti con dislessia che hanno capacità visive superiori, l&apos;AI può trasformare un capitolo di testo in uno schema strutturato, una lista di punti chiave o una descrizione di mappa mentale da disegnare a mano.</li>
                                <li><strong>Supporto alla scrittura:</strong> Per chi ha disortografia, gli strumenti AI di correzione e riformulazione vanno ben oltre il classico correttore ortografico. Possono suggerire strutture di frasi alternative, identificare incoerenze logiche nel testo e aiutare a esprimere idee complesse in modo chiaro.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Strumenti AI specifici e come sceglierli</h2>
                            <p>
                                Il panorama degli strumenti AI utili per studenti con DSA si è enormemente ampliato negli ultimi due anni. È importante distinguere tra categorie diverse:
                            </p>
                            <p>
                                <strong>Sintesi vocale avanzata:</strong> Strumenti come Microsoft Immersive Reader (integrato in Word e OneNote) e Google Read&Write offrono lettura ad alta voce di qualsiasi testo digitale con voci sempre più naturali. La chiave è che ora questi strumenti sono gratuiti o inclusi nelle suite già in uso nelle scuole.
                            </p>
                            <p>
                                <strong>Assistenti conversazionali:</strong> I modelli di linguaggio come quelli alla base di molte piattaforme educative permettono di avere una vera conversazione sul materiale di studio. Lo studente può fare domande libere, chiedere esempi pratici, richiedere analogie con la vita quotidiana. Questa modalità dialogica è particolarmente efficace per chi apprende meglio attraverso la discussione che attraverso la lettura autonoma.
                            </p>
                            <p>
                                <strong>Strumenti per la matematica:</strong> App come Photomath o Mathway permettono di fotografare un esercizio e ricevere la soluzione passo per passo. Questo non sostituisce la comprensione del metodo, ma può essere un punto di partenza prezioso per uno studente con discalculia che vuole seguire il ragionamento a ritroso, partendo dalla soluzione corretta.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il ruolo della famiglia e degli insegnanti nel percorso con l&apos;AI</h2>
                            <p>
                                L&apos;intelligenza artificiale non è e non deve essere una soluzione solitaria. Per essere davvero efficace nel supporto agli studenti con DSA, l&apos;AI deve essere integrata in una rete di supporto che include genitori consapevoli, insegnanti di sostegno formati e, quando necessario, logopedisti e neuropsicologi.
                            </p>
                            <p>
                                I genitori possono svolgere un ruolo fondamentale nell&apos;individuare gli strumenti più adatti e nell&apos;aiutare il figlio a sviluppare un uso autonomo e consapevole della tecnologia. Non si tratta di fare i compiti al posto del ragazzo, ma di costruire insieme le scaffolature — i supporti temporanei — che permettono a uno studente di raggiungere traguardi che altrimenti rimarrebbero inaccessibili.
                            </p>
                            <p>
                                Gli insegnanti, dal canto loro, devono essere informati sugli strumenti che i loro studenti usano, per poterli valorizzare e non bloccarli. In Italia, la Legge 170/2010 garantisce agli studenti con DSA certificato il diritto all&apos;uso di strumenti compensativi durante le verifiche, inclusi quelli tecnologici. L&apos;aggiornamento continuo del corpo docente su queste tematiche è ancora una delle sfide aperte del sistema scolastico italiano.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Viviamo in un momento storico straordinario per l&apos;inclusione scolastica. Per la prima volta, la tecnologia rende possibile un&apos;educazione genuinamente personalizzata — non come privilegio riservato a chi può permettersi tutori privati, ma come strumento accessibile a chiunque abbia una connessione internet. Gli studenti con DSA che imparano a sfruttare in modo intelligente questi strumenti non solo superano gli ostacoli immediati dello studio quotidiano, ma sviluppano anche una competenza tecnologica che sarà un vantaggio enorme nel mondo del lavoro futuro.
                            </p>
                            <p>
                                La sfida non è tecnica ma culturale: abbattere lo stigma, formare gli insegnanti, informare le famiglie e permettere a ogni ragazzo — indipendentemente da come il suo cervello elabora le informazioni — di esprimere il suo autentico potenziale.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Legge 8 ottobre 2010, n. 170 — <em>Nuove norme in materia di disturbi specifici di apprendimento in ambito scolastico</em>. Gazzetta Ufficiale della Repubblica Italiana.</li>
                                <li>• Shaywitz, S. (2003). <em>Overcoming Dyslexia</em>. Knopf. — Ricerca clinica sulla dislessia e sulle neuroscienze dell&apos;apprendimento della lettura.</li>
                                <li>• MIUR (2022). <em>Dati statistici sui DSA nelle scuole italiane</em>. Ministero dell&apos;Istruzione, dell&apos;Università e della Ricerca — Rapporto annuale.</li>
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
