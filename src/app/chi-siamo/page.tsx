import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ChiSiamoPage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            
            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-24 px-6">
                <div className="bg-white/60 glass rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-white/50">
                    <div className="flex flex-col items-center text-center mb-12">
                        <div className="relative w-24 h-24 mb-6">
                            <Image 
                                src="/geniotto-head.png" 
                                alt="Geniotto Logo" 
                                fill 
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
                            Chi Siamo: La Magia di Geniotto 🐺✨
                        </h1>
                        <p className="mt-4 text-slate-500 font-bold max-w-2xl text-lg">
                            Portiamo l&apos;innovazione dell&apos;Intelligenza Artificiale nelle case di migliaia di studenti, parlando la loro lingua.
                        </p>
                    </div>

                    <div className="space-y-12 text-slate-600 font-medium leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">🚀</span>
                                La nostra Missione
                            </h2>
                            <p>
                                Geniotto AI nasce da una visione semplice ma ambiziosa: rendere lo studio accessibile, stimolante e personalizzato per ogni studente. Crediamo che ogni bambino e ragazzo meriti un supporto dedicato che non si limiti a fornire risposte, ma che insegni il **metodo** e la **logica** dietro ogni soluzione.
                            </p>
                        </section>

                        <section className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
                            <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">🧠</span>
                                Tecnologia al servizio dell&apos;Educazione
                            </h2>
                            <p>
                                Utilizziamo i modelli linguistici più avanzati al mondo, ottimizzati e istruiti specificamente per il contesto scolastico italiano. Geniotto non è solo un software; è il risultato di mesi di test per garantire che il tono sia sempre incoraggiante, sicuro e adatto all&apos;età dell&apos;utente, dalla scuola primaria fino alle superiori.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">🤝</span>
                                Il team wolf.G
                            </h2>
                            <p>
                                wolf.G AI è un laboratorio di innovazione tecnologica appassionato di educazione. Lavoriamo costantemente per migliorare Geniotto, aggiungendo nuove materie, affinando le capacità di sintesi e garantendo che il servizio rimanga gratuito e sostenibile per tutte le famiglie italiane.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
