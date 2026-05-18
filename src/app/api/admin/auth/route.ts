import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

const COOKIE = 'admin_session';
const ADMIN_FILE = path.join(process.cwd(), 'src/data/admin.json');

function getPassword(): string {
  try {
    const data = JSON.parse(fs.readFileSync(ADMIN_FILE, 'utf-8'));
    return data.password || process.env.ADMIN_PASSWORD || '';
  } catch {
    return process.env.ADMIN_PASSWORD || '';
  }
}

async function isAuthorized() {
  const store = await cookies();
  const session = store.get(COOKIE);
  return !!session?.value && session.value === getPassword();
}

// Check session
export async function GET() {
  const ok = await isAuthorized();
  return NextResponse.json({ ok });
}

// Login
export async function POST(req: Request) {
  const { password } = await req.json();
  const correct = getPassword();
  if (!correct || password !== correct) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, correct, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 8,
    path: '/',
  });
  return res;
}

// Change password
export async function PUT(req: Request) {
  if (!await isAuthorized()) return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  const { currentPassword, newPassword } = await req.json();
  if (!newPassword || newPassword.length < 6) {
    return NextResponse.json({ ok: false, error: 'Пароль должен быть не короче 6 символов' }, { status: 400 });
  }
  if (currentPassword !== getPassword()) {
    return NextResponse.json({ ok: false, error: 'Текущий пароль неверный' }, { status: 400 });
  }
  try {
    fs.writeFileSync(ADMIN_FILE, JSON.stringify({ password: newPassword }));
    // Refresh cookie with new password
    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE, newPassword, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 8,
      path: '/',
    });
    return res;
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

// Logout
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(COOKIE);
  return res;
}
