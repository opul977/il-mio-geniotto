-- Tabella per le recensioni degli utenti
CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    user_name TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT true -- Per ora approviamo tutto, in futuro potresti voler moderare
);

-- Politiche di sicurezza (RLS)
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Tutti possono leggere le recensioni
CREATE POLICY "Le recensioni sono pubbliche" ON reviews
    FOR SELECT USING (true);

-- Tutti possono inserire una recensione
CREATE POLICY "Chiunque può lasciare una recensione" ON reviews
    FOR INSERT WITH CHECK (true);
