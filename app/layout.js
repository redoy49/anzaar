import "./globals.css"
import Providers from "./Providers"

export const metadata = {
  title: "My App",
  description: "Next.js App with Products",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
