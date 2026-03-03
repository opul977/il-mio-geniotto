const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

async function listModels() {
    console.log("--- Verifica Modelli su Versione v1 (Stabile) ---");
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

    const modelsToTest = [
        "gemini-1.5-flash",
        "gemini-1.5-flash-8b",
        "gemini-1.5-pro",
        "gemini-1.0-pro"
    ];

    for (const name of modelsToTest) {
        console.log(`\nTestando: ${name} (v1)...`);
        try {
            const model = genAI.getGenerativeModel({ model: name }, { apiVersion: 'v1' });
            const result = await model.generateContent("Test");
            console.log(`✅ DISPONIBILE`);

            try {
                const streamResult = await model.generateContentStream("Test");
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
