"use client";
import React from "react";
import Image from "next/image";

interface Book {
  title: string;
  author: string;
  description: string;
  image: string;
  link: string;
  price: string;
}

const booksBySubject: Record<string, Book[]> = {
  matematica: [
    {
      title: "La matematica spiegata bene",
      author: "Eugenio Merello",
      description: "Un viaggio logico per chi pensa di non essere portato per i numeri.",
      image: "https://images.unsplash.com/photo-1543004629-142a46c1a08e?w=400&q=80",
      link: "#",
      price: "15,90€"
    },
    {
        title: "Enigmi matematici",
        author: "Martin Gardner",
        description: "Sfide logiche per tenere la mente sempre allenata.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
        link: "#",
        price: "12,00€"
      }
  ],
  storia: [
    {
      title: "Il racconto del mondo",
      author: "Autori Vari",
      description: "La storia dell'umanità come non l'hai mai letta.",
      image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&q=80",
      link: "#",
      price: "18,50€"
    }
  ],
  italiano: [
    {
      title: "L'arte della grammatica",
      author: "G. Rossi",
      description: "Scrivere correttamente non è mai stato così semplice.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=400&q=80",
      link: "#",
      price: "14,00€"
    }
  ]
};

export default function BookRecommendations({ subject }: { subject: string }) {
  const books = booksBySubject[subject] || [
    {
        title: "Manuale di Studio Efficace",
        author: "Team Geniotto",
        description: "Il kit di sopravvivenza per ogni studente moderno.",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80",
        link: "#",
        price: "19,90€"
      }
  ];

  return (
    <div className="mt-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">Consigli per <span className="text-primary">gli Acquisti</span></h2>
        <div className="h-1 flex-1 bg-slate-100 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {books.map((book, index) => (
          <div key={index} className="bg-white/80 border border-white/50 backdrop-blur-md rounded-3xl p-6 shadow-xl flex gap-6 hover:-translate-y-1 transition-all">
            <div className="relative w-32 h-44 rounded-xl overflow-hidden shadow-md flex-shrink-0">
               <Image 
                src={book.image} 
                alt={book.title} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-800 leading-tight mb-1">{book.title}</h3>
                <p className="text-slate-400 text-xs font-bold uppercase mb-3">{book.author}</p>
                <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
                  {book.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-black text-slate-800">{book.price}</span>
                <a 
                  href={book.link} 
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-xl text-xs font-black transition-all"
                >
                  VEDI SU AMAZON →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
