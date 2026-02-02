"use client"

import { Button } from "@/components/ui/button"
import { globalOffices, footerLinks } from "@/lib/constants"

interface FooterProps {
  onCTAClick: () => void
}

export function Footer({ onCTAClick }: FooterProps) {
  const handleClick = () => {
    console.log("CTA_CLICK", {
      source: "footer",
      timestamp: Date.now(),
      userAction: "form_open",
    })
    onCTAClick()
  }

  return (
    <footer id="contact" className="bg-[#0A0A0A] border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-wider text-white">
              AURELIAN
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Curating the world&apos;s most exceptional properties for
              discerning clientele since 1987.
            </p>
          </div>

          {/* Global Offices */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Global Offices
            </h4>
            <ul className="space-y-3">
              {globalOffices.map((office) => (
                <li key={office.city} className="text-sm text-muted-foreground">
                  <span className="block font-medium text-white">
                    {office.city}
                  </span>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {office.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#C5A059] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-muted-foreground mb-6">
              Ready to discover your next acquisition?
            </p>
            <Button variant="gold" onClick={handleClick}>
              INQUIRE NOW
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Aurelian Estates. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Ultra-Luxury Real Estate Portfolio
          </p>
        </div>
      </div>
    </footer>
  )
}
