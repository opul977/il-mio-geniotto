-- Codice SQL da eseguire nella SQL Editor di Supabase

-- 1. Aggiungi la colonna email_verified alla tabella profiles
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS email_verified BOOLEAN DEFAULT false;

-- 2. Aggiungi la colonna verification_token
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS verification_token TEXT;

-- (Opzionale) 3. Imposta tutti i vecchi utenti come già verificati per non bloccarli
UPDATE profiles 
SET email_verified = true 
WHERE email_verified IS NULL OR email_verified = false;
