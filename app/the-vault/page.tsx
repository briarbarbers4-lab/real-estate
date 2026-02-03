"use client"

import { VaultProvider, useVaultAccess } from "@/components/Vault/VaultAccessContext"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, Fingerprint, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

// This is the main page component that wraps the content in the provider
export default function TheVaultPage() {
    return (
        <VaultProvider>
            <VaultContent />
        </VaultProvider>
    )
}

function VaultContent() {
    const { isUnlocked, isScanning, requestAccess } = useVaultAccess()

    return (
        <main className="min-h-screen bg-black text-[#C5A059] relative overflow-hidden font-serif selection:bg-[#C5A059] selection:text-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-black to-black" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col">
                {/* Header */}
                <header className="flex justify-between items-center mb-12 border-b border-[#C5A059]/20 pb-6">
                    <Link href="/" className="text-2xl tracking-widest uppercase hover:text-white transition-colors duration-300">
                        Aurelian
                    </Link>
                    <div className="flex items-center gap-2 text-xs tracking-[0.2em] opacity-80">
                        <Lock className="w-3 h-3" />
                        <span>SECURE CHANNEL</span>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {!isUnlocked ? (
                        <VaultGate key="gate" isScanning={isScanning} onRequestAccess={requestAccess} />
                    ) : (
                        <VaultDashboard key="dashboard" />
                    )}
                </AnimatePresence>
            </div>
        </main>
    )
}

function VaultGate({ isScanning, onRequestAccess }: { isScanning: boolean, onRequestAccess: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
        >
            <div className="space-y-4 max-w-2xl mx-auto">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-24 h-24 mx-auto border border-[#C5A059]/30 rounded-full flex items-center justify-center relative overflow-hidden"
                >
                    {/* Scanning Ring */}
                    {isScanning && (
                        <motion.div
                            className="absolute inset-0 border-2 border-[#C5A059] rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    )}

                    {/* Icon */}
                    {isScanning ? (
                        <Fingerprint className="w-10 h-10 text-[#C5A059] animate-pulse" />
                    ) : (
                        <Lock className="w-10 h-10 text-[#C5A059]/80" />
                    )}
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">
                    The Vault
                </h1>
                <p className="text-[#C5A059]/80 max-w-md mx-auto text-lg leading-relaxed">
                    Access to this portfolio is restricted to pre-vetted family offices and private investors.
                </p>

                {isScanning ? (
                    <div className="h-12 flex items-center justify-center space-x-1">
                        <span className="text-xs uppercase tracking-widest text-white/50 animate-pulse">Verifying Identity...</span>
                    </div>
                ) : (
                    <Button
                        onClick={onRequestAccess}
                        variant="outline"
                        size="lg"
                        className="mt-8 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-500 uppercase tracking-widest min-w-[200px]"
                    >
                        Request Access
                    </Button>
                )}
            </div>

            <div className="absolute bottom-10 left-0 w-full text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">
                    Encrypted Connection • 256-bit SSL • Tier 1 Clearance
                </p>
            </div>
        </motion.div>
    )
}

import { ClassifiedCard, ConfidentialListing } from "@/components/Vault/ClassifiedCard"

const MOCK_VAULT_LISTINGS: ConfidentialListing[] = [
    {
        id: "v1",
        codeName: "PROJECT: OBSIDIAN",
        location: "Monaco-Ville, Monaco",
        price: "€85,000,000",
        specs: { beds: 6, baths: 8, sqft: "12,500 sqft" },
        image: "https://images.unsplash.com/photo-1600596542815-27b88e54e690?q=80&w=2344",
        features: ["Private Deep Water Dock", "Bomb-Proof Panic Room", "Subterranean Garage (12 cars)"]
    },
    {
        id: "v2",
        codeName: "THE CLOUD ESTATE",
        location: "Aspen, Colorado",
        price: "$55,000,000",
        specs: { beds: 8, baths: 10, sqft: "18,000 sqft" },
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2340",
        features: ["Ski-in/Ski-out Private Trail", "Geo-Thermal Heating", "Oxygenated Bedrooms"]
    },
    {
        id: "v3",
        codeName: "VILLA ETERNITY",
        location: "Mykonos, Greece",
        price: "€28,000,000",
        specs: { beds: 5, baths: 6, sqft: "8,200 sqft" },
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2340",
        features: ["Private Helipad", "Cliffside Infinity Pool", "Ancient Ruins on Property"]
    },
]

function VaultDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
        >
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-light text-white mb-2">Off-Market Portfolio</h2>
                    <p className="text-[#C5A059]/60 max-w-xl">
                        The following assets are privately held and not listed on any public exchange.
                        Discretion is mandatory. Use your unique code to decrypt details.
                    </p>
                </div>
                <div className="flex items-center gap-4 text-xs tracking-widest text-[#C5A059]/40 border border-[#C5A059]/20 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    LIVE FEED • SECURE
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_VAULT_LISTINGS.map((listing, index) => (
                    <ClassifiedCard key={listing.id} listing={listing} index={index} />
                ))}
            </div>
        </motion.div>
    )
}
