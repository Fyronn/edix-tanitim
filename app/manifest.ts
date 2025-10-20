import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EDIX Clutch Disc Manufacturing",
    short_name: "EDIX",
    description: "High-quality clutch disc manufacturing with superior performance and reliability",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#CB2C39",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  }
}
