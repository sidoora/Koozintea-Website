"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

type Status = "idle" | "sending" | "sent" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to place an order or have questions about our pastries? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-stone-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-800 flex items-center font-light">
                  <Phone className="mr-3 h-6 w-6" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {siteConfig.phone && (
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-stone-600" />
                    <span className="text-stone-700">{siteConfig.phone}</span>
                  </div>
                )}
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-stone-600" />
                  <span className="text-stone-700">{siteConfig.email}</span>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-stone-600 mt-1" />
                  <div className="text-stone-700">
                    <p className="font-medium">{siteConfig.address.line1}</p>
                    <p className="text-sm text-stone-600">{siteConfig.address.line2}</p>
                    <p className="text-sm text-stone-500 italic mt-2">{siteConfig.address.note}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-stone-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="Your first name" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Your last name" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your order or ask any questions..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" disabled={status === "sending"} className="w-full text-lg py-3">
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>

                {status === "sent" && (
                  <p className="flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle2 className="h-4 w-4" /> Message sent — we'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
