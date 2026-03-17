"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Cos'è Geniotto AI e come può aiutare mio figlio?",
        answer: "Geniotto è un assistente virtuale basato sull'intelligenza artificiale progettato per spiegare concetti scolastici in modo semplice, divertente e sicuro. Aiuta i bambini e i ragazzi a superare blocchi nello studio, spiegando i passaggi matematici o riassumendo testi complessi come farebbe un amico esperto."
    },
    {
        question: "È adatto a tutte le età?",
        answer: "Sì! Abbiamo tre livelli di personalizzazione: Primaria (linguaggio semplice e giocoso), Medie (più strutturato e chiaro) e Superiori (approfondito e tecnico). Geniotto adatta le sue risposte in tempo reale al livello selezionato."
    },
    {
        question: "Geniotto può risolvere i problemi di matematica?",
        answer: "Sì, Geniotto può analizzare foto di problemi matematici, espressioni o teoremi. Non si limita a dare il risultato, ma spiega ogni singolo passaggio logico per permettere allo studente di capire veramente il procedimento."
    },
    {
        question: "Come funzionano i gettoni (prove rimaste)?",
        answer: "Ogni interazione con Geniotto consuma una &apos;prova&apos;. Forniamo dei gettoni omaggio ogni giorno. Se finiscono, è possibile ottenerne altri guardando un breve annuncio sponsorizzato, permettendoci di mantenere il servizio gratuito per tutti."
    },
    {
        question: "I dati e le foto caricate sono al sicuro?",
        answer: "La privacy è la nostra priorità. Le immagini caricate vengono elaborate esclusivamente per fornire la risposta e non vengono memorizzate in modo permanente o utilizzate per altri scopi. Rispettiamo rigorosamente le normative sulla protezione dei dati."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-slate-50/50" id="faq">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">
                        Domande Frequenti 🤔
                    </h2>
                    <p className="text-slate-500 font-bold max-w-2xl mx-auto">
                        Tutto quello che c&apos;è da sapere su Geniotto, la sua intelligenza e come usarlo al meglio per la scuola.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm transition-all hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4"
                            >
                                <span className="text-lg font-black text-slate-700 tracking-tight">
                                    {faq.question}
                                </span>
                                <span className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            
                            {openIndex === index && (
                                <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2">
                                    <p className="text-slate-500 leading-relaxed font-semibold">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
