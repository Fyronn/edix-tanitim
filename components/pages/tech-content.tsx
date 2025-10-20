"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Link } from "@/i18n/routing"
import { ArrowLeft, Flame, Layers, Zap, Shield } from "lucide-react"
import Image from "next/image"

const materials = [
  {
    icon: Layers,
    title: "Organic Compounds",
    description: "Premium organic friction materials for smooth engagement and quiet operation",
    specs: ["Temperature: up to 450°C", "Friction: 0.35-0.40 μ", "Best for: Daily driving"],
  },
  {
    icon: Flame,
    title: "Ceramic Compounds",
    description: "High-temperature ceramic materials for heavy-duty applications",
    specs: ["Temperature: up to 850°C", "Friction: 0.40-0.45 μ", "Best for: Commercial vehicles"],
  },
  {
    icon: Zap,
    title: "Kevlar Reinforced",
    description: "Advanced Kevlar-reinforced materials for performance applications",
    specs: ["Temperature: up to 650°C", "Friction: 0.38-0.43 μ", "Best for: High performance"],
  },
  {
    icon: Shield,
    title: "Hybrid Technology",
    description: "Combination of materials for optimal balance of performance and durability",
    specs: ["Temperature: up to 700°C", "Friction: 0.37-0.42 μ", "Best for: All-purpose"],
  },
]

const faqs = [
  {
    question: "What is the service life of EDIX clutch discs?",
    answer:
      "EDIX clutch discs are designed for extended service life, typically exceeding 100,000 km under normal operating conditions. Actual lifespan depends on driving habits, vehicle type, and maintenance practices.",
  },
  {
    question: "How do I choose the right clutch disc for my vehicle?",
    answer:
      "Selection depends on your vehicle type, usage pattern, and performance requirements. Use our OEM compatibility search or contact our technical team for personalized recommendations based on your specific needs.",
  },
  {
    question: "What quality standards do EDIX products meet?",
    answer:
      "All EDIX products are manufactured according to ISO 9001:2015 and IATF 16949 standards. We conduct rigorous dynamometer testing and quality control to ensure consistent performance and reliability.",
  },
  {
    question: "Can EDIX clutch discs handle high-temperature applications?",
    answer:
      "Yes, our ceramic and hybrid compounds are specifically designed for high-temperature applications, maintaining stable performance up to 850°C. This makes them ideal for heavy-duty commercial vehicles and demanding operating conditions.",
  },
]

export function TechContent() {
  const t = useTranslations("tech")

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t("title")}</h1>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-16 aspect-[21/9] overflow-hidden rounded-lg"
        >
          <Image
            src="/technical-diagram-of-clutch-disc-cross-section.jpg"
            alt="Technical Overview"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Materials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-3xl font-bold">Material Technologies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {materials.map((material, index) => {
              const Icon = material.icon
              return (
                <motion.div
                  key={material.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#CB2C39]/10">
                        <Icon className="h-6 w-6 text-[#CB2C39]" />
                      </div>
                      <CardTitle>{material.title}</CardTitle>
                      <CardDescription>{material.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {material.specs.map((spec) => (
                          <li key={spec} className="flex items-start gap-2 text-sm">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#CB2C39]" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  )
}
