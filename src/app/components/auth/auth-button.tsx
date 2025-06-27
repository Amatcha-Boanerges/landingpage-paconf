import Link from "next/link";
import  Button  from "../ui/Button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  

  return user ? (
    <div className="flex items-center gap-4">
      <Link href="/account" className="hover:underline">
      {user.email}
      </Link>
      <LogoutButton />
    </div>
  ) : (
    
    <div className="flex gap-2">
      <Link href="/auth/login">
      <Button  size="sm" variant="primary">
        Log in
      </Button>
      </Link>
      <Link href="/auth/sign-up">
      <Button size="sm" variant="secondary">
        Sign up
      </Button>
      </Link>
    </div>
  );
}