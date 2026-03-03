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

        // 1. Definiamo il sistema di prompt (Tone of Voice) basato sul livello
        let systemPrompt = "Sei Geniotto, un assistente IA esperto nello studio. ";

        if (level === "primary") {
            systemPrompt += "Ti rivolgi a bambini delle elementari. Usa un linguaggio semplicissimo, parla come un amico incoraggiante e un tutor amichevole. Non dare solo la soluzione, spiega il 'perché' in modo divertente con esempi pratici e icone. Evita termini tecnici complicati.";
        } else if (level === "middle") {
            systemPrompt += "Ti rivolgi a ragazzi delle medie. Sii tecnico ma chiaro. Spiega i passaggi logici e incoraggia il ragionamento critico. Usa un tono moderno da 'mentor tecnologico'.";
        } else {
            systemPrompt += "Ti rivolgi a studenti delle superiori. Usa un tono accademico, preciso e professionale. Fornisci riferimenti teorici profondi e scomposizioni analitiche dei problemi.";
        }

        // ABBIAMO IL VINCITORE! Il test ha confermato che gemini-flash-latest funziona perfettamente.
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        let result;

        if (image) {
            const mimeType = image.split(";")[0].split(":")[1] || "image/jpeg";
            const base64Data = image.split(",")[1];

            result = await model.generateContentStream([
                systemPrompt + " Analizza questa immagine del mio compito: " + (message || "Cosa vedi in questa immagine?"),
                {
                    inlineData: {
                        data: base64Data,
                        mimeType: mimeType,
                    },
                },
            ]);
        } else {
            result = await model.generateContentStream(systemPrompt + " Rispondi a questa domanda di studio: " + message);
        }

        // Creiamo uno stream leggibile per il frontend
        const stream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                try {
                    for await (const chunk of result.stream) {
                        const chunkText = chunk.text();
                        controller.enqueue(encoder.encode(chunkText));
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
            },
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Errore sconosciuto";
        console.error("Gemini API Error:", errorMessage);

        return NextResponse.json({
            error: "Errore nella comunicazione con Geniotto.",
            details: errorMessage,
            suggestion: errorMessage.includes("429")
                ? "Quota superata! Riprova tra poco."
                : "Riprova tra un attimo."
        }, { status: 500 });
    }
}
