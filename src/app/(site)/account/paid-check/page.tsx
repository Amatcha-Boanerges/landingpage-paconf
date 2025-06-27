'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

type UserData = {
    email: string;
    paid?: boolean;
};

export default function AccountPage() {
    const supabase = createClient();
    const [user, setUser] = useState<User | null>(null);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const {
                data: { user },
                error: authError,
            } = await supabase.auth.getUser();

            if (authError || !user) {
                redirect("/auth/login/paid-check-login")
                return;
            }

            setUser(user);

            const { data, error } = await supabase
                .from('User_Data')
                .select('email, paid')
                .eq('email', user.email)
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

    if (loading) return <p className="p-6 text-gray-500">Loading...</p>;

    if (!userData) return <p className="p-6 text-red-500">User data not found.</p>;


    return userData.paid ? (

        <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
                <div className="space-y-2 text-gray-700">
                    <p><strong>User:</strong> {userData.email}</p>
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
                    <p><strong>User:</strong> {userData.email}</p>
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