'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import QRCode from 'qrcode';

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

type TokenData = {
    token_hash: string;
    productName: string;
};




async function getUserTokensWithProducts(userId: any) {
    const supabase = typeof window !== 'undefined' &&
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        ? createClient()
        : null;
    if (!supabase) {
        console.error('Supabase client not available');
        return;
    }


    // Step 1: Get registrations for the user
    const { data: registrations, error: regError } = await supabase
        .from('Registration')
        .select('id, product_id')
        .eq('user_id', userId)

    if (regError) throw regError

    if (!registrations?.length) return []

    // Extract all registration ids and product ids
    const registrationIds = registrations.map(r => r.id)
    const productIds = registrations.map(r => r.product_id)

    // Step 2: Get all tokens filtered by registration ids
    const { data: tokens, error: tokensError } = await supabase
        .from('QRCodeTokens')
        .select('token_hash, registration_id')
        .in('registration_id', registrationIds)


    if (tokensError) throw tokensError

    // Step 3: Get product info for all product ids
    const { data: products, error: productsError } = await supabase
        .from('Products')
        .select('id, name')
        .in('id', productIds)

    if (productsError) throw productsError

    // Step 4: Merge data so each token has the product name
    // Map product id to name for quick lookup
    const productMap = new Map(products.map(p => [p.id, p.name]))

    // Map registration id to product id
    const regToProductMap = new Map(registrations.map(r => [r.id, r.product_id]))

    // Build final list of tokens with product names
    const tokenList = tokens.map(t => ({
        token_hash: t.token_hash,
        productName: productMap.get(regToProductMap.get(t.registration_id))
    }))

    return tokenList
}

export default function TokenList() {
    const supabase = typeof window !== 'undefined' &&
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        ? createClient()
        : null;
    const [tokens, setTokens] = useState<TokenData[] | null | undefined>(null);
    const [loading, setLoading] = useState(true)
    const [error,] = useState(null)
    const [qrCodes, setQrCodes] = useState<Record<string, string>>({});
    const [, setUser] = useState<User | null>(null);


    useEffect(() => {
        async function fetchTokens() {
            if (!supabase) {
                console.error('Supabase client not available');
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
            const tokenData = await getUserTokensWithProducts(user.id);
            setTokens(tokenData);

            if (!tokenData || !Array.isArray(tokenData)) {
                console.error("Token data is not valid");
                setLoading(false);
                return;
            }
            // Generate QR codes for each token
            const qrMap: Record<string, string> = {};
            for (const token of tokenData) {
                const qrDataUrl = await QRCode.toDataURL(token.token_hash);
                qrMap[token.token_hash] = qrDataUrl;
            }

            setQrCodes(qrMap);
            setLoading(false);
        }
        fetchTokens()
    }, [supabase])


    if (loading) return <div>Loading tokens...</div>
    if (error) return <div>Error: {error}</div>
    if (!tokens?.length) return <div>No tokens found.</div>

    return (

        <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
                <div className="space-y-2 text-gray-700">
                    <p className='text-3xl'><strong>QR Code List</strong></p>

                    <ul className="space-y-6">
                        {tokens.map(({ token_hash, productName }) => (
                            <li key={token_hash} className="border p-4 rounded shadow">
                                <h3 className="font-bold text-lg">{productName}</h3>
                                {qrCodes[token_hash] ? (
                                    <img src={qrCodes[token_hash]} alt={`QR for ${productName}`} className="mt-2 w-40 h-40" />
                                ) : (
                                    <p>Generating QR...</p>
                                )}

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}