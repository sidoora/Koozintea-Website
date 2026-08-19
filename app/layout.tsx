import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Koozintea — Artisanal Algerian Confections",
  description: "Boutique confectionery specializing in authentic Algerian delicacies, handcrafted pastries, and custom orders.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
