import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function GuidaIaStudioPage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            
            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-24 px-6">
                <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-white/50">
                    <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                        Guida Strategica 📚
                    </span>
                    
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-8">
                        Come Studiare Meglio con l&apos;AI: La Guida di Geniotto 🐺🧠
                    </h1>

                    <div className="relative w-full h-72 sm:h-96 rounded-[2.5rem] overflow-hidden mb-12 shadow-inner">
                        <Image 
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80" 
                            alt="Studente che usa l'IA" 
                            fill 
                            className="object-cover"
                        />
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            L&apos;Intelligenza Artificiale non è un traduttore o un calcolatore automatico: è un tutor personale che può rivoluzionare il tuo metodo di studio. Scopri come usarla senza smettere di imparare.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">1. Non chiedere la soluzione, chiedi il metodo</h2>
                            <p>
                                Il segreto per usare Geniotto al meglio non è scrivere *&quot;Dammi la soluzione di questo problema&quot;*, ma chiedere *&quot;Spiegami i passaggi logici per arrivare a questa soluzione&quot;*. Quando capisci il **perché** di un passaggio, quel concetto rimarrà impresso nella tua memoria a lungo termine.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">2. Il riassunto interattivo</h2>
                            <p>
                                Hai un capitolo di storia di 10 pagine? Chiedi a Geniotto di riassumere i punti chiave. Ma non fermarti qui: prova a dirgli *&quot;Adesso fammi 3 domande su quello che hai riassunto per vedere se ho capito&quot;*. Questo trasforma lo studio da passivo ad attivo.
                            </p>
                        </section>

                        <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                            <h2 className="text-2xl font-black text-slate-800 mb-4">3. Spiegazioni Multi-Livello</h2>
                            <p>
                                Uno dei superpoteri dell&apos;IA è la capacità di semplificare. Se un concetto di fisica sembra indecifrabile, chiedi a Geniotto in modalità **Primaria**. Una volta capito il concetto base, passa alla modalità **Media** o **Superiori** per aggiungere i dettagli tecnici. È come avere tre tutor diversi in uno!
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">4. La Sicurezza Prima di Tutto</h2>
                            <p>
                                Ricorda sempre che l&apos;IA è un supporto, non un sostituto dei tuoi libri o dei tuoi professori. Usa Geniotto per sbloccarti quando sei solo a casa e non riesci a procedere, ma verifica sempre i fatti storici e le date importanti sui tuoi testi scolastici.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-slate-100 flex flex-col items-center">
                            <h3 className="text-xl font-black text-slate-800 mb-4">Pronto a iniziare? 🚀</h3>
                            <a href="/chat" className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all">
                                PROVA GENIOTTO ORA 🐺
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
