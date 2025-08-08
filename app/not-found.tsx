"use client";

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
          Page not found
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Go back home
          </Link>
          <Link
            href="/reviews"
            className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition"
          >
            Browse reviews
          </Link>
        </div>
      </div>
    </div>
  );
}