"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/section-title";
import AnimatedReveal from "@/components/ui/animated-reveal";

interface CollageItemProps {
  image: string;
  title: string;
  description: string;
  rotation: string;
  size: string;
  delay: number;
}

const CollageItem: React.FC<CollageItemProps> = ({
  image,
  title,
  description,
  rotation,
  size,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className={`relative rounded-[2rem] overflow-hidden bg-white border border-organic-green/10 p-4 shadow-sm hover:shadow-xl transition-all duration-300 ${rotation} ${size} group`}
    >
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-organic-cream">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-organic-darkGreen/10 to-transparent pointer-events-none" />
      </div>
      <div>
        <h4 className="font-serif text-lg font-bold text-organic-green mb-1">{title}</h4>
        <p className="text-[11px] text-organic-darkGreen/75 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const IngredientStory: React.FC = () => {
  const storyItems = [
    {
      image: "https://images.unsplash.com/photo-1536620948473-5ec585e7a9fd?q=80&w=400&auto=format&fit=crop",
      title: "Turkish Figs",
      description: "Caramel-like mission figs, sun-dried in the Aegean hills to concentrate their natural sugars and minerals.",
      rotation: "lg:rotate-2 hover:rotate-0",
      size: "w-full sm:w-[260px] lg:w-[270px] self-start",
      delay: 0.1,
    },
    {
      image: "https://images.unsplash.com/photo-1596720426673-e483d74ed721?q=80&w=400&auto=format&fit=crop",
      title: "Black Chia Seeds",
      description: "Premium omega-rich seeds sourced from sustainable highland cooperatives in Central America.",
      rotation: "lg:-rotate-3 hover:rotate-0",
      size: "w-full sm:w-[260px] lg:w-[270px] self-center lg:-translate-y-8",
      delay: 0.2,
    },
    {
      image: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?q=80&w=400&auto=format&fit=crop",
      title: "Aegean Pistachios",
      description: "Vibrant green pistachios, dry-roasted at the farm gate to preserve their delicate oils and crunch.",
      rotation: "lg:rotate-3 hover:rotate-0",
      size: "w-full sm:w-[260px] lg:w-[270px] self-end lg:translate-y-4",
      delay: 0.3,
    },
    {
      image: "https://images.unsplash.com/photo-1589314418659-197e4125860d?q=80&w=400&auto=format&fit=crop",
      title: "California Walnuts",
      description: "Slow-dried shelled walnuts from organic growers, containing highly active omega-3 fats.",
      rotation: "lg:-rotate-2 hover:rotate-0",
      size: "w-full sm:w-[260px] lg:w-[270px] self-start lg:-translate-y-12",
      delay: 0.4,
    },
  ];

  return (
    <section id="story" className="py-24 px-6 md:px-12 bg-[#FFF8EE] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-organic-yellow/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <AnimatedReveal direction="up" delay={0.1}>
          <SectionTitle
            subtitle="The Superfood Story"
            title="Sourced with Pure Integrity"
            description="We believe in foods that have a history. We trace each nut, seed, and dry fruit to its native soil, collaborating only with farmers who prioritize regenerative organic farming."
            align="center"
            className="mb-16"
          />
        </AnimatedReveal>

        {/* Story Collage Layout */}
        <div className="flex flex-wrap lg:flex-row justify-center gap-8 lg:gap-6 w-full py-6 min-h-[480px]">
          {storyItems.map((item, idx) => (
            <CollageItem
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
              rotation={item.rotation}
              size={item.size}
              delay={item.delay}
            />
          ))}
        </div>

        {/* Editorial Text Footnote */}
        <AnimatedReveal direction="up" delay={0.4} className="mt-16 text-center max-w-lg">
          <p className="font-serif italic text-lg md:text-xl text-organic-green">
            “True nourishment comes from the heart of nature, preserved in its most concentrated form.”
          </p>
          <span className="block mt-3 text-xs uppercase tracking-wider font-semibold text-organic-sage">
            — Kannu Editorial Journal, Issue 04
          </span>
        </AnimatedReveal>
      </div>
    </section>
  );
};
export default IngredientStory;
