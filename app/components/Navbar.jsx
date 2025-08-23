import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyShop
        </Link>

        {/* Nav Links */}
        <div className="space-x-6">
          <Link href="/products" className="hover:text-blue-500">Products</Link>
          <Link href="/login" className="hover:text-blue-500">Login</Link>
        </div>
      </div>
    </nav>
  )
}
