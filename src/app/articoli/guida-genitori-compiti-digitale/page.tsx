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
                            Genitorialità Digitale
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Guida per Genitori: Supportare i figli nell&apos;era dell&apos;AI 👪
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 7 min</p>
                    </div>

                    <div className="relative w-full h-72 sm:h-96 rounded-[2.5rem] overflow-hidden mb-12 shadow-inner">
                        <Image 
                            src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&q=80" 
                            alt="Genitori e figli che studiano insieme" 
                            fill 
                            className="object-cover"
                        />
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            L&apos;Intelligenza Artificiale fa paura. Come genitori, il primo istinto è spesso quello di proibirla per paura che &quot;faccia i compiti al posto loro&quot;. Ma sottrarre l&apos;AI ai ragazzi di oggi equivale a sottrarre loro la calcolatrice 20 anni fa. Scopriamo come gestirla in modo educativo.
                        </p>

                        <p>
                            L&apos;orologio segna le 19:30. Sei appena tornato da lavoro e sulla tavola, invece della cena, c&apos;è un libro di geometria aperto con due quaderni inzuppati di lacrime di frustrazione. 
                            Questa è la tipica scena in moltissime famiglie italiane. La &quot;guerra dei compiti&quot; non solo esaurisce i ragazzi, ma logora i rapporti familiari.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">L&apos;illusione del &quot;Fai da solo&quot;</h2>
                            <p>
                                Negli anni &apos;90, se non capivamo un concetto, chiedevamo a mamma o a papà (che, onestamente, l&apos;avevano dimenticato dal 1975), oppure dovevamo aspettare il giorno dopo sperando che il professore ri-spiegasse. Oggi l&apos;informazione è immediata, ma l&apos;eccesso di informazioni di Google spesso confonde. 
                                La vera sfida non è trovare la risposta, ma <b>strutturarla</b>.
                            </p>
                        </section>

                        <section className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La Regola del Co-Pilota</h2>
                            <p>
                                I ragazzi tendono al &quot;copia-incolla&quot; non per cattiveria, ma per un principio di minima resistenza. Se hanno davanti ChatGPT senza filtri, è ovvio che vi cederanno. 
                            </p>
                            <p>
                                Piattaforme come <strong>Geniotto</strong> sono nate per risolvere questo problema. Sono &quot;Tutor&quot;, non agenti esecutivi. Il trucco per i genitori è applicare la <em>Regola del Co-pilota</em>:
                                <ul className="list-disc pl-6 mt-4 opacity-80">
                                    <li>Esaminate la consegna insieme.</li>
                                    <li>Decidete insieme quali domande fare a Geniotto per sbloccare la situazione.</li>
                                    <li>Fate generare a Geniotto 3 domande finali per interrogare vostro figlio sull&apos;argomento.</li>
                                </ul>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Meno ansia da prestazione scolastica</h2>
                            <p>
                                Spesso i genitori proiettano le proprie ansie di successo sui voti dei figli. L&apos;Intelligenza artificiale permette di democratizzare lo studio. Un ragazzo che ha bisogno di ascoltare 10 volte la spiegazione sui Vulcani può farlo, senza il timore di alzare la mano in classe e sentirsi &quot;lento&quot;. L&apos;AI ha pazienza infinita, e può restituire al ragazzo quell&apos;autostima fondamentale per la serenità di tutta la famiglia.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-slate-100 flex flex-col items-center">
                            <h3 className="text-xl font-black text-slate-800 mb-4">Prova insieme a tuo figlio 🚀</h3>
                            <a href="/chat" className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all">
                                ENTRA IN GENIOTTO
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
