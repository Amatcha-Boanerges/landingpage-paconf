'use client'

import { useState } from 'react';
import { changeEmail } from '@/app/(site)/auth/change-email/actions'

export default function ChangeEmailForm() {


     const [form, setForm] = useState({

    });

        const [emailValid, setEmailValid] = useState(true);
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            const updatedForm = { ...form, [name]: value };
    
            setForm(updatedForm);

    
            if (name === "email") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                setEmailValid(emailRegex.test(value));
            }
        };

    return (
        <div className="flex min-h-screen items-center justify-center bg-pa-background px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Update Email
                </h2>
                <form className="space-y-5">

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            New Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            required
                            className={`mt-1 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 text-black ${emailValid
                                ? "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100"
                                : "border-red-500 focus:border-red-500 focus:ring-red-100"
                                }`}
                        />
                        {!emailValid && (
                            <p className="mt-1 text-sm text-red-600">Enter a valid email address</p>
                        )}
                    </div>

                    <button
                    disabled={!emailValid}
                        formAction={changeEmail}
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Change Email
                    </button>
                </form>
            </div>
        </div>
    );

}