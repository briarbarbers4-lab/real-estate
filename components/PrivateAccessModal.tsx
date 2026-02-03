"use client"

import React from "react"

import { useState } from "react"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { investmentCapacities, desiredLocations } from "@/lib/constants"

interface PrivateAccessModalProps {
  isOpen: boolean
  onClose: () => void
  propertyName?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  investmentCapacity: string
  desiredLocations: string[]
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  investmentCapacity?: string
  desiredLocations?: string
}

export function PrivateAccessModal({
  isOpen,
  onClose,
  propertyName,
}: PrivateAccessModalProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    investmentCapacity: "",
    desiredLocations: [],
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Please provide your full name."
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email address."
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please provide a contact number."
    } else if (
      !/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(formData.phone) ||
      formData.phone.replace(/\D/g, "").length < 10
    ) {
      newErrors.phone =
        "Please provide a valid international number for our private concierge."
    }

    if (!formData.investmentCapacity) {
      newErrors.investmentCapacity =
        "Investment capacity is required to qualify for our portfolio."
    }

    if (formData.desiredLocations.length === 0) {
      newErrors.desiredLocations = "Please select at least one desired location."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("FORM_SUBMIT", {
      formType: "private_access",
      investmentCapacity: formData.investmentCapacity,
      desiredLocations: formData.desiredLocations,
      propertyName: propertyName || "general_inquiry",
      timestamp: Date.now(),
    })

    toast({
      title: "Request Received",
      description: "A Senior Partner will contact you within 2 hours.",
    })

    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      investmentCapacity: "",
      desiredLocations: [],
    })
    onClose()
  }

  const handleLocationToggle = (location: string) => {
    setFormData((prev) => ({
      ...prev,
      desiredLocations: prev.desiredLocations.includes(location)
        ? prev.desiredLocations.filter((l) => l !== location)
        : [...prev.desiredLocations, location],
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-lg bg-[#1A1A1A] border border-[#C5A059]/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(197,160,89,0.08)] backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-500"
        aria-labelledby="private-access-title"
        aria-describedby="private-access-description"
      >
        <DialogHeader className="space-y-4">
          <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" aria-hidden="true" />
          <DialogTitle id="private-access-title" className="font-serif text-2xl font-bold text-white tracking-tight text-center">
            Private Access Request
          </DialogTitle>
          <DialogDescription id="private-access-description" className="text-muted-foreground text-center">
            {propertyName
              ? `Inquiring about ${propertyName}`
              : "Access our exclusive portfolio of distinguished properties"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name */}
          <div className="space-y-2 group">
            <Label htmlFor="name" className="text-white/80 text-sm tracking-wide">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="bg-transparent border-0 border-b border-[#2D2D2D] rounded-none text-white placeholder:text-muted-foreground/50 focus:border-b-[#C5A059] focus-visible:ring-0 transition-all duration-300 focus:shadow-[0_2px_0_#C5A059] min-h-[44px]"
              placeholder="Your full name"
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-400 mt-1" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/80 text-sm tracking-wide">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="bg-transparent border-0 border-b border-[#2D2D2D] rounded-none text-white placeholder:text-muted-foreground/50 focus:border-b-[#C5A059] focus-visible:ring-0 transition-all duration-300 focus:shadow-[0_2px_0_#C5A059] min-h-[44px]"
              placeholder="your@email.com"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-400 mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white/80 text-sm tracking-wide">
              Phone (International)
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="bg-transparent border-0 border-b border-[#2D2D2D] rounded-none text-white placeholder:text-muted-foreground/50 focus:border-b-[#C5A059] focus-visible:ring-0 transition-all duration-300 focus:shadow-[0_2px_0_#C5A059] min-h-[44px]"
              placeholder="+1 212 555 0198"
              aria-required="true"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-xs text-red-400 mt-1" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Investment Capacity */}
          <div className="space-y-2">
            <Label htmlFor="investment" className="text-white/80 text-sm tracking-wide">
              Investment Capacity
            </Label>
            <select
              id="investment"
              value={formData.investmentCapacity}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  investmentCapacity: e.target.value,
                }))
              }
              className="w-full bg-transparent border-0 border-b border-[#2D2D2D] rounded-none text-white py-2 focus:border-b-[#C5A059] focus:outline-none transition-all duration-300 focus:shadow-[0_2px_0_#C5A059] min-h-[44px]"
              aria-required="true"
              aria-invalid={errors.investmentCapacity ? "true" : "false"}
              aria-describedby={errors.investmentCapacity ? "investment-error" : undefined}
            >
              <option value="" disabled className="bg-[#1A1A1A]">
                Select investment range
              </option>
              {investmentCapacities.map((capacity) => (
                <option key={capacity} value={capacity} className="bg-[#1A1A1A]">
                  {capacity}
                </option>
              ))}
            </select>
            {errors.investmentCapacity && (
              <p id="investment-error" className="text-xs text-red-400 mt-1" role="alert">
                {errors.investmentCapacity}
              </p>
            )}
          </div>

          {/* Desired Locations */}
          <div className="space-y-3">
            <Label className="text-white/80 text-sm tracking-wide" id="locations-label">
              Desired Locations
            </Label>
            <div 
              className="flex flex-wrap gap-2"
              role="group"
              aria-labelledby="locations-label"
              aria-required="true"
            >
              {desiredLocations.map((location) => (
                <button
                  key={location}
                  type="button"
                  onClick={() => handleLocationToggle(location)}
                  className={`px-4 py-2.5 text-sm rounded-full border transition-all duration-300 min-h-[44px] min-w-[44px] ${
                    formData.desiredLocations.includes(location)
                      ? "bg-[#C5A059] text-black border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                      : "bg-transparent text-white/80 border-[#2D2D2D] hover:border-[#C5A059]/50 hover:text-white"
                  }`}
                  aria-pressed={formData.desiredLocations.includes(location)}
                  aria-label={`${location}${formData.desiredLocations.includes(location) ? ' selected' : ''}`}
                >
                  {location}
                </button>
              ))}
            </div>
            {errors.desiredLocations && (
              <p className="text-xs text-red-400 mt-1" role="alert" id="locations-error">
                {errors.desiredLocations}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="gold"
            size="lg"
            className="w-full mt-8 transition-all duration-400 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:-translate-y-0.5 min-h-[44px]"
            disabled={isSubmitting}
            aria-label={isSubmitting ? "Submitting request" : "Submit private access request"}
          >
            {isSubmitting ? "Submitting..." : "REQUEST ACCESS"}
          </Button>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
            <Lock className="h-3 w-3 text-[#C5A059]/60" />
            <span>SSL Secured | Your information is protected</span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
