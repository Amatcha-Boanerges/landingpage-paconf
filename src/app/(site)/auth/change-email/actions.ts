'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function changeEmail(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const form = {
    email: formData.get('email') as string,
  }

  const { error } = await supabase.auth.updateUser({
    email: form.email
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
  redirect('/auth/change-email/change-notice')
}

