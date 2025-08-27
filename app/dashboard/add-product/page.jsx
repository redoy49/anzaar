"use client";

import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading")
    return <p className="text-center mt-10">Checking authentication...</p>;
  if (!session) return null;

  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const priceNumber = useMemo(() => {
    const n = Number(price);
    return Number.isFinite(n) ? n : NaN;
  }, [price]);

  const isValid =
    name.trim().length > 0 &&
    description.trim().length > 0 &&
    !Number.isNaN(priceNumber) &&
    priceNumber >= 0 &&
    imageUrl.trim().length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
          price: priceNumber, // ensure numeric in DB
          image: imageUrl.trim(),
        }),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        router.push("/products");
      } else {
        const err = await res.json().catch(() => ({}));
        toast.error(err?.message || "Failed to add product");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Left: Image preview */}
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <div className="mt-4">
            <div className="text-sm text-gray-500 mb-2">Preview</div>
            <div className="w-full border rounded-md overflow-hidden bg-gray-50">
              {imageUrl ? (
                // Using img for simplicity; your details page uses next/image which will consume this URL
                <img
                  src={imageUrl}
                  alt={name || "Product preview"}
                  className="w-full h-auto"
                  style={{ objectFit: "cover", aspectRatio: "3 / 4" }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;charset=UTF-8," +
                      encodeURIComponent(
                        `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='800'><rect width='100%' height='100%' fill='#f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-size='20'>Image failed to load</text></svg>`
                      );
                  }}
                />
              ) : (
                <div
                  className="flex items-center justify-center text-gray-400"
                  style={{ aspectRatio: "3 / 4" }}
                >
                  Paste an image URL to preview
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Tip: Use a 3:4 image for best fit (e.g., 900×1200).
            </p>
          </div>
        </div>

        {/* Right: Fields */}
        <div className="space-y-4 bg-white border rounded-lg p-6 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Rehma Cover up"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Write a concise description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={6}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <p className="text-xs text-gray-500 mt-1">
              Include fabric, care, and any notes (e.g., “Without Hijab”).
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (৳)
            </label>
            <input
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0"
              placeholder="3290"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
              disabled={loading || !isValid}
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
            <button
              type="button"
              onClick={() => {
                setName("");
                setDescription("");
                setPrice("");
                setImageUrl("");
              }}
              className="w-full mt-2 bg-gray-100 text-gray-700 py-2.5 rounded-md hover:bg-gray-200"
              disabled={loading}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
