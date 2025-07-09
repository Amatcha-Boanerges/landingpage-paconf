import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import  ChangePasswordFrom  from '@/app/components/auth/change-password-form'
import ChangePasswordForm from '@/app/components/auth/change-password-form';

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

export default async function PrivatePage() {
  // Only create client if environment variables are available
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Supabase environment variables not available');
    redirect('/auth/login');
  }

  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/login')
  }

  return (
    <div>
      <ChangePasswordForm />
    </div>
  );
}