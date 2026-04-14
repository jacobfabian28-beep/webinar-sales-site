import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { type, name, email, business, message } = body;

  const subject =
    type === "contact"
      ? `New contact from ${name} — Signal2Sales`
      : `New signup from ${name} — Signal2Sales`;

  const html =
    type === "contact"
      ? `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business || "—"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
      : `
        <h2>New Email Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Signal2Sales <onboarding@resend.dev>",
      to: "jacobfabian28@icloud.com",
      subject,
      html,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
