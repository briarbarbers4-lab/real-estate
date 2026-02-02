"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqItems } from "@/lib/constants"

export function FAQSection() {
  return (
    <section className="bg-[#0A0A0A] py-32 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Understanding the Aurelian approach
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-slate-800"
            >
              <AccordionTrigger className="text-left text-white hover:text-[#C5A059] hover:no-underline py-6 text-base md:text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
