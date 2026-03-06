import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        const apiKey = process.env.GEMINI_API_KEY;

        if (!session?.user) {
            return NextResponse.json({ error: "Devi essere registrato per chattare con Geniotto! 🚀" }, { status: 401 });
        }

        const userId = (session.user as any).id;

        // Controllo token per l'utente
        const { data: usage, error: usageError } = await supabase
            .from('user_usage')
            .select('tokens_remaining, last_used_at')
            .eq('user_id', userId)
            .single();

        let currentTokens = usage?.tokens_remaining ?? 10;
        const now = new Date();

        if (!usageError && usage) {
            const lastUsed = new Date(usage.last_used_at || new Date().toISOString());
            const isNewDay = lastUsed.toDateString() !== now.toDateString();
            const isOver24h = now.getTime() - lastUsed.getTime() > 24 * 60 * 60 * 1000;

            if (isNewDay || isOver24h) {
                currentTokens = 10;
                await supabase
                    .from('user_usage')
                    .update({ tokens_remaining: 10, last_used_at: now.toISOString() } as any)
                    .eq('user_id', userId);
            }
        } else if (usageError && usageError.code === 'PGRST116') {
            // Crea record se non esiste
            await supabase
                .from('user_usage')
                .insert([{ user_id: userId, tokens_remaining: 10, last_used_at: now.toISOString() }]);
            currentTokens = 10;
        }

        if (currentTokens <= 0) {
            return NextResponse.json({ error: "Hai esaurito i tuoi messaggi gratuiti! Ricaricali guardando uno sponsor o torna domani. 🚀" }, { status: 403 });
        }

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
            result = await getStreamResult("gemini-flash-lite-latest");
        } catch (err) {
            console.warn("Switching to standard flash due to error:", err);
            result = await getStreamResult("gemini-flash-latest");
        }

        // Se l'utente è loggato, salviamo il messaggio dell'utente PRIMA dello streaming
        if (session?.user) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const userId = (session.user as any).id;
            await supabase.from('chat_messages').insert([{
                user_id: userId,
                role: 'user',
                content: message,
                image_url: image || null,
                level: level
            }]);
        }

        const stream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                let fullAssistantResponse = "";

                try {
                    for await (const chunk of result.stream) {
                        const chunkText = chunk.text();
                        fullAssistantResponse += chunkText;
                        controller.enqueue(encoder.encode(chunkText));
                    }

                    // Salviamo la risposta di Geniotto alla fine dello streaming
                    if (session?.user) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const userId = (session.user as any).id;
                        await supabase.from('chat_messages').insert([{
                            user_id: userId,
                            role: 'assistant',
                            content: fullAssistantResponse,
                            level: level
                        }]);
                        // Decrementiamo i token dall'account utente
                        const { data: currentUsage } = await supabase
                            .from('user_usage')
                            .select('tokens_remaining')
                            .eq('user_id', userId)
                            .single();

                        const currentToks = currentUsage?.tokens_remaining ?? 10;
                        const newTokens = Math.max(0, currentToks - 1);

                        await supabase
                            .from('user_usage')
                            .update({ tokens_remaining: newTokens, last_used_at: new Date().toISOString() } as any)
                            .eq('user_id', userId);
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
