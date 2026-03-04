import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen mesh-gradient-light flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center pt-32">
        <div className="relative w-64 h-64 mb-8 animate-float">
          {/* Geniotto in costruzione */}
          <div className="bg-primary p-6 rounded-[3rem] shadow-2xl relative z-10 border-4 border-white">
            <svg width="150" height="120" viewBox="0 0 100 80" fill="none" className="mx-auto">
              <rect x="10" y="10" width="80" height="60" rx="20" fill="white" />
              <rect x="25" y="25" width="50" height="30" rx="10" fill="#1e293b" />
              <circle cx="40" cy="40" r="4" fill="#60a5fa" />
              <circle cx="60" cy="40" r="4" fill="#60a5fa" />
              {/* Elmetto da cantiere */}
              <path d="M20 15 Q50 -10 80 15" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-amber-400 p-4 rounded-2xl shadow-lg border-4 border-white animate-bounce">
            <span className="text-3xl">🚧</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
          Geniotto sta mettendo <br /> il <span className="text-primary italic">papillon!</span> 🎀
        </h1>

        <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-2xl mb-10 leading-relaxed">
          Stiamo lavorando per rendere l&apos;esperienza ancora più magica.
          Il lancio ufficiale sul nuovo dominio <span className="text-slate-800 underline decoration-primary/30">ilmiogeniotto.it</span> è quasi pronto!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="bg-white/60 glass px-8 py-4 rounded-3xl border border-slate-200">
            <span className="text-sm font-black text-slate-400 uppercase tracking-widest block mb-1">Stato Lavori</span>
            <div className="flex items-center gap-3">
              <div className="h-3 w-48 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[90%] animate-pulse" />
              </div>
              <span className="font-black text-primary text-lg">90%</span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {[
            { title: "Nuova Grafica", desc: "Ancora più colorata e semplice", icon: "🎨" },
            { title: "Più Velocità", desc: "Risposte istantanee dall'IA", icon: "⚡" },
            { title: "Premi e Giochi", desc: "In arrivo presto per tutti", icon: "🏆" }
          ].map((feature, i) => (
            <div key={i} className="bg-white/40 glass p-6 rounded-[2rem] border border-white/50 hover:scale-105 transition-all text-left">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-black text-slate-800 mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-500 font-bold">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="p-8 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
        © 2026 ilmiogeniotto.it - Il tuo super amico per i compiti
      </footer>
    </main>
  );
}
