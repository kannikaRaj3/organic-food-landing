import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VÉRT | Premium Organic Food & Grocery Marketplace",
  description: "Experience organic luxury. VÉRT delivers fresh, handcrafted organic foods, artisanal breads, and farm-fresh ingredients straight to your door.",
  keywords: "organic food, luxury grocery, healthy marketplace, fresh vegetables, organic berries, farm fresh delivery, artisan sourdough",
  openGraph: {
    title: "VÉRT | Premium Organic Food & Grocery Marketplace",
    description: "Experience organic luxury. VÉRT delivers fresh, handcrafted organic foods, artisanal breads, and farm-fresh ingredients straight to your door.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased text-organic-darkGreen font-sans`}
      >
        <CartProvider>
          <div className="grain-texture" aria-hidden="true" />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
