"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

export default function ClutchSpin({
  src = "/hero-clutch.png",            // transparan PNG önerilir
  size = 520,                           // px
  duration = 12,                        // 1 tur süresi (sn)
}: { src?: string; size?: number; duration?: number }) {
  const prefersReduced = useReducedMotion()

  return (
    <div className="relative mx-auto">
      {/* kırmızı ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full blur-3xl
                   bg-[radial-gradient(circle,rgba(203,44,57,0.18),transparent_70%)]" />

      {/* yumuşak zemin gölgesi */}
      <div className="pointer-events-none absolute left-1/2 top-[88%] h-8 w-2/3 -translate-x-1/2 rounded-full
                      bg-black/15 blur-xl" />

      {/* dönen disk */}
      <motion.div
        role="img"
        aria-label="EDIX clutch disc"
        initial={false}
        animate={prefersReduced ? {} : { rotate: 360 }}
        transition={prefersReduced ? {} : { repeat: Infinity, ease: "linear", duration }}
        whileHover={{ scale: 1.03 }}
        className="relative rounded-xl border border-zinc-200 bg-white/40 p-4 shadow-[0_12px_40px_rgba(0,0,0,.08)] backdrop-blur-sm"
      >
        <div style={{ width: size, height: size }} className="relative">
          <Image
            src={src}
            alt="EDIX clutch disc"
            fill
            sizes="(max-width: 1024px) 80vw, 520px"
            className="object-contain select-none"
            priority
          />
        </div>
      </motion.div>
    </div>
  )
}
