# Elite Barber Batam · Elite Hair Studio

Premium, mobile-first, bilingual (EN / ID) web app for **Elite Barber Batam** /
**Elite Hair Studio** — Batam's premier barbershop and hair salon. Built to feel
like a native app: fast, responsive, and editorial.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (hand-built UI, no component library)
- **Framer Motion** available for micro-interactions
- Fonts via `next/font/google`: Playfair Display + Manrope
- Fully static (SSG)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Brand System

| Token   | Value     | Use            |
| ------- | --------- | -------------- |
| `ink`   | `#111111` | Background     |
| `bone`  | `#F7F5F2` | Menu section   |
| `slate` | `#8E8E93` | Muted text     |
| `red`   | `#E63946` | Single accent  |

## Structure

```
app/
  layout.tsx      Fonts, SEO metadata, JSON-LD (2× LocalBusiness)
  page.tsx        Single-page composition
  providers.tsx   Language + Branch React Context
  globals.css     Base + brand utilities
components/        Header, Hero, Marquee, Menu, BranchSelector,
                   SocialHub, Footer, WhatsAppFab, Logo
lib/
  dictionary.ts   Typed EN/ID UI copy
  menu.ts         Men + Women service menus (IDR integers)
  branches.ts     Penuin Centre + Tunas Bizpark
  format.ts       Locale-aware price formatting
  i18n.ts         Shared language types
public/logo.svg   Emblem placeholder
legacy/            Previous single-file prototype (archived)
tasks/             Plan + task breakdown
```

## Customization

- **Logo:** replace `public/logo.svg` with the real brand emblem (keep it legible
  on the white circular chip). If you supply a raster file, drop it in `public/`
  and update the `src` in `components/Logo.tsx`.
- **Copy / prices:** edit `lib/dictionary.ts` and `lib/menu.ts`.
- **Branches / contact:** edit `lib/branches.ts`.

## Notes

- The Instagram section deep-links to the live profile; true embedded live feeds
  require Instagram's paid API/oEmbed.
- Prices may vary by hair length and thickness — consultation recommended.
