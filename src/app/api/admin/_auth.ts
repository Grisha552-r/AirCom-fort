import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

const ADMIN_FILE = path.join(process.cwd(), 'src/data/admin.json');

export function getAdminPassword(): string {
  try {
    const data = JSON.parse(fs.readFileSync(ADMIN_FILE, 'utf-8'));
    return data.password || process.env.ADMIN_PASSWORD || '';
  } catch {
    return process.env.ADMIN_PASSWORD || '';
  }
}

export async function isAuthorized(): Promise<boolean> {
  const store = await cookies();
  const session = store.get('admin_session');
  const pwd = getAdminPassword();
  return !!pwd && session?.value === pwd;
}
