"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Link } from "@/i18n/routing"
import { ArrowLeft, Flame, Layers, Zap, Shield } from "lucide-react"
import Image from "next/image"


export function TechContent() {
  const t = useTranslations("tech")

  const materials = [
    {
      icon: Layers,
      title: t("organicCompounds"),
      description: t("organicDescription"),
      specs: [`${t("temperature")} up to 450°C`, `${t("friction")} 0.35-0.40 μ`, `${t("bestFor")} ${t("dailyDriving")}`],
    },
    {
      icon: Flame,
      title: t("ceramicCompounds"),
      description: t("ceramicDescription"),
      specs: [`${t("temperature")} up to 850°C`, `${t("friction")} 0.40-0.45 μ`, `${t("bestFor")} ${t("commercialVehicles")}`],
    },
    {
      icon: Zap,
      title: t("kevlarReinforced"),
      description: t("kevlarDescription"),
      specs: [`${t("temperature")} up to 650°C`, `${t("friction")} 0.38-0.43 μ`, `${t("bestFor")} ${t("highPerformance")}`],
    },
    {
      icon: Shield,
      title: t("hybridTechnology"),
      description: t("hybridDescription"),
      specs: [`${t("temperature")} up to 700°C`, `${t("friction")} 0.37-0.42 μ`, `${t("bestFor")} ${t("allPurpose")}`],
    },
  ]

  const faqs = [
    {
      question: t("faq1.question"),
      answer: t("faq1.answer"),
    },
    {
      question: t("faq2.question"),
      answer: t("faq2.answer"),
    },
    {
      question: t("faq3.question"),
      answer: t("faq3.answer"),
    },
    {
      question: t("faq4.question"),
      answer: t("faq4.answer"),
    },
  ]

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
              {t("back")}
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
          <h2 className="mb-8 text-3xl font-bold">{t("materialTechnologies")}</h2>
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
          <h2 className="mb-8 text-3xl font-bold">{t("frequentlyAskedQuestions")}</h2>
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
