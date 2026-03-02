const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

async function listModels() {
    console.log("--- Diagnostica Geniotto: Elenco Modelli ---");

    let apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        try {
            const envContent = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
            const match = envContent.match(/GEMINI_API_KEY=(.*)/);
            if (match) apiKey = match[1].trim();
        } catch (e) { }
    }

    if (!apiKey || apiKey === "your_actual_api_key_here") {
        console.error("❌ ERRORE: Chiave API non trovata o non valida nel file .env");
        return;
    }

    console.log("Chiave rilevata:", apiKey.substring(0, 10) + "...");

    // Usiamo fetch per listare i modelli in modo grezzo
    try {
        console.log("\nInterrogo l'endpoint /models per vedere cosa vede la tua chiave...");
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        if (data.error) {
            console.error("❌ Errore Google:", data.error.message);
            return;
        }

        if (data.models) {
            console.log("\n✅ Modelli disponibili per questa chiave:");
            data.models.forEach(m => {
                console.log(`- ${m.name.replace('models/', '')} (Supporta: ${m.supportedGenerationMethods.join(', ')})`);
            });

            const hasFlash = data.models.some(m => m.name.includes('gemini-1.5-flash'));
            if (hasFlash) {
                console.log("\n✨ Il modello 'gemini-1.5-flash' è presente!");
                console.log("Il problema potrebbe essere la versione dell'API (v1 vs v1beta).");
            } else {
                console.log("\n⚠️ Il modello 'gemini-1.5-flash' NON appare nella lista.");
            }
        } else {
            console.log("Nessun modello trovato. Risposta:", data);
        }
    } catch (err) {
        console.error("❌ Errore durante la fetch:", err.message);
    }
}

listModels();
