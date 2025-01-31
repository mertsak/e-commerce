"use client";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();

  return (
    <div className="max-w-md mx-auto p-6 bg-green-100 shadow-md rounded-md mt-10 text-center">
      <h2 className="text-xl font-bold text-green-700">Payment Successful!</h2>
      <p className="text-gray-700 mt-2">Your order has been received.</p>
      <button
        onClick={() => router.push("/")}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Return to Home Page
      </button>
    </div>
  );
};

export default Success;
