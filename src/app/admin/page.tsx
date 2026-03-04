import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic";

const ADMIN_EMAILS = ["opul977@gmail.com"];

export default async function AdminPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user || !ADMIN_EMAILS.includes(session.user.email || "")) {
        redirect("/");
    }

    // Recupero statistiche
    const { count: usersCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
    const { count: messagesCount } = await supabase.from('chat_messages').select('*', { count: 'exact', head: true });

    // Ultime registrazioni
    const { data: latestUsers } = await supabase
        .from('profiles')
        .select('full_name, email, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

    // Uso guest
    const { data: guestUsage } = await supabase
        .from('guest_usage')
        .select('*')
        .order('last_used_at', { ascending: false })
        .limit(5);

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12 pt-32">
                <div className="flex flex-col gap-2 mb-10">
                    <h1 className="text-4xl font-black text-slate-900">Dashboard Admin 🔐</h1>
                    <p className="text-slate-500 font-bold text-lg">Benvenuto, {session.user.name}. Ecco come sta andando Geniotto.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-2">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Utenti Registrati</span>
                        <span className="text-4xl font-black text-primary">{usersCount || 0}</span>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-2">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Messaggi Totali</span>
                        <span className="text-4xl font-black text-secondary">{messagesCount || 0}</span>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-2">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Gues IP Monitorati</span>
                        <span className="text-4xl font-black text-amber-500">?</span>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-2">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Stato Sistema</span>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="text-xl font-bold text-emerald-600 uppercase tracking-tighter">Online</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Latest Users Table */}
                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Ultimi Registrati 👤</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Nome</th>
                                        <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Email</th>
                                        <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Data</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {latestUsers?.map((u, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-8 py-4 font-bold text-slate-700">{u.full_name}</td>
                                            <td className="px-8 py-4 text-slate-500 font-medium">{u.email}</td>
                                            <td className="px-8 py-4 text-slate-400 text-sm font-bold">
                                                {new Date(u.created_at).toLocaleDateString('it-IT')}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Guest Usage Table */}
                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Utilizzo Ospiti (IP) 🚧</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">IP</th>
                                        <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Token</th>
                                        <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Ultimo Uso</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {guestUsage?.map((g, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-8 py-4 font-mono text-xs text-slate-500 font-bold">{g.ip_address}</td>
                                            <td className="px-8 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-black ${g.tokens_remaining > 5 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                                    {g.tokens_remaining} / 10
                                                </span>
                                            </td>
                                            <td className="px-8 py-4 text-slate-400 text-sm font-bold">
                                                {new Date(g.last_used_at).toLocaleTimeString('it-IT')}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
