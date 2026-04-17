# eRoxii Landing Page — Next.js 15 + Tailwind v4

Production-ready marketing page for **eRoxii** (ElectRobonics Matrix and Innovative Integration).

## Stack
- **Next.js 15** (App Router, React 19)
- **Tailwind CSS v4** (PostCSS, `@theme` config)
- **TypeScript** strict mode
- **next/font** — Space Grotesk (Latin), JetBrains Mono, Battambang (Khmer)
- Fully bilingual EN / ខ្មែរ (client-side toggle, persisted to localStorage)

## Quick start
```bash
pnpm install        # or npm install / yarn
pnpm dev            # http://localhost:3000
pnpm build && pnpm start
```

## Project structure
```
nextjs/
├── app/
│   ├── layout.tsx        # SEO metadata, JSON-LD, fonts, root HTML
│   ├── page.tsx          # Main landing (client component)
│   └── globals.css       # Tailwind v4 + theme tokens
├── components/
│   ├── Icons.tsx         # Outline icons (ring/tick motif)
│   ├── Wordmark.tsx      # Logo + tagline with technical framing
│   ├── Nav.tsx           # Sticky nav + EN/KM toggle
│   ├── DashboardCard.tsx # Hero's live ALPR dashboard mock
│   ├── Hero.tsx          # Hero + stats bar
│   └── Sections.tsx      # Products, How-it-works, Investor, Blog, Footer
├── lib/
│   └── translations.ts   # EN + KM dictionary
└── public/
    ├── logo.png          # Brand mark
    └── og-image.png      # 1200×630 social card
```

## SEO included
- Title/description/keywords, canonical `https://eroxii.com/`
- Full Open Graph + Twitter Card (`summary_large_image`)
- `Organization` JSON-LD with contact endpoints
- `alternates.languages` for en / km
- `theme-color`, icons, robots index/follow

## Contact (in footer + JSON-LD)
- din.sokheng08@gmail.com
- klengvireak@gmail.com
- +855 011 542 766
- Phnom Penh, Cambodia

## Deployment
Drop onto **Vercel** (`vercel`) — zero config. Works on any Node 20+ host.

---
© 2026 eRoxii · ElectRobonics Matrix and Innovative Integration
