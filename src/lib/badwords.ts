// Un elenco base di parole non consentite (da estendere all'occorrenza)
export const badWordsList = [
    "cazzo",
    "stronzo",
    "stronza",
    "merda",
    "troia",
    "puttana",
    "zoccola",
    "bastardo",
    "bastarda",
    "coglione",
    "coglioni",
    "figa",
    "fregna",
    "vaffanculo",
    "fanculo",
    "porco",
    "dio", // In accoppiata per bestemmioni, ma 'dio' da solo potrebbe bloccare frasi normali, meglio bloccare le combinazioni o lasciarlo a discrezione.
    "porcodio",
    "dioporco",
    "diocane",
    "madonna", // Stesso discorso per parolacce composte
    "porcamadonna",
    "frocio",
    "ricchione",
    "negro",
    "mignotta",
    "culo", // "Culo" può essere borderline, usalo con cautela
    "pisello" // anche questo borderline
];

/**
 * Controlla se una stringa contiene parolacce.
 * Usa un'espressione regolare per fare match su parole intere, case-insensitive.
 */
export function containsBadWords(text: string): boolean {
    if (!text) return false;
    
    // Normalizza il testo (minuscolo)
    const normalizedText = text.toLowerCase();

    // Creiamo una regex con word boundaries (\b) per evitare falsi positivi
    // Ad esempio: "scazzo" non deve bloccare per "cazzo", ma in italiano spesso i suffissi cambiano
    // Quindi facciamo un controllo semplice includendo la parola
    
    for (const badword of badWordsList) {
        // Regex per parola esatta o con punteggiatura attorno
        const regex = new RegExp(`\\b${badword}\\b`, 'i');
        if (regex.test(normalizedText)) {
            return true;
        }
    }

    return false;
}
