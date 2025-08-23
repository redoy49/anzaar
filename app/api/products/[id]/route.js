import { NextResponse } from "next/server"
import products from "../../../../data/products.json"

export async function GET(request, { params }) {
  const { id } = params
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}
