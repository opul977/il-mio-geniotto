import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const supabaseUrl = 'https://kieehorrfqzruhmyhrzx.supabase.co';
const supabaseAnonKey = 'sb_publishable_wpI6YyUdpR3Mcwe9_cKn2Q_V_4glBYl';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
    const admins = ["opul977@gmail.com", "crociolina@gmail.com"];
    const passwordHash = await bcrypt.hash("Rest@Conme77", 10);

    for (const email of admins) {
        console.log(`Processing ${email}...`);
        const { data: existing } = await supabase.from('profiles').select('*').eq('email', email).single();
        
        if (existing) {
            console.log(`Updating ${email}...`);
            const { error } = await supabase.from('profiles').update({ 
                password: passwordHash,
                email_verified: true 
            }).eq('email', email);
            console.log(error ? error : 'Updated');
        } else {
            console.log(`Creating ${email}...`);
            const { error } = await supabase.from('profiles').insert([{
                email,
                password: passwordHash,
                full_name: email.split('@')[0],
                email_verified: true
            }]);
            console.log(error ? error : 'Created');
        }
    }
}

main().catch(console.error);
