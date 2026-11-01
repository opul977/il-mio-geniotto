import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const admins = ["opul977@gmail.com", "crociolina@gmail.com"];
        const passwordHash = await bcrypt.hash("Rest@Conme77", 10);
        const results = [];

        for (const email of admins) {
            // Check if exists
            const { data: existing } = await supabase.from('profiles').select('*').eq('email', email).single();
            
            if (existing) {
                // Update password and verify
                const { error } = await supabase.from('profiles').update({ 
                    password: passwordHash,
                    email_verified: true 
                }).eq('email', email);
                results.push({ email, status: error ? error.message : "updated" });
            } else {
                // Insert
                const { error } = await supabase.from('profiles').insert([{
                    email,
                    password: passwordHash,
                    full_name: email.split('@')[0],
                    email_verified: true
                }]);
                results.push({ email, status: error ? error.message : "created" });
            }
        }

        return NextResponse.json({ success: true, results });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
