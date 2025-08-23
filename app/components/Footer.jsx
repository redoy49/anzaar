export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <p className="text-sm">Built with Next.js & Tailwind</p>
      </div>
    </footer>
  )
}
