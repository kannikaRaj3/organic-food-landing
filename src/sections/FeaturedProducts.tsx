"use client";

import React, { useState } from "react";
import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/ui/product-card";
import SectionTitle from "@/components/ui/section-title";
import AnimatedReveal from "@/components/ui/animated-reveal";

export const FeaturedProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Fruits", "Vegetables", "Pantry", "Bakery"];

  const filteredProducts = activeCategory === "All"
    ? featuredProducts
    : featuredProducts.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedReveal direction="up" delay={0.1}>
          <SectionTitle
            subtitle="Our Harvest"
            title="Featured Organic Goods"
            description="Explore our handpicked premium selection of organic essentials. Direct from eco-certified farms, harvested at peak maturity, and delivered fresh."
            align="center"
            className="mb-12"
          />
        </AnimatedReveal>

        {/* Categories Tab Selector */}
        <AnimatedReveal direction="up" delay={0.2} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-organic-green text-[#FFF8EE] shadow-md shadow-organic-green/10"
                    : "bg-[#FFFDF9] text-organic-darkGreen/70 hover:text-organic-green border border-organic-green/5 hover:border-organic-green/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <AnimatedReveal
              key={product.id}
              direction="up"
              delay={idx * 0.05}
              className="flex"
            >
              <ProductCard product={product} />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
