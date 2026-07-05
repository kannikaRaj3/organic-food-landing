"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Gift, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedReveal from "@/components/ui/animated-reveal";
import { useCart } from "@/context/CartContext";

const giftItems = [
  { src: "/images/almonds.png", alt: "Almonds", label: "Almonds", delay: 0, offset: [0, -14, 0] as number[] },
  { src: "/images/cashews.png", alt: "Cashews", label: "Cashews", delay: 0.5, offset: [-10, 4, -10] as number[] },
  { src: "/images/apricots.png", alt: "Apricots", label: "Apricots", delay: 1, offset: [6, -10, 6] as number[] },
  { src: "/images/walnuts.png", alt: "Walnuts", label: "Walnuts", delay: 1.5, offset: [0, 12, 0] as number[] },
];

export const GiftBoxPromotion: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section id="specials" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Promotional Main Card */}
        <div className="relative w-full rounded-[3.5rem] bg-gradient-to-br from-[#1E2F20] to-[#2E4731] border border-white/5 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Background overlay details */}
          <div className="absolute top-[-30%] right-[-10%] w-96 h-96 rounded-full bg-organic-sage/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-72 h-72 rounded-full bg-organic-yellow/5 blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="lg:col-span-6 z-10 text-organic-cream">
            <AnimatedReveal direction="right" delay={0.1}>
              <div className="inline-flex items-center gap-1.5 bg-organic-yellow text-organic-darkGreen text-[10px] uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
                <Gift className="h-3 w-3 fill-current" />
                <span>Premium Gift Collection</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.2}>
              <h3 className="text-3xl sm:text-5xl font-black font-serif tracking-tight leading-[1.1] mb-6">
                The Kannu<br />
                Royal Gift Box
              </h3>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.3}>
              <p className="text-xs sm:text-sm text-organic-cream/80 max-w-md leading-relaxed mb-4">
                A curated premium selection of our finest organic dry fruits, nuts, and seeds — beautifully
                gift-packaged in an eco-friendly wooden box. Perfect for festivals, celebrations, and corporate gifting.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Almonds 100g", "Cashews 100g", "Pistachios 75g", "Walnuts 75g", "Apricots 100g", "Figs 50g"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-[10px] text-organic-cream/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    <Leaf className="h-2.5 w-2.5 text-organic-yellow" /> {item}
                  </span>
                ))}
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.4} className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-organic-yellow font-bold">Special Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black">₹2,499</span>
                  <span className="text-xs text-organic-cream/50 line-through">₹3,299</span>
                  <span className="text-xs text-organic-yellow/90 font-bold">(24% Off)</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-organic-yellow text-organic-yellow" />)}
                  <span className="text-[9px] text-organic-cream/50 ml-1">4.9 · 312 reviews</span>
                </div>
              </div>

              <Button
                variant="yellow"
                size="lg"
                className="bg-organic-yellow hover:bg-[#E9B127] text-organic-darkGreen rounded-full flex items-center gap-2 group font-semibold shadow-md shadow-organic-yellow/10"
                onClick={() => addToCart({ id: "gift-box-royal", name: "Kannu Royal Gift Box", price: 2499, image: "/images/almonds.png" })}
              >
                Add Gift Box to Cart
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AnimatedReveal>
          </div>

          {/* Right — floating product images */}
          <div className="lg:col-span-6 flex justify-center items-center min-h-[320px] relative z-10">
            {/* Gift box backdrop circle */}
            <div className="absolute w-52 h-52 rounded-full bg-organic-yellow/10 border border-organic-yellow/20 blur-sm" />

            {giftItems.map((item, i) => {
              const positions = [
                "top-[5%] left-[15%]",
                "top-[5%] right-[10%]",
                "bottom-[5%] left-[10%]",
                "bottom-[5%] right-[15%]",
              ];
              return (
                <motion.div
                  key={item.alt}
                  animate={{ y: item.offset }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
                  className={`absolute ${positions[i]} flex flex-col items-center gap-1`}
                >
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl">
                    <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="96px" />
                  </div>
                  <span className="text-[9px] text-organic-cream/60 font-semibold uppercase tracking-wider">{item.label}</span>
                </motion.div>
              );
            })}

            {/* Central gift label */}
            <div className="relative z-10 flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-3xl px-6 py-5 border border-white/10">
              <Gift className="h-8 w-8 text-organic-yellow mb-2" />
              <span className="text-white font-serif font-bold text-lg leading-tight">Royal<br/>Gift Box</span>
              <span className="text-[9px] text-organic-yellow/80 font-bold uppercase tracking-widest mt-1">500g Premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GiftBoxPromotion;