"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const t = useTranslations()
  const nav = useTranslations("nav")

  const navigation = [
    { name: nav("products"), href: "/products" },
    { name: nav("tech"), href: "/tech" },
    { name: nav("oem"), href: "/oem" },
    { name: nav("docs"), href: "/docs" },
    { name: nav("about"), href: "/about" },
    { name: nav("contact"), href: "/contact" },
  ]

  return (
    <footer className="border-t bg-graphite text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Image src="/logo.jpg" alt="EDIX" width={80} height={27} />
            <p className="text-sm text-white/80">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/80 transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>sales@edixclutchdisc.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+90 XXX XXX XX XX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Istanbul, Turkey</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t("footer.followUs")}</h3>
            <div className="flex gap-4">{/* Add social media links here */}</div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} EDIX. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
