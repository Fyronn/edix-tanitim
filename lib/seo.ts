import type { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  locale: string
  path?: string
  image?: string
}

export function generateSEO({ title, description, locale, path = "", image }: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const url = `${baseUrl}/${locale}${path}`
  const ogImage = image || `${baseUrl}/og.jpg`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        tr: `${baseUrl}/tr${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "EDIX Clutch Disc",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  }
}

export function generateProductJsonLd(locale: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "EDIX Clutch Disc",
    description:
      locale === "tr" ? "Yüksek kaliteli baskı balataları üretimi" : "High-quality clutch disc manufacturing",
    brand: {
      "@type": "Brand",
      name: "EDIX",
    },
    manufacturer: {
      "@type": "Organization",
      name: "EDIX",
      url: baseUrl,
    },
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  }
}

export function generateOrganizationJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EDIX",
    url: baseUrl,
    logo: `${baseUrl}/logo.jpg`,
    description: "High-quality clutch disc manufacturing",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-XXX-XXX-XX-XX",
      contactType: "sales",
      email: "sales@edixclutchdisc.com",
      availableLanguage: ["Turkish", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    sameAs: [
      // Add social media links here when available
      // "https://www.facebook.com/edix",
      // "https://www.linkedin.com/company/edix",
      // "https://twitter.com/edix",
    ],
  }
}

export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
