import Navbar from "@/components/Navbar";

export default function ContattiPage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            
            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-24 px-6">
                <div className="bg-white/60 glass rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-white/50">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
                            Contattaci ✉️
                        </h1>
                        <p className="mt-4 text-slate-500 font-bold max-w-2xl mx-auto text-lg">
                            Hai domande, suggerimenti o vuoi collaborare con noi? Siamo qui per ascoltarti.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/80 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                            <h2 className="text-xl font-black text-slate-800 mb-6">Informazioni di contatto</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        📧
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Supporto</p>
                                        <p className="font-bold text-slate-700">support@ilmiogeniottostudi.it</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sede</p>
                                        <p className="font-bold text-slate-700">Innovazione wolf.G, Italia</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-500 flex items-center justify-center shrink-0">
                                        ⏰
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Risposta garantita</p>
                                        <p className="font-bold text-slate-700">Entro 48 ore lavorative</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                            <h2 className="text-xl font-black mb-4">Feedback Veloce 🚀</h2>
                            <p className="font-bold text-primary-foreground/80 mb-6 text-sm leading-relaxed">
                                Le tue opinioni aiutano Geniotto a diventare sempre più intelligente. Scrivici cosa vorresti vedere nel prossimo aggiornamento!
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white/20 p-4 rounded-2xl flex items-center gap-3">
                                    <span className="text-xl">💡</span>
                                    <p className="text-sm font-bold">Inviaci i tuoi consigli</p>
                                </div>
                                <div className="bg-white/20 p-4 rounded-2xl flex items-center gap-3">
                                    <span className="text-xl">🐞</span>
                                    <p className="text-sm font-bold">Segnalaci un malfunzionamento</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12 p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 text-center">
                        <p className="text-slate-500 font-bold mb-4">
                            Per questioni amministrative o partnership commerciali, scrivi a:
                        </p>
                        <p className="text-2xl font-black text-slate-800 tracking-tight">info@ilmiogeniottostudi.it</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
