"use client";
import React, { useState } from "react";
import Link from "next/link";

const schoolLevels = [
  {
    id: "primaria",
    name: "Primaria",
    description: "Elementari",
    color: "text-emerald-500",
    subjects: [
      { name: "Italiano", icon: "📚", slug: "italiano", bg: "bg-emerald-500" },
      { name: "Matematica", icon: "🔢", slug: "matematica", bg: "bg-blue-500" },
      { name: "Scienze", icon: "🔬", slug: "scienze", bg: "bg-purple-500" },
      { name: "Storia", icon: "🏛️", slug: "storia", bg: "bg-amber-500" },
      { name: "Geografia", icon: "🌍", slug: "geografia", bg: "bg-green-500" },
      { name: "Inglese", icon: "🇬🇧", slug: "inglese", bg: "bg-indigo-500" },
      { name: "Musica", icon: "🎵", slug: "musica", bg: "bg-rose-500" },
      { name: "Arte", icon: "🎨", slug: "arte", bg: "bg-pink-500" },
      { name: "Ed. Fisica", icon: "🏃", slug: "educazione-fisica", bg: "bg-orange-500" },
      { name: "Tecnologia", icon: "💻", slug: "tecnologia", bg: "bg-slate-600" },
      { name: "Ed. Civica", icon: "⚖️", slug: "educazione-civica", bg: "bg-teal-500" },
    ]
  },
  {
    id: "medie",
    name: "Medie",
    description: "Secondaria I Grado",
    color: "text-blue-500",
    subjects: [
      { name: "Italiano", icon: "📚", slug: "italiano", bg: "bg-blue-500" },
      { name: "Matematica", icon: "🔢", slug: "matematica", bg: "bg-blue-600" },
      { name: "Scienze", icon: "🔬", slug: "scienze", bg: "bg-cyan-500" },
      { name: "Storia", icon: "🏛️", slug: "storia", bg: "bg-amber-600" },
      { name: "Geografia", icon: "🌍", slug: "geografia", bg: "bg-emerald-600" },
      { name: "Inglese", icon: "🇬🇧", slug: "inglese", bg: "bg-indigo-600" },
      { name: "Tecnologia", icon: "💻", slug: "tecnologia", bg: "bg-slate-700" },
      { name: "Lingue", icon: "🇪🇸", slug: "lingue-straniere", bg: "bg-rose-600" },
      { name: "Arte", icon: "🎨", slug: "arte", bg: "bg-pink-600" },
      { name: "Musica", icon: "🎵", slug: "musica", bg: "bg-violet-500" },
    ]
  },
  {
    id: "superiori",
    name: "Superiori",
    description: "Secondaria II Grado",
    color: "text-purple-600",
    subjects: [
      { name: "Latino", icon: "🏛️", slug: "latino", bg: "bg-purple-600" },
      { name: "Greco", icon: "🏺", slug: "greco", bg: "bg-indigo-700" },
      { name: "Filosofia", icon: "🧠", slug: "filosofia", bg: "bg-rose-700" },
      { name: "Fisica", icon: "⚡", slug: "fisica", bg: "bg-cyan-600" },
      { name: "Chimica", icon: "🧪", slug: "chimica", bg: "bg-emerald-700" },
      { name: "Diritto", icon: "⚖️", slug: "diritto", bg: "bg-slate-800" },
      { name: "Economia", icon: "📈", slug: "economia", bg: "bg-green-700" },
      { name: "Biologia", icon: "🧬", slug: "biologia", bg: "bg-purple-500" },
      { name: "Informatica", icon: "📡", slug: "informatica", bg: "bg-blue-800" },
      { name: "Matematica", icon: "🔢", slug: "matematica", bg: "bg-blue-700" },
    ]
  }
];

export default function FloatingSubjects() {
  const [hoveredSubject, setHoveredSubject] = useState<{level: string, index: number} | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-white/30">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Scegli il tuo indirizzo</span>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-800 tracking-tight">Esplora le <span className="text-primary">Materie</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {schoolLevels.map((level) => (
            <div key={level.id} className="flex flex-col">
              {/* Intestazione Colonna */}
              <div className="mb-10 text-center md:text-left border-l-4 border-slate-100 pl-6">
                <h3 className={`text-3xl font-black uppercase tracking-tight ${level.color}`}>
                  {level.name}
                </h3>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">
                  {level.description}
                </p>
              </div>

              {/* Griglia Materie Interna */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 relative">
                {level.subjects.map((subject, idx) => {
                  const isHovered = hoveredSubject?.level === level.id && hoveredSubject?.index === idx;
                  // Logica per l'apertura a sinistra o destra
                  const isThirdColumn = (idx + 1) % 3 === 0;
                  
                  return (
                    <div key={idx} className="relative h-16 w-full">
                        <Link 
                            href={`/materie/${subject.slug}`}
                            onMouseEnter={() => setHoveredSubject({ level: level.id, index: idx })}
                            onMouseLeave={() => setHoveredSubject(null)}
                            className={`
                                absolute top-0 z-10 flex items-center h-16 rounded-2xl transition-all duration-500 shadow-lg overflow-hidden border border-white/20
                                ${subject.bg} text-white
                                ${isHovered ? 'w-[210%] z-20' : 'w-full'}
                                ${isThirdColumn ? 'right-0 flex-row-reverse' : 'left-0 flex-row'}
                            `}
                        >
                            {/* Icona */}
                            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center text-2xl bg-white/10">
                                {subject.icon}
                            </div>

                            {/* Nome che appare */}
                            <div className={`
                                flex flex-col transition-all duration-500 whitespace-nowrap px-4
                                ${isHovered ? 'opacity-100 translate-x-0 w-auto' : 'opacity-0 translate-x-4 pointer-events-none w-0'}
                                ${isThirdColumn ? 'text-right' : 'text-left'}
                            `}>
                                <span className="text-[10px] font-black uppercase tracking-tight leading-none opacity-80 mb-1">
                                    Materia
                                </span>
                                <span className="text-sm lg:text-base font-black leading-tight uppercase tracking-tight">
                                    {subject.name}
                                </span>
                            </div>
                        </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Sfondi decorativi */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}
