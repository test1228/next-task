import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-bold">404 - Not Found</h2>
      <p>Could not find the requested page.</p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
