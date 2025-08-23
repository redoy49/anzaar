import { NextResponse } from "next/server"
import products from "../../../data/products.json"

// In-memory product list (not persistent, resets on server restart)
let productList = [...products]

export async function GET() {
  return NextResponse.json(productList)
}

export async function POST(req) {
  const body = await req.json()
  const newProduct = {
    id: productList.length + 1,
    name: body.name,
    description: body.description,
    price: parseFloat(body.price),
  }

  productList.push(newProduct)
  return NextResponse.json(newProduct, { status: 201 })
}
