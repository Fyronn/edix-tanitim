"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const specs = [
  { key: "material", value: "Premium Organic & Ceramic Compounds" },
  { key: "temp", value: "Operating Range: -40°C to +850°C" },
  { key: "friction", value: "Friction Coefficient: 0.35-0.45 μ" },
  { key: "life", value: "Service Life: 100,000+ km" },
  { key: "standards", value: "ISO 9001:2015 Certified" },
  { key: "testing", value: "Dynamometer Tested" },
]

export function TechnicalSection() {
  const t = useTranslations("tech")

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square"
          >
            <Image
              src="/technical-diagram-of-clutch-disc-cross-section.jpg"
              alt="Technical Specifications"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {specs.map((spec, index) => (
                    <motion.li
                      key={spec.key}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#CB2C39]" />
                      <span className="text-sm leading-relaxed">{spec.value}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
