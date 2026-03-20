"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "react-hot-toast";

interface Review {
    id: string;
    user_name: string;
    rating: number;
    comment: string;
    created_at: string;
}

const FALLBACK_REVIEWS: Review[] = [
    {
        id: "f1",
        user_name: "Mamma Giulia",
        rating: 5,
        comment: "Mio figlio di 9 anni ha finalmente capito le frazioni grazie a Geniotto! Spiega tutto in modo chiarissimo, come se fosse un amico.",
        created_at: "2026-03-10T10:00:00Z",
    },
    {
        id: "f2",
        user_name: "Marco, 14 anni",
        rating: 5,
        comment: "Ho usato Geniotto per ripassare storia prima dell'interrogazione e ho preso 9! Lo consiglio a tutti i miei compagni di classe.",
        created_at: "2026-03-08T14:30:00Z",
    },
    {
        id: "f3",
        user_name: "Papà Roberto",
        rating: 5,
        comment: "Finalmente uno strumento che aiuta i bambini senza fare i compiti al posto loro. Spiega il ragionamento passo per passo. Fantastico!",
        created_at: "2026-03-05T09:15:00Z",
    },
];

export default function ReviewsSection() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchReviews();
    }, []);

    async function fetchReviews() {
        try {
            const { data, error } = await supabase
                .from("reviews")
                .select("*")
                .order("created_at", { ascending: false })
                .limit(10);

            if (error) throw error;
            // Se il database è vuoto, mostra le recensioni di esempio
            setReviews(data && data.length > 0 ? data : FALLBACK_REVIEWS);
        } catch (error) {
            console.error("Errore nel caricamento delle recensioni:", error);
            // In caso di errore, mostra sempre le recensioni di fallback
            setReviews(FALLBACK_REVIEWS);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!name || !comment) {
            toast.error("Per favore, compila tutti i campi!");
            return;
        }

        setIsSubmitting(true);
        try {
            const { error } = await supabase.from("reviews").insert([
                { user_name: name, rating, comment }
            ]);

            if (error) throw error;

            toast.success("Recensione inviata con successo! ❤️");
            setName("");
            setComment("");
            setRating(5);
            fetchReviews();
        } catch (error) {
            console.error("Errore nell'invio della recensione:", error);
            toast.error("Errore nell'invio. Riprova più tardi.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-800 mb-4 uppercase tracking-tight">Cosa dicono di Geniotto 💬</h2>
                <p className="text-slate-500 font-bold max-w-2xl mx-auto italic">
                    &quot;Il parere dei genitori e degli studenti è la nostra forza più grande!&quot;
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Visualizzazione Recensioni */}
                <div className="flex flex-col gap-6">
                    {isLoading ? (
                        <div className="flex flex-col gap-4 animate-pulse">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-32 bg-slate-100 rounded-3xl w-full" />
                            ))}
                        </div>
                    ) : (
                        reviews.map((rev) => (
                            <div key={rev.id} className="bg-white/60 glass p-6 rounded-[2rem] border border-white/50 shadow-xl hover:scale-[1.02] transition-transform">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-black text-slate-800 text-lg uppercase tracking-tight">{rev.user_name}</span>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < rev.rating ? "text-amber-400" : "text-slate-200"}>★</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-slate-600 font-medium leading-relaxed italic">&quot;{rev.comment}&quot;</p>
                                <div className="mt-4 text-[9px] font-black text-slate-300 uppercase tracking-widest">
                                    {new Date(rev.created_at).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Modulo di Invio */}
                <div className="bg-white/80 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl border border-white/40 sticky top-32 lg:p-10">
                    <h3 className="text-2xl font-black text-slate-800 mb-6 uppercase tracking-tight">Lascia la tua opinione ✨</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Il tuo nome</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Esempio: Marco o Mamma Chiara"
                                className="bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold focus:border-primary/20 focus:outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Valutazione</label>
                            <div className="flex gap-3 bg-slate-50 p-4 rounded-2xl border-2 border-slate-100 justify-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        className={`text-3xl transition-all hover:scale-125 ${star <= rating ? "text-amber-400" : "text-slate-200"}`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Cosa ne pensi di Geniotto?</label>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Scrivi qui la tua esperienza..."
                                className="bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold focus:border-primary/20 focus:outline-none transition-all min-h-[120px] resize-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-primary hover:bg-blue-600 disabled:opacity-50 text-white py-5 rounded-[1.5rem] font-black shadow-xl shadow-blue-100 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-sm mt-4 flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? "Invio in corso..." : "Invia Recensione 🚀"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
