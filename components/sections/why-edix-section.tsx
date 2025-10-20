"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Clock, Volume2, Gauge } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Flame,
    key: "heatResistance",
  },
  {
    icon: Clock,
    key: "longLife",
  },
  {
    icon: Volume2,
    key: "quiet",
  },
  {
    icon: Gauge,
    key: "consistent",
  },
]

export function WhyEdixSection() {
  const t = useTranslations("why")

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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#CB2C39]/10">
                      <Icon className="h-8 w-8 text-[#CB2C39]" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{t(`${feature.key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`${feature.key}.description`)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
