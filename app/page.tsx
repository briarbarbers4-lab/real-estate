"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { PropertyGrid } from "@/components/PropertyGrid"
import { ObjectionGrid } from "@/components/ObjectionGrid"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/CTASection"
import { NewsletterSection } from "@/components/NewsletterSection"
import { Footer } from "@/components/Footer"
import { PrivateAccessModal } from "@/components/PrivateAccessModal"
import { Toaster } from "@/components/ui/toaster"
import { PropertyStructuredData } from "@/components/PropertyStructuredData"
import { trackEvent, ANALYTICS_ACTIONS, ANALYTICS_CATEGORIES } from "@/lib/analytics"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [propertyContext, setPropertyContext] = useState<string | undefined>()

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollDepth = Math.round((window.scrollY / scrollHeight) * 100)

      // Track 70% depth (reaching Aurelian Standard section)
      if (scrollDepth >= 70) {
        trackEvent({
          action: ANALYTICS_ACTIONS.SCROLL,
          category: ANALYTICS_CATEGORIES.ENGAGEMENT,
          label: "Scroll Depth: 70%",
          value: scrollDepth,
          section: "Aurelian Standard",
        })
      }
    }

    // Throttle scroll events
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll)
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  const handleOpenModal = (propertyName?: string) => {
    setPropertyContext(propertyName)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setPropertyContext(undefined)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Property Structured Data (JSON-LD) */}
      <PropertyStructuredData />

      {/* Navigation */}
      <Navigation onInquireClick={() => handleOpenModal()} />

      {/* Hero Section */}
      <Hero onCTAClick={() => handleOpenModal()} />

      {/* Property Grid */}
      <PropertyGrid onCTAClick={() => handleOpenModal()} />

      {/* Objection Grid - The Aurelian Standard */}
      <ObjectionGrid />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection onCTAClick={() => handleOpenModal()} />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer onCTAClick={() => handleOpenModal()} />

      {/* Private Access Modal */}
      <PrivateAccessModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        propertyName={propertyContext}
      />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  )
}
