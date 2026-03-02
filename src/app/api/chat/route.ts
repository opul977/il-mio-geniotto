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

        // Strategia di fallback per superare i limiti di quota 429 su v1beta
        const getModel = () => {
            try {
                // Tentativo 1: Gemini 1.5 Flash su v1 Stabile (Quota di solito più alta per account free)
                return genAI.getGenerativeModel({ model: "gemini-1.5-flash" }, { apiVersion: "v1" });
            } catch {
                // Fallback estremo: Gemini 2.0 Flash su v1beta
                return genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            }
        };

        const model = getModel();

        let result;

        if (image) {
            const mimeType = image.split(";")[0].split(":")[1] || "image/jpeg";
            const base64Data = image.split(",")[1];

            result = await model.generateContent([
                systemPrompt + " Analizza questa immagine del mio compito: " + (message || "Cosa vedi in questa immagine?"),
                {
                    inlineData: {
                        data: base64Data,
                        mimeType: mimeType,
                    },
                },
            ]);
        } else {
            result = await model.generateContent(systemPrompt + " Rispondi a questa domanda di studio: " + message);
        }

        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ text });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Errore sconosciuto";
        const errorStack = error instanceof Error ? error.stack : "No stack trace";
        const errorName = error instanceof Error ? error.name : "UnknownError";

        console.error("Gemini API Error:", { name: errorName, message: errorMessage, stack: errorStack });

        return NextResponse.json({
            error: "Errore nella comunicazione con Geniotto.",
            details: errorMessage,
            errorName: errorName,
            suggestion: errorMessage.includes("429")
                ? "Quota superata! Google sta limitando il traffico gratuito per questo account. Riprova tra 60 secondi o abilita il 'Pay-as-you-go' su Google AI Studio."
                : "Riprova tra un attimo."
        }, { status: 500 });
    }
}
