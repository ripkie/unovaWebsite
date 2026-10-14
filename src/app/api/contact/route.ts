import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, interest, message } = body;

    // Validasi field wajib
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO;

    if (!apiKey || !emailTo) {
      return NextResponse.json(
        { error: "Email settings have not been configured." },
        { status: 500 }
      );
    }

    // Map topik
    const topicMap: Record<string, string> = {
      produk: "Product Information",
      demo: "Request a Demo",
      partnership: "Partnership Program",
      support: "Technical Support",
      lainnya: "Other",
    };

    const topicLabel = topicMap[interest] ?? interest;

    // Kirim via Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Creativity Corner Website <onboarding@resend.dev>",
        to: [emailTo],
        reply_to: email,
        subject: `[Creativity Corner] New message from ${name} — ${topicLabel}`,
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
            <div style="background: #352E2B; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
              <h1 style="color: white; font-size: 20px; margin: 0;">New Message from the Creativity Corner Website</h1>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #FFFFFF; color: #B85C5C; font-size: 12px; font-weight: 600; text-transform: uppercase; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #FFFFFF; color: #352E2B; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #FFFFFF; color: #B85C5C; font-size: 12px; font-weight: 600; text-transform: uppercase;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #FFFFFF; color: #352E2B;">
                  <a href="mailto:${email}" style="color: #B85C5C;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #FFFFFF; color: #B85C5C; font-size: 12px; font-weight: 600; text-transform: uppercase;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #FFFFFF; color: #352E2B;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #FFFFFF; color: #B85C5C; font-size: 12px; font-weight: 600; text-transform: uppercase;">Subject</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #FFFFFF;">
                  <span style="background: rgba(184, 92, 92,0.15); color: #B85C5C; padding: 2px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">${topicLabel}</span>
                </td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <p style="color: #B85C5C; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">Message</p>
              <div style="background: #FFFFFF; border-radius: 10px; padding: 16px; color: #352E2B; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #FFFFFF; font-size: 12px; color: #999;">
              Sent from creativitycorner.cc · ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short", timeZone: "Asia/Jakarta" })}
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Unable to send the email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "A server error occurred." },
      { status: 500 }
    );
  }
}
