"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    console.log("CTA_CLICK", {
      source: "nav_inquiry",
      timestamp: Date.now(),
      userAction: "form_open",
    })
    onInquireClick()
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-xl font-bold tracking-wider text-white"
          >
            AURELIAN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-[#C5A059]"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="gold"
              size="sm"
              onClick={handleCTAClick}
              className="ml-4"
            >
              INQUIRE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-white md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A] md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-serif text-xl font-bold tracking-wider text-white">
              AURELIAN
            </span>
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 pt-24">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-serif text-2xl text-white transition-colors hover:text-[#C5A059]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false)
                handleCTAClick()
              }}
              className="mt-8"
            >
              INQUIRE
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
