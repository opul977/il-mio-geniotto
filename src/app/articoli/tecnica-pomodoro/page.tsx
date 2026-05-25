import Navbar from "@/components/Navbar";
import Image from "next/image";
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
                        <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Metodo di Studio
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            La Tecnica del Pomodoro: Come raddoppiare la concentrazione
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 6 min</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Passare 4 ore sui libri con il telefono accanto equivale a studiare male e sprecare il proprio pomeriggio. Scopriamo come la Tecnica del Pomodoro, unita a Geniotto, può salvarti la vita.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Cos&apos;è la tecnica del Pomodoro?</h2>
                            <p>
                                Inventata negli anni &apos;80, la Tecnica del Pomodoro prende il nome dal classico timer da cucina a forma di pomodoro. L&apos;idea è semplice: il cervello umano non è fatto per mantenere una concentrazione altissima per ore consecutive. Se proviamo a studiare per 3 ore di fila, la prima ora sarà produttiva, la seconda mediocre, la terza completamente inutile.
                            </p>
                            <p>
                                La tecnica consiste nel dividere lo studio in blocchi da 25 minuti di concentrazione totale, seguiti da 5 minuti di pausa. Dopo quattro &quot;pomodori&quot; (circa 2 ore), si prende una pausa più lunga di 15-30 minuti.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come applicarla con Geniotto</h2>
                            <p>
                                Durante i 25 minuti di lavoro, le distrazioni sono vietate. Nessuna notifica, nessun social media. E quando incontri un problema di matematica insormontabile o un concetto di storia che non capisci? 
                            </p>
                            <p>
                                Invece di bloccarti, perdere tempo a cercare su Google e finire a guardare video su YouTube, usa Geniotto. Inserisci il dubbio direttamente nella chat e chiedi una spiegazione immediata. Questo ti permette di mantenere il &quot;flusso&quot; e non sprecare il tuo prezioso blocco da 25 minuti.
                            </p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li><strong>Prepara il materiale:</strong> Prima di avviare il timer, metti tutto sul tavolo.</li>
                                <li><strong>Avvia il timer:</strong> 25 minuti. Spegni il telefono o usa un&apos;app per bloccare le notifiche.</li>
                                <li><strong>Lavora senza sosta:</strong> Se un pensiero ti distrae, scrivilo su un foglio per pensarci dopo.</li>
                                <li><strong>La pausa di 5 minuti:</strong> Alzati, bevi un bicchiere d&apos;acqua. Non guardare schermi!</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I vantaggi psicologici</h2>
                            <p>
                                Il vantaggio più grande di questa tecnica è la gestione dell&apos;ansia. L&apos;idea di dover studiare un intero capitolo è spaventosa e porta alla procrastinazione. L&apos;idea di dover studiare solo per 25 minuti è psicologicamente molto più accettabile. Una volta iniziato, la spinta iniziale ti porterà a completare facilmente il lavoro.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
