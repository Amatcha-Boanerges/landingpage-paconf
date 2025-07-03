'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function changePassword(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const form = {
    password: formData.get('password') as string,
  }

const { data, error } = await supabase.auth.updateUser({
  password: form.password
})

  if (error) {
    redirect('/auth/error')
  }

  revalidatePath('/', 'layout')
  redirect('/auth/change-password/password-changed')
}

