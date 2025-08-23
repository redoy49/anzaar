import Link from "next/link"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to MyShop</h1>
      <p className="text-lg mb-6 max-w-xl">
        Discover the best products at unbeatable prices. Simple, fast, and reliable shopping experience.
      </p>
      <div className="space-x-4">
        <Link href="/products" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
          View Products
        </Link>
        <Link href="/login" className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300">
          Login
        </Link>
      </div>
    </section>
  )
}
