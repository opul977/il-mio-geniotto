const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

async function testLiteModel() {
    console.log("--- Test Modello Ultra-Veloce (Lite) ---");
    let apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        try {
            const envContent = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
            const match = envContent.match(/GEMINI_API_KEY=(.*)/);
            if (match) apiKey = match[1].trim();
        } catch (e) { }
    }

    if (!apiKey) return;

    const genAI = new GoogleGenerativeAI(apiKey);

    // Proviamo sia 2.0 lite che 1.5 lite
    const models = ["gemini-2.0-flash-lite", "gemini-flash-lite-latest"];

    for (const name of models) {
        console.log(`\nProvando: ${name}...`);
        try {
            const model = genAI.getGenerativeModel({ model: name });
            const result = await model.generateContent("Ciao!");
            console.log(`✅ OK! Risposta: ${result.response.text()}`);
        } catch (err) {
            console.log(`❌ ERRORE: ${err.message.substring(0, 100)}...`);
        }
    }
}

testLiteModel();
