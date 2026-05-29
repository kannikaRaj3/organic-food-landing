"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  // Animation configurations
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#F6C63B] via-[#F8CD4B] to-[#F1B92D]"
    >
      {/* Background blobs for depth */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#E9B127]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FFF8EE]/20 blur-3xl pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left text column */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col justify-center text-organic-darkGreen text-left"
        >
          {/* Badge */}
          <motion.div
            variants={textItemVariants}
            className="inline-flex items-center gap-1.5 self-start bg-organic-green text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm mb-6"
          >
            <Leaf className="h-3.5 w-3.5 fill-current text-organic-yellow" />
            <span>100% Certified Organic grocery marketplace</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={textItemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 font-serif"
          >
            Fresh Organic <br />
            Food Delivered <br />
            <span className="text-organic-green font-light italic">To Your Door</span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            variants={textItemVariants}
            className="text-sm md:text-base text-organic-darkGreen/85 max-w-lg mb-8 leading-relaxed"
          >
            Sourced directly from certified family farms. Experience gourmet local ingredients, 
            artisan bakery loaves, and sun-ripened berries with eco-friendly express courier delivery.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={textItemVariants}
            className="flex flex-wrap gap-4 items-center"
          >
            <Button
              variant="primary"
              size="lg"
              className="bg-organic-green hover:bg-organic-darkGreen text-white rounded-full flex items-center gap-2 group shadow-lg"
              onClick={() => {
                const element = document.getElementById("products");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Shop Now
              <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="glass"
              size="lg"
              className="rounded-full flex items-center gap-2 font-medium"
            >
              <div className="h-6 w-6 rounded-full bg-organic-green/10 flex items-center justify-center text-organic-green">
                <Play className="h-3 w-3 fill-current" />
              </div>
              Explore Menu
            </Button>
          </motion.div>
        </motion.div>

        {/* Right image column */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[550px] w-full">
          
          {/* Soft back glow */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[250px] sm:h-[350px] w-[250px] sm:w-[350px] rounded-full bg-[#FFF8EE]/40 blur-3xl pointer-events-none"
          />

          {/* Central Bowl of Berries */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative z-10 w-[240px] sm:w-[340px] lg:w-[390px] aspect-square rounded-full overflow-hidden shadow-2xl shadow-black/15 border-4 border-[#FFF8EE]"
          >
            <Image
              src="https://images.unsplash.com/photo-1554313511-8951239aa64b?q=80&w=800&auto=format&fit=crop"
              alt="Premium Bowl of Organic Berries and Fruits"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 340px, 390px"
            />
          </motion.div>

          {/* FLOATING DECORATIONS */}
          
          {/* Floating Raspberry - Top Left */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              x: [0, 8, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[12%] left-[10%] z-20 w-16 h-16 pointer-events-none"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=200&auto=format&fit=crop"
                alt="Floating Strawberry slice"
                fill
                priority
                className="object-cover"
                sizes="64px"
              />
            </div>
          </motion.div>

          {/* Floating Orange - Middle Right */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[28%] right-[5%] z-20 w-20 h-20 pointer-events-none"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=200&auto=format&fit=crop"
                alt="Floating Citrus Slice"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          </motion.div>

          {/* Floating Blueberry - Bottom Left */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              x: [0, 12, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[8%] z-20 w-10 h-10 bg-[#3F5485] rounded-full border border-white/20 shadow-sm flex items-center justify-center pointer-events-none"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=200&auto=format&fit=crop"
                alt="Floating Blueberry"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
          </motion.div>

          {/* Floating Green Leaf - Bottom Right */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [15, 30, 15]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[15%] right-[12%] z-20 w-14 h-14 pointer-events-none text-organic-leaf"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current filter drop-shadow-md">
              <path d="M17 8C8 10 5.9 16.12 5.9 16.12S3 14 3 10c0-3.3 2.7-6 6-6 4 0 7 2.5 8 4zm3.92 5.08c-.08-.08-.2-.11-.3-.07-2.3.93-3.8 2.3-4.5 4.14-.04.1.01.21.1.25.1.04.21-.01.25-.1.64-1.7 2-3 4.13-3.85.11-.05.15-.17.1-.28-.02-.03-.04-.06-.08-.09z" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Torn-paper/Wave SVG divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[40px] fill-current text-[#FFF8EE]"
        >
          <path d="M0,32L30,37.3C60,43,120,53,180,53.3C240,53,300,43,360,42.7C420,43,480,53,540,53.3C600,53,660,43,720,37.3C780,32,840,32,900,37.3C960,43,1020,53,1080,58.7C1140,64,1200,64,1260,58.7C1320,53,1380,43,1410,37.3L1440,32L1440,80L1410,80C1380,80,1320,80,1260,80C1200,80,1140,80,1080,80C1020,80,960,80,900,80C840,80,780,80,720,80C660,80,600,80,540,80C480,80,420,80,360,80C300,80,240,80,180,80C120,80,60,80,30,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
};
export default Hero;
