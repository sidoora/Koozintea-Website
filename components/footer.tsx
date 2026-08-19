import { Heart, Facebook, Instagram, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const { facebook, instagram, whatsapp } = siteConfig.social
  const hasSocial = facebook || instagram || whatsapp

  return (
    <footer className="bg-stone-900 text-stone-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-stone-300 leading-relaxed">
              Creating exceptional confections from our artisanal kitchen, where every sweet tells a story of
              tradition, craftsmanship, and passion.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-stone-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <p className="text-stone-300 mb-4">Stay updated with our latest creations and special offers.</p>
            {hasSocial ? (
              <div className="flex space-x-4">
                {facebook && (
                  <a href={facebook} className="text-stone-300 hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
                {instagram && (
                  <a href={instagram} className="text-stone-300 hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {whatsapp && (
                  <a href={whatsapp} className="text-stone-300 hover:text-white transition-colors" aria-label="WhatsApp">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                )}
              </div>
            ) : (
              <p className="text-stone-500 text-sm italic">Social links coming soon</p>
            )}
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center">
          <p className="text-stone-300 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-2 text-red-400" /> by the {siteConfig.name} team
          </p>
          <p className="text-stone-300 mt-2">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
