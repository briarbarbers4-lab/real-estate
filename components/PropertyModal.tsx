"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { Property } from "@/lib/constants"

interface PropertyModalProps {
  property: Property | null
  isOpen: boolean
  onClose: () => void
  onCTAClick: () => void
}

export function PropertyModal({
  property,
  isOpen,
  onClose,
  onCTAClick,
}: PropertyModalProps) {
  if (!property) return null

  const handleCTAClick = () => {
    console.log("CTA_CLICK", {
      source: "property_modal",
      propertyName: property.name,
      timestamp: Date.now(),
      userAction: "form_open",
    })
    onClose()
    onCTAClick()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#1A1A1A] border-slate-800 p-0 overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[500px]">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={`${property.name} - ${property.location}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Fallback gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 -z-10" />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl font-bold text-white md:text-3xl">
                {property.name}
              </DialogTitle>
              <p className="text-[#C5A059]">{property.location}</p>
            </DialogHeader>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {property.description}
            </p>

            {/* Features */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">
                Features
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {property.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#C5A059]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
              {property.price}
            </p>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <Button
                variant="gold"
                size="lg"
                onClick={handleCTAClick}
                className="w-full"
              >
                REQUEST PRIVATE VIEWING
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
