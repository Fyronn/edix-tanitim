"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Link } from "@/i18n/routing"
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { useTranslations } from "next-intl"

export function ContactContent() {
  const t = useTranslations("contact")

  const contactInfo = [
    {
      icon: Mail,
      title: t("email"),
      value: "sales@edixclutchdisc.com",
      link: "mailto:sales@edixclutchdisc.com",
    },
    {
      icon: Phone,
      title: t("phone"),
      value: "+90 XXX XXX XX XX",
      link: "tel:+90XXXXXXXXXX",
    },
    {
      icon: MapPin,
      title: t("address"),
      value: "Istanbul, Turkey",
      link: null,
    },
    {
      icon: MessageCircle,
      title: t("whatsapp"),
      value: t("contactUs"),
      link: process.env.NEXT_PUBLIC_WHATSAPP_LINK || "https://wa.me/90XXXXXXXXXX",
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
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t("contactUs")}</h1>
          <p className="text-lg text-muted-foreground">{t("getInTouch")}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>{t("contactInformation")}</CardTitle>
                <CardDescription>{t("reachOut")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#CB2C39]/10">
                        <Icon className="h-5 w-5 text-[#CB2C39]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-sm text-muted-foreground hover:text-[#CB2C39]"
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("businessHours")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("mondayFriday")}</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("saturday")}</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("sunday")}</span>
                  <span className="font-medium">{t("closed")}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>{t("sendMessage")}</CardTitle>
                <CardDescription>{t("fillForm")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
