"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function ObsidianVillaPage() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Dawn Section Refs
    const dawnRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress: dawnProgress } = useScroll({
        target: dawnRef,
        offset: ["start start", "end start"]
    })

    const dawnOpacity = useTransform(dawnProgress, [0, 0.5], [1, 0])
    const dawnTextY = useTransform(dawnProgress, [0, 1], [0, 100])

    // Day Section Refs
    const dayRef = useRef<HTMLDivElement>(null)

    // Dusk Section Refs
    const duskRef = useRef<HTMLDivElement>(null)

    return (
        <main className="bg-black min-h-screen text-white selection:bg-[#C5A059] selection:text-black">
            {/* Navigation / Back Button */}
            <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
                <Link href="/" className="text-sm font-serif tracking-widest uppercase hover:text-[#C5A059] transition-colors">
                    ← Return to Collection
                </Link>
                <div className="text-sm tracking-widest uppercase">
                    The Obsidian Villa
                </div>
            </nav>

            {/* 1. DAWN: The Arrival */}
            <section ref={dawnRef} className="relative h-screen sticky top-0 z-0 overflow-hidden">
                {/* Background Image/Video Placeholder */}
                {/* In a real app, this would be a high-res video of sunrise over the ocean */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/20 to-black z-10" />
                <motion.div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671')] bg-cover bg-center"
                    style={{ scale: useTransform(dawnProgress, [0, 1], [1, 1.1]) }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <motion.div style={{ opacity: dawnOpacity, y: dawnTextY }} className="text-center space-y-6">
                        <span className="text-[#C5A059] tracking-[0.3em] text-xs uppercase block mb-2">
                            06:00 AM • Côte d'Azur
                        </span>
                        <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tight text-white mb-6">
                            Dawn
                        </h1>
                        <p className="max-w-md mx-auto text-lg text-white/80 font-light leading-relaxed">
                            Awaken to the rhythm of the Mediterranean.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    style={{ opacity: dawnOpacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
                >
                    <ArrowDown className="text-white/50 w-6 h-6" />
                </motion.div>
            </section>

            {/* 2. DAY: The Lifestyle (Sticky Scroll) */}
            <section className="relative z-10 bg-black">
                <div className="h-[200vh]" ref={dayRef}>
                    <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2340')] bg-cover bg-center opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 container mx-auto px-6 items-center">
                            <div className="space-y-8">
                                <span className="text-[#C5A059] tracking-[0.3em] text-xs uppercase">
                                    12:00 PM • The Infinity Pool
                                </span>
                                <h2 className="text-5xl font-serif font-light leading-tight">
                                    Suspended Above <br />
                                    The Horizon.
                                </h2>
                                <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                                    Enter a state of flow in the 50-meter infinity edge pool, seamlessly merging with the azure sea.
                                </p>
                            </div>
                            <div className="hidden md:block">
                                {/* Interactive or parallax detail shots could go here */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. DUSK: The Entertainment */}
            <section className="relative z-20 bg-[#050505]">
                <div className="h-[150vh] flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653')] bg-cover bg-center grayscale opacity-40 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="relative z-10 text-center space-y-8 px-4">
                        <span className="text-[#C5A059] tracking-[0.3em] text-xs uppercase block">
                            20:00 PM • The Grand Salon
                        </span>
                        <h2 className="text-5xl md:text-7xl font-serif font-light text-white">
                            Dusk
                        </h2>
                        <p className="max-w-lg mx-auto text-xl text-white/70 font-light leading-relaxed">
                            As the sun sets, the Obsidian Villa transforms into a stage for unforgettable evenings.
                        </p>
                        <button className="bg-[#C5A059] text-black px-8 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-500">
                            Inquire for Private Tour
                        </button>
                    </div>
                </div>
            </section>

            {/* Specs Footer */}
            <footer className="bg-black py-20 border-t border-white/10 relative z-30">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    <div>
                        <span className="block text-xs uppercase tracking-widest text-[#C5A059] mb-2">Price</span>
                        <span className="text-2xl font-serif text-white">€85,000,000</span>
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-widest text-[#C5A059] mb-2">Location</span>
                        <span className="text-xl text-white">Monaco-Ville</span>
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-widest text-[#C5A059] mb-2">Interior</span>
                        <span className="text-xl text-white">12,500 sq.ft</span>
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-widest text-[#C5A059] mb-2">Grounds</span>
                        <span className="text-xl text-white">2.5 Acres</span>
                    </div>
                </div>
            </footer>
        </main>
    )
}
