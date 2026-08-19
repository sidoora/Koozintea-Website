import { Phone } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50">
      <div className="absolute inset-0 bg-black/10" />
      {siteConfig.images.hero ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('${siteConfig.images.hero}')` }}
        />
      ) : (
        <ImagePlaceholder className="absolute inset-0 opacity-40" label="" />
      )}

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light text-stone-800 mb-8 tracking-wide">
          {siteConfig.name}
        </h1>
        <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
        <p className="text-2xl md:text-3xl text-stone-700 mb-6 font-light italic">
          {siteConfig.tagline}
        </p>
        <p className="text-lg md:text-xl text-stone-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Exquisite handcrafted pastries and traditional sweets, made to order with time-honored recipes and
          the finest ingredients
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-stone-800 text-white hover:bg-stone-900 px-10 py-4 text-lg font-light tracking-wide"
          >
            <Phone className="mr-3 h-5 w-5" />
            Place Your Order
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors border border-stone-400 text-stone-700 hover:bg-stone-50 px-10 py-4 text-lg font-light tracking-wide"
          >
            View Our Creations
          </a>
        </div>
      </div>
    </section>
  )
}
