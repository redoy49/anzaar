"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products")
      const data = await res.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-bold mt-2">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
