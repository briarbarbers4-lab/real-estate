"use client"

import { motion } from "framer-motion"
import { ShieldCheck, MapPin, BedDouble, Bath, Square, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface ConfidentialListing {
    id: string
    codeName: string
    location: string
    price: string
    specs: {
        beds: number
        baths: number
        sqft: string
    }
    image: string // In a real app, this would be a blurred placeholder or actual image
    features: string[]
}

export function ClassifiedCard({ listing, index }: { listing: ConfidentialListing, index: number }) {
    const [isRevealed, setIsRevealed] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
            className="group relative bg-[#111] border border-[#C5A059]/20 overflow-hidden cursor-pointer"
            onClick={() => setIsRevealed(!isRevealed)}
        >
            {/* Image Container with Blur Effect */}
            <div className="aspect-[4/5] relative overflow-hidden">
                {/* Actual Image (simulated with a dark gradient/noise for now if no image) */}
                <div className={cn(
                    "absolute inset-0 bg-cover bg-center transition-all duration-1000 transform",
                    isRevealed ? "scale-105 blur-0 grayscale-0" : "blur-xl grayscale scale-100"
                )}
                    style={{ backgroundImage: `url(${listing.image})` }}
                />

                {/* Overlay when Locked */}
                <div className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-all duration-500",
                    isRevealed ? "opacity-0 pointer-events-none" : "opacity-100 backdrop-blur-md"
                )}>
                    <div className="border border-[#C5A059] p-4 bg-black/80 backdrop-blur-xl">
                        <div className="flex flex-col items-center space-y-2">
                            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
                            <span className="text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase">Classified</span>
                            <span className="text-[10px] text-white/50 tracking-widest">TAP TO DECRYPT</span>
                        </div>
                    </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center space-x-2 bg-black/90 px-3 py-1 border border-[#C5A059]/30 backdrop-blur-md">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-widest text-white">Off-Market</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 bg-[#0A0A0A] relative z-10 border-t border-[#C5A059]/10">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-serif text-white tracking-wide mb-1 flex items-center gap-2">
                            {/* Code Name is always visible but perhaps cryptically */}
                            {listing.codeName}
                            {isRevealed && <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />}
                        </h3>
                        <p className="text-xs text-[#C5A059]/80 uppercase tracking-widest flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {listing.location}
                        </p>
                    </div>
                    {/* Price is redacted until revealed? Or high level range. */}
                    <div className="text-right">
                        <p className="text-lg text-white font-light">
                            {isRevealed ? listing.price : "Price on Request"}
                        </p>
                    </div>
                </div>

                {/* Specs - Blurred if not revealed? Let's keep them visible to tease. */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5 border-b">
                    <div className="flex flex-col items-center text-center">
                        <BedDouble className="w-4 h-4 text-[#C5A059]/60 mb-1" />
                        <span className="text-xs text-white/80">{listing.specs.beds} Beds</span>
                    </div>
                    <div className="flex flex-col items-center text-center px-2 border-l border-white/5 border-r">
                        <Bath className="w-4 h-4 text-[#C5A059]/60 mb-1" />
                        <span className="text-xs text-white/80">{listing.specs.baths} Baths</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Square className="w-4 h-4 text-[#C5A059]/60 mb-1" />
                        <span className="text-xs text-white/80">{listing.specs.sqft}</span>
                    </div>
                </div>

                {/* Features - Only visible when revealed */}
                <div className={cn(
                    "space-y-2 transition-all duration-500 overflow-hidden",
                    isRevealed ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                )}>
                    {listing.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-[#C5A059] rounded-full" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
