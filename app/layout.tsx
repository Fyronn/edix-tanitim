import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getLocale } from 'next-intl/server'
import './globals.css'

const geist = Geist({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "EDIX - Clutch Disc Manufacturing",
    template: "%s | EDIX",
  },
  description: "High-quality clutch disc manufacturing with superior performance and reliability.",
  keywords: [
    "clutch disc",
    "clutch plate",
    "baskı balatası",
    "debriyaj balatası",
    "automotive parts",
    "commercial vehicles",
    "EDIX",
    "Turkey",
    "Istanbul",
  ],
  authors: [{ name: "EDIX" }],
  creator: "EDIX",
  publisher: "EDIX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  
  return (
    <html lang={locale}>
      <body className={geist.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
