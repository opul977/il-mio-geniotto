"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function VerifyContent() {
    const searchParams = useSearchParams();
    const success = searchParams.get("success");

    return (
        <div className="min-h-screen mesh-gradient-light flex items-center justify-center p-6">
            <div className="bg-white/80 glass p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full text-center border-2 border-primary/10">
                <div className="w-20 h-20 bg-emerald-100 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-xl shadow-emerald-200/50">
                    <span className="text-4xl">{success === 'true' ? '✅' : '📧'}</span>
                </div>
                
                <h1 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">
                    {success === 'true' ? 'Email Verificata!' : 'Controlla la tua Email'}
                </h1>
                
                <p className="text-slate-500 font-bold mb-8 leading-relaxed">
                    {success === 'true' 
                        ? 'La tua email è stata verificata con successo. Ora puoi fare il login e iniziare a usare Geniotto AI!' 
                        : 'Abbiamo inviato un link di conferma al tuo indirizzo email. Clicca sul link per attivare il tuo account.'}
                </p>

                {success === 'true' ? (
                    <Link href="/auth/login" className="block w-full bg-primary hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-200 hover:-translate-y-1 active:scale-95 transition-all">
                        Vai al Login 🚀
                    </Link>
                ) : (
                    <Link href="/" className="block w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-black py-4 rounded-2xl transition-all">
                        Torna alla Home
                    </Link>
                )}
            </div>
        </div>
    );
}

export default function VerifyPage() {
    return (
        <Suspense fallback={<div className="min-h-screen mesh-gradient-light flex items-center justify-center"><p className="font-bold text-slate-500">Caricamento...</p></div>}>
            <VerifyContent />
        </Suspense>
    );
}
