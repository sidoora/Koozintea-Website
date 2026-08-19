import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImagePlaceholder } from "@/components/image-placeholder"

const products = [
  {
    title: "Traditional Algerian Sweets",
    items: ["Makroudh", "Charak", "Qalb el Louz", "Dziriettes", "Cornes de Gazelle"],
    description: "Authentic sweets made with dates, almonds, and traditional spices",
    image: "/images/product-sweets.jpeg",
  },
  {
    title: "Custom Pastries",
    items: ["Wedding Cakes", "Birthday Treats", "Special Occasion Desserts", "Corporate Orders"],
    description: "Personalized pastries designed for your special moments",
    image: "/images/product-custom.jpeg",
  },
  {
    title: "Daily Fresh Bakery",
    items: ["Croissants", "Pain au Chocolat", "Seasonal Tarts", "Artisan Breads"],
    description: "Fresh baked goods available daily with French-Algerian fusion",
    image: "/images/product-bakery.jpeg",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Our Specialties</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From traditional Algerian delicacies to custom-made pastries, discover our range of handcrafted treats.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-stone-100"
            >
              <div className="aspect-video bg-amber-100">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImagePlaceholder className="w-full h-full" label="Add photo" />
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-stone-800">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full rounded-md bg-stone-800 hover:bg-stone-900 text-white py-2 text-sm font-medium transition-colors"
                >
                  Order This
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
