'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function forgotPassword(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const form = {
    email: formData.get('email') as string,
  }

  const { error } = await supabase.auth.signInWithOtp({
    email: form.email,
    options: {
      emailRedirectTo: '/auth/change-password',
      shouldCreateUser: false
    }
  })

  if (error) {
    if (error) {
      switch (error.code) {
        default:
          redirect(`/auth/error?code=${error.code}&msg=${encodeURIComponent(error.message)}`);
      }
    }
  }


  revalidatePath('/', 'layout')
  redirect('/auth/change-password/email-notice')
}

