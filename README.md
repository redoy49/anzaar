# 🛍️ Product Showcase (Next.js + API)

A simple product showcase web app built with **Next.js 13**, displaying products from an API with images, prices, and detail pages. Users can browse products and view detailed information on each.

Live Url: https://anzaar.vercel.app/

---

## 🚀 Features

* **Responsive Design**: The product grid and detail pages look great on any device, from desktop to mobile.
* **API-Driven Data**: Product information is fetched from a dedicated API route, demonstrating how to handle data with Next.js.
* **Dynamic Routing**: Each product has its own unique detail page, powered by Next.js's dynamic routes (`/products/[id]`).
* **Optimized Images**: Images are automatically optimized and served via **Next/Image**, improving performance and page load times.
* **Modern Styling**: The UI is styled with **TailwindCSS** for a fast and efficient development experience.

---

## ⚙️ Setup & Installation

Follow these steps to get the project running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/redoy49/anzaar.git
    cd anzaar
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to `http://localhost:3000` to see the application.

---

## 🛣️ Routes Summary

This project uses the Next.js App Router. Here’s a quick overview of the key routes:

| Route | Description |
| :--- | :--- |
| `/` | The homepage, which displays a grid of all available products. |
| `/products` | The dedicated products listing page. |
| `/products/[id]` | A dynamic route that shows the detailed information for a specific product. |
| `/api/products` | The API endpoint that serves a JSON list of all products. |
| `/api/products/[id]` | The API endpoint for fetching a single product's data. |

---

## 🛠️ Tech Stack

* [Next.js 13 (App Router)](https://nextjs.org/)
* [React](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [Next/Image](https://nextjs.org/docs/pages/api-reference/components/image)
