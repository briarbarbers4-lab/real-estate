"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { properties, type Property } from "@/lib/constants"
import { PropertyModal } from "@/components/PropertyModal"

interface PropertyGridProps {
  onCTAClick: () => void
}

function PropertyCard({
  property,
  onPropertyClick,
  onCTAClick,
}: {
  property: Property
  onPropertyClick: (property: Property) => void
  onCTAClick: () => void
}) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleViewingClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log("CTA_CLICK", {
      source: "property_card",
      propertyName: property.name,
      timestamp: Date.now(),
      userAction: "form_open",
    })
    onCTAClick()
  }

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      onClick={() => onPropertyClick(property)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onPropertyClick(property)
        }
      }}
    >
      {/* Image Container - 4:5 Aspect Ratio */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {/* Skeleton Loader */}
        {!imageLoaded && !imageError && (
          <Skeleton className="absolute inset-0 bg-slate-800" />
        )}

        {/* Fallback Gradient (on error) */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
        )}

        {/* Actual Image */}
        <Image
          src={property.image || "/placeholder.svg"}
          alt={`${property.name} - ${property.location}`}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />

        {/* Hover Overlay with CTA */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant="gold"
            onClick={handleViewingClick}
            className="transform transition-transform duration-300 group-hover:scale-100 scale-90"
          >
            REQUEST PRIVATE VIEWING
          </Button>
        </div>
      </div>

      {/* Property Info */}
      <div className="bg-[#1A1A1A] p-6">
        <h3 className="font-serif text-xl font-semibold text-white">
          {property.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{property.location}</p>
        <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
          {property.price}
        </p>
      </div>
    </div>
  )
}

export function PropertyGrid({ onCTAClick }: PropertyGridProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  return (
    <section id="properties" className="bg-[#0A0A0A] py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            The Aurelian Collection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meticulously Curated Portfolio
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onPropertyClick={setSelectedProperty}
              onCTAClick={onCTAClick}
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
