"use client"; 

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-lg mb-6">
        An unexpected error has occurred. Please try again or contact support if the issue persists.
      </p>
      <button
        onClick={() => reset()} // Hata durumunu sıfırlar
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}
