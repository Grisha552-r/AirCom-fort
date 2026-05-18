import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabase';
import { getAdminPassword, isAuthorized } from '@/app/api/admin/_auth';

const COOKIE = 'admin_session';

const COOKIE_OPTS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  maxAge: 60 * 60 * 8,
  path: '/',
};

export async function GET() {
  const ok = await isAuthorized();
  return NextResponse.json({ ok });
}

export async function POST(req: Request) {
  const { password } = await req.json();
  const correct = await getAdminPassword();
  if (!correct || password !== correct) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, correct, COOKIE_OPTS);
  return res;
}

export async function PUT(req: Request) {
  if (!await isAuthorized()) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }
  const { currentPassword, newPassword } = await req.json();
  if (!newPassword || newPassword.length < 6) {
    return NextResponse.json({ ok: false, error: 'Пароль должен быть не короче 6 символов' }, { status: 400 });
  }
  const current = await getAdminPassword();
  if (currentPassword !== current) {
    return NextResponse.json({ ok: false, error: 'Текущий пароль неверный' }, { status: 400 });
  }
  const { error } = await supabaseAdmin
    .from('settings')
    .upsert({ key: 'admin_password', value: newPassword });
  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, newPassword, COOKIE_OPTS);
  return res;
}

export async function DELETE() {
  const store = await cookies();
  store.delete(COOKIE);
  return NextResponse.json({ ok: true });
}
