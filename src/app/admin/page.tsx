import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
    const session = await getServerSession(authOptions);

    return (
        <div style={{ padding: '50px', fontFamily: 'monospace', backgroundColor: '#111', color: '#0f0', minHeight: '100vh' }}>
            <h1>DEBUG ADMIN LIVE 🛡️</h1>
            <hr />
            <h2>Stato Sessione: {session ? 'LOGGATO ✅' : 'NON LOGGATO ❌'}</h2>
            {session && (
                <div style={{ marginTop: '20px', border: '1px solid #333', padding: '20px', borderRadius: '10px' }}>
                    <p><strong>Nome:</strong> {session.user?.name}</p>
                    <p><strong>Email:</strong> {session.user?.email}</p>
                    <pre>{JSON.stringify(session, null, 2)}</pre>
                </div>
            )}
            <div style={{ marginTop: '50px' }}>
                <Link href="/" style={{ color: '#0070f3' }}>Torna alla Home</Link>
            </div>
        </div>
    );
}
