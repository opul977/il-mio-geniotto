-- Creazione completa della tabella chat_messages con supporto cronologia ospiti
-- Esegui questo script nell'SQL Editor di Supabase (https://supabase.com/dashboard)

-- 1. Crea la tabella se non esiste
CREATE TABLE IF NOT EXISTS chat_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    guest_ip TEXT,
    role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
    content TEXT NOT NULL,
    image_url TEXT,
    level TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Indici per ricerche veloci
CREATE INDEX IF NOT EXISTS idx_chat_messages_user_id 
ON chat_messages (user_id);

CREATE INDEX IF NOT EXISTS idx_chat_messages_guest_ip 
ON chat_messages (guest_ip);

-- 3. Abilita Row Level Security (consigliato)
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- 4. Policy: gli utenti loggati vedono solo i propri messaggi
CREATE POLICY "Users see their messages" ON chat_messages
    FOR ALL USING (auth.uid() = user_id);

-- 5. Policy: il server (service_role) può fare tutto (necessario per l'API)
-- Nota: le API Next.js usano la service_role key, quindi bypassa le policy automaticamente.

-- 6. (Opzionale) Pulizia automatica messaggi ospiti dopo 30 giorni:
-- DELETE FROM chat_messages 
-- WHERE guest_ip IS NOT NULL AND user_id IS NULL 
--   AND created_at < NOW() - INTERVAL '30 days';
