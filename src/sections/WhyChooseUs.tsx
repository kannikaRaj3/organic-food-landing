"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Sparkles, Leaf } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import AnimatedReveal from "@/components/ui/animated-reveal";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  bgColor,
  iconColor,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ duration: 0.3 }}
      className="flex gap-4 p-5 rounded-2xl bg-white border border-organic-green/5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${bgColor} ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-sans font-bold text-base text-organic-green mb-1">{title}</h4>
        <p className="text-xs text-organic-darkGreen/75 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "100% Certified Organic",
      description: "Absolutely zero pesticides, chemical fertilizers, or genetic modifications. Pure natural produce as nature intended.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-700",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Harvested Farm Fresh",
      description: "Our items are handpicked at peak ripeness and dispatched within hours, locking in vital nutrients and enzymes.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-700",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Carbon-Neutral Delivery",
      description: "Dispatched in local electric fleets with zero carbon emission footprints, packed at thermal perfection.",
      bgColor: "bg-sky-50",
      iconColor: "text-sky-700",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Eco-Friendly Packaging",
      description: "100% biodegradable and compostable paper pulps, reusable glass, and zero single-use plastics.",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-700",
    },
  ];

  return (
    <section id="why-us" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative leaf in the background */}
      <div className="absolute top-1/2 left-[-5%] w-48 h-48 opacity-10 text-organic-leaf pointer-events-none rotate-45">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M17 8C8 10 5.9 16.12 5.9 16.12S3 14 3 10c0-3.3 2.7-6 6-6 4 0 7 2.5 8 4zm3.92 5.08c-.08-.08-.2-.11-.3-.07-2.3.93-3.8 2.3-4.5 4.14-.04.1.01.21.1.25.1.04.21-.01.25-.1.64-1.7 2-3 4.13-3.85.11-.05.15-.17.1-.28-.02-.03-.04-.06-.08-.09z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Graphics Area */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-[350px] sm:h-[450px]">
          {/* Back grid card */}
          <div className="absolute inset-0 bg-organic-cream rounded-[3rem] -rotate-3 border border-organic-green/5 shadow-sm" />
          
          {/* Main image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-[92%] h-[92%] rounded-[2.5rem] overflow-hidden shadow-lg border border-organic-green/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=600&auto=format&fit=crop"
              alt="Premium selection of organic dry fruits and nuts"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </motion.div>

          {/* Floating leaf element */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 top-[8%] right-[4%] bg-white p-3 rounded-2xl shadow-md border border-organic-green/5 flex items-center gap-2 pointer-events-none"
          >
            <div className="h-6 w-6 rounded-full bg-organic-yellow/40 flex items-center justify-center text-organic-darkGreen text-[10px] font-bold">
              ✓
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-organic-green">Local Farms Only</span>
          </motion.div>

          {/* Floating carrot/freshness element */}
          <motion.div
            animate={{
              y: [0, 8, 0],
              x: [0, -5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute z-20 bottom-[10%] left-[2%] bg-white p-3 rounded-2xl shadow-md border border-organic-green/5 flex items-center gap-2 pointer-events-none"
          >
            <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 text-[10px] font-bold">
              ☘
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-organic-green">Pesticide Free</span>
          </motion.div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-6 flex flex-col">
          <AnimatedReveal direction="left" delay={0.1}>
            <SectionTitle
              subtitle="The Organic Promise"
              title="Why Conscious Shoppers Choose Kannu"
              description="We bridge the gap between dedicated bio-farms and your dining table. Our principles ensure maximum taste, top environmental ethics, and complete supply-chain transparency."
              align="left"
              className="mb-8"
            />
          </AnimatedReveal>

          {/* Features Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <AnimatedReveal
                key={feature.title}
                direction="left"
                delay={0.2 + idx * 0.05}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  bgColor={feature.bgColor}
                  iconColor={feature.iconColor}
                />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
