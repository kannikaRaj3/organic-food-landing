"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Star, ShoppingBag, Heart, ArrowLeft, X, ChevronDown } from "lucide-react";
import { pantryProducts, pantryCategories } from "@/data/pantry-products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

const ITEMS_PER_PAGE = 12;

type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "name";

export default function PantryPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 4000]);
  const [showFilters, setShowFilters] = useState(false);

  const sortLabels: Record<SortOption, string> = {
    featured: "Featured",
    "price-asc": "Price: Low to High",
    "price-desc": "Price: High to Low",
    rating: "Top Rated",
    name: "Name A–Z",
  };

  const filtered = useMemo(() => {
    let result = pantryProducts;
    if (activeCategory !== "All") result = result.filter((p) => p.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sortBy) {
      case "price-asc": return [...result].sort((a, b) => a.price - b.price);
      case "price-desc": return [...result].sort((a, b) => b.price - a.price);
      case "rating": return [...result].sort((a, b) => b.rating - a.rating);
      case "name": return [...result].sort((a, b) => a.name.localeCompare(b.name));
      default: return result;
    }
  }, [activeCategory, searchQuery, sortBy, priceRange]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => { setActiveCategory(cat); setCurrentPage(1); };
  const handleSearch = (q: string) => { setSearchQuery(q); setCurrentPage(1); };
  const toggleFav = (id: string) => setFavorites((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <main className="min-h-screen bg-[#FFF8EE]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 bg-gradient-to-br from-[#1E2F20] via-[#2E4731] to-[#3a5c3e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {["/images/almonds.png", "/images/cashews.png", "/images/walnuts.png", "/images/apricots.png"].map((src, i) => (
            <div key={i} className="absolute w-40 h-40 rounded-full overflow-hidden opacity-40" style={{ top: `${[10, 60, 20, 70][i]}%`, left: `${[5, 80, 50, 15][i]}%`, transform: "translate(-50%,-50%)" }}>
              <Image src={src} alt="" fill className="object-cover blur-sm" sizes="160px" />
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-organic-yellow/80 hover:text-organic-yellow text-xs font-semibold mb-6 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
          <div className="max-w-2xl">
            <span className="inline-block bg-organic-yellow/20 text-organic-yellow text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Full Pantry — {pantryProducts.length}+ Products
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-white leading-tight mb-4">
              The Kannu<br /><span className="text-organic-yellow italic font-light">Dry Fruit Pantry</span>
            </h1>
            <p className="text-organic-cream/70 text-sm leading-relaxed mb-8 max-w-lg">
              Browse our complete collection of premium organic dry fruits, nuts, seeds, and curated mixes — sourced from certified farms across India and the world.
            </p>
            {/* Search Bar */}
            <div className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-organic-darkGreen/50" />
              <input
                id="pantry-search"
                type="text"
                placeholder="Search almonds, dates, chia seeds…"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-11 pr-10 py-3.5 rounded-full bg-white text-organic-darkGreen text-sm focus:outline-none focus:ring-2 focus:ring-organic-yellow shadow-lg placeholder:text-organic-darkGreen/40"
              />
              {searchQuery && (
                <button onClick={() => handleSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-organic-darkGreen/40 hover:text-organic-darkGreen">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Controls Row */}
      <div className="sticky top-0 z-30 bg-[#FFF8EE]/95 backdrop-blur-sm border-b border-organic-green/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {pantryCategories.map((cat) => (
              <button
                key={cat}
                id={`cat-${cat.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => handleCategoryChange(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-organic-green text-white shadow-md"
                    : "bg-white text-organic-darkGreen/70 border border-organic-green/10 hover:border-organic-green/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Result count */}
            <span className="text-xs text-organic-darkGreen/50 hidden sm:block">{filtered.length} products</span>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                id="sort-btn"
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 text-xs font-semibold text-organic-darkGreen/80 bg-white border border-organic-green/10 px-4 py-2 rounded-full hover:border-organic-green/30 transition-all cursor-pointer"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                {sortLabels[sortBy]}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showSortMenu ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {showSortMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-organic-green/5 p-1.5 min-w-[180px] z-50"
                  >
                    {(Object.entries(sortLabels) as [SortOption, string][]).map(([val, label]) => (
                      <button
                        key={val}
                        onClick={() => { setSortBy(val); setShowSortMenu(false); setCurrentPage(1); }}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${sortBy === val ? "bg-organic-green/10 text-organic-green font-bold" : "text-organic-darkGreen/70 hover:bg-organic-cream/50"}`}
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Price Range Filter */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <span className="text-xs font-semibold text-organic-darkGreen/60 uppercase tracking-wider">Price Range:</span>
          {[[0, 500], [500, 1000], [1000, 2000], [2000, 4000]].map(([min, max]) => (
            <button
              key={`${min}-${max}`}
              onClick={() => { setPriceRange([min, max]); setCurrentPage(1); }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                priceRange[0] === min && priceRange[1] === max
                  ? "bg-organic-yellow text-organic-darkGreen border-organic-yellow"
                  : "bg-white text-organic-darkGreen/70 border-organic-green/10 hover:border-organic-green/30"
              }`}
            >
              ₹{min.toLocaleString("en-IN")} – ₹{max.toLocaleString("en-IN")}
            </button>
          ))}
          {(priceRange[0] !== 0 || priceRange[1] !== 4000) && (
            <button onClick={() => { setPriceRange([0, 4000]); setCurrentPage(1); }} className="text-xs text-organic-coral hover:underline cursor-pointer">Clear</button>
          )}
        </div>

        {/* Products Grid */}
        {paginated.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-serif text-xl font-bold text-organic-green mb-2">No products found</h3>
            <p className="text-sm text-organic-darkGreen/60">Try adjusting your filters or search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {paginated.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-[1.75rem] p-4 border border-organic-green/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Top badges */}
                  <div className="flex justify-between items-start mb-3">
                    <div>{product.badge && <span className="bg-organic-yellow text-organic-darkGreen text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">{product.badge}</span>}</div>
                    <button id={`fav-${product.id}`} onClick={() => toggleFav(product.id)} className="h-8 w-8 rounded-full bg-organic-cream/60 hover:bg-organic-cream flex items-center justify-center transition-colors cursor-pointer">
                      <Heart className={`h-3.5 w-3.5 transition-all ${favorites.has(product.id) ? "fill-rose-500 text-rose-500" : "text-organic-darkGreen/50"}`} />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-organic-cream/40 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-organic-sage">{product.category}</span>
                      <div className="flex items-center gap-0.5">
                        <Star className="h-3 w-3 fill-organic-yellow text-organic-yellow" />
                        <span className="text-[11px] font-bold text-organic-darkGreen">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-organic-green leading-snug mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-[11px] text-organic-darkGreen/60 leading-relaxed line-clamp-2 mb-4 flex-1">{product.description}</p>

                    {/* Price + Add to cart */}
                    <div className="flex items-center justify-between pt-3 border-t border-organic-green/5">
                      <div>
                        <div className="text-lg font-extrabold text-organic-green">₹{product.price.toLocaleString("en-IN")}</div>
                        <div className="text-[10px] text-organic-darkGreen/50">per {product.unit}</div>
                      </div>
                      <button
                        id={`add-${product.id}`}
                        onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                        className="h-9 w-9 rounded-full bg-organic-green hover:bg-organic-darkGreen text-white flex items-center justify-center shadow-sm transition-colors cursor-pointer"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full text-xs font-semibold border border-organic-green/20 text-organic-darkGreen/70 hover:border-organic-green/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-9 w-9 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentPage === page
                    ? "bg-organic-green text-white shadow-md"
                    : "border border-organic-green/20 text-organic-darkGreen/70 hover:border-organic-green/50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full text-xs font-semibold border border-organic-green/20 text-organic-darkGreen/70 hover:border-organic-green/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
