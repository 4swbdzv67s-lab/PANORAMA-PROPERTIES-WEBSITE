import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  project?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body: ContactPayload = await request.json().catch(() => ({}));
  const { name, email, phone, project, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // No email provider is wired up yet — submissions are only logged here.
  // Once a real provider (e.g. Resend, SendGrid) API key is available, send
  // the message to info@panoramaproperties.cd from this handler.
  console.log("Contact form submission:", { name, email, phone, project, message });

  return NextResponse.json({ ok: true });
}
