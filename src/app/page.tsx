import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubjectsCarousel from "@/components/SubjectsCarousel";

export default function Home() {
  return (
    <main className="min-h-screen mesh-gradient-light flex flex-col">
      <Navbar />
      <Hero />
      <SubjectsCarousel />

      <footer className="p-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] bg-white/30 backdrop-blur-md border-t border-white/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 opacity-60">
            <span className="w-8 h-px bg-slate-300"></span>
            <span>Geniotto — Semplifica lo studio con l&apos;IA</span>
            <span className="w-8 h-px bg-slate-300"></span>
          </div>
          <p>© 2026 <span className="text-slate-600">wolf.G AI</span> · Creato con ❤️ per il tuo futuro</p>
        </div>
      </footer>
    </main>
  );
}
