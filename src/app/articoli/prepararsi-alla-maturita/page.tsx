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
                        <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Esami di Stato
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Prepararsi all&apos;Esame di Maturità senza impazzire
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 8 min</p>
                    </div>
                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;Elefante nella Stanza</h2>
                            <p>
                                L&apos;Esame di Stato è spesso mitizzato come un ostacolo insormontabile. La verità è che non è un test della tua intelligenza, ma un test delle tue capacità organizzative. La mole di materiale da studiare (o ripassare) per l&apos;esame di maturità è troppa per essere gestita nell&apos;ultimo mese. Serve una strategia a lungo termine.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I collegamenti interdisciplinari</h2>
                            <p>
                                Il colloquio orale è basato sui famosi &quot;collegamenti&quot;. I professori ti daranno un&apos;immagine, un testo o una frase, e tu dovrai spaziare tra Storia, Letteratura Italiana, Filosofia e Scienze. L&apos;Intelligenza Artificiale è la regina delle connessioni. 
                            </p>
                            <p>
                                Se stai studiando Pirandello, puoi chiedere a Geniotto: &quot;Come posso collegare il concetto di &apos;Maschera&apos; di Pirandello a un argomento storico del Novecento e a una teoria filosofica?&quot;. L&apos;AI potrebbe suggerirti collegamenti brillanti con i regimi totalitari e Freud, fornendoti spunti originali per stupire la commissione.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Simulare l&apos;Esame Orale</h2>
                            <p>
                                Usa l&apos;AI come commissione virtuale. Dalle questo comando: &quot;Agisci come un professore severo ma giusto. Ti dirò un argomento a piacere. Tu ascoltami, e poi fammi due domande difficili per testare la mia reale comprensione, una domanda alla volta&quot;. Questo allenerà i tuoi nervi e la tua capacità di improvvisazione sotto pressione.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
