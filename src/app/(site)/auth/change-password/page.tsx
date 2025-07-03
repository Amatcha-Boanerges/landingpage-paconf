"use client";

import { useState } from "react";

import { changePassword } from './actions'
import Button from "@/app/components/ui/Button";

export default function ChangePassword() {



    const [form, setForm] = useState({
        password: "",
        repeatPassword: "",
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updatedForm = { ...form, [name]: value };

        setForm(updatedForm);

        // Only update passwordsMatch logic here
        if (
            name === "password" ||
            name === "repeatPassword"
        ) {
            setPasswordsMatch(updatedForm.password === updatedForm.repeatPassword);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-pa-background px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Change Password
                </h2>
                <form className="space-y-5">

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-black"
                        />
                    </div>

                    <div>
                        <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-700">
                            Repeat Password
                        </label>
                        <input
                            type="password"
                            name="repeatPassword"
                            value={form.repeatPassword}
                            onChange={handleChange}
                            required
                            className={`mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 text-black ${passwordsMatch
                                ? "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100"
                                : "border-red-500 focus:border-red-500 focus:ring-red-100"
                                }`}
                        />
                        {!passwordsMatch && (
                            <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
                        )}
                    </div>

                    <Button
                        disabled={!passwordsMatch}
                        formAction={changePassword}
                        type="submit"
                        variant="secondary" size='md'
                        >
                        Change Password
                    </Button>
                </form>
            </div>
        </div>
    );

}