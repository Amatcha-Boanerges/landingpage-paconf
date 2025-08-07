"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SelectProductPage() {
    const supabase = createClient();
    const router = useRouter();
    const [productId, setProductId] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!productId) {
            setError("Please enter a Product ID");
            return;
        }

        // Check if product exists
        const { data: product, error: productError } = await supabase
            .from("Products")
            .select("id")
            .eq("id", productId)
            .maybeSingle();

        if (productError || !product) {
            setError("Product not found.");
            return;
        }

        // Redirect to scanner with product_id in URL
        redirect(`/qrcodecheck?product_id=${productId}`);
    };

    return (

        <div className="flex min-h-screen items-center justify-center bg-pa-background px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Enter Product ID
                </h2>
                <form className="space-y-5"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <input
                            type="text"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            placeholder="Product ID"
                            required
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-black"
                        />
                    </div>
                    {error && <p className="text-red-600">{error}</p>}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Start Scanning
                    </button>
                </form>
            </div>
        </div>

    );
}
