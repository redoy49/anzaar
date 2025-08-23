"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function ProductDetailsPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    if (id) fetchProduct()
  }, [id])

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading product...</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price}</p>

      <Link
        href="/products"
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        ← Back to Products
      </Link>
    </div>
  )
}
