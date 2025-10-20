import { setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import { AboutContent } from "@/components/pages/about-content"
import { generateSEO } from "@/lib/seo"

export const revalidate = 86400

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  return generateSEO({
    title: locale === "tr" ? "Hakkımızda" : "About Us",
    description:
      locale === "tr"
        ? "EDIX ve yüksek kaliteli baskı balataları üretimimiz hakkında daha fazla bilgi edinin"
        : "Learn more about EDIX and our commitment to quality clutch disc manufacturing",
    locale,
    path: "/about",
  })
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return <AboutContent />
}
