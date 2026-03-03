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

        // Prompt super-veloce per ridurre la latenza
        let tone = "amico elementari, semplice, usa icone.";
        if (level === "middle") tone = "mentor medie, tecnico, passaggi logici.";
        if (level === "highschool") tone = "professionale superiori, approfondito.";

        const systemPrompt = `Sei Geniotto, assistente studio. ${tone} Rispondi subito.`;

        // Funzione per ottenere lo streaming con fallback intelligente
        const getStreamResult = async (modelName: string, apiVersion?: string) => {
            const model = genAI.getGenerativeModel({ model: modelName }, apiVersion ? { apiVersion } : undefined);
            const prompt = image
                ? [systemPrompt + " Analizza: " + (message || "Cosa vedi?"), { inlineData: { data: image.split(",")[1], mimeType: image.split(";")[0].split(":")[1] || "image/jpeg" } }]
                : systemPrompt + " Domanda: " + message;

            return await model.generateContentStream(prompt as any);
        };

        let result;
        try {
            // Tentativo 1: gemini-flash-latest (v1beta di default, molto veloce)
            result = await getStreamResult("gemini-flash-latest");
        } catch (err) {
            console.warn("Switching to fallback model due to error:", err);
            // Tentativo 2: gemini-1.5-flash su v1 (più stabile e supportato ovunque)
            result = await getStreamResult("gemini-1.5-flash", "v1");
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
