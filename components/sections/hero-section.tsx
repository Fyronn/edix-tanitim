// app/components/sections/hero-section.tsx
"use client"

import React from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { ArrowRight, Download } from "lucide-react"
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
} from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const t = useTranslations("hero")
  const reduce = useReducedMotion()

  // ---- Mobil tespiti (≤767px): mobilde overlay kapalı
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const set = () => setIsMobile(mq.matches)
    set()
    mq.addEventListener("change", set)
    return () => mq.removeEventListener("change", set)
  }, [])

  // ---- Spotlight & parallax (sadece desktop)
  const sectionRef = React.useRef<HTMLElement>(null)
  const [spot, setSpot] = React.useState({ x: 0.5, y: 0.5 })
  const mx = useMotionValue(0) // -1..1
  const my = useMotionValue(0)
  const tx = useTransform(mx, [-1, 1], [-12, 12])
  const ty = useTransform(my, [-1, 1], [-6, 6])

  function onPointer(e: React.MouseEvent | React.TouchEvent) {
    if (isMobile) return
    const el = sectionRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
    const clientY =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY
    const rx = (clientX - r.left) / r.width
    const ry = (clientY - r.top) / r.height
    const x = Math.min(1, Math.max(0, rx))
    const y = Math.min(1, Math.max(0, ry))
    setSpot({ x, y })
    mx.set((x - 0.5) * 2)
    my.set((y - 0.5) * 2)
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      onMouseMove={onPointer}
      onTouchMove={onPointer}
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div style={{ x: tx, y: ty }} className="absolute inset-0 -z-10">
        <Image
          src="/clutchmain3.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* SPOTLIGHT OVERLAY (desktop), mobilde devre dışı */}
      {!isMobile && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(
                circle 260px
                at ${spot.x * 100}% ${spot.y * 100}%,
                rgba(255,255,255,0) 0%,
                rgba(255,255,255,0) 60%,
                rgba(255,255,255,0.30) 72%,
                rgba(255,255,255,0.58) 100%
              )
            `,
          }}
        />
      )}

      {/* İnce grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]
                   bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)]
                   bg-[size:56px_56px]"
      />

      {/* Kayan highlight şeridi */}
      <motion.div
        aria-hidden
        initial={{ x: "-100%" }}
        animate={reduce ? {} : { x: "100%" }}
        transition={reduce ? {} : { repeat: Infinity, duration: 10, ease: "linear" }}
        className="pointer-events-none absolute -top-24 left-0 -z-10 h-48 w-[140%] rotate-[-4deg]
                   bg-gradient-to-r from-transparent via-white/35 to-transparent"
      />

      {/* CONTENT */}
      <div className="container mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-[2px]"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#CB2C39]" />
            {t("badge") || "Premium Clutch Disc & Plate"}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative mx-auto text-balance text-4xl font-semibold leading-tight text-[#111] md:text-5xl lg:text-6xl"
          >
            <span className="relative">
              {t("title")}
              {/* shimmer */}
              <motion.span
                aria-hidden
                initial={false}
                animate={reduce ? {} : { x: ["-120%", "120%"] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: "linear" }}
                className="absolute inset-y-0 -left-1 w-20 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          {/* <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto mt-4 max-w-[70ch] text-pretty text-lg text-zinc-700 md:text-xl"
          >
            {t("subtitle")}
          </motion.p> */}

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-6 h-1 w-16 origin-left rounded-full bg-[#CB2C39]"
          />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <motion.div whileHover={{ y: -2, boxShadow: "0 10px 24px rgba(203,44,57,.25)" }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#CB2C39] px-6 py-2.5 text-white ring-1 ring-red-500/20 transition hover:bg-[#C22834]"
              >
                <Link href="/contact">
                  {t("cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border border-zinc-300 bg-white/95 px-6 py-2.5 text-zinc-800 hover:bg-white"
              >
                <Link href="/docs">
                  <Download className="mr-2 h-4 w-4" />
                  {t("ctaSecondary")}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-14 h-10 w-6 rounded-full border-2 border-zinc-300"
          >
            <motion.span
              className="mx-auto mt-1 block h-2 w-1 rounded bg-zinc-400"
              animate={reduce ? {} : { y: [0, 18, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* bottom shadow */}
      <div className="pointer-events-none h-10 w-full bg-gradient-to-b from-transparent to-black/5" />
    </section>
  )
}
