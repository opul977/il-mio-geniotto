const fs = require('fs');
const path = require('path');

async function getRealModels() {
    console.log("--- Recupero Lista Modelli Ufficiale ---");
    let apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        const envFiles = ['.env', '.env.local'];
        for (const file of envFiles) {
            try {
                const envContent = fs.readFileSync(path.join(__dirname, file), 'utf8');
                const match = envContent.match(/GEMINI_API_KEY=(.*)/);
                if (match) {
                    apiKey = match[1].replace(/["']/g, '').trim();
                    break;
                }
            } catch (e) { }
        }
    }

    if (!apiKey) {
        console.error("❌ ERRORE: Chiave API non trovata!");
        return;
    }

    const versions = ["v1", "v1beta"];

    for (const v of versions) {
        console.log(`\nControllando versione: ${v}...`);
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/${v}/models?key=${apiKey}`);
            const data = await response.json();

            if (data.models) {
                console.log(`✅ Trovati ${data.models.length} modelli:`);
                data.models.forEach(m => {
                    console.log(`- ${m.name} (${m.supportedGenerationMethods.join(", ")})`);
                });
            } else {
                console.log(`❌ Nessun modello o errore: ${JSON.stringify(data)}`);
            }
        } catch (err) {
            console.error(`❌ Errore fetch ${v}: ${err.message}`);
        }
    }
}

getRealModels();
