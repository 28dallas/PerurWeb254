# Perur Rays of Hope (PRoH) Website

Production-ready NGO web platform built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and Sanity CMS.

## Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Sanity CMS + GROQ
- Vercel-ready deployment

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

See `.env.example`.

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`
- `NEWSLETTER_API_ENDPOINT`
- `NEWSLETTER_API_AUTH_TOKEN`
- `FORM_FORWARD_ENDPOINT`
- `FORM_FORWARD_AUTH_TOKEN`
- `API_ALERT_WEBHOOK_URL` (optional)
- `DONATION_ONE_TIME_URL`
- `DONATION_MONTHLY_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`
- `SANITY_API_VERSION`

## Project Structure

```text
app/
  api/forms/route.ts
  about/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  contact/page.tsx
  donate/page.tsx
  events/page.tsx
  events/[slug]/page.tsx
  get-involved/page.tsx
  policies/page.tsx
  programs/page.tsx
  programs/[slug]/page.tsx
  resources/page.tsx
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  forms/ValidatedForm.tsx
  layout/Footer.tsx
  layout/Navbar.tsx
  layout/PageHero.tsx
  sections/HeroSection.tsx
  sections/ImpactStats.tsx
  sections/Newsletter.tsx
  sections/TestimonialCarousel.tsx
  ui/AnimatedInView.tsx
  ui/Button.tsx
  ui/Cards.tsx
  ui/Section.tsx
lib/
  constants.ts
  content.ts
  types.ts
  utils.ts
  sanity/
    client.ts
    fetchers.ts
    queries/index.ts
    schemas/
      aboutPage.ts
      blogPost.ts
      event.ts
      homepage.ts
      program.ts
      resource.ts
      siteSettings.ts
      teamMember.ts
      testimonial.ts
      index.ts
```

## Sanity CMS Models

Implemented schemas:

- `homepage`
- `aboutPage`
- `program`
- `teamMember`
- `blogPost`
- `event`
- `resource`
- `testimonial`
- `siteSettings`

Schema exports are in `lib/sanity/schemas/index.ts`.

## GROQ Queries

Defined in `lib/sanity/queries/index.ts`:

- Homepage
- About
- Programs + program by slug
- Team
- Blog + blog by slug
- Events + event by slug
- Resources
- Testimonials
- Site settings

## Security and Compliance

- Form validation: `zod` client + server
- reCAPTCHA verification path: `app/api/forms/route.ts`
- Automated inquiry forwarding via `FORM_FORWARD_ENDPOINT`
- Newsletter forwarding via `app/api/newsletter/route.ts`
- API failure logging and optional webhook alerts
- Consent checkbox included on all forms
- Vercel security headers: `vercel.json`
- Sanity token kept server-side through env vars

## SEO and Performance

- Global metadata and OpenGraph in `app/layout.tsx`
- Dynamic blog metadata in `app/blog/[slug]/page.tsx`
- JSON-LD NGO schema injected in root layout
- `app/sitemap.ts` and `app/robots.ts`
- `next/image` usage for optimized image loading
- App Router server components by default

## Deployment (Vercel)

1. Push repository to Git provider.
2. Import project in Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

## Notes

- Donation buttons use `DONATION_ONE_TIME_URL` and `DONATION_MONTHLY_URL`.
- Blog body renderer can be upgraded with `@portabletext/react` for rich content.

## Delivery Docs

- `docs/WEBSITE_DEVELOPMENT_PLAN.md`
- `docs/TRAINING_HANDOVER_GUIDE.md`
- `docs/MAINTENANCE_SUPPORT_PLAN.md`
- `docs/QA_TEST_REPORT.md`
