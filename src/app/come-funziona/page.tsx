import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Chiedi tutto quello che vuoi",
            description: "Puoi scrivere una domanda difficile, incollare un testo lungo o descrivere un esercizio che non capisci. L'IA è pronta a leggerti!",
            icon: "✍️",
            color: "from-blue-400 to-indigo-600 shadow-blue-200"
        },
        {
            number: "02",
            title: "L'IA analizza e semplifica",
            description: "In pochi secondi, il nostro Super Tutor scompone il problema in parti piccolissime e facili da capire, proprio come un gioco.",
            icon: "🧠",
            color: "from-emerald-400 to-teal-600 shadow-emerald-200"
        },
        {
            number: "03",
            title: "Impari divertendoti",
            description: "Ricevi una risposta chiara, piena di esempi e incoraggiamento. Non avrai solo la soluzione, ma capirai come arrivarci da solo!",
            icon: "🚀",
            color: "from-amber-400 to-orange-600 shadow-amber-200"
        }
    ];

    return (
        <main className="min-h-screen mesh-gradient-light">
            <Navbar />

            <section className="pt-44 pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter">
                            Come funziona il <span className="text-gradient italic">Magico Tutor?</span>
                        </h1>
                        <p className="text-2xl text-slate-500 font-bold max-w-3xl mx-auto">
                            Abbiamo creato un'intelligenza artificiale che non ti dà solo la risposta,
                            ma ti insegna a ragionare. Ecco come in 3 semplici passi! ✨
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                        {steps.map((step, idx) => (
                            <div key={idx} className="group relative bg-white/40 glass p-10 rounded-[3rem] hover:-translate-y-4 transition-all duration-500">
                                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl mb-8 shadow-2xl group-hover:rotate-12 transition-transform`}>
                                    {step.icon}
                                </div>
                                <div className="text-6xl font-black text-slate-100 absolute top-10 right-10 select-none">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-black text-slate-800 mb-4">{step.title}</h3>
                                <p className="text-slate-500 font-bold leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Call to action card */}
                    <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center gap-10">
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                                Pronto a fare una <br /> <span className="text-primary underline decoration-8 underline-offset-8">domanda</span>?
                            </h2>
                            <Link href="/chat" className="bg-white text-primary px-16 py-8 rounded-[3rem] text-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
                                Inizia la Chat Gratis! 🚀
                            </Link>
                        </div>
                        {/* Decorative floating icons */}
                        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">📚</div>
                        <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce delay-700">🧪</div>
                    </div>
                </div>
            </section>
        </main>
    );
}
