import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingSubjects from "@/components/FloatingSubjects";
import ReviewsSection from "@/components/ReviewsSection";
import RecommendedProducts from "@/components/RecommendedProducts";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";

import ReviewCheckbox from "@/components/ReviewCheckbox";
import Signature from "@/components/Signature";

export default function Home() {
  return (
    <main className="min-h-screen mesh-gradient-light flex flex-col">
      <Navbar />
      <Hero />
      <FloatingSubjects />
      <RecommendedProducts />
      <ReviewsSection />
      {/* Nuova Sezione Blog per indicizzazione AdSense */}
      <ReviewCheckbox />
      <section className="py-24 bg-white/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Risorse Gratuite</span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight">Ultime dal <span className="text-primary">Blog</span></h2>
            </div>
            <Link href="/articoli" className="mt-6 md:mt-0 bg-white text-slate-800 border-2 border-slate-200 hover:border-primary hover:text-primary px-6 py-3 rounded-2xl font-bold transition-all shadow-sm">
              Vedi tutte le guide →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "La Tecnica del Pomodoro: Come raddoppiare la concentrazione",
                desc: "Smetti di studiare per 4 ore di fila. Scopri la tecnica dei 25 minuti di focus totale per non stancare il cervello.",
                slug: "tecnica-pomodoro",
                cat: "Metodo"
              },
              {
                title: "DSA e Intelligenza Artificiale: Una rivoluzione",
                desc: "Come gli strumenti vocali e i tutor AI con pazienza infinita stanno abbattendo le barriere per gli studenti.",
                slug: "dsa-e-intelligenza-artificiale",
                cat: "Inclusione"
              },
              {
                title: "Come Scrivere un Tema di Italiano Perfetto",
                desc: "La regola del 40-20-40. Come usare l'Intelligenza Artificiale per creare la scaletta senza farsi scrivere il tema.",
                slug: "come-scrivere-tema-italiano",
                cat: "Italiano"
              }
            ].map((art, i) => (
              <Link key={i} href={`/articoli/${art.slug}`} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform group">
                <span className="text-xs font-black text-primary uppercase tracking-wider mb-3 block">{art.cat}</span>
                <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-primary transition-colors">{art.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{art.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />

      {/* Sezione Missione e Testo Profondo per AdSense */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 inline-block">La nostra visione</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-12 leading-tight">
            Perché abbiamo creato <span className="text-primary">Geniotto</span>
          </h2>
          <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white text-left space-y-8">
            <p className="text-slate-600 font-medium leading-relaxed text-lg italic border-l-4 border-primary pl-6">
              &quot;L&apos;obiettivo non è dare risposte pronte, ma accendere la lampadina della comprensione logica in ogni studente.&quot;
            </p>
            <div className="prose prose-slate max-w-none text-slate-500 font-medium leading-relaxed space-y-6">
              <p>
                Il Mio Geniotto nasce da una necessità profonda: trasformare il momento dei compiti da una fonte di ansia e conflitto in un&apos;opportunità di crescita intellettuale. Troppo spesso, gli studenti si limitano a cercare soluzioni online per &quot;togliersi il peso&quot;, senza capire realmente i concetti. Questo approccio crea lacune che diventano insormontabili nel tempo.
              </p>
              <p>
                La nostra missione è utilizzare l&apos;Intelligenza Artificiale come un <strong>Tutor Socratico</strong>. Invece di risolvere meccanicamente un&apos;espressione o scrivere un tema al posto dello studente, Geniotto guida l&apos;alunno attraverso il ragionamento. Spieghiamo il <em>perché</em> dietro ogni passaggio, stimoliamo il pensiero critico e incoraggiamo l&apos;approfondimento interdisciplinare.
              </p>
              <p>
                Crediamo fermamente nell&apos;<strong>etica digitale</strong>. Il nostro sistema è programmato per rilevare quando uno studente sta cercando di &quot;scorciare&quot; troppo la strada, intervenendo con domande mirate che richiedono un coinvolgimento attivo. In questo modo, l&apos;AI non diventa una stampella, ma un potenziatore delle capacità cognitive umane.
              </p>
              <p>
                Supportiamo genitori e insegnanti offrendo risorse gratuite sul metodo di studio, la gestione dell&apos;ansia scolastica e l&apos;uso consapevole delle tecnologie. Geniotto è molto più di una chat: è il compagno di studio che tutti avremmo voluto avere, sempre paziente, mai giudicante e pronto a spiegare lo stesso concetto in mille modi diversi finché non diventa chiaro.
              </p>
            </div>
          </div>
        </div>
      </section>

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
    <Signature />
</main>
  );
}
