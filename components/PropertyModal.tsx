"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
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
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

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
      <DialogContent className="max-w-4xl bg-[#1A1A1A] border border-[#C5A059]/10 p-0 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(197,160,89,0.08)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="grid md:grid-cols-2"
        >
          {/* Image with blur-to-sharp transition */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[500px] overflow-hidden">
            {/* Shimmer Skeleton Loader */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] animate-shimmer" 
                   style={{ backgroundSize: "200% 100%" }} />
            )}

            {/* Fallback gradient */}
            {imageError && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
            )}

            <Image
              src={property.image || "/placeholder.svg"}
              alt={`${property.name} - ${property.location}`}
              fill
              className={`object-cover transition-all duration-700 ease-out ${
                imageLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-105"
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl font-bold text-white md:text-3xl tracking-tight">
                {property.name}
              </DialogTitle>
              <p className="text-[#C5A059] mt-2">{property.location}</p>
              {/* Decorative line */}
              <div className="mt-4 w-16 h-px bg-gradient-to-r from-[#C5A059]/50 to-transparent" />
            </DialogHeader>

            <p className="mt-6 text-muted-foreground leading-relaxed text-base">
              {property.description}
            </p>

            {/* Features */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Features
              </h4>
              <ul className="grid grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
              {property.price}
            </p>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <Button
                variant="gold"
                size="lg"
                onClick={handleCTAClick}
                className="w-full transition-all duration-400 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:-translate-y-0.5"
              >
                REQUEST PRIVATE VIEWING
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
