const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testGemini() {
    const apiKey = "AIzaSyDtcRG4NpmSzNVrQ9imjJ4NksQ018oPBSQ";
    
    try {
        console.log("Testing API Key...");
        const genAI = new GoogleGenerativeAI(apiKey.trim());
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
        const result = await model.generateContent("Ciao, come stai?");
        const response = await result.response;
        console.log("Response:", response.text());
        console.log("API Key is WORKING!");
    } catch (error) {
        console.error("API Key ERROR:", error.message);
    }
}

testGemini();
