'use client'; // Needed for error.tsx pages

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>Something went wrong!</h1>
          <p>{error.message}</p>
          <button onClick={() => reset()} style={{ padding: '0.5rem 1rem' }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
