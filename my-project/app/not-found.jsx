import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/Error-page.png')] text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8 bg-white bg-opacity-80 p-4 rounded">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/" className="bg-blue-600 rounded-md">
        <span className="text-white hover:underline text-lg  bg-opacity-80 p-2 rounded">
          Go back to the homepage
        </span>
      </Link>
    </div>
  );
}
