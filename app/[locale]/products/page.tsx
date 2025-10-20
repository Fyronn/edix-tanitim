import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { ProductsContent } from "@/components/pages/products-content"
import { generateSEO } from "@/lib/seo"

export const revalidate = 86400

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "products" })

  return generateSEO({
    title: t("title"),
    description: t("subtitle"),
    locale,
    path: "/products",
  })
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return <ProductsContent />
}
