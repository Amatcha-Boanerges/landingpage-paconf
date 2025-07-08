'use client'

import { createClient } from "@/lib/supabase/client";
import  Button  from "../ui/Button";

export function LogoutButton() {

  const logout = async () => {
    // Only create client if environment variables are available
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Supabase environment variables not available');
      return;
    }
    
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.reload();
  };

  return <Button size="sm" variant="secondary" onClick={logout}>Logout</Button>;
}
