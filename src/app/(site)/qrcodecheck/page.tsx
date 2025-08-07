"use client";

import { useEffect, useRef, useState } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Html5Qrcode } from "html5-qrcode";

export default function QRScannerPage() {
    const supabase = createClient();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [loading, setLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);
    const [scanResult, setScanResult] = useState("");
    const [status, setStatus] = useState<"success" | "fail" | null>(null);
    const [scannedToken, setScannedToken] = useState<string | null>(null);
    const [scannedProduct, setScannedProduct] = useState<string | null>(null);

    const scannerRef = useRef<Html5Qrcode | null>(null);
    const productIdParam = searchParams.get("product_id");

    // Role & auth check
    useEffect(() => {
        const checkAccess = async () => {
            const {
                data: { user },
                error: authError,
            } = await supabase.auth.getUser();

            if (authError || !user) {
                redirect("/auth/login");
            }

            const { data: roles, error: roleError } = await supabase
                .from("User_Roles")
                .select("role")
                .eq("uid", user.id)
                .single();

            if (roleError || !roles) {
                redirect("/conference");
            }

            setHasAccess(true);
            setLoading(false);
        };

        checkAccess();
    }, []);

    // Start scanner
    useEffect(() => {
        if (!loading && hasAccess) {
            const html5QrCode = new Html5Qrcode("qr-reader");
            scannerRef.current = html5QrCode;

            html5QrCode
                .start(
                    { facingMode: "environment" },
                    { fps: 10, qrbox: 250 },
                    async (decodedText) => {
                        if (decodedText && decodedText !== scanResult) {
                            setScanResult(decodedText);
                            await handleScan(decodedText);
                        }
                    },
                    () => { }
                )
                .catch((err) => {
                    console.error("QR Code start error:", err);
                });

            return () => {
                html5QrCode.stop().catch(() => { });
            };
        }
    }, [loading, hasAccess]);

    // Handle scan result
    const handleScan = async (tokenHash: string) => {
        setScannedToken(tokenHash);

        // Step 1: Get registration_id from QRCodeTokens
        const { data: tokenMatch } = await supabase
            .from("QRCodeTokens")
            .select("registration_id")
            .eq("token_hash", tokenHash)
            .maybeSingle();

        if (!tokenMatch) {
            setStatus("fail");
            return;
        }

        // Step 2: Get registration details
        const { data: registration } = await supabase
            .from("Registration")
            .select("payment_status, product_id")
            .eq("id", tokenMatch.registration_id)
            .maybeSingle();

        if (!registration) {
            setStatus("fail");
            return;
        }

        // Step 3: Get product name from Products table
        const { data: product } = await supabase
            .from("Products")
            .select("name")
            .eq("id", registration.product_id)
            .maybeSingle();

        if (product) {
            setScannedProduct(product.name);
        } else {
            setScannedProduct("Unknown Product");
        }

        // Step 4: Check product match
        if (productIdParam && registration.product_id.toString() !== productIdParam.toString()) {
            setStatus("fail");
            return;
        }
        // Step 5: Check payment status
        if (registration.payment_status === true) {
            setStatus("success");
        } else {
            setStatus("fail");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (!hasAccess) return null;

    return (
        <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
                <h1 className="text-xl text-gray-700 text-center font-bold mb-4">QR Code Scanner</h1>
                <div className="flex justify-center items-center">
                    <div id="qr-reader" className="w-72 h-72">
                    </div>
                </div>

                <div className="space-y-2 text-gray-700">
                    {scannedToken && (
                        <div className="mt-4 text-center">
                            <p className="text-gray-700"><strong>Token Hash:</strong> {scannedToken}</p>
                            <p className="text-gray-700"><strong>Product:</strong> {scannedProduct}</p>
                        </div>
                    )}
                    <div className="flex items-center justify-center ">
                        <div className="rounded-full bg-green-100 p-2">
                            {status === "success" && (
                                <svg
                                    className={'h-32 w-32 text-green-600'}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            )}

                            {status === "fail" && (
                                <svg
                                    className={'h-32 w-32 text-red-600 '}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}
