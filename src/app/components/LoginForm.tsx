"use client";

import { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const login = () => {
        console.log(username, password, keepLoggedIn);
    }

    return (
        <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={(e) => {
            e.preventDefault();
            login();
        }}>
            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                    Username
                </label>

                <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                    Password
                </label>

                <input
                    type="password"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                        onChange={(e) => setKeepLoggedIn(e.target.checked)}
                    />

                    <span
                        className="text-sm text-gray-700 dark:text-gray-200"
                    >
                        Keep me logged in.
                    </span>
                </label>
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                >
                    Go!
                </button>
            </div>
        </form>
    )
}

export default LoginForm;