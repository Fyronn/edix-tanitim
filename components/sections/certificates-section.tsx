"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Award } from "lucide-react"
import { motion } from "framer-motion"

const documents = [
  {
    icon: Award,
    titleKey: "iso9001",
    title: "ISO 9001:2015",
    description: "Quality Management System",
    file: "iso-9001-certificate.pdf",
  },
  {
    icon: Award,
    titleKey: "iatf",
    title: "IATF 16949",
    description: "Automotive Quality Standard",
    file: "iatf-certificate.pdf",
  },
  {
    icon: FileText,
    titleKey: "catalog",
    title: "Product Catalog",
    description: "Complete product range",
    file: "edix-catalog.pdf",
  },
  {
    icon: FileText,
    titleKey: "technical",
    title: "Technical Specifications",
    description: "Detailed technical data",
    file: "technical-specs.pdf",
  },
]

export function CertificatesSection() {
  const t = useTranslations("certificates")

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
          {documents.map((doc, index) => {
            const Icon = doc.icon
            return (
              <motion.div
                key={doc.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#CB2C39]/10">
                      <Icon className="h-6 w-6 text-[#CB2C39]" />
                    </div>
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Download className="mr-2 h-4 w-4" />
                      {t("download")}
                    </Button>
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
