import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingGeniotto from "@/components/FloatingGeniotto";
import SubjectsCarousel from "@/components/SubjectsCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Subjects Carousel Section */}
      <SubjectsCarousel />

      {/* How it Works Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-[3rem] shadow-2xl p-10 relative z-10 border border-slate-100 group">
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform" />
              <div className="flex flex-col gap-6">
                {[
                  { step: "1", text: "Fai una foto o scrivi la tua domanda", color: "bg-blue-500", icon: "📸" },
                  { step: "2", text: "L'IA analizza il problema in 2 secondi", color: "bg-emerald-500", icon: "🧠" },
                  { step: "3", text: "Ricevi una spiegazione facile e chiara", color: "bg-amber-500", icon: "🌈" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-black shadow-lg`}>
                      {item.step}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-slate-800">{item.text}</span>
                      <span className="text-2xl mt-1">{item.icon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating Dots Pattern */}
            <div className="absolute top-[-20px] left-[-20px] w-40 h-40 opacity-20 -z-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
          </div>

          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-none">
              Studiare non è mai stato così <span className="text-secondary italic">veloce.</span>
            </h2>
            <p className="text-xl text-slate-500 font-bold leading-relaxed">
              Dalla matematica alle lingue, abbiamo creato un'esperienza che sembra un gioco.
              Meno fatica, più tempo per quello che ti piace!
            </p>
            <div className="flex gap-4">
              <div className="bg-soft-green px-6 py-4 rounded-3xl border border-emerald-100">
                <span className="block text-3xl font-black text-emerald-600 leading-none">98%</span>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-tighter">Voti migliori</span>
              </div>
              <div className="bg-soft-yellow px-6 py-4 rounded-3xl border border-amber-100">
                <span className="block text-3xl font-black text-amber-600 leading-none">3x</span>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-tighter">Più veloce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials "Wall of Love" */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black">Cosa dicono di noi</h2>
        </div>

        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[
            { name: "Marco, 14 anni", text: "Finalmente capisco le equazioni! ⚡", emoji: "😎" },
            { name: "Sofia, 11 anni", text: "Sembra di parlare con un amico intelligente. 🤖", emoji: "💖" },
            { name: "Luca, 16 anni", text: "Mi ha salvato dal debito in storia! 📚", emoji: "🔥" },
            { name: "Giulia, 13 anni", text: "Le spiegazioni sono super semplici. 🌈", emoji: "🍭" }
          ].map((t, i) => (
            <div key={i} className="inline-block bg-white/10 glass p-8 rounded-3xl min-w-[300px]">
              <div className="text-2xl mb-2">{t.emoji}</div>
              <p className="text-lg font-bold mb-4 italic break-words whitespace-normal">"{t.text}"</p>
              <div className="font-black text-primary uppercase text-xs tracking-widest">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-800 opacity-50" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-10">
          <h2 className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter">
            Pronto a diventare <br /> un <span className="text-accent underline decoration-8 underline-offset-8">genio</span>?
          </h2>
          <Link href="/chat" className="bg-white text-primary px-16 py-8 rounded-[3rem] text-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
            Provalo Gratis! 🚀
          </Link>
        </div>
        {/* Floating Shapes */}
        <div className="absolute top-10 right-20 text-6xl opacity-30 animate-bounce">✨</div>
        <div className="absolute bottom-10 left-20 text-6xl opacity-30 animate-bounce delay-500">🎓</div>
      </section>

      <FloatingGeniotto />
    </main>
  );
}
