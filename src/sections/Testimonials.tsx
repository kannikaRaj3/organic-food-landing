"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
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
    name: "Roasted Almonds",
    role: "Premium California Grade",
    image: "https://images.unsplash.com/photo-1508815122820-2215947cc21c?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote: "The roasting level is absolutely exquisite! These almonds maintain a perfect crunch and deep nutty profile that is rare to find in retail stores.",
  },
  {
    id: "test-2",
    name: "Turkish Apricots",
    role: "Sun-Dried & Sulfur-Free",
    image: "https://images.unsplash.com/photo-1595122245592-4545305a4170?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote: "Sourcing clean, organic whole foods with documented chemical-free growing practices is vital. These apricots are incredibly chewy and naturally sweet.",
  },
  {
    id: "test-3",
    name: "Aegean Pistachios",
    role: "Hand-Picked & Dry Roasted",
    image: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    quote: "I am wowed by the freshness! Every pistachio is perfectly opened and roasted to perfection. Kannu proves that luxury organic gastronomy is achievable.",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-[#FFF8EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <AnimatedReveal direction="up" delay={0.1}>
          <SectionTitle
            subtitle="Customer Favorites"
            title="Conscious Voices"
            description="Read why our premium selection of dry fruits and seeds has become a staple for healthy gourmet home-cooks."
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
              delay={0.2 + idx * 0.1}
            >
              <div className="bg-white rounded-[2.5rem] p-8 border border-organic-green/5 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                <div className="absolute top-8 right-8 text-organic-yellow/20">
                  <Quote className="h-12 w-12 fill-current" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-organic-yellow text-organic-yellow" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-sm text-organic-darkGreen/80 leading-relaxed italic mb-8 flex-1">
                  &ldquo;{test.quote}&rdquo;
                </p>

                {/* Profile Area */}
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-2xl overflow-hidden border-2 border-organic-cream bg-organic-cream">
                    <Image
                      src={test.image}
                      alt={test.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-organic-green">{test.name}</h4>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-organic-sage">{test.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
