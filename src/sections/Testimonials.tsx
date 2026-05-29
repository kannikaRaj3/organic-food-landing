"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import AnimatedReveal from "@/components/ui/animated-reveal";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Eleanor Sterling",
    role: "Culinary Blogger & Pastry Chef",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop",
    rating: 5,
    quote: "The rosemary sourdough is absolutely exquisite! Sourdough of this caliber is rare. The tomatoes arrived smelling of fresh soil—unmistakable proof of true vine-ripening.",
  },
  {
    id: "test-2",
    name: "Dr. Marcus Chen",
    role: "Integrative Nutritionist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120&auto=format&fit=crop",
    rating: 5,
    quote: "I recommend VÉRT to all my patients. Sourcing clean, organic whole foods with documented chemical-free growing practices is vital. Their cold-pressed elixirs are a masterpiece.",
  },
  {
    id: "test-3",
    name: "Sophia Lindqvist",
    role: "Sustainable Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&auto=format&fit=crop",
    rating: 5,
    quote: "I am wowed by their fully compostable delivery pulp and electric fleet dispatch. VÉRT proves that luxury organic gastronomy and environment protection can coexist.",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-[#FFF8EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <AnimatedReveal direction="up" delay={0.1}>
          <SectionTitle
            subtitle="Client Journal"
            title="Conscious Voices"
            description="Read the genuine reviews of chefs, nutrition experts, and gourmet home-cooks who have transformed their pantry with our harvest."
            align="center"
            className="mb-16"
          />
        </AnimatedReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <AnimatedReveal
              key={test.id}
              direction="up"
              delay={0.15 + idx * 0.05}
              className="flex"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] p-8 border border-organic-green/5 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Quote Icon Background decoration */}
                <Quote className="absolute top-6 right-8 h-8 w-8 text-organic-yellow/20" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-organic-yellow text-organic-yellow" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-xs sm:text-sm text-organic-darkGreen/85 font-sans leading-relaxed italic mb-8">
                    “{test.quote}”
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-organic-green/5">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden bg-organic-cream">
                    <Image
                      src={test.image}
                      alt={test.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-organic-green">{test.name}</h4>
                    <span className="text-[10px] text-organic-darkGreen/55 font-medium">{test.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
