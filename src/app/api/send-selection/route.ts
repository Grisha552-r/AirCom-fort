import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { roomType, area, budget, compressorType, features, name, phone } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: 'Укажите имя и телефон' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;color:#666;width:45%">${label}</td><td style="padding:8px 12px;font-weight:600;color:#111">${value}</td></tr>`;

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
      <div style="background:#b91c1c;color:white;padding:20px 24px;border-radius:12px 12px 0 0">
        <h2 style="margin:0;font-size:20px">🎯 Заявка на подбор кондиционера</h2>
      </div>
      <div style="background:#fff;border:1px solid #eee;border-top:none;padding:24px;border-radius:0 0 12px 12px">

        <h3 style="margin-top:0;color:#111">Контактные данные</h3>
        <table style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:8px;overflow:hidden">
          ${row('Имя', name)}
          ${row('Телефон', phone)}
        </table>

        <h3 style="color:#111;margin-top:20px">Параметры подбора</h3>
        <table style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:8px;overflow:hidden">
          ${row('Тип помещения', roomType)}
          ${row('Площадь', area ? `${area} м²` : 'Не указана')}
          ${row('Бюджет', budget)}
          ${row('Тип компрессора', compressorType)}
          ${row('Доп. функции', features.length ? features.join(', ') : 'Не выбраны')}
        </table>

        <div style="margin-top:20px;padding:14px 16px;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;font-size:14px;color:#92400e">
          Свяжитесь с клиентом по телефону <b>${phone}</b> для подбора подходящей модели.
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `AirComfort <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Подбор кондиционера — ${name}, ${phone}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Selection email error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
