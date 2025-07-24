'use client';


import Button from '@/app/components/ui/Button'
import Link from 'next/link';


export default function VerifyPage() {




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