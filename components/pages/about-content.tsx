"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Link } from "@/i18n/routing"
import { ArrowLeft, Target, Eye, Award, Users } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function AboutContent() {
  const t = useTranslations("about")

  const values = [
    {
      icon: Target,
      title: t("ourMission"),
      description: t("missionDescription"),
    },
    {
      icon: Eye,
      title: t("ourVision"),
      description: t("visionDescription"),
    },
    {
      icon: Award,
      title: t("qualityCommitment"),
      description: t("qualityDescription"),
    },
    {
      icon: Users,
      title: t("customerFocus"),
      description: t("customerDescription"),
    },
  ]

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
              {t("back")}
            </Link>
          </Button>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t("title")}</h1>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-16 aspect-[21/9] overflow-hidden rounded-lg"
        >
          <Image
            src="/modern-clutch-disc-product-photography-on-dark-bac.jpg"
            alt="EDIX Manufacturing"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-bold">{t("ourStory")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("storyText1")}</p>
                <p>{t("storyText2")}</p>
                <p>{t("storyText3")}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#CB2C39]/10">
                      <Icon className="h-6 w-6 text-[#CB2C39]" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
