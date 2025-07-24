'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

type UserData = {
    name: string;
};

type Product = {
    name: string;
}

type Payment = {
    payment_status: boolean;
}

//hard coded product for testing
const product = 3;

export default function PaidCheckPage() {
    // Only create client if environment variables are available
    const supabase = typeof window !== 'undefined' &&
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        ? createClient()
        : null;
    const [user, setUser] = useState<User | null>(null);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [Product, setProduct] = useState<Product | null>(null);
    const [Payment, setPayment] = useState<Payment | null>(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchUserData = async () => {
            if (!supabase) {
                console.error('Supabase client not available');
                setLoading(false);
                return;
            }

            const {
                data: { user },
                error: authError,
            } = await supabase.auth.getUser();

            if (authError || !user) {
                redirect("/auth/login/paid-check-login");
            }

            setUser(user);

            const { data, error } = await supabase
                .from('Registration')
                .select('payment_status')
                .eq('user_id', user.id)
                .eq('product_id', product)
                .single();
            if (error) {
                if (error) {
                    switch (error.code) {
                        default:
                            redirect(`/auth/error?code=${error.code}&msg=${encodeURIComponent(error.message)}`);
                    }
                }
            } else {
                setPayment(data);
            }

            setLoading(false);
        };

        fetchUserData();
    }, [supabase]);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!supabase) {
                console.error('Supabase client not available');
                setLoading(false);
                return;
            }

            const {
                data: { user },
                error: authError,
            } = await supabase.auth.getUser();

            if (authError || !user) {
                redirect("/auth/login/paid-check-login");
            }

            setUser(user);

            const { data, error } = await supabase
                .from('Users')
                .select('name')
                .eq('id', user.id)
                .single();

            if (error) {
                console.error('Error fetching user data:', error);
            } else {
                setUserData(data);
            }

            setLoading(false);
        };

        fetchUserData();
    }, [supabase]);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!supabase) {
                console.error('Supabase client not available');
                setLoading(false);
                return;
            }

            const {
                data: { user },
                error: authError,
            } = await supabase.auth.getUser();

            if (authError || !user) {
                redirect("/auth/login/paid-check-login");
            }

            setUser(user);

            const { data, error } = await supabase
                .from('Products')
                .select('name')
                .eq('id', product)
                .single();

            if (error) {
                console.error('Error fetching user data:', error);
            } else {
                setProduct(data);
            }

            setLoading(false);
        };

        fetchUserData();
    }, [supabase]);

    if (loading) return <p className="p-6 text-gray-500">Loading...</p>;

    if (!userData) return <p className="p-6 text-red-500">User data not found.</p>;

    if (!user) return <p className="p-6 text-red-500">User data not found.</p>;


    return Payment?.payment_status ? (

        <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
                <div className="space-y-2 text-gray-700">
                    <p><strong>User:</strong> {userData.name || user.email}</p>
                    <p><strong>Product:</strong> {Product?.name}</p>
                    <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-2">
                        <svg
                            className="h-40 w-40 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    ) : (

        <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
                <div className="space-y-2 text-gray-700">
                    <p><strong>User:</strong> {userData.name || user.email}</p>
                    <p><strong>Product:</strong> {Product?.name}</p>
                    <div className="inline-flex items-center justify-center rounded-full bg-red-100 p-2">
                        <svg
                            className="h-40 w-40 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );



}