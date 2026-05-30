import React from "react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import FeaturedProducts from "@/sections/FeaturedProducts";
import WhyChooseUs from "@/sections/WhyChooseUs";
import IngredientStory from "@/sections/IngredientStory";
import JuicePromotion from "@/sections/SuperfoodPromotion";
import Testimonials from "@/sections/Testimonials";
import Newsletter from "@/sections/Newsletter";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FFF8EE]">
      {/* Floating Header */}
      <Navbar />

      {/* Hero Intro */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* The Organic Promise / Why Us */}
      <WhyChooseUs />

      {/* Editorial Ingredient Story */}
      <IngredientStory />

      {/* Juice pack special offer */}
      <JuicePromotion />

      {/* Customer voice reviews */}
      <Testimonials />

      {/* Journal subscription CTA */}
      <Newsletter />

      {/* Site Footer */}
      <Footer />
    </main>
  );
}
