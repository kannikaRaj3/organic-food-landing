"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedReveal from "@/components/ui/animated-reveal";

interface JarProps {
  title: string;
  subtitle: string;
  image: string;
  delay: number;
  yOffset: number[];
}

const SuperfoodJar: React.FC<JarProps> = ({
  title,
  subtitle,
  image,
  delay,
  yOffset,
}) => {
  return (
    <motion.div
      animate={{ y: yOffset }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className="relative group cursor-pointer flex flex-col items-center select-none"
    >
      {/* Jar Lid */}
      <div className="w-16 h-3 bg-organic-darkGreen rounded-t-md shadow-sm z-10 border-b border-white/10" />
      
      {/* Jar Body */}
      <div className="w-28 h-40 bg-white/10 backdrop-blur-sm rounded-b-2xl relative shadow-lg group-hover:shadow-2xl transition-shadow duration-500 overflow-hidden border border-white/20 flex flex-col items-center p-1">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="112px"
          />
          {/* Label */}
          <div className="absolute inset-x-2 bottom-4 bg-[#FFFDF9]/90 backdrop-blur-sm rounded-lg p-2 border border-organic-green/5 shadow-sm text-center">
            <h5 className="font-serif text-[9px] font-black text-organic-green tracking-tight leading-none mb-0.5">
              {title}
            </h5>
            <span className="text-[6px] font-bold text-organic-darkGreen/60 uppercase tracking-widest block">
              {subtitle}
            </span>
          </div>
        </div>
      </div>

      {/* Shadow under jar */}
      <div className="w-20 h-2.5 bg-black/10 blur-[3px] rounded-full mt-4 group-hover:scale-110 transition-transform duration-500" />
    </motion.div>
  );
};

export const SuperfoodPromotion: React.FC = () => {
  return (
    <section id="specials" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Promotional Main Card */}
        <div className="relative w-full rounded-[3.5rem] bg-gradient-to-br from-[#2D1B0D] to-[#452B18] border border-white/5 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Background overlay details */}
          <div className="absolute top-[-30%] right-[-10%] w-96 h-96 rounded-full bg-organic-yellow/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-72 h-72 rounded-full bg-[#E9B127]/5 blur-3xl pointer-events-none" />
          
          {/* Left Text details */}
          <div className="lg:col-span-6 z-10 text-organic-cream">
            <AnimatedReveal direction="right" delay={0.1}>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 bg-organic-yellow text-organic-darkGreen text-[10px] uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
                <Leaf className="h-3 w-3 fill-current" />
                <span>Special Introductory Pack</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.2}>
              <h3 className="text-3xl sm:text-5xl font-black font-serif tracking-tight leading-[1.1] mb-6 text-white">
                Premium Organic <br />
                Superfood Jars
              </h3>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.3}>
              <p className="text-xs sm:text-sm text-organic-cream/80 max-w-md leading-relaxed mb-8">
                Curated selections of slow-roasted nuts and sun-dried fruits. Packed in airtight 
                eco-friendly glass jars to preserve maximum crispness, oils, and natural vital nutrients.
              </p>
            </AnimatedReveal>

            {/* Discount promo and CTA */}
            <AnimatedReveal direction="right" delay={0.4} className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-organic-yellow font-bold">Introductory Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">$24.50</span>
                  <span className="text-xs text-organic-cream/50 line-through">$32.99</span>
                  <span className="text-xs text-organic-yellow/90 font-bold">(25% Off)</span>
                </div>
                <span className="text-[9px] text-organic-cream/40 mt-1">Includes 3 x 12 oz artisanal jars</span>
              </div>

              <Button
                variant="yellow"
                size="lg"
                className="bg-organic-yellow hover:bg-[#E9B127] text-organic-darkGreen rounded-full flex items-center gap-2 group font-semibold shadow-md shadow-organic-yellow/10"
              >
                Order Superfood Pack
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AnimatedReveal>
          </div>

          {/* Right Jars Composition */}
          <div className="lg:col-span-6 flex justify-center items-center gap-4 sm:gap-6 min-h-[320px] relative z-10">
            {/* Almond Jar */}
            <SuperfoodJar
              title="ROASTED ALMOND"
              subtitle="California Gold"
              image="https://images.unsplash.com/photo-1508815122820-2215947cc21c?q=80&w=400&auto=format&fit=crop"
              delay={0}
              yOffset={[0, -12, 0]}
            />

            {/* Cashew Jar */}
            <SuperfoodJar
              title="JUMBO CASHEW"
              subtitle="Vietnam Prime"
              image="https://images.unsplash.com/photo-1509070016581-915335451d79?q=80&w=400&auto=format&fit=crop"
              delay={1}
              yOffset={[-10, 2, -10]}
            />

            {/* Pistachio Jar */}
            <SuperfoodJar
              title="SALTED PISTACHIO"
              subtitle="Aegean Harvest"
              image="https://images.unsplash.com/photo-1527324688151-0e627063f2b1?q=80&w=400&auto=format&fit=crop"
              delay={0.5}
              yOffset={[4, -8, 4]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SuperfoodPromotion;
