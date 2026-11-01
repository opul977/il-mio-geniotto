import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tempo Schermi e Studio: Guida all'Equilibrio Digitale | Il Mio Geniotto",
  description: "Come gestire l'uso degli smartphone tra studio e intrattenimento. Strategie scientifiche per contrastare la dispersione dell'attenzione.",
};

export default function ArticlePage() {
    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-4xl mx-auto w-full pt-32 pb-24 px-6">
                <div className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-white/50">
                    <Link href="/articoli" className="text-primary font-black text-sm uppercase tracking-wider mb-8 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
                        ← Torna al Blog
                    </Link>

                    <div className="mb-8">
                        <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Guida Genitori
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            Schermi e Studio: Come Costruire un Equilibrio Digitale Sano per Ragazzi e Genitori
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato a Agosto 2026 • Tempo di lettura: 9 min • Di Marco Gennari</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Il conflitto quotidiano tra compiti e smartphone è la battaglia più frequente in milioni di famiglie. Da un lato il tablet serve per consultare il registro elettronico e i libri digitali; dall'altro, bastano due notifiche di TikTok o WhatsApp per far svanire qualsiasi concentrazione.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">La distinzione fondamentale: uso attivo vs consumo passivo</h2>
                            <p>
                                Non tutti gli schermi sono uguali. Condannare genericamente 'il tempo davanti allo schermo' rischia di confondere due attività agli antipodi neurologici:
                            </p>
                            <p>
                                Il <strong>consumo passivo</strong> consiste nello scorrimento infinito (infinite scrolling) di video brevi, feed algoritmici e notifiche intermittenti. Questa modalità sfrutta il rilascio rapido e discontinuo di dopamina, frammenta la capacità di attenzione sostenuta e genera affaticamento cognitivo senza alcun arricchimento culturale.
                            </p>
                            <p>
                                L'<strong>uso attivo e creativo</strong> comprende la ricerca mirata per un progetto, la scrittura digitale, l'apprendimento delle lingue con simulatori interattivi, la programmazione e lo studio assistito da tutor digitali. In questo caso, lo schermo è un tavolo da lavoro moderno che potenzia l'apprendimento attivo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Strategie concrete per disinnescare la dipendenza da notifiche</h2>
                            <p>
                                Per riprendere il controllo del proprio focus mentale durante il pomeriggio di studio, applica queste quattro regole pratiche:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>La separazione fisica del dispositivo:</strong> Numerosi esperimenti condotti dall'Università di Austin hanno dimostrato che la sola presenza dello smartphone sulla scrivania — anche se spento o a faccia in giù — riduce la capacità cognitiva disponibile. Durante lo studio profondo, il telefono deve stare in un'altra stanza.</li>
                                <li><strong>Sessioni a blocchi con pause deliberate:</strong> Usa la tecnica del pomodoro: 25 o 40 minuti di assoluta disconnessione, seguiti da 5-10 minuti di pausa in cui è consentito controllare i messaggi senza sensi di colpa.</li>
                                <li><strong>Schermo in scala di grigi:</strong> Impostare il display in bianco e nero nelle ore pomeridiane elimina l'attrattiva cromatica delle icone e delle app sociali, riducendo drasticamente l'impulso a toccare lo schermo.</li>
                                <li><strong>No schermi nell'ultima ora prima di dormire:</strong> La luce blu inibisce la produzione naturale di melatonina, compromettendo il sonno REM indispensabile per consolidare i ricordi della giornata.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Il patto educativo tra genitori e figli</h2>
                            <p>
                                I divieti assoluti e le punizioni punitive generano spesso ribellione e uso nascosto dei dispositivi. Molto più efficace è stabilire un 'contratto digitale di famiglia' concordato insieme: orari chiari per la cena e la notte senza telefoni al tavolo, spazi comuni dove riporre i caricatori e, soprattutto, l'esempio coerente degli adulti, che spesso faticano a staccarsi dallo smartphone quanto i propri figli.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">Conclusione</h2>
                            <p>
                                La tecnologia digitale è un moltiplicatore straordinario di opportunità educative, ma richiede un'igiene mentale e comportamentale rigorosa. Insegnare ai ragazzi a dominare i propri strumenti invece di farsi dominare dalle notifiche è la lezione più preziosa per il loro successo scolastico e la loro serenità personale.
                            </p>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-black text-slate-700 mb-3">📚 Fonti e Approfondimenti</h3>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>• Ward, A. F., et al. (2017). Brain Drain: The Mere Presence of One’s Own Smartphone Reduces Available Cognitive Capacity. <em>Journal of the Association of Consumer Research</em>, 2(2), 140–154.</li>
                                <li>• Twenge, J. M., & Campbell, W. K. (2018). Associations between screen time and lower psychological well-being among children and adolescents. <em>Preventive Medicine Reports</em>, 12, 271–283.</li>
                                <li>• Società Italiana di Pediatria (SIP) (2023). <em>Linee guida sull'uso dei dispositivi digitali nell'infanzia e adolescenza</em>.</li>
                            </ul>
                        </section>
                    </div>

                    {/* Firma Autore */}
                    <div className="mt-12 pt-8 border-t border-slate-100 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                            👨‍🏫
                        </div>
                        <div>
                            <p className="font-black text-slate-800 text-sm">Marco Gennari</p>
                            <p className="text-xs text-slate-500 font-medium mt-1">Educatore digitale e fondatore di Il Mio Geniotto. Con oltre 10 anni di esperienza nell&apos;educazione italiana e nella tecnologia applicata all&apos;apprendimento, Marco si dedica a rendere lo studio accessibile a tutti gli studenti italiani.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
