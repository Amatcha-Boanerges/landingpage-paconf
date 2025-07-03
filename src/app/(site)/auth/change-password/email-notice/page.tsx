import Button from "@/app/components/ui/Button";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function ChangePasswordEmailNotice() {

  const supabase = createClient();

  const authCheck = async () => {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      redirect('/auth/login')
    }
  }

  return (

    <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
        <h1 className=" text-center text-2xl font-bold text-gray-800">Check Your Email</h1>
        <div className=" text-center space-y-2 text-gray-700">
          <p>You should have received an email with a code</p>
          <p>Check your spam/junk folder if unable to find the emails</p>
        </div>
      </div>
    </div>

  );
}