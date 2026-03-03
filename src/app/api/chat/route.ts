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
            systemPrompt += "Parla a bambini delle elementari: usa un linguaggio semplicissimo, icone, spiega il 'perché' e sii molto incoraggiante. Evita termini difficili.";
        } else if (level === "middle") {
            systemPrompt += "Parla a ragazzi delle medie: sii chiaro e tecnico, spiega i passaggi logici e usa un tono da mentor moderno.";
        } else {
            systemPrompt += "Parla a studenti superiori: usa un tono professionale e accademico, con approfondimenti teorici.";
        }

        // Funzione per ottenere il risultato dello streaming con fallback
        const getStreamResult = async (modelName: string) => {
            const model = genAI.getGenerativeModel({ model: modelName });
            if (image) {
                const mimeType = image.split(";")[0].split(":")[1] || "image/jpeg";
                const base64Data = image.split(",")[1];
                return await model.generateContentStream([
                    systemPrompt + " Analizza questa immagine: " + (message || "Cosa vedi?"),
                    { inlineData: { data: base64Data, mimeType: mimeType } },
                ]);
            } else {
                return await model.generateContentStream(systemPrompt + " Rispondi: " + message);
            }
        };

        let result;
        try {
            // Tentativo 1: gemini-flash-latest
            result = await getStreamResult("gemini-flash-latest");
        } catch (err) {
            console.warn("Primo tentativo fallito (503/429), provo il fallback...", err);
            // Tentativo 2: gemini-1.5-flash (di solito più stabile in caso di picchi)
            result = await getStreamResult("gemini-1.5-flash");
        }

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
                "Cache-Control": "no-cache",
            },
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Errore sconosciuto";
        console.error("Gemini API Error:", errorMessage);

        return NextResponse.json({
            error: "Errore nella comunicazione con Geniotto.",
            details: errorMessage,
            suggestion: "Google è molto occupato ora. Riprova tra 10 secondi, Geniotto tornerà subito!"
        }, { status: 500 });
    }
}
