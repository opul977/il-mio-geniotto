"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

const pricingPlans = [
    {
        name: "Giornaliero",
        price: "1.99€",
        duration: "/24 ore",
        description: "Perfetto per un'emergenza compiti o per provare Geniotto senza limiti per un giorno intero.",
        features: ["Accesso Illimitato 24h", "Tutte le materie incluse", "Nessuna pubblicità", "Risposte ultra-rapide"],
        color: "bg-blue-50 border-blue-100 text-blue-600",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
        icon: "⚡"
    },
    {
        name: "Settimanale",
        price: "6.99€",
        duration: "/settimana",
        description: "Il miglior equilibrio per affrontare una settimana intensa di verifiche e interrogazioni.",
        features: ["Tutto quello che c'è nel piano Giornaliero", "Priorità assoluta", "Supporto compiti complessi", "Salvataggio cronologia illimitato"],
        color: "bg-primary/10 border-primary/20 text-primary",
        buttonColor: "bg-primary hover:bg-blue-700",
        icon: "🐺",
        popular: true
    },
    {
        name: "Mensile",
        price: "39.99€",
        duration: "/mese",
        description: "La scelta definitiva per un intero mese di studio senza stress e risultati garantiti.",
        features: ["Massimo risparmio mensile", "Assistenza Premium dedicata", "Tutorial esclusivi sull'uso dell'IA", "Badge 'Membro Elite Geniotto'"],
        color: "bg-amber-50 border-amber-100 text-amber-600",
        buttonColor: "bg-amber-500 hover:bg-amber-600",
        icon: "👑"
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-soft-blue/20">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-800 tracking-tight">
                        Il tutor IA perfetto per <span className="text-primary italic">ogni studente</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
                        Inizia gratis con i token omaggio o scegli un piano illimitato per sbloccare tutto il potenziale di <span className="text-slate-800 font-black tracking-tight">Geniotto</span>.
                    </p>
                </div>
            </section>

            {/* Free Tokens Section */}
            <section className="pb-20 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse" />

                    <div className="flex-1 space-y-4 relative z-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                            ✨ Inizia ora
                        </div>
                        <h2 className="text-3xl font-black text-slate-800">Piano Token Gratuiti</h2>
                        <p className="text-slate-500 font-medium text-lg leading-relaxed">
                            Ricevi <span className="text-emerald-600 font-bold">10 Token omaggio</span> al primo accesso.
                            Hai finito i crediti? Guarda una breve pubblicità per riceverne <span className="font-bold text-emerald-600">10 omaggio</span>!
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-emerald-200 transition-all hover:scale-105 active:scale-95">
                                Riscatta 10 Token 🎁
                            </button>
                            <button className="bg-white border-2 border-slate-100 hover:border-primary/30 text-slate-600 px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3">
                                📺 Guarda Pubblicità (+10)
                            </button>
                        </div>
                    </div>

                    <div className="w-48 h-48 bg-emerald-50 rounded-full flex items-center justify-center text-8xl shadow-inner relative z-10 animate-bounce delay-700">
                        🪙
                    </div>
                </div>
            </section>

            {/* Paid Plans Section */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative flex flex-col p-10 rounded-[3rem] border-2 transition-all hover:shadow-2xl hover:scale-[1.02] ${plan.color} ${plan.popular ? 'bg-white border-primary shadow-2xl scale-105 z-20' : 'bg-white shadow-sm border-slate-50 opacity-90'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-6 py-2 rounded-full shadow-lg uppercase tracking-widest">
                                        🐺 Consigliato dalle Famiglie
                                    </div>
                                )}

                                <div className="text-5xl mb-6">{plan.icon}</div>
                                <h3 className="text-2xl font-black text-slate-800 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-5xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                                    <span className="text-slate-400 font-bold">{plan.duration}</span>
                                </div>
                                <p className="text-slate-500 font-medium mb-8 flex-grow">
                                    {plan.description}
                                </p>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-slate-600 font-bold text-sm leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-5 rounded-[2rem] text-white font-black text-lg shadow-xl shadow-current transition-all hover:scale-105 active:scale-95 ${plan.buttonColor}`}>
                                    Scegli {plan.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment Methods & Trust Section */}
            <section className="pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white/60 glass rounded-[2.5rem] p-8 border border-white/50 shadow-xl">
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Pagamenti Protetti e Veloci</h3>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* PayPal */}
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-black text-[#003087]">Pay</span>
                                <span className="text-2xl font-black text-[#009cde]">Pal</span>
                            </div>
                            {/* Visa/Mastercard Icons Placeholder/Emoji for now, but I'll use styled text for a premium feel */}
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-8 bg-slate-800 rounded-md flex items-center justify-center text-[10px] text-white font-bold leading-none">VISA</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-8 bg-[#EB001B] rounded-md flex items-center justify-center overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-6 h-6 bg-[#F79E1B] rounded-full translate-x-3 opacity-80" />
                                            <div className="w-6 h-6 bg-[#EB001B] rounded-full -translate-x-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 font-bold">
                                <span className="text-2xl">💳</span>
                                <span>Carte di Credito</span>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center justify-center gap-3 text-emerald-600 font-bold text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                Crittografia SSL 256-bit
                            </div>
                            <div className="flex items-center justify-center gap-3 text-emerald-600 font-bold text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                Fattura Immediata
                            </div>
                            <div className="flex items-center justify-center gap-3 text-emerald-600 font-bold text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                Recesso entro 14 giorni
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Message */}
            <section className="pb-32 px-6">
                <div className="max-w-3xl mx-auto text-center bg-slate-900 text-white rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-4">Hai domande sui pagamenti?</h2>
                        <p className="text-slate-400 font-bold mb-8">
                            Siamo qui per aiutarti a capire quale piano si adatta meglio alle necessità dei tuoi figli.
                        </p>
                        <Link href="/supporto" className="text-primary font-black flex items-center justify-center gap-2 hover:gap-4 transition-all">
                            Contatta il supporto 📧 <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
