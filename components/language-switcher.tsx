"use client"

import { useParams } from "next/navigation"
import { useTransition } from "react"
import { useRouter, usePathname } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  const currentLocale = params.locale as string

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <div className="flex items-center gap-1">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onSelectChange(currentLocale === "tr" ? "en" : "tr")}
        disabled={isPending}
        className="h-8 px-2 text-xs font-medium"
      >
        {currentLocale === "tr" ? "EN" : "TR"}
      </Button>
    </div>
  )
}
