# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server on localhost:3000
pnpm build      # Build for production
pnpm start      # Run production build
pnpm lint       # Run ESLint
```

## Architecture

Single-page Next.js 16 landing page for **MZTH Estudio**, a streaming/podcast studio rental service. Uses the App Router with a single route (`app/page.tsx`).

**Page sections** (rendered top-to-bottom in `app/page.tsx`):
- `Navbar` — fixed, scroll-aware, mobile hamburger menu
- `Hero` — above-the-fold with feature cards
- `StudioSection` — studio equipment showcase
- `PricingSection` — 4 rental plans (30min / 1hr / 1.5hr / 2hr), priced in ARS
- `FAQSection` — accordion-style
- `ContactSection` — booking form that opens WhatsApp (`wa.me/5493424676085`)
- `Footer`

Each section file lives at `components/<section-name>.tsx` and is a `"use client"` component with Framer Motion animations triggered by `useInView`.

**`components/ui/`** — shadcn/ui component library (Radix UI primitives). Do not edit these manually; use the shadcn CLI if needed.

## Design System

Dark cyberpunk theme — all tokens are defined in `app/globals.css`:

| Token | Value | Use |
|---|---|---|
| Primary | `#00D9FF` (cyan) | Accents, CTAs, icons |
| Secondary | `#C85CFF` (violet) | Secondary accents |
| Background | `#050505` | Page background |
| Foreground | `#F5F5F5` | Main text |
| Muted text | `#A1A1AA` | Secondary text |

**Utility classes** defined in `globals.css` (not Tailwind plugins — use them directly):
- `.glass` / `.glass-strong` — glassmorphism cards
- `.gradient-text` — cyan-to-violet gradient fill on text
- `.glow-cyan` / `.glow-violet` — box-shadow glow effects
- `.gradient-border` — animated gradient border via `::before`

**Fonts**: `--font-heading` = Space Grotesk, `--font-sans` = Inter. Reference headings with `font-[family-name:var(--font-heading)]`.

## Key Notes

- `next.config.mjs` has `typescript.ignoreBuildErrors: true` — TypeScript errors won't fail the build but should still be fixed.
- Images use `unoptimized: true` — no Next.js Image optimization pipeline.
- Package manager is **pnpm** (use `pnpm`, not `npm` or `yarn`).
- Vercel Analytics is injected only in production (`process.env.NODE_ENV === 'production'`).
- Content (prices, WhatsApp number, plan features) is hardcoded in the component files, not in a CMS or config file.
