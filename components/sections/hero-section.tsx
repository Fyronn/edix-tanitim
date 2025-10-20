"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-graphite to-black py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">{t("title")}</h1>
            <p className="text-lg text-white/80 md:text-xl">{t("subtitle")}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#CB2C39] hover:bg-[#C22834]">
                <Link href="/contact">
                  {t("cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/docs">
                  <Download className="mr-2 h-4 w-4" />
                  {t("ctaSecondary")}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square lg:aspect-auto"
          >
            <Image
              src="/modern-clutch-disc-product-photography-on-dark-bac.jpg"
              alt="EDIX Clutch Disc"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
