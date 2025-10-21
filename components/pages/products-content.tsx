"use client"

import { useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import products from "@/lib/data/products.json"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { ArrowLeft } from "lucide-react"

export function ProductsContent() {
  const t = useTranslations("products")
  const locale = useLocale()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", "organic", "ceramic", "kevlar"]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full max-w-md grid-cols-4">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="capitalize">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image}
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
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Max Temperature:</span>
                      <span className="font-medium">{product.specs.maxTemp}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Friction Coefficient:</span>
                      <span className="font-medium">{product.specs.friction}</span>
                    </div>
                    <div className="pt-2">
                      <p className="mb-2 text-xs font-medium text-muted-foreground">Applications:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.specs.applications.map((app) => (
                          <Badge key={app} variant="outline" className="text-xs capitalize">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
