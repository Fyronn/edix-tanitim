import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { WhyEdixSection } from "@/components/sections/why-edix-section"
import { ProductFamilySection } from "@/components/sections/product-family-section"
import { TechnicalSection } from "@/components/sections/technical-section"
import { OemSearchSection } from "@/components/sections/oem-search-section"
import { CertificatesSection } from "@/components/sections/certificates-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CtaSection } from "@/components/sections/cta-section"
import { generateSEO, generateOrganizationJsonLd, generateProductJsonLd } from "@/lib/seo"

export const revalidate = 86400 // 24 hours

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "hero" })

  return generateSEO({
    title: t("title"),
    description: t("subtitle"),
    locale,
  })
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const organizationJsonLd = generateOrganizationJsonLd()
  const productJsonLd = generateProductJsonLd(locale)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <div className="flex flex-col">
        <HeroSection />
        <WhyEdixSection />
        <ProductFamilySection />
        <TechnicalSection />
        <OemSearchSection />
        <CertificatesSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </>
  )
}
