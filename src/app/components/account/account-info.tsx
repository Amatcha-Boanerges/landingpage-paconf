'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';
import Button from '@/app/components/ui/Button'
import Link from 'next/link';

type UserData = {
  email: string;
  company?: string;
  paid?: boolean;
  // Add other fields from your User_Data table if needed
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
        console.error('Not signed in');
        return;
      }

      setUser(user);

      const { data, error } = await supabase
        .from('User_Data')
        .select('email, company, paid')
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

  return (
    <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Your Account Info</h1>
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Company:</strong> {userData.company || 'Not provided'}</p>
          <p><strong>Paid:</strong> {userData.paid ? 'Yes' : 'No'}</p>
          <Link href="/account/update-info">
          <Button variant="secondary" size='md'> Update Info </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}