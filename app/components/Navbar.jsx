"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white border-b-1 border-slate-200  py-3 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="anzaar.png"
            alt="Logo"
            className="w-16 h-12 object-contain"
          />
        </Link>
      </div>

      {/* Links */}
      <div className="flex items-center space-x-4">
        <Link
          href="/products"
          className="text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200"
        >
          Products
        </Link>

        {session && (
          <Link
            href="/dashboard/add-product"
            className="text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200"
          >
            Dashboard
          </Link>
        )}

        {session ? (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Sign Out
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
