# ChromaCraft — Premium Paint & Coating Solutions

A modern, full-featured business website for a professional painting and coating company, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 14.2.5 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Lucide React | 0.383 |

---

## Project Structure

```
paint-business/
├── app/
│   ├── globals.css          # Global styles & custom utility classes
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── loading.tsx          # Global loading UI
│   ├── not-found.tsx        # 404 page
│   ├── page.tsx             # Home page
│   ├── robots.ts            # SEO robots.txt
│   ├── sitemap.ts           # SEO sitemap
│   ├── about/
│   │   └── page.tsx         # About Us page
│   ├── blog/
│   │   ├── page.tsx         # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx     # Individual blog post page
│   ├── calculator/
│   │   └── page.tsx         # Paint cost calculator
│   ├── contact/
│   │   └── page.tsx         # Contact / quote request page
│   ├── services/
│   │   └── page.tsx         # Services listing page
│   └── visualizer/
│       └── page.tsx         # Paint color visualizer tool
├── components/
│   ├── Navbar.tsx           # Site navigation
│   └── Footer.tsx           # Site footer
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, services preview, gallery, testimonials, CTA |
| `/about` | Company story, team, and mission |
| `/services` | Full services listing with pricing |
| `/calculator` | Interactive paint cost estimator |
| `/visualizer` | Color visualizer tool |
| `/blog` | Blog / tips articles |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Contact form & quote request |

---

## Features

- **Hero section** with full-screen background, animated badge, and floating review card
- **Stats bar** — projects completed, client satisfaction, experience, color options
- **Services grid** — Interior, Exterior, Texture & Design, Waterproofing with pricing
- **Why Us** — Quality guarantee, on-time delivery, premium materials, zero-mess promise
- **Portfolio gallery** — Masonry-style before & after project showcase
- **Testimonials** — Client reviews with star ratings
- **CTA banner** — Free inspection booking with phone link
- **Paint cost calculator** — Interactive tool for area-based estimates
- **Color visualizer** — Room color preview tool
- **Blog** — Dynamic `[slug]` routing for SEO-friendly articles
- **SEO** — `sitemap.ts` and `robots.ts` for search engine optimization
- **Fully responsive** — Mobile-first design with Tailwind CSS

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd paint-business

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Customization

- **Brand colors & fonts** — Edit `app/globals.css` and `tailwind.config.ts`
- **Business info** (name, phone, service area) — Update `app/page.tsx` and component files
- **Services & pricing** — Edit the `services` array in `app/page.tsx` and `app/services/page.tsx`
- **Testimonials** — Update the `testimonials` array in `app/page.tsx`
- **SEO metadata** — Update `app/layout.tsx` and `app/sitemap.ts`

---

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and deploys instantly

Alternatively, build and serve with any Node.js host:

```bash
npm run build
npm run start
```

---

## License

Private — All rights reserved.
