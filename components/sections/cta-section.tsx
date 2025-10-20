"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { ArrowRight, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function CtaSection() {
  const t = useTranslations("cta")
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK || "https://wa.me/90XXXXXXXXXX"

  return (
    <section className="bg-gradient-to-br from-[#CB2C39] to-[#C22834] py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
          <p className="mb-8 text-lg text-white/90">{t("subtitle")}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#CB2C39] hover:bg-white/90">
              <Link href="/contact">
                {t("button")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t("whatsapp")}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
