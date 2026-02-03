"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { properties, type Property } from "@/lib/constants"
import { PropertyModal } from "@/components/PropertyModal"
import { trackEvent, ANALYTICS_ACTIONS, ANALYTICS_CATEGORIES } from "@/lib/analytics"

interface PropertyGridProps {
  onCTAClick: () => void
}

function PropertyCard({
  property,
  onPropertyClick,
  onCTAClick,
  index,
}: {
  property: Property
  onPropertyClick: (property: Property) => void
  onCTAClick: () => void
  index: number
}) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleViewingClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    trackEvent({
      action: ANALYTICS_ACTIONS.CLICK,
      category: ANALYTICS_CATEGORIES.PROPERTY,
      label: `CTA: Request Private Viewing - ${property.name}`,
      propertyName: property.name,
      userAction: "form_open",
    })
    onCTAClick()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#1A1A1A]"
      onClick={() => onPropertyClick(property)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${property.name} in ${property.location}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onPropertyClick(property)
        }
      }}
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Gold overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 rounded-xl" />

      {/* Image Container - 4:5 Aspect Ratio */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {/* Shimmer Skeleton Loader */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] animate-shimmer"
            style={{ backgroundSize: "200% 100%" }} />
        )}

        {/* Fallback Gradient */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
        )}

        {/* Image with blur-to-sharp transition */}
        <Image
          src={property.image || "/placeholder.svg"}
          alt={`${property.name} - ${property.location}`}
          fill
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className={`object-cover transition-all duration-700 ease-out ${imageLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-105"
            } group-hover:scale-110 group-hover:brightness-110`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />

        {/* Premium Hover Overlay with CTA */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="gold"
              onClick={handleViewingClick}
              className="transform transition-all duration-400 scale-90 group-hover:scale-100 hover:shadow-[0_0_25px_rgba(197,160,89,0.4)] min-h-[44px]"
              aria-label={`Request private viewing for ${property.name}`}
            >
              REQUEST PRIVATE VIEWING
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Property Info with enhanced styling */}
      <div className="p-6 relative">
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" aria-hidden="true" />
        <h3 className="font-serif text-xl font-semibold text-white tracking-tight group-hover:text-[#C5A059] transition-colors duration-300">
          {property.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{property.location}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          {property.price}
        </p>
      </div>
    </motion.div>
  )
}

export function PropertyGrid({ onCTAClick }: PropertyGridProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  return (
    <section id="properties" className="bg-[#0A0A0A] py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header with Animation */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4">
            Exclusive Properties
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            The Aurelian Collection
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed" style={{ lineHeight: '1.7', letterSpacing: '0.3px' }}>
            Meticulously curated portfolio of the world&apos;s most distinguished residences
          </p>
          {/* Decorative Line */}
          <div className="mt-12 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" aria-hidden="true" />
        </motion.div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              onPropertyClick={setSelectedProperty}
              onCTAClick={onCTAClick}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onCTAClick={onCTAClick}
      />
    </section>
  )
}
