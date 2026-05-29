"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedReveal from "@/components/ui/animated-reveal";

interface BottleProps {
  type: "orange" | "mango" | "green";
  title: string;
  subtitle: string;
  gradient: string;
  delay: number;
  yOffset: number[];
}

const JuiceBottle: React.FC<BottleProps> = ({
  type,
  title,
  subtitle,
  gradient,
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
      {/* Bottle Cap */}
      <div className="w-8 h-3.5 bg-organic-green rounded-t-sm shadow-sm z-10 border-b border-organic-green/20" />
      
      {/* Bottle Neck */}
      <div className="w-6 h-7 bg-white/20 backdrop-blur-[1px] relative border-x border-white/10 z-10">
        <div className="absolute inset-y-0 left-1 w-1 bg-white/10" />
      </div>

      {/* Bottle Body */}
      <div className={`w-24 h-56 rounded-t-3xl rounded-b-[2rem] bg-gradient-to-b ${gradient} relative shadow-lg group-hover:shadow-2xl transition-shadow duration-500 overflow-hidden flex flex-col justify-center items-center`}>
        {/* Glass Reflection Highlight */}
        <div className="absolute top-2 left-3 bottom-2 w-2 bg-white/15 rounded-full filter blur-[1px] pointer-events-none" />
        <div className="absolute top-2 right-4 bottom-2 w-1.5 bg-black/5 rounded-full filter blur-[0.5px] pointer-events-none" />

        {/* Minimalist Label */}
        <div className="w-18 h-28 bg-[#FFFDF9]/95 rounded-xl border border-organic-green/5 shadow-sm p-2 flex flex-col justify-between items-center text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-[10px] tracking-wider text-organic-sage uppercase font-bold">Kannu</span>
            <div className="h-0.5 w-4 bg-organic-sage/40 my-1" />
          </div>
          <div>
            <h5 className="font-serif text-xs font-black text-organic-green tracking-tight leading-none mb-0.5">
              {title}
            </h5>
            <span className="text-[7px] font-semibold text-organic-darkGreen/50 uppercase tracking-widest block scale-90">
              {subtitle}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-0.5 w-4 bg-organic-sage/40 my-1" />
            <span className="text-[6px] text-organic-green/60 font-bold uppercase tracking-wider">Raw Elixir</span>
          </div>
        </div>
      </div>

      {/* Shadow under bottle */}
      <div className="w-16 h-2 bg-black/5 blur-[2px] rounded-full mt-4 group-hover:scale-110 transition-transform duration-500" />
    </motion.div>
  );
};

export const JuicePromotion: React.FC = () => {
  return (
    <section id="specials" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Promotional Main Card */}
        <div className="relative w-full rounded-[3.5rem] bg-gradient-to-br from-[#1E2F20] to-[#2E4731] border border-white/5 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Background overlay details */}
          <div className="absolute top-[-30%] right-[-10%] w-96 h-96 rounded-full bg-organic-sage/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-72 h-72 rounded-full bg-organic-yellow/5 blur-3xl pointer-events-none" />
          
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
              <h3 className="text-3xl sm:text-5xl font-black font-serif tracking-tight leading-[1.1] mb-6">
                Cold-Pressed <br />
                Organic Juice Elixirs
              </h3>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.3}>
              <p className="text-xs sm:text-sm text-organic-cream/80 max-w-md leading-relaxed mb-8">
                Raw, unpasteurized fruit and botanical blends. Cold-pressed using 10 tons of pressure, 
                retaining 100% of organic enzymes and live minerals. No added sugars, preservatives, or water.
              </p>
            </AnimatedReveal>

            {/* Discount promo and CTA */}
            <AnimatedReveal direction="right" delay={0.4} className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-organic-yellow font-bold">Introductory Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black">$18.90</span>
                  <span className="text-xs text-organic-cream/50 line-through">$24.99</span>
                  <span className="text-xs text-organic-yellow/90 font-bold">(25% Off)</span>
                </div>
                <span className="text-[9px] text-organic-cream/40 mt-1">Includes 3 x 12 oz botanical blends</span>
              </div>

              <Button
                variant="yellow"
                size="lg"
                className="bg-organic-yellow hover:bg-[#E9B127] text-organic-darkGreen rounded-full flex items-center gap-2 group font-semibold shadow-md shadow-organic-yellow/10"
              >
                Order Juice Pack
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AnimatedReveal>
          </div>

          {/* Right Juice Bottles Composition */}
          <div className="lg:col-span-6 flex justify-center items-center gap-4 sm:gap-8 min-h-[320px] relative z-10">
            {/* Orange Juice */}
            <JuiceBottle
              type="orange"
              title="SWEET ORANGE"
              subtitle="Tangerine + Turmeric"
              gradient="from-orange-400 via-amber-500 to-orange-600"
              delay={0}
              yOffset={[0, -12, 0]}
            />

            {/* Mango Juice */}
            <JuiceBottle
              type="mango"
              title="MANGO BLISS"
              subtitle="Ginger + Carrot"
              gradient="from-yellow-400 via-orange-400 to-amber-600"
              delay={1}
              yOffset={[-10, 2, -10]}
            />

            {/* Green Detox */}
            <JuiceBottle
              type="green"
              title="GREEN DETOX"
              subtitle="Kale + Celery + Apple"
              gradient="from-emerald-400 via-teal-500 to-emerald-600"
              delay={0.5}
              yOffset={[4, -8, 4]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default JuicePromotion;
