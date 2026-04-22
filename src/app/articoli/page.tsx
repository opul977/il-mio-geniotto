import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    title: "5 Trucchi per fare i compiti più velocemente con l'AI 🚀",
    description: "Scopri come usare l'Intelligenza Artificiale per ridurre il tempo dei compiti senza smettere di imparare.",
    slug: "trucchi-compiti-veloci-ia",
    category: "Metodo di Studio",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    date: "Arile 2026"
  },
  {
    title: "Matematica: dal panico alla logica con il metodo Geniotto 🔢",
    description: "Non rincorrere il risultato, capisci il procedimento. La nostra guida per amare i numeri.",
    slug: "matematica-metodo-logico",
    category: "Matematica",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
    date: "Aprile 2026"
  },
  {
    title: "Guida per Genitori: Supportare i figli nell'era digitale 👪",
    description: "Come gestire l'uso della tecnologia a casa e renderla uno strumento di crescita per i tuoi figli.",
    slug: "guida-genitori-compiti-digitale",
    category: "Genitorialità",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80",
    date: "Aprile 2026"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen mesh-gradient-light flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-7xl mx-auto w-full pt-32 pb-24 px-6">
        <header className="mb-16 text-center">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                Risorse & Guide 📚
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-800 tracking-tight leading-tight mb-6">
                Blog Geniotto: <br />
                <span className="text-primary">Imparare con il Sorriso</span> 🐺🧠
            </h1>
            <p className="max-w-2xl mx-auto text-slate-500 font-medium text-lg">
                Esplora le nostre guide strategiche per migliorare il tuo metodo di studio e sfruttare al meglio l&apos;intelligenza artificiale per la tua crescita scolastica.
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <Link 
              key={i} 
              href={`/articoli/${article.slug}`}
              className="group bg-white/60 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-slate-700 uppercase tracking-wider">
                  {article.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  {article.date}
                </div>
                <h2 className="text-2xl font-black text-slate-800 leading-tight mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed mb-6 flex-1">
                   {article.description}
                </p>
                <div className="pt-6 border-t border-slate-100 flex items-center text-primary font-black text-[12px] uppercase tracking-widest gap-2">
                  Leggi la Guida 
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
