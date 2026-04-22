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
                            Matematica
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Matematica: Dal panico alla logica con il metodo Geniotto 🔢
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 6 min</p>
                    </div>

                    <div className="relative w-full h-72 sm:h-96 rounded-[2.5rem] overflow-hidden mb-12 shadow-inner">
                        <Image 
                            src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&q=80" 
                            alt="Matematica e lavagna" 
                            fill 
                            className="object-cover"
                        />
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Sudorazione fredda davanti ai numeri? Ansia da prestazione? La matematica non è un mostro da sconfiggere, è un linguaggio da imparare a parlare. Ed è molto più logico di quanto sembra.
                        </p>

                        <p>
                            Una delle cause principali dell&apos;odio verso la matematica nelle scuole è l&apos;insegnamento <em>mnemonico</em>. Si impara a memoria una formula per superare la verifica del venerdì, e il lunedì la si dimentica. Quando le formule si accumulano, il castello di carte crolla e si entra nel &quot;panico da matematica&quot;. 
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La differenza tra &quot;Calcolare&quot; e &quot;Capire&quot;</h2>
                            <p>
                                Il calcolo lo fanno tranquillamente le calcolatrici. Il vero scopo della matematica è allenare il cervello al <em>problem solving</em>. Con <strong>Geniotto</strong>, il nostro focus primario non è restituirti il numero corretto alla fine di un&apos;espressione. Se vuoi solo il risultato, esistono app di scansione automatica. Il nostro scopo è chiederti: &quot;Perché, in questo passaggio, hai diviso invece che moltiplicare?&quot;. 
                            </p>
                            <p>
                                L&apos;Intelligenza Artificiale agisce come un correttore paziente: ti guarda mentre &quot;sbagli&quot; in un ambiente sicuro e ti accompagna gentilmente verso la deduzione logica corretta.
                            </p>
                        </section>

                        <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Come usare l&apos;IA per fare pace con la Matematica</h2>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>
                                    <strong>Mai chiedere il risultato secco:</strong> Quando blocchi, chiedi a Geniotto &quot;Spiegami la teoria che sta dietro le derivate usando un esempio con le macchine in corsa&quot;. Inizierei a visualizzare la matematica nel mondo reale!
                                </li>
                                <li>
                                    <strong>Correggere l&apos;errore, non riscrivere l&apos;esercizio:</strong> Manda una foto dei tuoi appunti o scrivi i tuoi passaggi nella chat e scrivi: &quot;Il risultato del libro è diverso, puoi trovare a che passaggio ho commesso un errore di distrazione?&quot;
                                </li>
                                <li>
                                    <strong>Fare il &quot;Game Quiz&quot;:</strong> Chiedi all&apos;IA: &quot;Dammi un problema di geometria sulla piramide, dammi un indizio ma non la risposta, e vediamo se ci arrivo&quot;. Diventa una sfida, non un compito.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">I numeri sono il linguaggio dell&apos;universo (letteralmente)</h2>
                            <p>
                                Cambiare mentalità è il 90% del lavoro. Non dire &quot;non sono portato per la matematica&quot;. Dirlo è come dire &quot;non sono portato per comprendere le regole di un gioco da tavolo&quot;. Si tratta solo di capire il manuale. Con un metodo di studio step-by-step e la giusta pazienza (che Geniotto ha all&apos;infinito!), i voti possono passare da un 4 a un 8 giro di un quadrimestre. È matematica, dopotutto.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-slate-100 flex flex-col items-center">
                            <h3 className="text-xl font-black text-slate-800 mb-4">Pronto a battere il mostro dei numeri? 🗡️</h3>
                            <a href="/chat" className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all">
                                CHIEDI A GENIOTTO
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
