# Koozintea

A website for my mom's confectionery business — she bakes Algerian sweets and pastries out of her home kitchen, and I built her a real site to go with it. Next.js, TypeScript, Tailwind.

**Live site:** _(add your deployed URL here once it's live)_

## About the project

The original build was mostly there visually but had a few things that only *looked* done — a contact form with no backend behind it, footer links that went nowhere, placeholder images where real photos should be. I rebuilt those pieces so the site actually works the way it looks like it should.

The contact form was the main piece worth doing properly. It's a client component that posts to `app/api/contact/route.ts`, which validates the input server-side and sends back a real success or error response — not just a form that resets itself and hopes for the best. Right now it logs submissions on the server; wiring it to an email provider like Resend is the next step.

Everything else — phone number, Instagram, product photos — lives in one config file (`lib/site-config.ts`) instead of being hardcoded across every component, so updating the business info doesn't mean hunting through five files.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · lucide-react

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Before deploying

Open `lib/site-config.ts` and fill in the real phone number, social links, and image paths (drop photos into `public/images/`).

## Deploying

Deploys straight to Vercel — import the repo, no config needed. A static host like GitHub Pages won't work here since the contact form's API route needs an actual server to run.

## What's next

- Hook the contact route up to Resend so inquiries actually land in an inbox
- Add a small database (Postgres + Prisma) to store submissions instead of just logging them
- Basic rate-limiting on the API route so it can't be spammed
