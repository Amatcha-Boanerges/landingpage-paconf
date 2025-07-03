import Button from "@/app/components/ui/Button";
import { createClient } from "@/lib/supabase/client";
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
                <h1 className=" text-center text-2xl font-bold text-gray-800">Password Successfully Changed</h1>
            </div>
        </div>

    );
}