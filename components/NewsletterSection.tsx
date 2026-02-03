"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSection() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please provide a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    console.log("NEWSLETTER_SUBMIT", {
      email,
      timestamp: Date.now(),
    })

    toast({
      title: "Welcome to the Inner Circle",
      description: "You'll receive our curated insights shortly.",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#141414] to-[#0A0A0A]" />
      
      <motion.div 
        className="relative mx-auto max-w-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-6">
          <Sparkles className="h-4 w-4" />
          <span>Exclusive Updates</span>
        </div>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}>
          Join the Inner Circle
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed" style={{ lineHeight: '1.7', letterSpacing: '0.3px' }}>
          Receive curated market insights and first-access to new acquisitions
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-transparent border border-[#2D2D2D] rounded-lg px-5 py-6 text-white placeholder:text-muted-foreground/50 focus:border-[#C5A059] focus-visible:ring-0 transition-all duration-300"
          />
          <Button
            type="submit"
            variant="gold"
            disabled={isSubmitting}
            className="sm:w-auto px-8 py-6 transition-all duration-400 hover:shadow-[0_0_25px_rgba(197,160,89,0.3)]"
          >
            {isSubmitting ? "Subscribing..." : "SUBSCRIBE"}
          </Button>
        </motion.form>
        
        <p className="mt-6 text-xs text-muted-foreground/60">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </motion.div>
    </section>
  )
}
