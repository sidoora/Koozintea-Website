// Single source of truth for business info. Edit these values — everything
// on the site reads from here, and anything left empty is hidden rather
// than shown as a dead link or fake placeholder.

export const siteConfig = {
  name: "Koozintea",
  tagline: "Artisanal Luxury Confections",

  phone: "(479) 652-9892",
  email: "hello@koozintea.com",
  address: {
    line1: "Artisanal Kitchen",
    line2: "Fort Smith, Arkansas",
    note: "By appointment only",
  },

  // Leave any of these blank to hide that icon in the footer.
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/rainbowflour",
    whatsapp: "",
  },

  // Local image paths, served from /public/images.
  images: {
    hero: "/images/hero.jpeg",
    gallery: [
      "/images/gallery-1.jpeg",
      "/images/gallery-2.jpeg",
      "/images/gallery-3.jpeg",
      "/images/gallery-4.jpeg",
      "/images/gallery-5.jpeg",
      "/images/gallery-6.jpeg",
    ],
  },
}
