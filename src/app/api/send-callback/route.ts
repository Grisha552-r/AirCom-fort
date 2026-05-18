import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, phone } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
      <div style="background:#b91c1c;color:white;padding:20px 24px;border-radius:12px 12px 0 0">
        <h2 style="margin:0">📞 Заявка на обратный звонок</h2>
      </div>
      <div style="background:#fff;border:1px solid #eee;border-top:none;padding:24px;border-radius:0 0 12px 12px">
        ${name ? `<p><b>Имя:</b> ${name}</p>` : ''}
        <p><b>Телефон:</b> <a href="tel:${phone}">${phone}</a></p>
        <p style="color:#888;font-size:13px;margin-top:16px">Клиент ждёт звонка с сайта aircom-fort.by</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `AirComfort <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Обратный звонок — ${phone}${name ? ' (' + name + ')' : ''}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Callback email error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
