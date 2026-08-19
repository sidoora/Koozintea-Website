# Koozintea

A Next.js site for an Algerian confectionery business, built with the App Router,
Tailwind, and shadcn-style UI components.

## What was fixed from the original files

- **Contact form now actually submits.** It's a client component that POSTs to
  `app/api/contact/route.ts`, which validates the fields and returns a real
  success/error response. The route currently logs submissions to the server
  console — see the comment in that file for how to wire up a real email
  provider (Resend is the easiest).
- **No more placeholder images.** Every image slot checks `lib/site-config.ts`
  first; if no real photo is set, it shows a styled placeholder instead of a
  broken `/placeholder.svg` reference.
- **Footer links work.** "Quick Links" scroll to the matching section on the
  page. Social icons (Facebook/Instagram/WhatsApp) only render if you've filled
  in a real URL in `site-config.ts` — no more dead `#` links.
- **Copyright year is dynamic** — pulls from `new Date().getFullYear()`.
- **Contact info is centralized** in `lib/site-config.ts` instead of hardcoded
  across components, so you edit it once.

## Before you deploy

Open `lib/site-config.ts` and fill in:

- `phone` — real business phone, or leave blank to hide it
- `social` — real Facebook/Instagram/WhatsApp links
- `images.hero` and `images.gallery` — paths to real photos dropped into `public/images/`

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploying

This is a standard Next.js app, so it deploys cleanly to **Vercel** (built by
the same team as Next.js — connect the repo and it just works) or any host
that supports Node.js server-side rendering. Static hosts like GitHub Pages
won't work as-is since the contact form's API route needs a server.
# Koozintea Website
