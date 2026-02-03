"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent, ANALYTICS_ACTIONS, ANALYTICS_CATEGORIES } from "@/lib/analytics"

interface NavigationProps {
  onInquireClick: () => void
}

export function Navigation({ onInquireClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Properties", href: "#properties" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ]

  const handleCTAClick = () => {
    trackEvent({
      action: ANALYTICS_ACTIONS.CLICK,
      category: ANALYTICS_CATEGORIES.NAVIGATION,
      label: "CTA: Inquire",
      userAction: "form_open",
    })
    onInquireClick()
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#C5A059]/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-xl font-bold tracking-[0.15em] text-white transition-colors duration-300 hover:text-[#C5A059] focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2 rounded-sm"
            aria-label="Aurelian Estates - Home"
          >
            AURELIAN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white group focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2 rounded-sm px-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C5A059] transition-all duration-300 group-hover:w-full" aria-hidden="true" />
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="gold"
                size="sm"
                onClick={handleCTAClick}
                className="ml-4 px-6 tracking-wider transition-all duration-400 hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:-translate-y-0.5 min-h-[44px]"
                aria-label="Open inquiry form"
              >
                INQUIRE
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-white md:hidden transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2 rounded-sm p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-50 bg-[#0A0A0A] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex h-20 items-center justify-between px-6 border-b border-[#2D2D2D]">
              <span id="mobile-menu-title" className="font-serif text-xl font-bold tracking-[0.15em] text-white">
                AURELIAN
              </span>
              <button
                type="button"
                className="text-white transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2 rounded-sm p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <motion.div
              className="flex flex-col items-center justify-center gap-10 pt-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="font-serif text-3xl text-white transition-colors duration-300 hover:text-[#C5A059] focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2 rounded-sm px-2 py-1 min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.2 }}
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    handleCTAClick()
                  }}
                  className="mt-8 px-10 py-6 tracking-wider min-h-[44px]"
                  aria-label="Open inquiry form"
                >
                  INQUIRE
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
