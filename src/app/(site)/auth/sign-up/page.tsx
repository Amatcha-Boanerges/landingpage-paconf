"use client";

import { useState } from "react";

import { signup } from './actions'

export default function SignUpPage() {

    const [form, setForm] = useState({
        password: "",
        repeatPassword: "",
    });

    const [emailValid, setEmailValid] = useState(true);
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

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailValid(emailRegex.test(value));
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-pa-background px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Create your account
                </h2>
                <form className="space-y-5">

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
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

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
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

                    <button
                        disabled={!passwordsMatch || !emailValid}
                        formAction={signup}
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/auth/login" className="text-indigo-600 hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );

}