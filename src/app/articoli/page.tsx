import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog e Risorse Didattiche | Il Mio Geniotto",
  description: "Esplora le nostre guide e articoli su metodo di studio, intelligenza artificiale applicata all'educazione e consigli per genitori e studenti.",
};

const articles = [
  {
    title: "Matematica: Il metodo logico per odiarla di meno 🧮",
    description: "Dall'approccio mnemonico alla vera comprensione. Smetti di usare le calcolatrici automatiche e inizia a capire il perché dei singoli passaggi.",
    slug: "matematica-metodo-logico",
    category: "Psicologia e Studio",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "5 Trucchi per fare i compiti più velocemente con l'AI 🚀",
    description: "Scopri come usare l'Intelligenza Artificiale come un Tutor personale e non come un semplice strumento per copiare. Ottimizza le ore di studio.",
    slug: "trucchi-compiti-veloci-ia",
    category: "Metodo di Studio",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "La Tecnica del Pomodoro: Come raddoppiare la concentrazione",
    description: "Smetti di studiare per 4 ore di fila. Scopri la tecnica dei 25 minuti di focus totale per non stancare il cervello e massimizzare la memoria.",
    slug: "tecnica-pomodoro",
    category: "Metodo di Studio",
    image: "https://images.unsplash.com/photo-1497215848601-52478546f773?w=800&q=80",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "DSA e Intelligenza Artificiale: Una rivoluzione",
    description: "Come gli strumenti di sintesi vocale e i tutor AI con pazienza infinita stanno abbattendo le barriere per gli studenti con dislessia e discalculia.",
    slug: "dsa-e-intelligenza-artificiale",
    category: "Inclusione",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Come Scrivere un Tema di Italiano Perfetto",
    description: "La regola del 40-20-40. Come usare l'Intelligenza Artificiale per creare la scaletta senza farsi scrivere il tema e mantenere il proprio stile.",
    slug: "come-scrivere-tema-italiano",
    category: "Italiano",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?w=800&q=80",
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Schermi e Studio: L'equilibrio digitale",
    description: "Guida per genitori: come distinguere tra tempo passivo sui social e tempo produttivo con i tutor AI. La dietologia digitale spiegata semplice.",
    slug: "gestione-tempo-schermi",
    category: "Guida Genitori",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Memorizzare Date Storiche senza sforzo",
    description: "La tecnica dei Loci e le rime fonetiche. Perché studiare storia a memoria è sbagliato e come le associazioni visive ti salvano le interrogazioni.",
    slug: "memorizzare-date-storiche",
    category: "Storia e Mnemonica",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&q=80",
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Imparare l'Inglese con l'AI: Il tuo madrelingua",
    description: "Supera la paura di parlare. Usa l'Intelligenza artificiale per simulare giochi di ruolo e conversazioni reali invece di ripassare solo grammatica.",
    slug: "inglese-con-ai",
    category: "Lingue Straniere",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Prepararsi all'Esame di Maturità senza impazzire",
    description: "I collegamenti interdisciplinari perfetti per l'orale. Come usare Geniotto per simulare la commissione esaminatrice e allenare l'esposizione.",
    slug: "prepararsi-alla-maturita",
    category: "Esami di Stato",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Gestire l'Ansia da prestazione scolastica",
    description: "Tecniche psicologiche di grounding. Perché studiare con un'intelligenza artificiale azzera la paura del giudizio e ti aiuta a superare i blocchi.",
    slug: "ansia-da-prestazione-scolastica",
    category: "Psicologia e Studio",
    image: "https://images.unsplash.com/photo-1494809610410-160faaed4de0?w=800&q=80",
    color: "bg-pink-100 text-pink-600"
  },
  {
    title: "L'Arte delle Mappe Mentali",
    description: "Basta scrivere frasi lunghe. Il cervello ricorda per concetti radiali e immagini. Come farsi aiutare dall'AI per strutturare una mappa perfetta.",
    slug: "creare-mappe-mentali-efficaci",
    category: "Organizzazione",
    image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?w=800&q=80",
    color: "bg-teal-100 text-teal-600"
  },
  {
    title: "Apprendimento Attivo vs Passivo",
    description: "Perché evidenziare interi paragrafi sui libri è un'illusione di competenza. Scopri l'Active Recall e la Ripetizione Spaced per fissare la memoria.",
    slug: "apprendimento-attivo-vs-passivo",
    category: "Teorie dell'Apprendimento",
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800&q=80",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    title: "Guida per i Genitori: Sopravvivere ai compiti 👨‍👩‍👦",
    description: "Istruzioni per mamme e papà su come affiancare i figli nello studio digitale, evitando conflitti e sfruttando la tecnologia in modo sano.",
    slug: "guida-genitori-compiti-digitale",
    category: "Guida Genitori",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd08dca?w=800&q=80",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Il Metodo Feynman: Capire tutto spiegandolo",
    description: "La tecnica definitiva per padroneggiare concetti complessi. Se non sai spiegarlo a un bambino di 6 anni, non lo hai capito davvero.",
    slug: "metodo-feynman",
    category: "Metodo di Studio",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Perché le 'Lingue Morte' sono le più vive 🏛️",
    description: "Latino e Greco antico non sono solo grammatica: sono la palestra perfetta per il pensiero logico e la base del mondo moderno.",
    slug: "perche-lingue-morte-vive",
    category: "Classici",
    image: "https://images.unsplash.com/photo-1544427928-142dc30fe670?w=800&q=80",
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Il Futuro della Scuola: L'AI come Tutor",
    description: "Come cambieranno le aule nei prossimi 10 anni. Dall'apprendimento di massa alla personalizzazione totale grazie agli algoritmi.",
    slug: "futuro-scuola-ai",
    category: "Educazione Digitale",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    color: "bg-slate-100 text-slate-600"
  },
  {
    title: "Pensiero Critico: La bussola contro le Fake News",
    description: "Insegnare ai ragazzi a verificare le fonti nell'era dell'abbondanza informativa. Come l'AI può aiutarci a smascherare le bugie.",
    slug: "pensiero-critico-fake-news",
    category: "Cittadinanza",
    image: "https://images.unsplash.com/photo-1504711432869-5d39b16043ae?w=800&q=80",
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Studiare Geografia con Google Earth e AI 🌍",
    description: "Trasforma il libro in un viaggio interattivo. Come esplorare la geopolitica e l'ambiente attraverso strumenti digitali gratuiti.",
    slug: "geografia-interattiva",
    category: "Geografia",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "Filosofia: Smettere di annoiarsi con i classici",
    description: "Perché Socrate parlerebbe meglio di un influencer e come i dilemmi di 2000 anni fa risolvono i problemi di oggi su internet.",
    slug: "filosofia-senza-noia",
    category: "Filosofia",
    image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=800&q=80",
    color: "bg-rose-100 text-rose-600"
  },
  {
    title: "Preparare la Tesi con l'AI: Guida Etica",
    description: "Dalla ricerca delle fonti alla strutturazione dell'indice. Come usare l'intelligenza artificiale per accelerare il lavoro senza barare.",
    slug: "tesi-con-ai-guida-etica",
    category: "Università",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    color: "bg-indigo-100 text-indigo-600"
  }
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen mesh-gradient-light flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-7xl mx-auto w-full pt-32 pb-24 px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-4">
            Risorse Didattiche e Guide
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Tutto ciò che serve a studenti e genitori per imparare un metodo di studio efficace, superare i blocchi cognitivi e prosperare nell&apos;era dell&apos;apprendimento digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={`/articoli/${article.slug}`}
              className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider inline-block mb-4 ${article.color}`}>
                  {article.category}
                </span>
                <h3 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
