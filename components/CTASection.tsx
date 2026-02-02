"use client"

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
    <section className="bg-[#0A0A0A] py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl text-balance">
          Ready to Explore the Aurelian Collection?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Join an exclusive network of discerning investors with access to
          properties never listed on public markets.
        </p>
        <Button
          variant="gold"
          size="lg"
          onClick={handleClick}
          className="mt-10 px-8 py-6 text-base md:text-lg"
        >
          REQUEST A PRIVATE CONSULTATION
        </Button>
      </div>
    </section>
  )
}
