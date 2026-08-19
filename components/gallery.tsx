import { ImagePlaceholder } from "@/components/image-placeholder"
import { siteConfig } from "@/lib/site-config"

export function Gallery() {
  const images = siteConfig.images.gallery

  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Sweet Moments</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A glimpse into our kitchen where magic happens daily. Each creation tells a story of tradition,
            craftsmanship, and love.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-stone-100 rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl cursor-pointer"
            >
              {image ? (
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImagePlaceholder className="w-full h-full" label="Add photo" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
