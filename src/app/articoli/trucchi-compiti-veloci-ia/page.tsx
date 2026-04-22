import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function ArticleTemplate() {
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
                            Metodo di Studio
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
                            5 Trucchi per fare i compiti più velocemente con l&apos;Intelligenza Artificiale 🚀
                        </h1>
                        <p className="text-slate-400 font-bold text-sm">Pubblicato ad Aprile 2026 • Tempo di lettura: 5 min</p>
                    </div>

                    <div className="relative w-full h-72 sm:h-96 rounded-[2.5rem] overflow-hidden mb-12 shadow-inner">
                        <Image 
                            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80" 
                            alt="Studente che impara veloce" 
                            fill 
                            className="object-cover"
                        />
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
                        <p className="text-xl text-slate-700 font-bold italic border-l-4 border-primary pl-6 py-2">
                            Passi ore sui libri distrutto dalla stanchezza? L&apos;Intelligenza artificiale non serve a fare i compiti al posto tuo, ma a farti risparmiare le ore perse per colpa della confusione.
                        </p>

                        <p>
                            Molti studenti (e genitori) pensano che usare l&apos;Intelligenza Artificiale significhi &quot;imbrogliare&quot;. Niente di più falso! Se usata correttamente, piattaforme come Geniotto sono come avere un tutor privato sempre seduto accanto a te. Ecco 5 strategie per ottimizzare i tempi di studio e ritrovare il tempo libero.
                        </p>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">1. Superare il &quot;Blocco della Pagina Bianca&quot; in 30 secondi</h2>
                            <p>
                                Devi scrivere un tema ma non sai da dove iniziare? Finisci per guardare il foglio vuoto per 45 minuti. Con Geniotto, puoi chiedere: <em>&quot;Devo scrivere un tema sul Riscaldamento Globale, mi fai una scaletta con 5 punti principali?&quot;</em>. In pochi secondi avrai una struttura chiara da seguire. Il testo lo scriverai tu, ma avrai una mappa mentale per andare velocissimo!
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">2. Riavrvolgere il nastro sulle spiegazioni perse</h2>
                            <p>
                                Non hai capito come si svolgono le equazioni di secondo grado perché ti sei distratto in classe? Invece di leggere e rileggere il libro senza capirci nulla, chiedi a Geniotto: <em>&quot;Spiegami come si risolvono le equazioni di secondo grado come se avessi 10 anni&quot;</em>. Usa metafore semplici e poi ti fiderà con un esercizio pratico. Risparmio di tempo: 2 ore di frustrazione evitate.
                            </p>
                        </section>

                        <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                            <h2 className="text-2xl font-black text-slate-800 mb-4">3. Generazione di Flashcard automatiche</h2>
                            <p>
                                Devi prepararti per un&apos;interrogazione di Storia? Incolla i tuoi appunti nella chat e chiedi: <em>&quot;Crea 10 domande a risposta breve per prepararmi sull&apos;Impero Romano&quot;</em>. È il modo più rapido per testare la tua preparazione prima ancora di aprire il libro per il ripasso finale.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">4. Il &quot;Traduci-Prof&quot;</h2>
                            <p>
                                Certe volte i libri di testo scolastici usano parole antiquate o eccessivamente complesse. Questo rallenta la lettura in modo drammatico. Puoi chiedere all&apos;AI: <em>&quot;Cosa significa esattamente questa frase [inserire frase] in parole semplici?&quot;</em> L&apos;apprendimento deve essere accessibile a tutti.
                            </p>
                        </section>

                         <section>
                            <h2 className="text-2xl font-black text-slate-800 mb-4">5. Pianificazione settimanale visiva</h2>
                            <p>
                                Ti senti sommerso? Dai a Geniotto l&apos;elenco dei tuoi compiti della settimana e del tempo che hai a disposizione ogni pomeriggio. <em>&quot;Crea una tabella di marcia basata su 2 ore al giorno da martedì a venerdì per completare questi compiti&quot;</em>. Quando hai un piano, elimini il tempo perso a decidere cosa fare.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-slate-100 flex flex-col items-center">
                            <h3 className="text-xl font-black text-slate-800 mb-4">Inizia a risparmiare tempo 🚀</h3>
                            <a href="/chat" className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all">
                                PROVA IL METODO GENIOTTO
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
