'use client';

import { useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { createClient } from "@/lib/supabase/client";
import Button from '@/app/components/ui/Button';

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

export default function DataInputPage() {
    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const [paidFee, setPaidFee] = useState('');
    const [, setLoading] = useState(false);
    const [, setMessage] = useState('');
    const router = useRouter();
    
    // Only create client if environment variables are available
    const supabase = typeof window !== 'undefined' && 
                     process.env.NEXT_PUBLIC_SUPABASE_URL && 
                     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY 
                     ? createClient() 
                     : null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!supabase) {
            console.error('Supabase client not available');
            return;
        }
        
        setLoading(true);
        setMessage('');

        const { data: { user }, error: userErr } = await supabase.auth.getUser();

        if (userErr || !user) {
            redirect('/auth/login')
        }

        const { error } = await supabase
            .from('User_Data')
            .update({ name, company, paid: paidFee === 'yes' })
            .eq('uid', user.id);
            // Redirect to global error page on database update failure
        if (error) {
            redirect('/error')
        } else {

            router.push('/account');
        }

        setLoading(false);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-pa-background px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Update Info
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className='mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 text-black'
                        />
                    </div>


                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                            Company
                        </label>
                        <input
                            type="company"
                            name="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                            className='mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 text-black'
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Have you paid the fee
                        </label>
                        <select
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-black"
                            value={paidFee}
                            onChange={(e) => setPaidFee(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select one</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>

                    <Button
                        type="submit"
                        variant="secondary" size='md'>
                        Update Data
                    </Button>
                </form>
            </div>
        </div>
    );
}