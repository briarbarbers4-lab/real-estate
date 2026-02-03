"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Sparkles, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Constants ---
const PROPERTY_TYPES = ["Sanctuary", "Fortress", "Estate", "Penthouse", "Private Island"]
const LOCATIONS = ["Monaco", "Aspen", "Mykonos", "Dubai", "London", "Anywhere"]
const LIFESTYLES = [
    "Host Private Art Events",
    "Disappear from the Grid",
    "Dock my Superyacht",
    "Raise a Dynasty",
    "Work in Absolute Silence"
]

// --- Component ---
export function TheOracle() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [step, setStep] = React.useState<"input" | "thinking" | "results">("input")

    // Selections
    const [type, setType] = React.useState(PROPERTY_TYPES[0])
    const [location, setLocation] = React.useState(LOCATIONS[0])
    const [lifestyle, setLifestyle] = React.useState(LIFESTYLES[0])

    const handleConsult = async () => {
        setStep("thinking")
        // Simulate AI processing
        await new Promise(resolve => setTimeout(resolve, 2000))
        setStep("results")
    }

    const reset = () => {
        setStep("input")
        setType(PROPERTY_TYPES[0])
        setLocation(LOCATIONS[0])
        setLifestyle(LIFESTYLES[0])
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            setIsOpen(open)
            if (!open) setTimeout(reset, 500) // Reset after close animation
        }}>
            <DialogTrigger asChild>
                <button
                    className="text-white/70 hover:text-[#C5A059] transition-colors p-2 rounded-full hover:bg-white/5 group"
                    aria-label="Ask The Oracle"
                >
                    <Search className="w-5 h-5" />
                    <span className="sr-only">Search</span>
                </button>
            </DialogTrigger>

            <DialogContent className="max-w-[95vw] md:max-w-4xl bg-[#0A0A0A]/95 backdrop-blur-2xl border border-[#C5A059]/20 text-white p-0 overflow-hidden shadow-[0_0_100px_rgba(197,160,89,0.1)]">
                <div className="relative min-h-[60vh] flex flex-col items-center justify-center p-6 md:p-12">

                    {/* Close Button Override */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                        <span className="sr-only">Close</span>
                    </button>

                    {/* Header */}
                    <div className="absolute top-6 left-6 md:left-12 flex items-center gap-2 text-[#C5A059]/80">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-[0.2em]">The Oracle</span>
                    </div>

                    <DialogTitle className="sr-only">AI Lifestyle Concierge</DialogTitle>
                    <DialogDescription className="sr-only">Describe your ideal property to receive curated recommendations</DialogDescription>

                    <AnimatePresence mode="wait">
                        {step === "input" && (
                            <motion.div
                                key="input"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, filter: "blur(10px)" }}
                                className="w-full max-w-3xl"
                            >
                                <h2 className="text-3xl md:text-5xl font-serif leading-relaxed text-center text-white/90">
                                    "I am looking for a{" "}
                                    <Dropdown
                                        options={PROPERTY_TYPES}
                                        value={type}
                                        onChange={setType}
                                    />
                                    {" "}in{" "}
                                    <Dropdown
                                        options={LOCATIONS}
                                        value={location}
                                        onChange={setLocation}
                                    />
                                    {" "}to{" "}
                                    <Dropdown
                                        options={LIFESTYLES}
                                        value={lifestyle}
                                        onChange={setLifestyle}
                                        className="text-[#C5A059]"
                                    />
                                    ."
                                </h2>

                                <div className="mt-16 flex justify-center">
                                    <Button
                                        onClick={handleConsult}
                                        className="bg-white text-black hover:bg-[#C5A059] hover:text-black px-8 py-6 text-lg tracking-widest uppercase rounded-none transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]"
                                    >
                                        Consult The Oracle
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {step === "thinking" && (
                            <motion.div
                                key="thinking"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-8"
                            >
                                <div className="w-24 h-24 relative">
                                    {/* Orbital Spinner */}
                                    <motion.div
                                        className="absolute inset-0 border border-[#C5A059]/30 rounded-full"
                                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.div
                                        className="absolute inset-2 border border-t-[#C5A059] border-r-transparent border-b-transparent border-l-transparent rounded-full"
                                        animate={{ rotate: -180 }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Sparkles className="w-8 h-8 text-[#C5A059] animate-pulse" />
                                    </div>
                                </div>
                                <p className="text-[#C5A059] text-sm uppercase tracking-[0.3em] animate-pulse">
                                    Analyzing Global Portfolio...
                                </p>
                            </motion.div>
                        )}

                        {step === "results" && (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center w-full max-w-4xl"
                            >
                                <p className="text-white/60 mb-8 italic text-lg">
                                    "Based on your desire to <span className="text-[#C5A059]">{lifestyle}</span> in <span className="text-[#C5A059]">{location}</span>..."
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Mock Result 1 */}
                                    <div className="group relative aspect-video bg-[#111] border border-white/10 overflow-hidden cursor-pointer">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2340')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                        <div className="absolute bottom-0 left-0 p-6 text-left">
                                            <h3 className="text-white font-serif text-2xl mb-1">Villa Paradox</h3>
                                            <p className="text-[#C5A059] text-xs uppercase tracking-widest">Monaco • €45M</p>
                                        </div>
                                    </div>
                                    {/* Mock Result 2 */}
                                    <div className="group relative aspect-video bg-[#111] border border-white/10 overflow-hidden cursor-pointer">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-27b88e54e690?q=80&w=2344')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                        <div className="absolute bottom-0 left-0 p-6 text-left">
                                            <h3 className="text-white font-serif text-2xl mb-1">The Cloud Deck</h3>
                                            <p className="text-[#C5A059] text-xs uppercase tracking-widest">Aspen • $62M</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 flex justify-center gap-6">
                                    <Button variant="ghost" className="text-white hover:text-[#C5A059]" onClick={reset}>
                                        Search Again
                                    </Button>
                                    <Button variant="gold" className="px-8" onClick={() => setIsOpen(false)}>
                                        Arrange Viewing
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    )
}

// --- Helper Components ---

function Dropdown({ options, value, onChange, className }: {
    options: string[],
    value: string,
    onChange: (val: string) => void,
    className?: string
}) {
    return (
        <span className="relative inline-block mx-1 group">
            <span className={cn("border-b-2 border-white/30 cursor-pointer hover:border-[#C5A059] hover:text-[#C5A059] transition-all", className)}>
                {value}
            </span>
            <select
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </span>
    )
}
