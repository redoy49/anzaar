import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-6"
      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)"
      }}
    >
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Welcome to MyShop
      </h1>
      <p className="text-lg mb-8 max-w-xl">
        Discover the best products at unbeatable prices. Simple, fast, and reliable shopping experience.
      </p>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        {/* Primary Button */}
        <Link href="/products">
          <button className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out flex items-center gap-2">
            Try for Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              ></path>
            </svg>
          </button>
        </Link>

        {/* Secondary Button */}
        <Link href="/login">
          <button className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full border border-gray-300 shadow-sm hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 ease-in-out">
            Download Now
          </button>
        </Link>
      </div>
    </section>
  )
}
