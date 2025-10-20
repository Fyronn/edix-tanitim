"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Link } from "@/i18n/routing"
import { ArrowLeft, Search } from "lucide-react"
import oemData from "@/lib/data/oem-compatibility.json"

export function OemContent() {
  const t = useTranslations("oem")
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<typeof oemData>(oemData)

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setResults(oemData)
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

  // Group by brand
  const groupedResults = results.reduce(
    (acc, item) => {
      if (!acc[item.brand]) {
        acc[item.brand] = []
      }
      acc[item.brand].push(item)
      return acc
    },
    {} as Record<string, typeof oemData>,
  )

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

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Search Compatibility</CardTitle>
              <CardDescription>Find the right EDIX clutch disc for your vehicle</CardDescription>
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
            </CardContent>
          </Card>
        </motion.div>

        {/* Results */}
        <div className="space-y-8">
          {Object.entries(groupedResults).map(([brand, items], brandIndex) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + brandIndex * 0.1 }}
            >
              <h2 className="mb-4 text-2xl font-bold">{brand}</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => (
                  <Card key={index} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <Badge variant="secondary">{item.brand}</Badge>
                        <span className="text-xs text-muted-foreground">{item.years}</span>
                      </div>
                      <CardTitle className="text-lg">{item.model}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">OEM Code:</span>
                          <span className="font-mono font-medium">{item.oemCode}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">EDIX Code:</span>
                          <span className="font-mono font-medium text-[#CB2C39]">{item.edixCode}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {results.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center text-muted-foreground"
          >
            No results found. Try a different search term.
          </motion.div>
        )}
      </div>
    </div>
  )
}
