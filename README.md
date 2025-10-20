# EDIX Clutch Disc Website

Modern, bilingual (TR/EN) promotional website for EDIX clutch disc manufacturing, built with Next.js 15 App Router.

## Features

- 🌍 **Bilingual Support**: Turkish and English with next-intl
- 🎨 **Modern Design**: Clean, minimal design with EDIX brand colors
- 📱 **Mobile-First**: Fully responsive across all devices
- ⚡ **Performance Optimized**: LCP ≤ 2s, CLS ≤ 0.05, Lighthouse ≥ 95
- 🔍 **SEO Optimized**: Metadata, OpenGraph, JSON-LD structured data
- 🎭 **Smooth Animations**: Framer Motion with reduced-motion support
- 📧 **Contact Form**: Server action with rate limiting and honeypot
- 🔎 **OEM Search**: Live compatibility search functionality
- 📄 **ISR**: Incremental Static Regeneration (24h revalidation)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **i18n**: next-intl v3
- **Analytics**: Vercel Analytics + Speed Insights
- **Images**: next/image with AVIF/WEBP support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd edix-clutch-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create `.env.local` file:
\`\`\`env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.me/90XXXXXXXXXX
CONTACT_TO_EMAIL=sales@edixclutchdisc.com
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/
│   ├── [locale]/           # Localized routes
│   │   ├── page.tsx        # Home page
│   │   ├── products/       # Products page
│   │   ├── tech/           # Technical page
│   │   ├── oem/            # OEM compatibility
│   │   ├── docs/           # Documents page
│   │   ├── about/          # About page
│   │   └── contact/        # Contact page
│   ├── actions/            # Server actions
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── sections/           # Page sections
│   ├── pages/              # Page-specific components
│   ├── ui/                 # shadcn/ui components
│   ├── header.tsx          # Header component
│   ├── footer.tsx          # Footer component
│   └── language-switcher.tsx
├── i18n/
│   ├── routing.ts          # i18n routing config
│   └── request.ts          # Request config
├── lib/
│   ├── data/               # Mock data (products, OEM)
│   └── seo.ts              # SEO utilities
├── messages/
│   ├── tr.json             # Turkish translations
│   └── en.json             # English translations
└── public/                 # Static assets
\`\`\`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Site URL for SEO | Yes |
| `NEXT_PUBLIC_WHATSAPP_LINK` | WhatsApp contact link | Yes |
| `CONTACT_TO_EMAIL` | Email for contact form | Yes |

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

The site is optimized for Vercel with:
- Automatic ISR
- Edge middleware for i18n
- Analytics and Speed Insights
- Image optimization

## Performance

- **LCP**: ≤ 2s on 4G
- **CLS**: ≤ 0.05
- **Lighthouse Scores**: ≥ 95 (Performance, Accessibility, SEO)
- **ISR**: 24-hour revalidation
- **Images**: Optimized with next/image (AVIF/WEBP)

## Customization

### Brand Colors

Edit `app/globals.css` to customize EDIX brand colors:

\`\`\`css
--color-primary: #cb2c39;
--color-primary-hover: #c22834;
\`\`\`

### Content

- **Translations**: Edit `messages/tr.json` and `messages/en.json`
- **Products**: Edit `lib/data/products.json`
- **OEM Data**: Edit `lib/data/oem-compatibility.json`

## License

All rights reserved © EDIX

## Support

For questions or support, contact: sales@edixclutchdisc.com
