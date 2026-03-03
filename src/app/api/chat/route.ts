import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error("ERRORE: GEMINI_API_KEY non configurata!");
            return NextResponse.json({ error: "Configurazione IA mancante. Controlla le variabili d'ambiente." }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey.trim());
        const { message, image, level } = await req.json();

        // Prompt pedagogico calibrato per ogni livello
        let levelDirective = "";
        if (level === "primary") {
            levelDirective = "Sei un maestro dolcissimo per bambini delle ELEMENTARI. Spiega in modo semplicissimo, come se fosse una storia. Usa esempi pratici, metafore simpatiche e un tono incoraggiante. Evita parole difficili o spiega bene quelle che devi usare. Usa molte emoji! 🌈🍎🌟";
        } else if (level === "middle") {
            levelDirective = "Sei un tutor esperto per ragazzi delle MEDIE. Spiega con chiarezza logica, suddividendo il problema in passaggi facili da seguire. Usa un linguaggio corretto ma non troppo formale. Incoraggia il ragionamento autonomo. 📚🧠✨";
        } else {
            levelDirective = "Sei un assistente per studenti delle SUPERIORI. Rispondi in modo approfondito, tecnico e professionale. Cita fonti o principi fondamentali se necessario. Usa uno stile accademico ma accessibile. 🏛️📖🔬";
        }

        const systemPrompt = `${levelDirective} Nome assistente: Geniotto. Rispondi subito e in modo completo ma chiaro per il livello scelto.`;

        // Funzione per ottenere lo streaming con fallback intelligente
        const getStreamResult = async (modelName: string, apiVersion?: string) => {
            const model = genAI.getGenerativeModel({ model: modelName }, apiVersion ? { apiVersion } : undefined);
            const prompt = image
                ? [systemPrompt + " Analizza: " + (message || "Cosa vedi?"), { inlineData: { data: image.split(",")[1], mimeType: image.split(";")[0].split(":")[1] || "image/jpeg" } }]
                : systemPrompt + " Domanda: " + message;

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return await model.generateContentStream(prompt as any);
        };

        let result;
        try {
            // Tentativo 1: gemini-flash-lite-latest (Modello Ultra-Veloce)
            result = await getStreamResult("gemini-flash-lite-latest");
        } catch (err) {
            console.warn("Switching to standard flash due to error:", err);
            // Tentativo 2: gemini-flash-latest (Modello standard)
            result = await getStreamResult("gemini-flash-latest");
        }

        const stream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                try {
                    for await (const chunk of result.stream) {
                        controller.enqueue(encoder.encode(chunk.text()));
                    }
                    controller.close();
                } catch (e) {
                    controller.error(e);
                }
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Transfer-Encoding": "chunked",
                "X-Geniotto-Status": "streaming"
            },
        });
    } catch (error) {
        console.error("Critical API Error:", error);
        return NextResponse.json({
            error: "Geniotto ha un piccolo ritardo.",
            details: error instanceof Error ? error.message : "Riprova tra un attimo."
        }, { status: 500 });
    }
}
