"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onCTAClick: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener("change", handleChange)

    // Parallax scroll handler
    const handleScroll = () => {
      if (!prefersReducedMotion) {
        setScrollY(window.scrollY)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [prefersReducedMotion])

  const handleCTAClick = () => {
    console.log("CTA_CLICK", {
      source: "hero",
      timestamp: Date.now(),
      userAction: "form_open",
    })
    onCTAClick()
  }

  // 0.05 parallax factor as per spec
  const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.05

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <Image
          src="/images/hero-cinematic.jpg"
          alt="Ultra-luxury Mediterranean villa at sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Fallback (in case image fails) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 -z-10" />
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl text-balance">
          Where Extraordinary Becomes Ordinary
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl leading-relaxed">
          Access the world&apos;s most coveted private portfolio
        </p>
        <Button
          variant="gold"
          size="lg"
          onClick={handleCTAClick}
          className="mt-10 px-8 py-6 text-base md:text-lg"
        >
          ENTER THE COLLECTION
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  )
}
