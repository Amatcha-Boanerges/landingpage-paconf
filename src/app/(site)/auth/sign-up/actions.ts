
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function signup(formData: FormData) {


  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }


  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    if (error.code == "invalid_credentials" || error.code == "email_not_confirmed") {
      const { error } = await supabase.auth.signUp(data)


      if (error) {
        console.log(error.code);
        switch (error.code) {
          case "weak_password":
            redirect(`/auth/sign-up?code=${error.code}&msg=${encodeURIComponent(error.message)}`);
          default:
            redirect(`/auth/error?code=${error.code}&msg=${encodeURIComponent(error.message)}`);

        }


      }


      revalidatePath('/', 'layout')
      redirect('/account/verify-email')

    } else {

      if (error) {
        console.log(error.code);
        redirect(`/auth/error?code=${error.code}&msg=${encodeURIComponent(error.message)}`);
      }

      revalidatePath('/', 'layout')
      redirect('/')

    }

  }



}