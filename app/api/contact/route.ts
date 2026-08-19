import { NextRequest, NextResponse } from "next/server"

// Validates and receives contact form submissions.
//
// Right now this logs the message server-side and returns success — enough
// to demo the full request/response loop without needing real credentials.
// To actually deliver emails, wire in a provider here, e.g. Resend:
//
//   import { Resend } from "resend"
//   const resend = new Resend(process.env.RESEND_API_KEY)
//   await resend.emails.send({
//     from: "Koozintea <onboarding@resend.dev>",
//     to: process.env.CONTACT_INBOX_EMAIL!,
//     subject: `New inquiry from ${firstName} ${lastName}`,
//     text: message,
//   })
//
// Then add RESEND_API_KEY and CONTACT_INBOX_EMAIL to a .env.local file.

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)

  if (!body || !body.firstName || !body.lastName || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(body.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  // TODO: replace this with a real email send (see comment above).
  console.log("New contact form submission:", {
    name: `${body.firstName} ${body.lastName}`,
    email: body.email,
    phone: body.phone || "(not provided)",
    message: body.message,
  })

  return NextResponse.json({ ok: true })
}
