'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';
import Button from '@/app/components/ui/Button'
import Link from 'next/link';
import { redirect } from 'next/navigation';

type UserData = {
  name: string;
  company?: string;
  // Add other fields from your User_Data table if needed
};

type UserRole = {
  role: string;
  // Add other fields from your User_Data table if needed
};

export default function AccountPage() {
  // Only create client if environment variables are available
  const supabase = typeof window !== 'undefined' &&
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? createClient()
    : null;
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);
  var scanner = false;

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
        redirect('/auth/login')
      }


      setUser(user);

      const { data: roles, error: roleError } = await supabase
        .from("User_Roles")
        .select("role")
        .eq("uid", user.id)
        .single();

      if (roleError) {
        if (roleError) {
          switch (roleError.code) {
            default:
              redirect(`/auth/error?code=${roleError.code}&msg=${encodeURIComponent(roleError.message)}`);
          }
        }
      } else {
        setUserRole(roles);
      }




      const { data, error } = await supabase
        .from('Users')
        .select('company, name')
        .eq('id', user.id)
        .single();

      if (error || !data) {
        if (error) {
          switch (error.code) {
            default:
              redirect(`/auth/error?code=${error.code}&msg=${encodeURIComponent(error.message)}`);
          }
        }
      } else {
        setUserData(data);
      }

      setLoading(false);
    };

    fetchUserData();
  }, [supabase]);

  if (loading) return <p className="p-6 text-gray-500">Loading...</p>;

  if (!userData) return <p className="p-6 text-red-500">User data not found.</p>;

  if (!user) return <p className="p-6 text-red-500">User data not found.</p>;

  if (userRole && userRole.role == 'qrcode') {
    scanner = true;
  }

  return (
    <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Your Account Info</h1>
        <div className="space-y-2 text-gray-700">
          <p><strong>Name:</strong> {userData.name || 'Not provided'}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {userData.company || 'Not provided'}</p>
          <Link href="/account/update-info">
            <Button variant="secondary" size='md'> Update Info </Button>
          </Link>
          <Link href="/auth/change-email">
            <Button variant="secondary" size='md'> Change Email </Button>
          </Link>
          <Link href="/auth/change-password/notice">
            <Button variant="secondary" size='md'> Change Password </Button>
          </Link>
          <Link href="/account/qrcode-list">
            <Button variant="secondary" size='md'> QR Codes </Button>
          </Link>
          {scanner && (
            <Link href="/qrcodecheck/select-product">
              <Button variant="secondary" size='md'> QR Scanner </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}