"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-12 text-center">Our Products</h1>

      <div className="grid grid-cols-12 gap-3 lg:gap-5 my-3 lg:my-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col"
          >
            {/* Product Image */}
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={700}
                height={500}
                style={{
                  color: "transparent",
                  aspectRatio: "0.8 / 1",
                  objectFit: "cover",
                }}
                className=""
              />
            </Link>

            {/* Product Name & Price */}
            <div className="flex justify-between items-start gap-2 mt-3">
              <a
                className="text-[#111111] text-xs lg:text-base basis-[70%] truncate"
                href={`/products/${product.id}`}
              >
                {product.name}
              </a>
              <p className="text-[#111111] text-[0.8125rem] lg:text-xl font-medium basis-[23%] text-right">
                ৳{product.price}
              </p>
            </div>
            
            {/* View Details Button */}
            <Link
              href={`/products/${product.id}`}
              className="mt-3 text-center py-2 px-4 transition font-semibold text-[#545454] text-xs sm:text-sm lg:text-base bg-[#E6E7EB] lg:md:px-4 whitespace-nowrap basis-[70%]"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
