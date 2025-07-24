'use client';

import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/client'
import Button from '@/app/components/ui/Button'
import Link from 'next/link';

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

export default function VerifyPage() {
    // Only create client if environment variables are available
    const supabase = typeof window !== 'undefined' && 
                     process.env.NEXT_PUBLIC_SUPABASE_URL && 
                     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY 
                     ? createClient() 
                     : null;



    return (

        <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
                <h1 className=" text-center text-2xl font-bold text-gray-800">Verify Your Email</h1>
                <div className=" text-center space-y-2 text-gray-700">
                    <p>You should have received an email with a verification link</p>
                    <p>Check your spam/junk folder if unable to find the verification email</p>

                    <Link href="/auth/sign-up?code=resend">
                    <Button
                        type="submit"
                        variant="secondary" size='md'>
                        Resend Verification Email
                    </Button>
                    </Link>

                </div>
            </div>
        </div>

    );
}