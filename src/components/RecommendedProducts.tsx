"use client";

import Image from "next/image";
import { RECOMMENDED_PRODUCTS } from "@/lib/affiliate_links";

interface RecommendedProductsProps {
    layout?: 'grid' | 'mini';
}

export default function RecommendedProducts({ layout = 'grid' }: RecommendedProductsProps) {
    const isMini = layout === 'mini';

    return (
        <section className={`${isMini ? 'p-2' : 'py-24 bg-white/50 backdrop-blur-sm'}`}>
            <div className={`max-w-7xl mx-auto px-6 ${isMini ? 'w-full' : ''}`}>
                {!isMini && (
                    <div className="flex flex-col items-center text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-amber-100/50">
                            <span>🛒</span> Strumenti per il tuo Studio
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tighter leading-none">
                            Scelti da <span className="text-primary italic">Geniotto</span>. ✨
                        </h2>
                        <p className="max-w-xl text-slate-400 font-bold leading-relaxed text-lg">
                            Il tuo amico Geniotto ha selezionato i migliori strumenti per rendere lo studio ancora più facile e divertente.
                        </p>
                    </div>
                )}

                <div className={`grid gap-6 ${isMini ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                    {RECOMMENDED_PRODUCTS.map((product) => (
                        <div 
                            key={product.id}
                            className={`group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden flex ${isMini ? 'flex-row items-center p-3 gap-4' : 'flex-col p-6'}`}
                        >
                            {/* Immagine */}
                            <div className={`relative overflow-hidden rounded-2xl bg-slate-50 shrink-0 ${isMini ? 'w-20 h-20' : 'w-full h-56 mb-6'}`}>
                                <Image 
                                    src={product.imageUrl} 
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black text-slate-800 shadow-sm uppercase tracking-widest">
                                    {product.store}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`w-2 h-2 rounded-full ${product.category === 'tech' ? 'bg-blue-400' : 'bg-orange-400'}`} />
                                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                                            {product.category}
                                        </span>
                                    </div>
                                    <h3 className={`font-black text-slate-800 tracking-tight leading-tight ${isMini ? 'text-sm mb-1' : 'text-xl mb-3'}`}>
                                        {product.name}
                                    </h3>
                                    {!isMini && (
                                        <p className="text-slate-400 text-sm font-bold leading-relaxed mb-6">
                                            {product.description}
                                        </p>
                                    )}
                                </div>

                                <div className={`flex items-center justify-between ${isMini ? 'mt-1' : 'mt-auto'}`}>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Prezzo</span>
                                        <span className={`font-black text-slate-800 ${isMini ? 'text-md' : 'text-2xl'}`}>{product.price}</span>
                                    </div>
                                    <a 
                                        href={product.affiliateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`bg-slate-900 text-white font-black hover:bg-primary transition-all rounded-xl flex items-center justify-center gap-2 group/btn ${isMini ? 'p-2.5 text-[10px]' : 'px-6 py-4 text-sm'}`}
                                    >
                                        {!isMini && <span>🛒</span>}
                                        <span>Dettagli</span>
                                        <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!isMini && (
                    <div className="mt-16 text-center">
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] max-w-sm mx-auto">
                            * Geniotto guadagna una piccola commissione se utilizzi questi link, aiutandoci a restare gratis! ❤️
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
