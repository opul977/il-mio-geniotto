const cleanTextForSpeech = (text) => {
    return text
        .replace(/[*_#~`]/g, '') // Rimuove markdown
        .replace(/[^\w\s.,!?;:áéíóúàèìòù\']|_/gi, ' ') // Rimuove caratteri speciali ed emoji
        .replace(/\s+/g, ' ') // Pulizia spazi doppi
        .trim();
};

const testCases = [
    { input: "Ciao! **Geniotto** è qui 🚀.", expected: "Ciao! Geniotto è qui" },
    { input: "# Titolo\n* Punto 1\n* Punto 2", expected: "Titolo Punto 1 Punto 2" },
    { input: "L'erba del vicino è sempre più verde... 🌿", expected: "L'erba del vicino è sempre più verde..." },
    { input: "Emoji test: 😂 🧪 🧬 !!!", expected: "Emoji test !!!" }
];

testCases.forEach((tc, i) => {
    const result = cleanTextForSpeech(tc.input);
    const passed = result === tc.expected; // Simple check, might need slight adjustments for spaces
    console.log(`Test ${i + 1}: ${passed ? '✅ PASSED' : '❌ FAILED'}`);
    console.log(`  Input:  "${tc.input.replace(/\n/g, '\\n')}"`);
    console.log(`  Result: "${result}"`);
});
