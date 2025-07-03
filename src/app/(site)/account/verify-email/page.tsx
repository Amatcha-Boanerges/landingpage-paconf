'use client';

import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/client'
import Button from '@/app/components/ui/Button'


export default function VerifyPage() {
    const supabase = createClient()

    const check = async () => {
        const { data, error } = await supabase.auth.getUser()
        if (error || !data?.user) {

        } else {
            redirect('/')
        }
    }

    check();

    // Add feature in the future
    //const handleSubmit = async (e: React.FormEvent) => {
    //   e.preventDefault();
    //};


    return (

        <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
                <h1 className=" text-center text-2xl font-bold text-gray-800">Verify Your Email</h1>
                <div className=" text-center space-y-2 text-gray-700">
                    <p>You should have received an email with a verification link</p>
                    <p>Check your spam/junk folder if unable to find the verification email</p>

                    <Button
                        type="submit"
                        variant="secondary" size='md'>
                        Resend Verification Email (currently not working)
                    </Button>

                </div>
            </div>
        </div>

    );
}