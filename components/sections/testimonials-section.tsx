"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    company: "ABC Otomotiv",
    text: "EDIX balataları ile müşteri memnuniyetimiz %40 arttı. Kalite ve dayanıklılık mükemmel.",
  },
  {
    name: "Mehmet Demir",
    company: "XYZ Ticari Araçlar",
    text: "Ağır hizmet araçlarımızda EDIX kullanıyoruz. Uzun ömür ve güvenilirlik garantisi.",
  },
  {
    name: "Can Öztürk",
    company: "DEF Lojistik",
    text: "Filo yönetimimizde EDIX tercihimiz. Bakım maliyetlerini önemli ölçüde düşürdü.",
  },
]

export function TestimonialsSection() {
  const t = useTranslations("testimonials")

  return (
    <section className="bg-muted/30 py-16 md:py-24">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-[#CB2C39]/20" />
                  <p className="mb-4 text-sm leading-relaxed">{testimonial.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
