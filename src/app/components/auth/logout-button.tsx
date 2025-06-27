'use client'

import { createClient } from "@/lib/supabase/client";
import  Button  from "../ui/Button";

export function LogoutButton() {

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.reload();
  };

  return <Button size="sm" variant="secondary" onClick={logout}>Logout</Button>;
}
