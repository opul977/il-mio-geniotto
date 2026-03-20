const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

async function testGemini() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("No API key found in .env");
        return;
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey.trim());
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent("Ciao, come stai?");
        const response = await result.response;
        console.log("Response:", response.text());
        console.log("API Key is WORKING!");
    } catch (error) {
        console.error("API Key ERROR:", error.message);
        if (error.message.includes("API_KEY_INVALID")) {
            console.error("The API key is invalid.");
        } else if (error.message.includes("quota")) {
            console.error("Quota exceeded.");
        }
    }
}

testGemini();
