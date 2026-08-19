import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Clock } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Koozintea is a boutique confectionery specializing in authentic delicacies. Working from our
            artisanal kitchen, we create bespoke pastries and traditional sweets using ancestral recipes, ensuring each
            piece is a work of edible art crafted with meticulous attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-stone-200 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-stone-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Made with Love</h3>
              <p className="text-gray-600">
                Every pastry is handcrafted with passion and attention to detail, ensuring each bite is a moment of pure
                joy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-stone-200 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-stone-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Authentic Recipes</h3>
              <p className="text-gray-600">
                Modern confections and traditional Algerian recipes preserved and perfected over generations, bringing you the true taste of
                home.
              </p>
            </CardContent>
          </Card>

          <Card className="border-stone-200 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Clock className="h-12 w-12 text-stone-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Fresh Daily</h3>
              <p className="text-gray-600">
                All our pastries and sweets are made fresh daily using premium ingredients sourced from trusted local
                suppliers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
