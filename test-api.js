const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

async function testWorkingModel() {
    console.log("--- Diagnostica Geniotto: Test Modello Specifico ---");

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

    // Proviamo i nomi esatti apparsi nella tua lista
    const modelsToTry = ["gemini-flash-latest", "gemini-pro-latest", "gemini-2.0-flash"];

    for (const name of modelsToTry) {
        console.log(`\nProvando modello: ${name}...`);
        try {
            const model = genAI.getGenerativeModel({ model: name });
            const result = await model.generateContent("Ciao, rispondi con una sola parola.");
            console.log(`✅ FUNZIONA! Risposta: ${result.response.text()}`);
            return;
        } catch (err) {
            console.error(`❌ FALLITO: ${err.message}`);
        }
    }
}

testWorkingModel();
