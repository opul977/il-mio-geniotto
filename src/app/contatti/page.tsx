import Navbar from "@/components/Navbar";

export default function ContattiPage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            
            <div className="flex-1 max-w-5xl mx-auto w-full pt-32 pb-24 px-6 flex flex-col lg:flex-row gap-12">
                
                {/* Colonna Sinistra: Info di Contatto */}
                <div className="flex-1">
                    <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                        Supporto Ufficiale
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight mb-6">
                        Mettiti in contatto con noi 📩
                    </h1>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed mb-12">
                        Siamo qui per aiutarti. Che tu sia un genitore con dubbi sul metodo di studio o un insegnante interessato a collaborare, il nostro team è a tua disposizione.
                    </p>

                    <div className="space-y-8 bg-white/60 p-8 rounded-3xl border border-white/50 shadow-lg">
                         <div>
                            <h3 className="text-xl font-black text-slate-800 mb-2">Assistenza Tecnica</h3>
                            <p className="text-slate-500 font-medium">Hai problemi con il tuo account o con l&apos;acquisto dei gettoni?</p>
                            <a href="mailto:supporto@ilmiogeniotto.it" className="text-primary font-bold hover:underline mt-2 inline-block">supporto@ilmiogeniotto.it</a>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-black text-slate-800 mb-2">Informazioni Commerciali</h3>
                            <p className="text-slate-500 font-medium">Per partnership, pubblicità o adozioni scolastiche.</p>
                            <a href="mailto:info@ilmiogeniotto.it" className="text-primary font-bold hover:underline mt-2 inline-block">info@ilmiogeniotto.it</a>
                        </div>

                         <div>
                            <h3 className="text-xl font-black text-slate-800 mb-2">Dati Aziendali</h3>
                            <p className="text-slate-600 font-medium mb-1"><strong>wolf.G AI Educational Hub</strong></p>
                            <p className="text-slate-500 font-medium text-sm">Operante in Italia, con focus sull&apos;innovazione pedagogica digitale.</p>
                        </div>
                    </div>
                </div>

                {/* Colonna Destra: FAQ Dettagliate (Molto buone per AdSense) */}
                <div className="flex-1 lg:pl-12">
                    <h2 className="text-3xl font-black text-slate-800 mb-8">Domande Frequenti (FAQ)</h2>
                    
                    <div className="space-y-6">
                        <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">Come funziona il limite di gettoni giornaliero?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                Ogni utente gratuito riceve 5000 gettoni al giorno. Questo limite serve a mantenere il sistema gratuito per tutti. Si resetta automaticamente ogni notte a mezzanotte (UTC). Se hai bisogno di un uso intensivo, offriamo pacchetti &quot;Geniotto PRO&quot;.
                            </p>
                        </div>

                        <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">Mio figlio è al sicuro mentre usa l&apos;IA?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                Assolutamente sì. Geniotto è programmato con rigidi filtri (&quot;cervello di sicurezza&quot;) che bloccano linguaggio inappropriato, non generano compiti già fatti pronti da copiare e mantengono sempre un tono pedagogico e incoraggiante.
                            </p>
                        </div>

                         <div className="bg-white/80 p-6 rounded-2xl border border-white/50 shadow-sm">
                            <h4 className="font-black text-slate-800 text-lg mb-2">Siete un&apos;alternativa agli insegnanti di ripetizione?</h4>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                No, siamo uno strumento complementare. Geniotto serve per quelle 2 ore di studio solitario a casa dove i dubbi bloccano lo studente. Promuoviamo sempre il confronto con i professori in classe per chiarire gli argomenti più ostici.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </main>
    );
}
