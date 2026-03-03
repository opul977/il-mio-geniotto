const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

async function listModels() {
    console.log("--- Verifica Modelli Disponibili ---");
    let apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        try {
            const envContent = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
            const match = envContent.match(/GEMINI_API_KEY=(.*)/);
            if (match) apiKey = match[1].trim();
        } catch (e) { }
    }

    if (!apiKey) {
        console.error("❌ ERRORE: Chiave API non trovata!");
        return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Per listare i modelli dobbiamo usare l'endpoint dedicato, 
    // ma la libreria JS non ha un metodo diretto semplice come Python.
    // Possiamo però provare a inizializzare quelli comuni e vedere se rispondono.

    const modelsToTest = [
        "gemini-2.0-flash",
        "gemini-1.5-flash",
        "gemini-1.5-flash-latest",
        "gemini-flash-latest",
        "gemini-1.5-pro",
        "gemini-pro"
    ];

    for (const name of modelsToTest) {
        console.log(`\nTestando: ${name}...`);
        try {
            const model = genAI.getGenerativeModel({ model: name });
            const result = await model.generateContent("Test");
            console.log(`✅ DISPONIBILE (GenerateContent OK)`);

            try {
                const streamResult = await model.generateContentStream("Test");
                await streamResult.stream.next();
                console.log(`✅ STREAMING SUPPORTATO`);
            } catch (streamErr) {
                console.log(`❌ STREAMING FALLITO: ${streamErr.message}`);
            }
        } catch (err) {
            console.log(`❌ NON DISPONIBILE: ${err.message}`);
        }
    }
}

listModels();
