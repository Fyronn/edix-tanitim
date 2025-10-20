"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Link } from "@/i18n/routing"
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "sales@edixclutchdisc.com",
    link: "mailto:sales@edixclutchdisc.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+90 XXX XXX XX XX",
    link: "tel:+90XXXXXXXXXX",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Istanbul, Turkey",
    link: null,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Contact us",
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK || "https://wa.me/90XXXXXXXXXX",
  },
]

export function ContactContent() {
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
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="text-lg text-muted-foreground">Get in touch with our team</p>
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
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
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
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="font-medium">Closed</span>
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
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
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
