import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Durante il build di Next.js, le variabili d'ambiente potrebbero non essere caricate.
// Usiamo dei placeholder per evitare che il build fallisca, ma avvertiamo in console.
if (supabaseUrl.includes('placeholder')) {
    console.warn("ATTENZIONE: Supabase URL non trovato nel build. Assicurati di caricarlo su Vercel!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
