"use client"

import React from "react"

import { Shield, Lock, Lightbulb } from "lucide-react"
import { pillars } from "@/lib/constants"

const iconMap: Record<string, React.ElementType> = {
  Shield: Shield,
  Lock: Lock,
  Lightbulb: Lightbulb,
}

export function ObjectionGrid() {
  return (
    <section className="bg-[#0A0A0A] py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            The Aurelian Standard
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our commitment to excellence
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || Shield
            return (
              <div
                key={pillar.title}
                className="group text-center md:text-left"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center md:justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C5A059]/20 bg-[#C5A059]/10 transition-colors group-hover:bg-[#C5A059]/20">
                    <IconComponent className="h-8 w-8 text-[#C5A059]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-white md:text-2xl">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
