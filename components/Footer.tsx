"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { globalOffices, footerLinks } from "@/lib/constants"
import { trackEvent, ANALYTICS_ACTIONS, ANALYTICS_CATEGORIES } from "@/lib/analytics"

interface FooterProps {
  onCTAClick: () => void
}

export function Footer({ onCTAClick }: FooterProps) {
  const handleClick = () => {
    trackEvent({
      action: ANALYTICS_ACTIONS.CLICK,
      category: ANALYTICS_CATEGORIES.FOOTER,
      label: "CTA: Inquire Now",
      userAction: "form_open",
    })
    onCTAClick()
  }

  return (
    <footer id="contact" className="relative bg-[#0A0A0A]">
      {/* Top border with gold gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 py-32">
        <motion.div
          className="grid grid-cols-1 gap-16 md:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-[0.15em] text-white">
              AURELIAN
            </span>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Curating the world&apos;s most exceptional properties for
              discerning clientele since 1987.
            </p>
            <div className="mt-6 w-16 h-px bg-gradient-to-r from-[#C5A059]/50 to-transparent" aria-hidden="true" />
          </div>

          {/* Global Offices */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-6">
              Global Offices
            </h4>
            <ul className="space-y-5">
              {globalOffices.map((office) => (
                <li key={office.city} className="text-sm text-muted-foreground group">
                  <span className="block font-medium text-white mb-1 group-hover:text-[#C5A059] transition-colors duration-300">
                    {office.city}
                  </span>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="hover:text-[#C5A059] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2 rounded-sm px-1"
                    aria-label={`Call ${office.city} office at ${office.phone}`}
                  >
                    {office.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 relative group focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2 rounded-sm px-1"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C5A059] transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-6">
              Get in Touch
            </h4>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Ready to discover your next acquisition?
            </p>
            <Button
              variant="gold"
              onClick={handleClick}
              className="transition-all duration-400 hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] hover:-translate-y-0.5 min-h-[44px]"
              aria-label="Open inquiry form"
            >
              INQUIRE NOW
            </Button>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-20 pt-10 border-t border-[#2D2D2D] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Aurelian Estates. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 tracking-wider">
            Ultra-Luxury Real Estate Portfolio
          </p>
          <a
            href="/the-vault"
            className="text-[10px] text-muted-foreground/20 hover:text-[#C5A059] transition-colors duration-500 uppercase tracking-widest"
            aria-label="Private Member Access"
          >
            ● Member Access
          </a>
        </div>
      </div>
    </footer >
  )
}
