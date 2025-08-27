"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Static Options (edit as you like)
const TYPE_OPTIONS = ["Full Set", "Cover Up", "Inner Abaya"];
const SIZE_OPTIONS = ["Small - 52", "Medium - 54", "Large - 56"];
const COLOR_OPTIONS = [
  { id: "pine-green", name: "Pine Green", hex: "#2CB8A1" },
  { id: "deep-navy", name: "Deep Navy", hex: "#0E1330" },
  { id: "pale-green", name: "Pale Green", hex: "#E6F1EE" },
  { id: "off-white", name: "Off White", hex: "#F3F4F6" },
];

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  // Static selections (local UI state only)
  const [type, setType] = useState(TYPE_OPTIONS[0]);
  const [color, setColor] = useState(COLOR_OPTIONS[0].id);
  const [size, setSize] = useState(SIZE_OPTIONS[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        console.error("Failed to load product", e);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading product...</p>
      </div>
    );
  }

  const dec = () => setQuantity((q) => Math.max(1, q - 1));
  const inc = () => setQuantity((q) => Math.min(99, q + 1));

  const handleAddToCart = () => {
    console.log("Add to cart", {
      productId: product.id,
      quantity,
      type,
      color,
      size,
    });
  };

  const handleBuyNow = () => {
    console.log("Buy now", {
      productId: product.id,
      quantity,
      type,
      color,
      size,
    });
    // router.push(`/checkout?productId=${product.id}&qty=${quantity}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Link
        href="/products"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Product Image */}
        <div className="w-full">
          <div className="bg-white border border-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              width={900}
              height={1200}
              priority
              className="w-full h-auto"
              style={{
                objectFit: "cover",
                aspectRatio: "3 / 4",
                color: "transparent",
              }}
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="lg:sticky lg:top-10">
          <h1 className="text-3xl lg:text-4xl font-semibold text-[#111111]">
            {product.name}
          </h1>

          <div className="mt-2">
            <div className="text-[#111111] text-3xl font-extrabold">
              ৳ {product.price}
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Note: Without Hijab [The fabric color may appear slightly different
            due to camera resolution and various lighting conditions. Certain
            lighting may alter the perceived color of the fabric.]
          </p>

          <div className="border-t border-gray-200 my-6" />

          {/* Type (rounded pills) */}
          <div className="mb-6">
            <div className="text-gray-700 font-medium mb-2">Type</div>
            <div className="flex flex-wrap gap-3">
              {TYPE_OPTIONS.map((t) => {
                const selected = type === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    aria-pressed={selected}
                    className={[
                      "px-6 py-2 rounded-full border text-sm transition select-none",
                      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black",
                      selected
                        ? "bg-slate-900 text-white border border-slate-900 shadow-sm"
                        : "bg-white text-gray-800 border-gray-200 hover:border-gray-300",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color (circular swatches) */}
          <div className="mb-6">
            <div className="text-gray-700 font-medium mb-2">Color</div>
            <div className="flex items-center gap-3">
              {COLOR_OPTIONS.map((c) => {
                const selected = color === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setColor(c.id)}
                    aria-label={c.name}
                    aria-pressed={selected}
                    className={[
                      "relative h-8 w-8 rounded-full flex items-center justify-center border-2 transition",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
                      selected
                        ? "border-slate-500 ring-2 ring-black/10"
                        : "border-gray-200 hover:border-gray-200",
                    ].join(" ")}
                    title={c.name}
                  >
                    <span
                      className="h-6 w-6 rounded-full"
                      style={{ backgroundColor: c.hex }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Size (rounded pills) */}
          <div className="mb-6">
            <div className="text-gray-700 font-medium mb-2">Size</div>
            <div className="flex flex-wrap items-center gap-3">
              {SIZE_OPTIONS.map((s) => {
                const selected = size === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    aria-pressed={selected}
                    className={[
                      "px-4 py-2 rounded-full border text-sm transition select-none",
                      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black",
                      selected
                        ? "bg-white text-black border-slate-600"
                        : "bg-white text-gray-800 border-gray-200 hover:border-gray-300",
                    ].join(" ")}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity + Info */}
          <div className="mb-6">
            <div className="text-gray-700 font-medium mb-2">Quantity</div>
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={dec}
                  className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
                  aria-label="Decrease quantity"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="w-10 text-center font-medium">{quantity}</div>
                <button
                  type="button"
                  onClick={inc}
                  className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
                  aria-label="Increase quantity"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="text-sm text-gray-500">
                110 - Available
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-6" />

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleAddToCart}
              className="bg-[#E6E7EB] rounded-full text-[#545454] py-3 px-6 font-medium hover:bg-[#d8d9de]"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-black rounded-full text-white py-3 px-6 font-semibold hover:bg-gray-900"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
