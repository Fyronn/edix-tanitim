"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Link } from "@/i18n/routing"
import { ArrowLeft, Download, FileText, Award, BookOpen, Shield } from "lucide-react"

const documents = [
  {
    icon: Award,
    category: "Certificates",
    items: [
      { title: "ISO 9001:2015 Certificate", description: "Quality Management System", file: "iso-9001.pdf" },
      { title: "IATF 16949 Certificate", description: "Automotive Quality Standard", file: "iatf-16949.pdf" },
      { title: "CE Certification", description: "European Conformity", file: "ce-cert.pdf" },
    ],
  },
  {
    icon: FileText,
    category: "Catalogs",
    items: [
      { title: "Product Catalog 2024", description: "Complete product range", file: "catalog-2024.pdf" },
      { title: "Technical Specifications", description: "Detailed technical data", file: "tech-specs.pdf" },
      { title: "Application Guide", description: "Installation and usage", file: "app-guide.pdf" },
    ],
  },
  {
    icon: BookOpen,
    category: "Technical Documents",
    items: [
      { title: "Material Data Sheets", description: "Friction material specifications", file: "material-data.pdf" },
      { title: "Testing Reports", description: "Dynamometer test results", file: "test-reports.pdf" },
      { title: "Quality Assurance", description: "QA procedures and standards", file: "qa-docs.pdf" },
    ],
  },
  {
    icon: Shield,
    category: "Compliance",
    items: [
      { title: "Safety Data Sheets", description: "Material safety information", file: "sds.pdf" },
      { title: "Environmental Compliance", description: "RoHS and REACH compliance", file: "env-compliance.pdf" },
      { title: "Warranty Information", description: "Product warranty terms", file: "warranty.pdf" },
    ],
  },
]

export function DocsContent() {
  const t = useTranslations("certificates")

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

        {/* Documents Grid */}
        <div className="space-y-12">
          {documents.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#CB2C39]/10">
                    <Icon className="h-5 w-5 text-[#CB2C39]" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((doc, index) => (
                    <Card key={index} className="transition-shadow hover:shadow-lg">
                      <CardHeader>
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
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
