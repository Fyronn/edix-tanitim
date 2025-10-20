import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { ContactContent } from "@/components/pages/contact-content"
import { generateSEO } from "@/lib/seo"

export const revalidate = 86400

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "contact" })

  return generateSEO({
    title: t("title"),
    description: t("subtitle"),
    locale,
    path: "/contact",
  })
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return <ContactContent />
}
