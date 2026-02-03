import { useEffect, useState, Suspense } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import { trackEvent, ANALYTICS_ACTIONS, ANALYTICS_CATEGORIES } from "@/lib/analytics"

const LiquidHero = dynamic(() => import("@/components/LiquidHero"), { ssr: false })

interface HeroProps {
  onCTAClick: () => void
}

const titleWords = ["Where", "Extraordinary", "Becomes", "Ordinary"]

export function Hero({ onCTAClick }: HeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener("change", handleChange)

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
    trackEvent({
      action: ANALYTICS_ACTIONS.CLICK,
      category: ANALYTICS_CATEGORIES.HERO,
      label: "CTA: Enter The Collection",
      userAction: "form_open",
    })
    onCTAClick()
  }

  const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.05
  const zoomScale = prefersReducedMotion ? 1 : 1 + scrollY * 0.0002

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as any
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] as any }
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.0, ease: [0.23, 1, 0.32, 1] as any }
    },
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax + Zoom (Fallback & Underlay) */}
      <div
        className="absolute inset-0 will-change-transform z-0"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(${zoomScale})`,
        }}
      >
        <Image
          src="/images/hero-cinematic.jpg"
          alt="Ultra-luxury Mediterranean villa at sunset"
          fill
          priority
          className={`object-cover transition-all duration-1000 ${imageLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-105"
            }`}
          sizes="100vw"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/50 -z-10" />
      </div>

      {/* WebGL Liquid Gold Effect - Only if no reduced motion */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <LiquidHero />
          </Suspense>
        </div>
      )}

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Staggered Title */}
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-2xl text-lg text-white/70 md:text-xl leading-relaxed tracking-wide"
          variants={subtitleVariants}
        >
          Access the world&apos;s most coveted private portfolio
        </motion.p>

        <motion.div variants={buttonVariants}>
          <Button
            variant="gold"
            size="lg"
            onClick={handleCTAClick}
            className="mt-12 px-10 py-7 text-base md:text-lg tracking-wider transition-all duration-400 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:-translate-y-0.5 min-h-[44px]"
            aria-label="Enter the Aurelian Collection"
          >
            ENTER THE COLLECTION
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="h-12 w-7 rounded-full border border-white/20 flex items-start justify-center p-2">
          <motion.div
            className="h-2 w-1 rounded-full bg-[#C5A059]"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
