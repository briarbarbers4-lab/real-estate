"use client"

import { motion } from "framer-motion"
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
        {/* Section Header with Animation */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4">
            Questions & Answers
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Understanding the Aurelian approach to exceptional real estate
          </p>
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
        </motion.div>

        {/* FAQ Accordion with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-[#2D2D2D] hover:border-[#C5A059]/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#C5A059] hover:no-underline py-8 text-base md:text-lg font-medium transition-colors duration-300">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-8 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
