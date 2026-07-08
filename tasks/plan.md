# Elite Barber Batam — Rebuild Plan

## Goal
Rebuild the Elite Barber Batam / Elite Hair Studio site as a production-ready,
mobile-first, bilingual (EN/ID) web app that feels like a premium native app.
Single page, static/SSG, Lighthouse 95+ on mobile.

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS v3
- Fonts via `next/font/google`: Playfair Display (serif headings) + Manrope (UI)
- Framer Motion for micro-interactions only
- No component library — hand-built with Tailwind

## Brand System (fixed tokens)
- `ink #111111` (bg), `bone #F7F5F2`, `slate #8E8E93`, `red #E63946` (single accent)
- Playfair 700–900 headings, tight leading, fluid `clamp()`; Manrope body/prices
- Prices bold, `tabular-nums`, red. Wordmark: `ELIT` + flipped red `E` + `BARBER`
- Cards 16–20px radius, 999px pills, hairline `rgba(255,255,255,.10)` dividers

## Dependency Graph
```
Tailwind tokens + globals.css
  └── lib/format.ts (price util)
        └── lib/{dictionary,menu,branches}.ts  (typed data + i18n)
              └── Language/Branch Context providers
                    └── components/* (Header, Hero, Marquee, Menu, Branches, Social, Footer, Fab)
                          └── app/page.tsx
  app/layout.tsx (fonts, metadata, JSON-LD)  ── parallel foundation
```

## Vertical Slices (build order)
1. Scaffold + configs + archive legacy prototype files into `legacy/`
2. Brand tokens + globals (verifiable: build compiles, colors available)
3. Data layer: `formatPrice`, dictionary, menu, branches
4. Context providers (language + branch), instant re-render, no reload
5. Layout: fonts, SEO metadata, JSON-LD `@graph` (two LocalBusiness/BarberShop/HairSalon)
6. Components (each self-contained), then assemble `page.tsx`
7. Verify: `npm install`, `next build`, lint clean
8. Ship: git init, commit, push to GitHub

## Acceptance Criteria
- Language + branch toggles re-render instantly, no flash
- Menu tabs swipe on mobile (touchstart/touchend > 55px)
- All WhatsApp / Maps / Instagram links open in new tab
- No horizontal scroll at 360px, no layout shift, no emojis
- Logo legible on dark background (white circular chip)
- `next build` succeeds; no type or lint errors

## Risks / Notes
- Real brand logo not supplied → ship a tasteful SVG emblem placeholder at
  `/public/logo.svg`; user can drop in a real `logo.png` and swap the reference.
- Live Instagram feed needs IG's paid API/oEmbed → tiles deep-link to the profile.
- `share.google` short links are used verbatim per client instruction.
