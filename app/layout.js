import "./globals.css"
import Providers from "./Providers"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
