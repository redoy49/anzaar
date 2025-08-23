export default function ProductHighlights() {
  const highlights = [
    { title: "High Quality", desc: "All our products are carefully checked for top quality." },
    { title: "Affordable Prices", desc: "We offer the best prices in the market without compromising." },
    { title: "Fast Delivery", desc: "Quick and reliable delivery to your doorstep." },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
