"use client"

import { useTranslations, useLocale } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "@/i18n/routing"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import products from "@/lib/data/products.json"
import Image from "next/image"

export function ProductFamilySection() {
  const t = useTranslations("products")
  const locale = useLocale()

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
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={`/.jpg?height=300&width=400&query=${product.category} clutch disc product`}
                    alt={product.name[locale as "tr" | "en"]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="secondary" className="capitalize">
                      {product.category}
                    </Badge>
                    <span className="text-sm font-medium text-[#CB2C39]">{product.specs.maxTemp}</span>
                  </div>
                  <CardTitle>{product.name[locale as "tr" | "en"]}</CardTitle>
                  <CardDescription>{product.description[locale as "tr" | "en"]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Friction:</span>
                      <span className="font-medium">{product.specs.friction}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/products">
              {t("viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
