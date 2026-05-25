import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pensiero Critico: La bussola contro le Fake News | Il Mio Geniotto",
    description: "Insegnare ai ragazzi a verificare le fonti nell'era dell'abbondanza informativa. Come l'AI può aiutarci a smascherare le bugie.",
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
                            Cittadinanza
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Pensiero Critico: Sviluppare la bussola nell&apos;oceano dell&apos;informazione
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Maggio 2026 • Tempo di lettura: 11 min</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;eccesso di dati e la scarsità di verità</h2>
                            <p>
                                Viviamo in un&apos;epoca paradossale: non siamo mai stati così connessi all&apos;informazione, ma non siamo mai stati così a rischio di disinformazione. Per i ragazzi della Generazione Z e Alpha, distinguere un fatto scientifico da una teoria del complotto o da una Fake News creata ad arte è diventata una sfida quotidiana. Il &quot;copia e incolla&quot; acritico è il nemico numero uno dell&apos;intelligenza.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Cos&apos;è davvero il Pensiero Critico?</h2>
                            <p>
                                Contrariamente a quanto si pensa, il pensiero critico non significa &quot;criticare tutto&quot;. È la capacità di analizzare le informazioni in modo oggettivo, valutare le fonti e riconoscere i propri bias cognitivi. È chiedersi: <em>&quot;Chi lo dice? Perché lo dice? Quali prove ci sono?&quot;</em>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;AI come strumento di Fact-Checking</h2>
                            <p>
                                Paradossalmente, proprio l&apos;AI che molti temono possa generare notizie false è il miglior strumento per smascherarle. Usando Geniotto, gli studenti possono imparare a fare &quot;Cross-Check&quot;. Se leggono una notizia dubbia, possono chiedere: <em>&quot;Geniotto, quali sono le fonti scientifiche a supporto di questa tesi? Ci sono pareri discordanti di esperti autorevoli?&quot;</em>.
                            </p>
                            <p>
                                Invece di dare una risposta definitiva, l&apos;IA può guidare il ragazzo a vedere diverse prospettive, insegnandogli a non accontentarsi del primo risultato su un motore di ricerca.
                            </p>
                        </section>

                        <section className="bg-red-50 p-8 rounded-3xl border border-red-100 italic">
                            &quot;La libertà di parola non serve a molto se non hai la capacità di distinguere il rumore dal segnale.&quot;
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Le 3 Regole d&apos;Oro per gli studenti</h2>
                            <ul className="list-disc pl-6 space-y-4">
                                <li><strong>Verifica l&apos;URL:</strong> Molti siti di Fake News imitano testate famose cambiando una sola lettera.</li>
                                <li><strong>Cerca l&apos;autore:</strong> Chi ha scritto l&apos;articolo? È un esperto o un profilo anonimo creato ieri?</li>
                                <li><strong>Controlla la data:</strong> Spesso notizie vecchie vengono riciclate come attuali per creare allarmismo.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                Il pensiero critico è il &quot;muscolo&quot; più importante da allenare a scuola. In un mondo dominato dagli algoritmi, la capacità di fermarsi, riflettere e dubitare in modo costruttivo è ciò che ci rende cittadini liberi e non semplici consumatori di bit.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl">⚖️</div>
                        <div className="text-center sm:text-left">
                            <h4 className="font-black text-slate-800">Cittadinanza Digitale</h4>
                            <p className="text-slate-500 text-sm font-medium">Educare alla verità nell&apos;era dell&apos;abbondanza.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
