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
                        <span className="bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Inclusione
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            DSA e Intelligenza Artificiale: Una rivoluzione per l&apos;apprendimento
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 7 min</p>
                    </div>
                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Cosa sono i DSA e perché l&apos;AI fa la differenza</h2>
                            <p>
                                I Disturbi Specifici dell&apos;Apprendimento (DSA) come la dislessia, la disortografia e la discalculia colpiscono una percentuale significativa della popolazione scolastica. Per anni, questi studenti hanno lottato contro metodi di insegnamento standardizzati che non si adattavano alle loro menti, spesso brillanti ma neurodivergenti.
                            </p>
                            <p>
                                L&apos;Intelligenza Artificiale, e in particolare piattaforme adattive come Geniotto, rappresentano la più grande rivoluzione tecnologica per l&apos;inclusione scolastica dall&apos;invenzione degli audiolibri.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Pazienza infinita e Spiegazioni Personalizzate</h2>
                            <p>
                                Uno studente con dislessia spesso si stanca enormemente nella decodifica del testo scritto, arrivando esausto al momento della comprensione. L&apos;AI permette di riformulare testi complessi in paragrafi più brevi, con un linguaggio semplificato.
                            </p>
                            <p>
                                Inoltre, l&apos;AI ha la caratteristica fondamentale che nessun tutor umano possiede: una pazienza letteralmente infinita. Se uno studente ha bisogno che un concetto di grammatica venga ripetuto 15 volte, con 15 metafore diverse, l&apos;Intelligenza Artificiale lo farà senza mai giudicare o mostrare frustrazione, preservando l&apos;autostima del ragazzo.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Strumenti compensativi di nuova generazione</h2>
                            <p>
                                I classici strumenti compensativi come la sintesi vocale e le mappe concettuali pre-stampate stanno diventando sempre più interattivi. Invece di limitarsi a leggere ad alta voce, l&apos;IA può dialogare con lo studente. Può interrogare in modo socratico, guidando l&apos;alunno verso la soluzione anziché fornirgliela passivamente.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
