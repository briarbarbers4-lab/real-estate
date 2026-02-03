"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Lightbulb } from "lucide-react"
import { pillars } from "@/lib/constants"

const iconMap: Record<string, React.ElementType> = {
  Shield: Shield,
  Lock: Lock,
  Lightbulb: Lightbulb,
}

export function ObjectionGrid() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A]" />
      
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header with Animation */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4">
            Why Aurelian
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            The Aurelian Standard
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed" style={{ lineHeight: '1.7', letterSpacing: '0.3px' }}>
            Our unwavering commitment to excellence in every acquisition
          </p>
          <div className="mt-12 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" aria-hidden="true" />
        </motion.div>

        {/* Pillars Grid with Staggered Animation */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
          {pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || Shield
            return (
              <motion.div
                key={pillar.title}
                className="group text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                {/* Icon with glow effect */}
                <motion.div 
                  className="mb-8 flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                >
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 transition-all duration-500 group-hover:bg-[#C5A059]/20 group-hover:border-[#C5A059]/50 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.2)]">
                    <IconComponent className="h-9 w-9 text-[#C5A059] transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="font-serif text-xl font-semibold text-white md:text-2xl tracking-tight"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                >
                  {pillar.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="mt-4 text-muted-foreground leading-relaxed max-w-sm mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                >
                  {pillar.description}
                </motion.p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
