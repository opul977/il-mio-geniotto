"use client";

import React, { useEffect, useRef, useState } from "react";

const EMOJI_OPTIONS = [
    { icon: "🚀", id: "Missile" },
    { icon: "🤖", id: "Geniotto" },
    { icon: "📚", id: "Libro" },
    { icon: "🧠", id: "Mente" },
    { icon: "🌟", id: "Magia" },
];

class Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    color: string;
    vx: number = 0;
    vy: number = 0;
    ease: number;
    size: number;
    dx: number = 0;
    dy: number = 0;
    distance: number = 0;
    force: number = 0;
    angle: number = 0;
    friction: number;

    constructor(x: number, y: number, color: string, startX: number, startY: number) {
        this.x = startX;
        this.y = startY;
        this.originX = x;
        this.originY = y;
        this.color = color;
        this.size = Math.random() * 2 + 1; // 1 to 3 px
        this.ease = Math.random() * 0.1 + 0.05;
        this.friction = Math.random() * 0.6 + 0.15;
    }

    update(mouse: {x: number, y: number, radius: number}) {
        this.dx = mouse.x - this.x;
        this.dy = mouse.y - this.y;
        this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        
        // Interazione col mouse (repulsione magica)
        if (this.distance < mouse.radius) {
            this.force = (mouse.radius - this.distance) / mouse.radius;
            this.angle = Math.atan2(this.dy, this.dx);
            
            this.vx -= this.force * Math.cos(this.angle) * 5;
            this.vy -= this.force * Math.sin(this.angle) * 5;
        }

        // Ritorno morbido alla posizione originale
        this.x += (this.originX - this.x) * this.ease + this.vx;
        this.y += (this.originY - this.y) * this.ease + this.vy;

        // Frizione per smorzare il movimento
        this.vx *= this.friction;
        this.vy *= this.friction;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

export default function ParticleEmoji() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [currentEmoji, setCurrentEmoji] = useState("🚀");
    const particlesRef = useRef<Particle[]>([]);
    const reqRef = useRef<number>(0);
    const mouseRef = useRef({ x: -1000, y: -1000, radius: 80 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        let width = canvas.width = canvas.parentElement?.clientWidth || 500;
        let height = canvas.height = canvas.parentElement?.clientHeight || 500;

        const handleResize = () => {
            width = canvas.width = canvas.parentElement?.clientWidth || 500;
            height = canvas.height = canvas.parentElement?.clientHeight || 500;
            createParticles(currentEmoji);
        };
        window.addEventListener("resize", handleResize);

        const createParticles = (emoji: string) => {
            const hiddenCanvas = document.createElement("canvas");
            const hCtx = hiddenCanvas.getContext("2d", { willReadFrequently: true });
            if (!hCtx) return;

            hiddenCanvas.width = width;
            hiddenCanvas.height = height;

            hCtx.clearRect(0, 0, width, height);

            hCtx.font = `bold ${Math.min(width, height) * 0.6}px Arial, "Apple Color Emoji", "Segoe UI Emoji"`;
            hCtx.textAlign = "center";
            hCtx.textBaseline = "middle";
            hCtx.fillText(emoji, width / 2, height / 2);

            const imageData = hCtx.getImageData(0, 0, width, height);
            const data = imageData.data;

            const newParticles: Particle[] = [];
            const oldParticles = particlesRef.current;
            
            // Densità dei pixel (numero più basso = più particelle)
            const step = 6; 
            
            for (let y = 0; y < height; y += step) {
                for (let x = 0; x < width; x += step) {
                    const index = (y * width + x) * 4;
                    const alpha = data[index + 3];
                    
                    if (alpha > 50) { // Se il pixel non è trasparente
                        const r = data[index];
                        const g = data[index + 1];
                        const b = data[index + 2];
                        const color = `rgb(${r},${g},${b})`;
                        
                        // Riprende le vecchie posizioni per fare una transizione fluida
                        let startX = Math.random() * width;
                        let startY = Math.random() * height;
                        
                        if (newParticles.length < oldParticles.length) {
                            const oldP = oldParticles[newParticles.length];
                            startX = oldP.x;
                            startY = oldP.y;
                        }

                        newParticles.push(new Particle(x, y, color, startX, startY));
                    }
                }
            }

            particlesRef.current = newParticles;
        };

        createParticles(currentEmoji);

        const animate = () => {
            // Effetto scia: invece di clearRect uso fillRect con opacità
            ctx.fillStyle = "rgba(15, 23, 42, 0.3)"; // Colore slate-900 del bg
            ctx.fillRect(0, 0, width, height);
            
            const particles = particlesRef.current;
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(mouseRef.current);
                particles[i].draw(ctx);
            }
            
            reqRef.current = requestAnimationFrame(animate);
        };
        
        animate();

        return () => {
            cancelAnimationFrame(reqRef.current);
            window.removeEventListener("resize", handleResize);
        };
    }, [currentEmoji]);

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
        }
    };

    const handleMouseLeave = () => {
        mouseRef.current.x = -1000;
        mouseRef.current.y = -1000;
    };

    return (
        <div className="relative w-[90%] md:w-full aspect-[4/5] sm:aspect-square md:aspect-video lg:aspect-square mx-auto bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/20 ring-1 ring-slate-900/5 z-20 group">
            <canvas 
                ref={canvasRef} 
                className="w-full h-full touch-none"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTouchMove={(e) => {
                    const rect = canvasRef.current?.getBoundingClientRect();
                    if (rect) {
                        mouseRef.current.x = e.touches[0].clientX - rect.left;
                        mouseRef.current.y = e.touches[0].clientY - rect.top;
                    }
                }}
                onTouchEnd={handleMouseLeave}
            />
            
            {/* Toolbar Comandi */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-xl px-4 sm:px-6 py-3 rounded-full border border-white/20 shadow-2xl z-30">
                {EMOJI_OPTIONS.map((opt) => (
                    <button
                        key={opt.id}
                        onClick={() => setCurrentEmoji(opt.icon)}
                        className={`text-2xl sm:text-3xl md:text-4xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                            currentEmoji === opt.icon 
                            ? 'scale-[1.3] drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] -translate-y-2' 
                            : 'opacity-50 hover:opacity-100 hover:scale-110 grayscale-[0.5] hover:grayscale-0'
                        }`}
                        title={opt.id}
                    >
                        {opt.icon}
                    </button>
                ))}
            </div>
            
            {/* Sparkles Decorativi */}
            <div className="absolute top-6 left-6 text-white/20 animate-pulse text-2xl pointer-events-none">✨</div>
            <div className="absolute top-12 right-10 text-white/20 animate-pulse delay-700 text-xl pointer-events-none">✦</div>
            
            {/* Hint overlay iniziale che svanisce */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-slate-800/60 backdrop-blur-sm text-slate-200 text-sm md:text-base font-bold px-4 py-2 rounded-full border border-white/10 opacity-0 animate-[fade-in-out_4s_ease-in-out_1s_forwards] pointer-events-none">
                Muovi il cursore per fare magie! 🪄
            </div>
        </div>
    );
}
