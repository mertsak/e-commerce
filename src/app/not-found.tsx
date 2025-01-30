import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-lg mb-6">
        We couldn&apos;t find the resource you were looking for. Please check
        the URL or return to the homepage.
      </p>
      <Link href="/">
        <p className="text-blue-500 hover:text-blue-700 underline">
          Return to Homepage
        </p>
      </Link>
    </div>
  );
}
