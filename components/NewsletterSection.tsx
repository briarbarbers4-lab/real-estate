"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSection() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please provide a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    console.log("NEWSLETTER_SUBMIT", {
      email,
      timestamp: Date.now(),
    })

    toast({
      title: "Welcome to the Inner Circle",
      description: "You'll receive our curated insights shortly.",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <section className="bg-[#1A1A1A] py-32 px-6">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
          Join the Inner Circle
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Receive curated market insights and first-access to new acquisitions
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-2"
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-[#0A0A0A] border-0 border-b border-slate-700 rounded-none text-white placeholder:text-muted-foreground focus:border-b-[#C5A059] focus-visible:ring-0"
          />
          <Button
            type="submit"
            variant="gold"
            disabled={isSubmitting}
            className="sm:w-auto"
          >
            {isSubmitting ? "Subscribing..." : "SUBSCRIBE"}
          </Button>
        </form>
      </div>
    </section>
  )
}
