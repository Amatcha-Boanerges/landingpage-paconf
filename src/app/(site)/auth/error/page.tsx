'use client'

import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  return (

    <div className="min-h-screen bg-pa-background flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md space-y-4">
        <h1 className=" text-center text-2xl font-bold text-gray-800">Error</h1>
        <div className=" text-center space-y-2 text-gray-700">
          <p>There was an error</p>
          <p>Please try again later</p>
          {code && (
            <p className="mt-1 text-sm text-red-600">Error Code: {code}</p>
          )}

        </div>
      </div>
    </div>

  );
}