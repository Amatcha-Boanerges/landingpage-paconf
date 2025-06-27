'use client';

import { useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { createClient } from "@/lib/supabase/client";

export default function DataInputPage() {
    const [company, setCompany] = useState('');
    const [paidFee, setPaidFee] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const supabase = createClient();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const { data: { user }, error: userErr } = await supabase.auth.getUser();

        if (userErr || !user) {
            redirect('/auth/login')
        }

        const { error } = await supabase
            .from('User_Data')
            .update({ company, paid: paidFee === 'yes' })
            .eq('email', user.email);

        if (error) {
            redirect('/account')
        } else {

            router.push('/account'); 
        }

        setLoading(false);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-pa-background px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Log In
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">

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

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        Update Data
                    </button>
                </form>
            </div>
        </div>
    );
}