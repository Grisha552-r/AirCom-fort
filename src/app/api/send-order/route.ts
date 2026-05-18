import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
  const body = await req.json();
  const { orderId, name, phone, email, address, comment, items, total } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const itemsHtml = items
    .map(
      (item: { productName: string; quantity: number; price: number }) =>
        `<tr>
          <td style="padding:6px 10px;border-bottom:1px solid #eee">${item.productName}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">${item.quantity}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right">${(item.price * item.quantity).toLocaleString('ru-RU')} р.</td>
        </tr>`
    )
    .join('');

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#b91c1c;color:white;padding:20px 24px;border-radius:12px 12px 0 0">
        <h2 style="margin:0">Новый заказ ${orderId}</h2>
      </div>
      <div style="background:#fff;border:1px solid #eee;border-top:none;padding:24px;border-radius:0 0 12px 12px">
        <h3 style="margin-top:0">Контактные данные</h3>
        <p><b>Имя:</b> ${name}</p>
        <p><b>Телефон:</b> ${phone}</p>
        ${email ? `<p><b>Email:</b> ${email}</p>` : ''}
        ${address ? `<p><b>Адрес установки:</b> ${address}</p>` : ''}
        ${comment ? `<p><b>Комментарий:</b> ${comment}</p>` : ''}

        <h3>Состав заказа</h3>
        <table style="width:100%;border-collapse:collapse">
          <thead>
            <tr style="background:#f5f5f5">
              <th style="padding:8px 10px;text-align:left">Товар</th>
              <th style="padding:8px 10px;text-align:center">Кол-во</th>
              <th style="padding:8px 10px;text-align:right">Сумма</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>

        <div style="margin-top:16px;text-align:right;font-size:18px">
          <b>Итого: <span style="color:#b91c1c">${total.toLocaleString('ru-RU')} р.</span></b>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `AirComfort <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Новый заказ ${orderId} — ${name}`,
      html,
    });

    await supabaseAdmin.from('orders').insert({
      id: orderId || `ORD-${Date.now()}`,
      created_at: new Date().toISOString(),
      customer_name: name || 'Аноним',
      customer_phone: phone || '',
      customer_email: email || null,
      address: address || null,
      comment: comment || null,
      items: items || [],
      total: total || 0,
      status: 'new',
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Order error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
