"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  onCTAClick: () => void
}

export function CTASection({ onCTAClick }: CTASectionProps) {
  const handleClick = () => {
    console.log("CTA_CLICK", {
      source: "cta_section",
      timestamp: Date.now(),
      userAction: "form_open",
    })
    onCTAClick()
  }

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />
      
      <motion.div 
        className="relative mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-6">
          Exclusive Access
        </p>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl text-balance mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}>
          Ready to Explore the Aurelian Collection?
        </h2>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto" style={{ lineHeight: '1.7', letterSpacing: '0.3px' }}>
          Join an exclusive network of discerning investors with access to
          properties never listed on public markets.
        </p>
        <div className="mt-12 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="gold"
            size="lg"
            onClick={handleClick}
            className="mt-12 px-10 py-7 text-base md:text-lg tracking-wider transition-all duration-400 hover:shadow-[0_0_40px_rgba(197,160,89,0.35)] hover:-translate-y-1 min-h-[44px]"
            aria-label="Request a private consultation"
          >
            REQUEST A PRIVATE CONSULTATION
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
