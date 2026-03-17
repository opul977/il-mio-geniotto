import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        const apiKey = process.env.GEMINI_API_KEY;

        let userId: string | null = null;
        let userEmail: string | null = null;
        let guestIp: string | null = null;
        let currentTokens = 0;
        const now = new Date();

        if (session?.user) {
            userId = (session.user as { id: string }).id;
            userEmail = (session.user as { email?: string }).email || null;
            const { data: usage, error: usageError } = await supabase
                .from('user_usage')
                .select('tokens_remaining, last_used_at')
                .eq('user_id', userId)
                .single();

            currentTokens = usage?.tokens_remaining ?? 10;
            if (!usageError && usage) {
                const lastUsed = new Date(usage.last_used_at || new Date().toISOString());
                if (lastUsed.toDateString() !== now.toDateString()) {
                    currentTokens = 10;
                    await supabase
                        .from('user_usage')
                        .update({ tokens_remaining: 10, last_used_at: now.toISOString() })
                        .eq('user_id', userId);
                }
            } else if (usageError?.code === 'PGRST116') {
                await supabase
                    .from('user_usage')
                    .insert([{ user_id: userId, tokens_remaining: 10, last_used_at: now.toISOString() }]);
                currentTokens = 10;
            }
        } else {
            const forwarded = req.headers.get("x-forwarded-for");
            guestIp = forwarded ? forwarded.split(/, /)[0] : "127.0.0.1";
            const { data: usage, error: usageError } = await supabase
                .from('guest_usage')
                .select('tokens_remaining, last_used_at')
                .eq('ip_address', guestIp)
                .single();

            currentTokens = usage?.tokens_remaining ?? 10;
            if (!usageError && usage) {
                const lastUsedDate = new Date(usage.last_used_at || new Date().toISOString()).toISOString().split('T')[0];
                const nowDate = now.toISOString().split('T')[0];
                
                if (lastUsedDate !== nowDate) {
                    currentTokens = 10;
                    await supabase
                        .from('guest_usage')
                        .update({ tokens_remaining: 10, last_used_at: now.toISOString() })
                        .eq('ip_address', guestIp);
                }
            } else if (usageError?.code === 'PGRST116') {
                await supabase
                    .from('guest_usage')
                    .insert([{ ip_address: guestIp, tokens_remaining: 10, last_used_at: now.toISOString() }]);
                currentTokens = 10;
            }
        }

        const isAdmin = userEmail === "admin@ilmiogeniotto.it";

        // --- DECREMENTO ANTICIPATO ---
        if (!isAdmin) {
            if (currentTokens <= 0) {
                if (!session) {
                    return NextResponse.json({
                        error: "Hai esaurito le tue 10 prove gratuite da ospite! 🎁 Registrati ora per riceverne SUBITO altre 10 e continuare!",
                        code: "GUEST_LIMIT_REACHED"
                    }, { status: 403 });
                }
                return NextResponse.json({
                    error: "Hai esaurito i tuoi messaggi gratuiti! Ricaricali guardando uno sponsor o torna domani. 🚀",
                    code: "USER_LIMIT_REACHED"
                }, { status: 403 });
            }

            // Sottrai il token IMMEDIATAMENTE sul DB
            if (userId) {
                await supabase
                    .from('user_usage')
                    .update({ tokens_remaining: currentTokens - 1, last_used_at: now.toISOString() })
                    .eq('user_id', userId);
            } else if (guestIp) {
                await supabase
                    .from('guest_usage')
                    .update({ tokens_remaining: currentTokens - 1, last_used_at: now.toISOString() })
                    .eq('ip_address', guestIp);
            }
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
            levelDirective = "Sei un maestro per bambini delle elementari. Fornisci spiegazioni complete e dettagliate, ma usando un linguaggio semplice e chiaro. Usa esempi pratici facili da capire. Usa al massimo una o due emoji per messaggio.";
        } else if (level === "middle") {
            levelDirective = "Sei un tutor per ragazzi delle scuole medie. Fornisci spiegazioni dettagliate e complete, suddividendo il problema in passaggi logici. Incoraggia il ragionamento autonomo. Limita l'uso delle emoji.";
        } else {
            levelDirective = "Sei un assistente per studenti delle scuole superiori. Fornisci spiegazioni tecniche, approfondite e dettagliate. Cita fonti o principi se necessario. Non usare emoji eccessive.";
        }

        const systemPrompt = `${levelDirective} 
REGOLE FONDAMENTALI:
1. SALUTI E INTERAZIONE: Se l'utente ti saluta (es. "Ciao", "Ehi"), rispondi in modo amichevole e chiedi come puoi aiutarlo nello studio. Se invece l'utente ti invia un compito o una domanda diretta, inizia subito con la spiegazione senza preamboli o presentazioni.
2. USA LA FORMATTAZIONE MARKDOWN: usa il **grassetto** per termini chiave. Usa le liste puntate per i passaggi logici.
3. DIVIETO ASSOLUTO SIMBOLO DOLLARO ($): NON usare mai i simboli del dollaro ($) e NON usare la notazione LaTeX. Scrivi le formule in testo semplice. Se usi il simbolo del dollaro verrai punito. Usa "x" o "×" per moltiplicare, ":" o "÷" per dividere.
4. SPIEGAZIONI MATEMATICHE (SOLO SE RICHIESTE): Solo quando risolvi divisioni o operazioni complesse, segui RIGOROSAMENTE questo esempio di layout per lo schema:
   
   **Esempio di Divisione: 2460 ÷ 23**
   
   *   **Schema Classico** (usando blocchi di codice):
   \`\`\`
     2460 | 23
    -23   |-------
     ---- | 106
       16 |
   \`\`\`
   
5. TONO: Sii sempre paziente, incoraggiante e giocoso come un vero amico di studio. Usa al massimo una o due emoji per messaggio.
6. RISPOSTE DIRETTE: Se l'utente non ha chiesto matematica, NON mostrare esempi di divisioni. Rispondi solo alla domanda ricevuta.`;

        // Funzione per ottenere lo streaming con fallback intelligente
        const getStreamResult = async (modelName: string, apiVersion?: string) => {
            const model = genAI.getGenerativeModel({ model: modelName }, apiVersion ? { apiVersion } : undefined);
            const prompt = image
                ? [systemPrompt + " Analizza: " + (message || "Cosa vedi?"), { inlineData: { data: image.split(",")[1], mimeType: image.split(";")[0].split(":")[1] || "image/jpeg" } }]
                : systemPrompt + " Domanda: " + message;

            return await model.generateContentStream(prompt);
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
            const userId = (session.user as { id: string }).id;
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

                try {
                    for await (const chunk of result.stream) {
                        let chunkText = chunk.text();
                        
                        // SANITIZZAZIONE AGGRESSIVA LATO SERVER
                        // Rimuoviamo i simboli del dollaro e i comandi LaTeX comuni
                        chunkText = chunkText
                            .replace(/\$/g, '')
                            .replace(/\\times/g, '×')
                            .replace(/\\div/g, '÷')
                            .replace(/\\cdot/g, '·');

                        controller.enqueue(encoder.encode(chunkText));
                    }

                    // Token già decrementati all'inizio

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
