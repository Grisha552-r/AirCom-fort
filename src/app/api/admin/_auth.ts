import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabase';

export async function getAdminPassword(): Promise<string> {
  try {
    const { data } = await supabaseAdmin
      .from('settings')
      .select('value')
      .eq('key', 'admin_password')
      .single();
    if (data?.value) return data.value;
  } catch {}
  return process.env.ADMIN_PASSWORD || '';
}

export async function isAuthorized(): Promise<boolean> {
  const store = await cookies();
  const session = store.get('admin_session');
  if (!session?.value) return false;
  const pwd = await getAdminPassword();
  return !!pwd && session.value === pwd;
}
