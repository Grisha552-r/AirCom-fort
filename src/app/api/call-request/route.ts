import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getSupabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
  const { name, phone } = await req.json();
  if (!phone) return NextResponse.json({ ok: false, error: 'Phone required' }, { status: 400 });

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `AirComfort <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Заказ звонка — ${phone}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px">
          <div style="background:#b91c1c;color:white;padding:16px 20px;border-radius:10px 10px 0 0">
            <h2 style="margin:0;font-size:18px">📞 Заказ обратного звонка</h2>
          </div>
          <div style="border:1px solid #eee;border-top:none;padding:20px;border-radius:0 0 10px 10px">
            ${name ? `<p><b>Имя:</b> ${name}</p>` : ''}
            <p><b>Телефон:</b> ${phone}</p>
            <p style="color:#888;font-size:13px">Перезвоните клиенту как можно скорее.</p>
          </div>
        </div>
      `,
    });

    await getSupabaseAdmin().from('orders').insert({
      id: `CB-${Date.now()}`,
      created_at: new Date().toISOString(),
      customer_name: name || 'Не указано',
      customer_phone: phone,
      customer_email: null,
      address: null,
      comment: 'Заказ звонка с сайта',
      items: [{ productId: 'callback', productName: 'Заявка на звонок', quantity: 1, price: 0 }],
      total: 0,
      status: 'callback',
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
