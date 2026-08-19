# Algerian Confectionery Business Website (Next.js)

This is a full-stack website built for a local confectionery business in Algeria. I built it using **Next.js (App Router)**, **Tailwind CSS**, and **shadcn/ui** components to create a clean, responsive user interface.

## What I Fixed & Implemented

*   **Working Contact Form:** The original form didn't actually send data anywhere. I rewrote it as a client component that POSTs to a backend API route (`app/api/contact/route.ts`). The route handles form validation and returns a clean success or error response. Right now, it just logs submissions to the server console—check the comments in that file for steps on connecting an actual email provider like Resend.
*   **Dynamic Asset Loading:** To prevent broken image links, every image slot checks `lib/site-config.ts` first. If a custom business photo isn't provided yet, it automatically falls back to a styled placeholder instead of throwing a broken `/placeholder.svg` error.
*   **Functional Navigation & Footer:** "Quick Links" now smoothly scroll to their respective sections on the main page. The social icons (Facebook, Instagram, WhatsApp) only render if you've actually added your URL to the config file, eliminating dead `#` links.
*   **Dynamic Copyright Year:** Updated the footer copyright to pull automatically from `new Date().getFullYear()` so it never goes out of date.
*   **Centralized Config:** I moved all the business contact info, social handles, and phone numbers into a single file (`lib/site-config.ts`). This makes it easy to update the website's details in one place without digging through individual layout components.

## Tech Stack
*   **Frontend:** Next.js (App Router), React, Tailwind CSS, shadcn/ui
*   **Backend:** Next.js API Routes (Node.js runtime)
*   **Hosting:** Vercel (Supports the server-side rendering required for the contact form API)

## Getting Started

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Open `lib/site-config.ts` and fill in the configuration details (phone number, social links, and the image paths for your photos inside the `public/images/` folder).

3. Run the development server locally:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Future Implementations
*   Connect the contact form API to **Resend** for live email notifications.
*   Set up a simple database (like PostgreSQL with Prisma) to securely save customer inquiries.
*   Add basic rate-limiting to the contact API route to prevent spam submissions.


This is a standard Next.js app, so it deploys cleanly to **Vercel** (built by
the same team as Next.js — connect the repo and it just works) or any host
that supports Node.js server-side rendering. Static hosts like GitHub Pages
won't work as-is since the contact form's API route needs a server.
# Koozintea Website
