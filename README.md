# ASD Advisors — Landing Page

React + Vite + Framer Motion build of the ASD Advisors landing page.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Stack

- **React 18 + Vite** — app shell and build
- **React Router** — `/`, `/about`, `/services`, `/industries`, `/insights`, `/contact`, with animated page transitions and #hash scrolling across pages
- **Framer Motion** — reveals, line-masked headlines, image clip reveals, scroll parallax (`useScroll`/`useTransform`), counters, magnetic buttons, SVG path drawing, animated menu
- **React Icons** (`react-icons/pi` — Phosphor) — all icons
- **Custom CSS** — one stylesheet per component + `src/styles/global.css` for tokens and shared UI
- **Inline React SVG** — logo swoosh and decorative arcs (`Logo.jsx`, `ArcLines.jsx`)

Parallax uses Framer Motion's scroll hooks, so no separate parallax library is needed. Bootstrap isn't used — CSS Grid handles the layout and responsive breakpoints.
Animations respect the user's "reduce motion" OS setting via `<MotionConfig reducedMotion="user">`.

## Structure

```
src/
  main.jsx, App.jsx        ← router + page transitions
  pages/                   ← Home, About, Services, Industries, Insights, Contact
  data/content.js          ← nav, contact details, home + about copy
  data/services.js, industries.js, insights.js, contact.js ← per-page copy & images
  lib/motion.js            ← shared easing + viewport + presets
  styles/global.css        ← design tokens, buttons, links, type
  assets/images/           ← photography
  components/
    layout/   Navbar, Footer, ScrollProgress, ScrollManager, Page
    sections/ Hero, About, Services, Approach, Insights, CTA   (home)
    sections/about/ AboutHero, Story, Purpose, AboutApproach, Impact,
                    Leadership, GlobalPerspective, AboutCTA     (about page)
    sections/services/   ServicesApproach, ServiceGrid, WhyUs
    sections/industries/ Sectors, Advantage
    sections/insights/   ArticleBrowser, FeaturedInsight, NewsletterForm
    sections/contact/    HeroBadges, ContactSection, ContactForm, Location, FAQ
    ui/       Logo, NavItem, Eyebrow, ServiceCard, InsightCard,
              PageHero, PageCTA, Motto, SplitHead, FeatureList, ArticleCard, PillLink, OrbLink
    motion/   Reveal, SplitLines, ParallaxImage, Counter, Magnetic, ArcLines
```

## Motion primitives

| Component | What it does |
|---|---|
| `<Reveal dir="up">` | Fade + slide in when scrolled into view (up / down / left / right / fade) |
| `<SplitLines lines={[...]}>` | Each line rises out of a mask, staggered |
| `<ParallaxImage reveal="left">` | Clip-path wipe + zoom-out on enter, parallax drift while scrolling |
| `<Counter to={100}>` | Counts up when visible |
| `<Magnetic strength={10}>` | Child follows the cursor with spring physics |
| `<ArcLines paths={[...]}>` | SVG paths that draw themselves |

## Deploying

The site uses client-side routes (`/about`), so the host must serve `index.html` for every path.
`vercel.json` (Vercel) and `public/_redirects` (Netlify) are already included.

## Forms

The contact form (`ContactForm.jsx`) and newsletter (`NewsletterForm.jsx`) validate and animate, but don’t send anywhere yet — look for the `TODO` in each to connect Formspree, EmailJS, Mailchimp or your own API.

## Routes

| Path | Page |
|---|---|
| / | Home |
| /about | About |
| /services | Services |
| /services/business-growth-strategy | Business Growth Strategy (service detail) |
| /services/business-growth-strategy-alt | Alternative layout of the same page — keep one |
| /industries | Industries |
| /insights | Insights |
| /insights/unlocking-sustainable-growth | Sample article |
| /careers | Careers |
| /contact | Contact |
| /privacy, /terms | Legal |
