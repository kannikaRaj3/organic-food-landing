"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const {
    cartItems,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Our Story", href: "#story" },
    { label: "Specials", href: "#specials" },
  ];

  const hasScrolled = scrollPosition > 20;

  return (
    <>
      {/* Navbar Container */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          hasScrolled
            ? "py-3 px-4 md:px-8 mt-2 mx-2 md:mx-6 rounded-full glass-panel shadow-lg shadow-organic-green/5"
            : "py-6 px-6 md:px-12 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Custom Organic Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <svg
              className="h-7 w-7 text-organic-green group-hover:rotate-12 transition-transform duration-300 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.47.16.03.3-.06.3-.22v-1.92c-3.14-.1-4.88-1.78-4.88-4.25 0-2.22 1.39-3.79 3.65-4.26a.5.5 0 0 0 .38-.56C8.16 8.5 9.77 6.9 12 6.9s3.84 1.6 3.71 3.37a.5.5 0 0 0 .38.56c2.26.47 3.65 2.04 3.65 4.26 0 2.47-1.74 4.15-4.88 4.25v1.92c0 .16.14.25.3.22C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10zm.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
            </svg>
            <span className="font-serif text-2xl font-bold tracking-tight text-organic-green">
              Kannu
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-organic-darkGreen/80 hover:text-organic-green transition-colors py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-organic-green group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Search, Cart, CTA area */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search Icon Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 text-organic-darkGreen/80 hover:text-organic-green rounded-full hover:bg-organic-green/5 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart Icon Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-organic-darkGreen/80 hover:text-organic-green rounded-full hover:bg-organic-green/5 transition-colors cursor-pointer"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 bg-organic-coral text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-[#FFF8EE]"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Rounded Shop Button */}
            <Button variant="primary" size="sm" className="hidden sm:inline-flex bg-organic-green hover:bg-organic-darkGreen text-white text-xs">
              Shop Grocery
            </Button>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2.5 text-organic-darkGreen/80 hover:text-organic-green rounded-full hover:bg-organic-green/5 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Slide-in Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-[#FFF8EE] z-50 p-8 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="font-serif text-2xl font-bold tracking-tight text-organic-green">
                    Kannu
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-organic-darkGreen/60 hover:text-organic-green rounded-full border border-organic-green/10"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-semibold text-organic-darkGreen hover:text-organic-green transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-organic-green/10">
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-organic-green hover:bg-organic-darkGreen text-white py-3.5"
                >
                  Shop Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Simulated Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg bg-[#FFF8EE] rounded-3xl p-6 shadow-2xl relative"
            >
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-organic-green/5 text-organic-darkGreen/50 hover:text-organic-green transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="font-serif text-xl font-bold text-organic-green mb-4">Search Kannu Market</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search organic honey, blueberries, almonds..."
                  className="flex-1 px-4 py-3 rounded-full border border-organic-green/20 focus:outline-none focus:border-organic-green bg-white text-sm"
                  autoFocus
                />
                <Button className="bg-organic-green text-white" onClick={() => setIsSearchOpen(false)}>
                  Search
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[420px] max-w-[95vw] bg-[#FFFDF9] z-50 shadow-2xl flex flex-col justify-between"
            >
              {/* Cart Header */}
              <div className="p-6 border-b border-organic-green/5 flex justify-between items-center bg-[#FFF8EE]">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-organic-green" />
                  <h3 className="font-serif text-lg font-bold text-organic-green">Your Basket</h3>
                  <span className="text-xs bg-organic-yellow/30 text-organic-green px-2.5 py-0.5 rounded-full font-bold">
                    {cartCount} {cartCount === 1 ? "item" : "items"}
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-organic-darkGreen/50 hover:text-organic-green rounded-full border border-organic-green/5 bg-white transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Cart List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="h-16 w-16 bg-organic-cream rounded-full flex items-center justify-center mb-4 text-organic-sage">
                      <ShoppingBag className="h-8 w-8" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-organic-green mb-1">Your cart is empty</h4>
                    <p className="text-xs text-organic-darkGreen/60 max-w-[240px]">
                      Add some premium farm-fresh items to get started on your healthy journey.
                    </p>
                    <Button
                      onClick={() => setIsCartOpen(false)}
                      variant="outline"
                      className="mt-6 text-xs"
                    >
                      Browse Products
                    </Button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={item.id}
                      className="flex items-center gap-4 bg-organic-cream/35 p-3 rounded-2xl border border-organic-green/5"
                    >
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-organic-cream flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-sans text-sm font-bold text-organic-green truncate">
                          {item.name}
                        </h4>
                        <div className="text-xs text-organic-darkGreen/80 mt-0.5">
                          ${item.price} each
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2.5 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-6 w-6 rounded-full border border-organic-green/10 flex items-center justify-center hover:bg-white text-organic-darkGreen transition-colors cursor-pointer"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-xs font-bold text-organic-green">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-6 w-6 rounded-full border border-organic-green/10 flex items-center justify-center hover:bg-white text-organic-darkGreen transition-colors cursor-pointer"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3 justify-between">
                        <span className="text-sm font-extrabold text-organic-green">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-organic-coral hover:text-red-700 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-organic-green/5 bg-[#FFF8EE] space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-organic-darkGreen/60">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-organic-darkGreen/60">
                      <span>Eco-Delivery</span>
                      <span className="text-organic-sage">FREE</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-organic-green pt-2 border-t border-organic-green/5">
                      <span>Estimated Total</span>
                      <span className="text-lg font-extrabold">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-organic-green hover:bg-organic-darkGreen text-white py-3.5 rounded-full flex items-center justify-center gap-2 group font-semibold shadow-md">
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="text-center">
                    <span className="text-[10px] text-organic-darkGreen/40 font-medium">
                      🔒 Secured organic transactional checkout by Kannu
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
