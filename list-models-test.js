const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
    const apiKey = "AIzaSyDtcRG4NpmSzNVrQ9imjJ4NksQ018oPBSQ";
    
    try {
        console.log("Listing models...");
        const genAI = new GoogleGenerativeAI(apiKey.trim());
        // Note: The JS SDK doesn't have a direct listModels, but we can try to find what's wrong.
        // Actually, let's try a different model name or version.
        const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Try gemini-pro which is stable
        const result = await model.generateContent("Ciao");
        const response = await result.response;
        console.log("Response:", response.text());
        console.log("API Key is WORKING with gemini-pro!");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

listModels();
