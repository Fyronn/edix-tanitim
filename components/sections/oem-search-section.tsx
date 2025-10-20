"use client"

import { useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { motion } from "framer-motion"
import oemData from "@/lib/data/oem-compatibility.json"

export function OemSearchSection() {
  const t = useTranslations("oem")
  const locale = useLocale()
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<typeof oemData>([])

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const filtered = oemData.filter(
      (item) =>
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.oemCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.edixCode.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setResults(filtered)
  }

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <Card>
            <CardHeader>
              <CardTitle>{t("title")}</CardTitle>
              <CardDescription>{t("subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder={t("searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-1"
                />
                <Button onClick={handleSearch} className="bg-[#CB2C39] hover:bg-[#C22834]">
                  <Search className="mr-2 h-4 w-4" />
                  {t("search")}
                </Button>
              </div>

              {results.length > 0 && (
                <div className="mt-6 space-y-3">
                  {results.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="rounded-lg border bg-card p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <p className="font-semibold">
                            {item.brand} {item.model}
                          </p>
                          <p className="text-sm text-muted-foreground">{item.years}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">OEM: {item.oemCode}</p>
                          <p className="font-medium text-[#CB2C39]">EDIX: {item.edixCode}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
