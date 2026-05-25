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
                        <span className="bg-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Storia e Mnemonica
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Tecniche Infallibili per Memorizzare Date Storiche senza sforzo
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 5 min</p>
                    </div>
                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La Storia non è un elenco telefonico</h2>
                            <p>
                                Il modo peggiore per studiare storia è trattare il libro come un elenco del telefono da imparare a memoria. Le date non sono numeri casuali, sono i perni attorno ai quali ruota un racconto, una narrazione di cause ed effetti. Se capisci la trama, i numeri si posizioneranno da soli.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Associazione Immagini (Tecnica dei Loci)</h2>
                            <p>
                                Il cervello umano è pessimo a ricordare i numeri, ma è straordinario a ricordare le immagini. Se devi ricordare che la Rivoluzione Francese è iniziata nel 1789, visualizza l&apos;evento. Usa una rima fonetica. Associa ogni numero a una lettera o a un oggetto e crea una storiella assurda. L&apos;assurdità garantisce la memorizzazione a lungo termine.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;aiuto dell&apos;Intelligenza Artificiale</h2>
                            <p>
                                Con Geniotto, puoi trasformare il ripasso in un gioco interattivo. Invece di rileggere i capitoli dieci volte, chiedi all&apos;AI: &quot;Facciamo un quiz a risposta multipla sulla Seconda Guerra Mondiale. Fammi una domanda alla volta sulle date chiave, e se sbaglio spiegami il contesto storico di quella data per farmela ricordare meglio&quot;. Il recupero attivo delle informazioni è 10 volte più efficace della lettura passiva.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
