"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

interface VaultAccessContextType {
    isUnlocked: boolean
    isScanning: boolean
    accessLevel: number
    requestAccess: () => Promise<void>
    lockVault: () => void
}

const VaultAccessContext = createContext<VaultAccessContextType | undefined>(undefined)

export function VaultProvider({ children }: { children: React.ReactNode }) {
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [isScanning, setIsScanning] = useState(false)
    const [accessLevel, setAccessLevel] = useState(0) // 0: Locked, 1: Verifying, 2: Granted
    const { toast } = useToast()

    const requestAccess = async () => {
        if (isUnlocked) return

        setIsScanning(true)
        setAccessLevel(1)

        // Simulate scanning/verifying process
        try {
            // Step 1: Initial Scan (1.5s)
            await new Promise((resolve) => setTimeout(resolve, 1500))

            // Step 2: Verification (1.5s)
            // In a real app, this might check a code or user status
            await new Promise((resolve) => setTimeout(resolve, 1500))

            // Success
            setIsUnlocked(true)
            setAccessLevel(2)
            setIsScanning(false)

            toast({
                title: "ACCESS GRANTED",
                description: "Welcome to The Vault, User.",
                className: "border-[#C5A059] text-[#C5A059] bg-black",
            })

        } catch (error) {
            setIsScanning(false)
            setAccessLevel(0)
            toast({
                title: "ACCESS DENIED",
                description: "Biometric signature not recognized.",
                variant: "destructive",
            })
        }
    }

    const lockVault = () => {
        setIsUnlocked(false)
        setAccessLevel(0)
        setIsScanning(false)
    }

    return (
        <VaultAccessContext.Provider
            value={{
                isUnlocked,
                isScanning,
                accessLevel,
                requestAccess,
                lockVault,
            }}
        >
            {children}
        </VaultAccessContext.Provider>
    )
}

export function useVaultAccess() {
    const context = useContext(VaultAccessContext)
    if (context === undefined) {
        throw new Error("useVaultAccess must be used within a VaultProvider")
    }
    return context
}
