import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, interest, message } = body;

    // Validasi field wajib
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Field nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO;

    if (!apiKey || !emailTo) {
      return NextResponse.json(
        { error: "Konfigurasi email belum diatur." },
        { status: 500 }
      );
    }

    // Map topik
    const topicMap: Record<string, string> = {
      produk: "Informasi Produk",
      demo: "Minta Demo",
      partnership: "Program Kemitraan",
      support: "Dukungan Teknis",
      lainnya: "Lainnya",
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
        from: "Unova Website <onboarding@resend.dev>",
        to: [emailTo],
        reply_to: email,
        subject: `[Unova] Pesan baru dari ${name} — ${topicLabel}`,
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
            <div style="background: #091F58; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
              <h1 style="color: white; font-size: 20px; margin: 0;">Pesan Baru dari Website Unova</h1>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDF0F5; color: #6F96D1; font-size: 12px; font-weight: 600; text-transform: uppercase; width: 140px;">Nama</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDF0F5; color: #091F58; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDF0F5; color: #6F96D1; font-size: 12px; font-weight: 600; text-transform: uppercase;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDF0F5; color: #091F58;">
                  <a href="mailto:${email}" style="color: #6F96D1;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDF0F5; color: #6F96D1; font-size: 12px; font-weight: 600; text-transform: uppercase;">Perusahaan</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDF0F5; color: #091F58;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDF0F5; color: #6F96D1; font-size: 12px; font-weight: 600; text-transform: uppercase;">Topik</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDF0F5;">
                  <span style="background: rgba(111,150,209,0.15); color: #6F96D1; padding: 2px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">${topicLabel}</span>
                </td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <p style="color: #6F96D1; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">Pesan</p>
              <div style="background: #EDF0F5; border-radius: 10px; padding: 16px; color: #091F58; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #EDF0F5; font-size: 12px; color: #999;">
              Dikirim dari unova-website.vercel.app · ${new Date().toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short" })}
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Gagal mengirim email. Coba lagi nanti." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan server." },
      { status: 500 }
    );
  }
}
