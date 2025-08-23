"use client"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <Link href="/" className="font-bold text-lg">MyStore</Link>
        <Link href="/products" className="hover:text-blue-600">Products</Link>
        {session && (
          <Link href="/dashboard/add-product" className="hover:text-blue-600">
            Dashboard
          </Link>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {session ? (
          <>
            <span className="text-gray-700">{session.user?.name || session.user?.email}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}
