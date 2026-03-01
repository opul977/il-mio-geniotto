import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
    try {
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

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        let result;

        if (image) {
            // Rimuovi l'header del data URL (es. "data:image/jpeg;base64,")
            const base64Data = image.split(",")[1];

            result = await model.generateContent([
                systemPrompt + " Analizza questa immagine del mio compito: " + message,
                {
                    inlineData: {
                        data: base64Data,
                        mimeType: "image/jpeg", // Assumiamo jpeg per semplicità, Next.js Image lo gestisce bene
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
        console.error("Gemini API Error:", error);
        return NextResponse.json({ error: "Errore nella comunicazione con Geniotto." }, { status: 500 });
    }
}
