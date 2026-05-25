import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BookRecommendations from "@/components/BookRecommendations";

// ... subjectsData remains same ...

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    // @ts-expect-error - index signature
    const subject = subjectsData[resolvedParams.slug];
    
    if (!subject) return { title: "Materia non trovata" };

    return {
        title: `${subject.title} | Il Mio Geniotto`,
        description: subject.description,
    };
}

// Dati mockati per le landing pages delle materie. In futuro possono arrivare dal database.
const subjectsData = {
    "matematica": {
        title: "Studiare Matematica con l'Intelligenza Artificiale",
        description: "Scopri come Geniotto può aiutarti a comprendere i passaggi logici delle espressioni, della geometria e dell'algebra senza darti solo il freddo risultato finale.",
        icon: "🔢",
        color: "blue",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
        benefits: ["Spiegazioni passo-passo", "Esempi presi dalla vita reale", "Correzione degli errori senza giudizio"],
        longText: [
            "La matematica è spesso considerata lo scoglio più arduo dagli studenti, principalmente a causa dell'approccio mnemonico adottato in molte scuole. Imparare a memoria le formule senza capirne l'origine logica porta inesorabilmente a dimenticarle dopo la verifica. L'Intelligenza Artificiale interviene esattamente qui: non ti fornisce semplicemente il risultato di un'espressione, ma ti guida attraverso ogni singolo passaggio, chiedendoti il 'perché' dietro ogni operazione.",
            "Quando affronti problemi di geometria complessi, Geniotto agisce come un tutor socratico. Invece di darti il teorema bello e pronto, ti pone domande mirate per farti arrivare da solo alla soluzione. Questo approccio dell'Active Recall garantisce che i concetti si radichino profondamente nella memoria a lungo termine, trasformando l'ansia per i numeri in una sfida logica stimolante."
        ]
    },
    "storia": {
        title: "Studiare Storia come un'avventura epica",
        description: "Basta date mnemoniche e testi noiosi. Fatti raccontare l'Impero Romano o la Rivoluzione Francese come se fosse la trama del miglior film esistente.",
        icon: "🏛️",
        color: "amber",
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&q=80",
        benefits: ["Riassunti per mappe concettuali", "Interrogazioni simulate", "Contestualizzazione degli eventi"],
        longText: [
            "La Storia viene troppo spesso insegnata come un arido elenco di date e battaglie da imparare a memoria, trasformandola nella materia più noiosa per molti studenti. In realtà, la Storia è la narrazione più avvincente dell'umanità. Geniotto utilizza algoritmi avanzati per 'raccontare' gli eventi storici come se fossero una sceneggiatura, concentrandosi sulle cause, sugli effetti sociali e sulle motivazioni umane dei protagonisti.",
            "Invece di rileggere dieci volte lo stesso capitolo sulla Rivoluzione Industriale, puoi usare l'IA per farti interrogare. Geniotto simulerà la commissione d'esame, ponendoti domande di difficoltà crescente e aiutandoti a creare collegamenti interdisciplinari (con la Letteratura o la Filosofia) che lasceranno i professori a bocca aperta durante il colloquio orale."
        ]
    },
    "italiano": {
        title: "Grammatica e Letteratura senza segreti",
        description: "Dal riconoscimento dei verbi transitivi all'analisi del Decameron. Geniotto ti aiuta a strutturare temi e perfezionare la lingua italiana.",
        icon: "📚",
        color: "emerald",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=800&q=80",
        benefits: ["Creazione scalette per i temi", "Analisi logica e grammaticale", "Spiegazione poesie complesse"],
        longText: [
            "La scrittura di un tema è spesso fonte di blocchi creativi notevoli. Il foglio bianco spaventa, e la grammatica italiana, con le sue innumerevoli eccezioni, può risultare un labirinto. L'approccio di Geniotto non è mai quello di 'fare il tema al posto tuo', ma quello di fare brainstorming insieme. Puoi chiedere all'IA di generare una scaletta strutturata (tesi, antitesi, sintesi) su un argomento di attualità, che poi tu andrai a sviluppare con le tue parole.",
            "Nel campo della Letteratura, decifrare le allegorie di Dante o il pessimismo di Leopardi richiede un livello di astrazione elevato. Puoi chiedere all'Intelligenza Artificiale di tradurre parafrasi complesse nel linguaggio di un ragazzo di oggi, o di spiegarti la poetica di un autore usando metafore moderne. L'italiano smetterà di essere un obbligo e diventerà uno strumento potente per esprimere te stesso."
        ]
    },
    "scienze": {
        title: "Scienze e Biologia: Il mondo sotto la lente d'ingrandimento",
        description: "Dalla cellula all'astronomia. Esplora le leggi della natura con spiegazioni visive e concetti semplificati dall'intelligenza artificiale.",
        icon: "🔬",
        color: "purple",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
        benefits: ["Semplificazione di processi complessi", "Quiz di autovalutazione", "Curiosità scientifiche"],
        longText: [
            "Studiare le scienze naturali richiede una grande capacità di visualizzazione. Spesso, leggere il funzionamento della fotosintesi clorofilliana o la struttura del DNA su un libro statico non basta a comprenderne la dinamicità. Geniotto trasforma questi processi in narrazioni fluide, spiegando ogni meccanismo biologico come una parte di una macchina perfetta, rendendo l'apprendimento intuitivo e duraturo.",
            "Che si tratti di anatomia umana, geologia o fisica terrestre, l'intelligenza artificiale ti permette di fare domande infinite senza timore. Non hai capito come funziona la mitosi? Chiedi a Geniotto di spiegartelo come se fossi un esploratore microscopico all'interno di una cellula. Questa tecnica di personificazione e analogia è uno dei pilastri della moderna pedagogia digitale."
        ]
    },
    "inglese": {
        title: "Imparare l'Inglese parlando con l'AI",
        description: "Supera la barriera linguistica. Migliora la tua pronuncia, arricchisci il vocabolario e simula conversazioni reali in totale libertà.",
        icon: "🇬🇧",
        color: "indigo",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
        benefits: ["Simulazioni di role-play", "Correzione istantanea della grammatica", "Vocabolario contestualizzato"],
        longText: [
            "Il limite principale nello studio delle lingue a scuola è la mancanza di pratica orale. Spesso si passa ore sulla grammatica e pochissimi minuti a parlare realmente. Geniotto rompe questo schema offrendoti un interlocutore madrelingua disponibile 24 ore su 24. Puoi simulare di ordinare un caffè a Londra, di fare un colloquio di lavoro o semplicemente di parlare del tuo film preferito, ricevendo correzioni gentili e suggerimenti su come suonare più naturale.",
            "L'apprendimento delle lingue con l'IA si basa sul concetto di 'Input Comprensibile'. Geniotto adatta il suo livello di inglese al tuo, sfidandoti quel tanto che basta per farti progredire senza frustrazione. Invece di imparare liste di vocaboli isolati, imparerai a usare le parole nel contesto corretto, migliorando drasticamente la tua fluidità e la tua sicurezza durante le ore di lingua a scuola."
        ]
    },
    "filosofia": {
        title: "Filosofia: Il pensiero critico nell'era dell'AI",
        description: "Da Socrate a Nietzsche. Comprendi i concetti astratti e impara a creare collegamenti tra le epoche storiche e il mondo moderno.",
        icon: "🧠",
        color: "rose",
        image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=800&q=80",
        benefits: ["Analisi guidata dei testi classici", "Confronto tra sistemi di pensiero", "Brainstorming per saggi brevi"],
        longText: [
            "La filosofia non è una materia del passato, ma la base del nostro presente. Tuttavia, decifrare il linguaggio complesso dei grandi filosofi può essere scoraggiante per uno studente del liceo. Geniotto agisce come un ponte tra il pensiero classico e la modernità, traducendo i concetti astratti in dilemmi attuali. Comprendere il 'Mito della Caverna' di Platone diventa improvvisamente semplice se paragonato alla realtà virtuale o ai social media di oggi.",
            "Utilizzando l'intelligenza artificiale, puoi 'intervistare' i grandi pensatori o chiedere a Geniotto di mettere a confronto la visione dello Stato di Hobbes con quella di Locke. Questo tipo di esercizio sviluppa il pensiero critico e la capacità di argomentazione, competenze fondamentali non solo per il successo scolastico, ma per la vita quotidiana in una società dell'informazione complessa."
        ]
    },
    "geografia": {
        title: "Geografia: Esplorare il mondo con l'AI",
        description: "Dalla geomorfologia alla geopolitica. Scopri i segreti del nostro pianeta con dati aggiornati e spiegazioni coinvolgenti.",
        icon: "🌍",
        color: "emerald",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        benefits: ["Analisi di dati climatici", "Spiegazione dei fenomeni geologici", "Approfondimenti geopolitici"],
        longText: [
            "La geografia moderna va ben oltre l'elenco dei fiumi e delle capitali. È lo studio delle interazioni tra l'uomo e l'ambiente, della sostenibilità e dei confini politici in continua evoluzione. Geniotto ti aiuta a visualizzare questi cambiamenti, spiegando come il clima influenza l'economia delle nazioni o perché determinate zone del mondo sono oggi al centro di tensioni geopolitiche, rendendo la materia viva e attuale.",
            "Attraverso l'uso dell'intelligenza artificiale, puoi approfondire fenomeni complessi come la tettonica a placche o la formazione dei monsoni con un linguaggio semplice ma rigoroso. Geniotto può aiutarti a preparare ricerche approfondite, fornendo dati statistici e collegamenti con le scienze naturali, trasformando lo studio della geografia in un vero e proprio viaggio intorno al mondo."
        ]
    },
    "fisica": {
        title: "Fisica: Le leggi dell'universo spiegate semplici",
        description: "Dalla cinematica alla meccanica quantistica. Comprendi il 'come' e il 'perché' dietro ogni formula e fenomeno naturale.",
        icon: "⚡",
        color: "cyan",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        benefits: ["Risoluzione guidata di problemi", "Simulazione di esperimenti mentali", "Chiarimenti su concetti astratti"],
        longText: [
            "La fisica può spaventare a causa della sua natura matematica e dei concetti astratti come l'entropia o la relatività. Tuttavia, la fisica è semplicemente il tentativo umano di capire le regole del gioco universale. Geniotto ti accompagna in questa scoperta, partendo dagli esempi quotidiani - come il perché una palla cade o come funziona un circuito elettrico - per arrivare alle leggi matematiche che li governano.",
            "Invece di limitarti a risolvere esercizi meccanicamente, puoi usare l'IA per esplorare le implicazioni delle leggi fisiche. Cosa succederebbe se la gravità fosse la metà? Come cambierebbe la luce se viaggiasse più lentamente? Questi esperimenti mentali stimolano la curiosità e permettono di visualizzare i concetti fisici in modo concreto, rendendo lo studio della fisica un'attività di pura scoperta intellettuale."
        ]
    },
    "chimica": {
        title: "Chimica: Gli elementi della vita al tuo servizio",
        description: "Dalla tavola periodica alle reazioni organiche. Impara a conoscere la materia e le sue trasformazioni con il supporto di Geniotto.",
        icon: "🧪",
        color: "rose",
        image: "https://images.unsplash.com/photo-1532187863486-abf9d3a35223?w=800&q=80",
        benefits: ["Bilanciamento reazioni chimiche", "Spiegazione legami atomici", "Nomenclatura semplificata"],
        longText: [
            "La chimica è spesso definita la 'scienza centrale' perché collega la fisica alla biologia. Comprendere come gli atomi si aggregano per formare molecole complesse è fondamentale per capire il mondo che ci circonda. Geniotto ti guida attraverso la tavola periodica, non come una lista da imparare, ma come una mappa logica delle proprietà della materia, spiegandoti perché il carbonio è la base della vita o come funzionano i nuovi materiali tecnologici.",
            "Affrontare lo studio della chimica organica o del bilanciamento delle redox può essere frustrante. L'intelligenza artificiale agisce come un assistente di laboratorio virtuale, aiutandoti a visualizzare le geometrie molecolari in 3D e spiegandoti i meccanismi di reazione passo dopo passo. Con Geniotto, la chimica smette di essere un insieme di sigle incomprensibili e diventa la chiave per leggere la composizione dell'intero universo."
        ]
    },
    "latino": {
        title: "Latino: Una lingua viva per allenare la mente",
        description: "Dalle declinazioni all'analisi dei classici come Cicerone e Virgilio. Riscopri le radici della nostra cultura con il tutor AI.",
        icon: "🏛️",
        color: "amber",
        image: "https://images.unsplash.com/photo-1544427928-142dc30fe670?w=800&q=80",
        benefits: ["Analisi logica e del periodo", "Supporto alla traduzione", "Contesto storico-culturale"],
        longText: [
            "Studiare il latino oggi non serve a 'parlare una lingua morta', ma a sviluppare una forma mentis analitica e rigorosa. Il latino è come una palestra per il cervello: ogni parola ha un posto preciso e una funzione logica da decifrare. Geniotto ti aiuta in questo processo di decodifica, non fornendo traduzioni automatiche, ma spiegandoti la struttura delle frasi e le sfumature di significato che ogni autore classico voleva trasmettere.",
            "Attraverso l'IA, puoi approfondire il contesto in cui scrivevano giganti come Seneca o Orazio. Puoi chiedere a Geniotto di spiegarti come la lingua latina si è evoluta nell'italiano moderno o di analizzare lo stile retorico di un'orazione celebre. Questo approccio rende il latino una materia di studio vibrante e attuale, capace di connetterci direttamente con le radici più profonde della nostra civiltà occidentale."
        ]
    },
    "greco": {
        title: "Greco Antico: La lingua della democrazia e dell'arte",
        description: "Dall'alfabeto all'epica di Omero. Esplora la lingua che ha dato i natali alla filosofia e alla tragedia con Geniotto.",
        icon: "🏺",
        color: "blue",
        image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?w=800&q=80",
        benefits: ["Analisi morfologica", "Etimologia delle parole moderne", "Parafrasi testi epici"],
        longText: [
            "Il greco antico è la lingua in cui l'umanità ha iniziato a interrogarsi su se stessa e sul cosmo. Imparare a leggere Platone o Sofocle in lingua originale è un'esperienza intellettuale senza pari. Geniotto ti supporta nello scoglio iniziale dell'alfabeto e delle declinazioni, aiutandoti a vedere la bellezza logica dietro la complessità grammaticale e rivelandoti l'origine greca di migliaia di termini scientifici e filosofici che usiamo ancora oggi.",
            "Con l'aiuto dell'intelligenza artificiale, puoi smontare e rimontare le strutture complesse dei testi classici. Chiedi a Geniotto di spiegarti il valore di una particella o di illustrarti l'evoluzione del mito di Edipo attraverso i secoli. Il greco antico diventerà così non solo una sfida grammaticale, ma un accesso privilegiato ai tesori dell'antichità che continuano a influenzare la nostra arte e il nostro pensiero."
        ]
    },
    "arte": {
        title: "Storia dell'Arte: Vedere la bellezza con occhi nuovi",
        description: "Dal Rinascimento all'Arte Contemporanea. Impara ad analizzare le opere e i movimenti artistici con il supporto dell'AI.",
        icon: "🎨",
        color: "pink",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
        benefits: ["Analisi iconografica", "Contestualizzazione dei movimenti", "Confronto tra stili"],
        longText: [
            "La storia dell'arte non è solo una cronologia di artisti famosi, ma lo specchio visivo delle aspirazioni, dei sogni e delle paure di ogni epoca. Imparare a 'leggere' un quadro significa capire la società che lo ha prodotto. Geniotto ti aiuta a decifrare i simboli nascosti nelle opere e a comprendere le innovazioni tecniche - come la prospettiva o il chiaroscuro - che hanno cambiato per sempre il nostro modo di percepire il mondo.",
            "Usa l'intelligenza artificiale per esplorare i collegamenti tra l'arte e le altre discipline. Come ha influenzato la rivoluzione industriale l'Impressionismo? Qual è il legame tra la fisica moderna e il Cubismo? Geniotto ti aiuta a tessere questa rete di conoscenze interdisciplinari, trasformando ogni visita a un museo o ogni ora di lezione in un'esperienza di scoperta profonda e personale."
        ]
    },
    "diritto": {
        title: "Diritto ed Economia: Cittadini consapevoli con l'AI",
        description: "Dalla Costituzione ai mercati finanziari. Comprendi le regole della società e del sistema economico moderno con Geniotto.",
        icon: "⚖️",
        color: "slate",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
        benefits: ["Spiegazione norme giuridiche", "Analisi macroeconomica", "Educazione civica"],
        longText: [
            "Vivere in una società complessa richiede la conoscenza delle regole che ne governano il funzionamento. Il diritto e l'economia sono gli strumenti che definiscono i nostri diritti, i nostri doveri e il modo in cui scambiamo valore. Geniotto semplifica il linguaggio spesso ostico dei codici e delle leggi, rendendo la Costituzione e i principi del diritto civile accessibili e comprensibili per ogni studente, promuovendo una cittadinanza attiva e consapevole.",
            "Attraverso l'analisi dell'IA, puoi esplorare come i grandi cambiamenti globali influenzano l'economia quotidiana. Cos'è l'inflazione? Come funziona un contratto digitale? Geniotto ti aiuta a interpretare le notizie economiche e a capire i meccanismi del mercato, fornendoti le basi per muoverti con sicurezza nel mondo degli adulti e per comprendere le sfide legali ed economiche del futuro digitale."
        ]
    }
};

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    // @ts-expect-error - index signature
    const subject = subjectsData[resolvedParams.slug];

    if (!subject) {
        notFound();
    }

    return (
        <main className="min-h-screen mesh-gradient-light flex flex-col">
            <Navbar />
            
            <div className="flex-1 max-w-5xl mx-auto w-full pt-32 pb-24 px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <Link href="/" className="text-primary font-black text-sm uppercase tracking-wider mb-8 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
                        ← Torna alla Home
                    </Link>
                    
                    <h1 className="text-5xl sm:text-6xl font-black text-slate-800 tracking-tight leading-tight mb-6">
                        {subject.icon} <br/> 
                        {subject.title}
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                        {subject.description}
                    </p>

                    <div className="space-y-4 mb-10">
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Come Geniotto ti aiuta:</h3>
                        {subject.benefits.map((benefit: string, index: number) => (
                             <div key={index} className="flex items-center gap-3">
                                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                                 <span className="text-slate-600 font-bold">{benefit}</span>
                             </div>
                        ))}
                    </div>

                    <a href="/chat" className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all inline-block">
                        INIZIA A STUDIARE ORA 🚀
                    </a>
                </div>

                <div className="flex-1 w-full">
                    <div className="relative h-96 w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50">
                         <Image 
                            src={subject.image} 
                            alt={subject.title} 
                            fill 
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            
            {/* Sezione Long Text per SEO e AdSense */}
            <div className="max-w-4xl mx-auto px-6 pb-24">
                <div className="bg-white/80 p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/50 prose prose-slate max-w-none">
                    <h2 className="text-2xl font-black text-slate-800 mb-6">L&apos;approccio pedagogico di Geniotto</h2>
                    {subject.longText.map((paragraph: string, index: number) => (
                        <p key={index} className="text-slate-600 font-medium leading-relaxed mb-6">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <BookRecommendations subject={resolvedParams.slug} />
            </div>
        </main>
    );
}

export function generateStaticParams() {
    return Object.keys(subjectsData).map((slug) => ({
        slug: slug,
    }));
}
