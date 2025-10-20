import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  const routes = ["", "/products", "/tech", "/oem", "/docs", "/about", "/contact"]
  const locales = ["tr", "en"]

  const sitemap: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      })
    }
  }

  return sitemap
}
