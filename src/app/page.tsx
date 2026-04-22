import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubjectsCarousel from "@/components/SubjectsCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import RecommendedProducts from "@/components/RecommendedProducts";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen mesh-gradient-light flex flex-col">
      <Navbar />
      <Hero />
      <SubjectsCarousel />
      <RecommendedProducts />
      <ReviewsSection />
      <FaqSection />

      <footer className="p-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] bg-white/30 backdrop-blur-md border-t border-white/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 opacity-60">
            <span className="w-8 h-px bg-slate-300"></span>
            <span>Geniotto — Semplifica lo studio con l&apos;IA</span>
            <span className="w-8 h-px bg-slate-300"></span>
          </div>
          <p>© 2026 <span className="text-slate-600">Geniotto AI</span> · Creato con ❤️ per il tuo futuro</p>
          <div className="flex flex-wrap justify-center gap-4 text-[9px] font-black text-slate-400">
            <a href="/privacy" className="hover:text-primary transition-colors">PRIVACY POLICY</a>
            <span className="opacity-30">•</span>
            <a href="/cookie-policy" className="hover:text-primary transition-colors">COOKIE POLICY</a>
            <span className="opacity-30">•</span>
            <a href="/termini" className="hover:text-primary transition-colors">TERMINI E CONDIZIONI</a>
            <span className="opacity-30">•</span>
            <a href="/chi-siamo" className="hover:text-primary transition-colors">CHI SIAMO</a>
            <span className="opacity-30">•</span>
            <a href="/contatti" className="hover:text-primary transition-colors">CONTATTI</a>
            <span className="opacity-30">•</span>
            <a href="/articoli" className="hover:text-primary transition-colors">BLOG & GUIDE</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
