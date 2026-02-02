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
      <DialogContent className="max-w-lg bg-[#1A1A1A] border-slate-800">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-bold text-white">
            Private Access Request
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {propertyName
              ? `Inquiring about ${propertyName}`
              : "Access our exclusive portfolio"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="bg-[#0A0A0A] border-0 border-b border-slate-700 rounded-none text-white placeholder:text-muted-foreground focus:border-b-[#C5A059] focus-visible:ring-0"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="bg-[#0A0A0A] border-0 border-b border-slate-700 rounded-none text-white placeholder:text-muted-foreground focus:border-b-[#C5A059] focus-visible:ring-0"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              Phone (International)
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="bg-[#0A0A0A] border-0 border-b border-slate-700 rounded-none text-white placeholder:text-muted-foreground focus:border-b-[#C5A059] focus-visible:ring-0"
              placeholder="+1 212 555 0198"
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Investment Capacity */}
          <div className="space-y-2">
            <Label htmlFor="investment" className="text-white">
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
              className="w-full bg-[#0A0A0A] border-0 border-b border-slate-700 rounded-none text-white py-2 focus:border-b-[#C5A059] focus:outline-none"
            >
              <option value="" disabled>
                Select investment range
              </option>
              {investmentCapacities.map((capacity) => (
                <option key={capacity} value={capacity}>
                  {capacity}
                </option>
              ))}
            </select>
            {errors.investmentCapacity && (
              <p className="text-xs text-red-500">{errors.investmentCapacity}</p>
            )}
          </div>

          {/* Desired Locations */}
          <div className="space-y-3">
            <Label className="text-white">Desired Locations</Label>
            <div className="flex flex-wrap gap-2">
              {desiredLocations.map((location) => (
                <button
                  key={location}
                  type="button"
                  onClick={() => handleLocationToggle(location)}
                  className={`px-4 py-2 text-sm rounded-full border transition-all ${
                    formData.desiredLocations.includes(location)
                      ? "bg-[#C5A059] text-black border-[#C5A059]"
                      : "bg-transparent text-white border-slate-700 hover:border-[#C5A059]"
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
            {errors.desiredLocations && (
              <p className="text-xs text-red-500">{errors.desiredLocations}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="gold"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "REQUEST ACCESS"}
          </Button>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            <span>SSL Secured</span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
