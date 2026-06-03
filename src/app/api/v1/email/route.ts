import { ContactEmail } from "@/emails/ContactEmail";
import { RESEND_API_KEY } from "@/config/app-config";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill out all fields.", success: false },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "yospunyaporto@gmail.com",
      subject: `New Message from ${name} (Portfolio)`,
      react: ContactEmail({ name, email, message }),
    });

    return NextResponse.json({ data, success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
