import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ArticleTemplate() {
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
                            Guida Genitori
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Schermi e Studio: Trovare l&apos;equilibrio digitale nell&apos;era dell&apos;AI
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 6 min</p>
                    </div>
                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La paura della dipendenza e il ruolo della Dopamina</h2>
                            <p>
                                Nell&apos;era digitale, distinguere tra &quot;uso produttivo&quot; dello schermo e &quot;intrattenimento passivo&quot; è diventato difficilissimo per i genitori. Il timore principale è legato alla dopamina, il neurotrasmettitore del piacere, che viene stimolato dai feedback istantanei dei social media e dei videogiochi. Questo crea un circolo vizioso in cui lo studio, che richiede uno sforzo cognitivo più lento e profondo, sembra &quot;noioso&quot; al confronto.
                            </p>
                            <p>
                                Tuttavia, non tutti gli schermi sono uguali. Quando un ragazzo utilizza uno strumento come Geniotto per risolvere un problema di fisica, il cervello non sta ricevendo dopamina passiva, ma sta affrontando una sfida cognitiva attiva. È il passaggio dal &quot;binge-watching&quot; allo &quot;strumento di potenziamento&quot;.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il concetto di Dietologia Digitale</h2>
                            <p>
                                Così come non eliminiamo il cibo perché esiste il junk food, non possiamo eliminare gli schermi perché esistono i social network. Dobbiamo insegnare ai ragazzi la &quot;dietologia digitale&quot;. Usare uno strumento educativo per 30-40 minuti al giorno per superare blocchi cognitivi nei compiti è l&apos;equivalente digitale di mangiare frutta e verdura.
                            </p>
                            <p>
                                La dietologia digitale si basa su tre pilastri:
                                <ul className="list-disc pl-6 space-y-4 mt-4">
                                    <li><strong>Qualità del contenuto:</strong> Prediligere app che stimolano il ragionamento rispetto a quelle che richiedono solo scroll infinito.</li>
                                    <li><strong>Consapevolezza temporale:</strong> Utilizzare timer o tecniche come il Pomodoro per frammentare lo studio e prevenire l&apos;affaticamento oculare.</li>
                                    <li><strong>Contesto ambientale:</strong> Creare &quot;zone tech-free&quot; in casa, come il tavolo da pranzo, per mantenere sacri i momenti di socializzazione umana.</li>
                                </ul>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Esempi di utilizzo sano in famiglia</h2>
                            <p>
                                Un ottimo modo per integrare l&apos;AI in modo sano è la &quot;condivisione dello schermo&quot;. Invece di lasciare il ragazzo solo in camera, il genitore può sedersi accanto a lui e dire: <em>&quot;Vediamo come Geniotto ti spiega questa poesia di Leopardi&quot;</em>. In questo modo lo schermo diventa un ponte di dialogo e non un muro di isolamento.
                            </p>
                            <p>
                                Altri consigli pratici:
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Niente schermi un&apos;ora prima di dormire (la luce blu inibisce la melatonina e peggiora la qualità del sonno).</li>
                                    <li>Separare fisicamente il tablet per lo studio dal telefono per lo svago (cambiare dispositivo aiuta il cervello a cambiare &quot;modalità&quot;).</li>
                                    <li>Mantenere una postura corretta e illuminazione adeguata nella stanza per evitare mal di testa e stanchezza.</li>
                                </ul>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La fiducia come motore dello sviluppo</h2>
                            <p>
                                Invece di utilizzare esclusivamente app di spionaggio per controllare cosa fa il ragazzo, si consiglia un approccio basato sulla responsabilizzazione. Stabilire obiettivi chiari (es. &quot;Se finisci geometria entro le 17 usando l&apos;AI per i punti difficili, avrai un&apos;ora libera extra&quot;). L&apos;efficienza viene premiata, e il ragazzo impara a gestire il proprio tempo come una risorsa preziosa.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il weekend: Disconnessione e Ricarica</h2>
                            <p>
                                Durante il weekend, è fondamentale staccare completamente. La &quot;disintossicazione digitale&quot; periodica aiuta il cervello a resettare i livelli di dopamina e a riscoprire il piacere della noia costruttiva, della lettura su carta e dello sport all&apos;aria aperta. Il segreto di un buon studente non è quanto tempo passa sui libri, ma quanto è di qualità il tempo che dedica ad ogni attività.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
