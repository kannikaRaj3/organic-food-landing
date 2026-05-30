"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/section-title";
import AnimatedReveal from "@/components/ui/animated-reveal";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative organic background shape */}
      <div className="absolute top-1/2 left-[90%] -translate-y-1/2 w-80 h-80 bg-organic-yellow/15 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto bg-organic-cream/40 border border-organic-green/5 rounded-[3rem] p-8 sm:p-12 md:p-16 relative z-10 shadow-sm">
        <div className="flex flex-col items-center text-center">
          
          <AnimatedReveal direction="up" delay={0.1}>
            <SectionTitle
              subtitle="The Newsletter"
              title="Subscribe to Kannu Journal"
              description="Receive curated organic recipe guides, seasonal harvest schedules, and a $10 coupon towards your first basket order."
              align="center"
              className="mb-8"
            />
          </AnimatedReveal>

          {/* Form / Success message */}
          <AnimatedReveal direction="up" delay={0.2} className="w-full max-w-md">
            {subscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl border border-emerald-100 flex items-start gap-3 text-left"
              >
                <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm">Welcome to the Journal!</h4>
                  <p className="text-xs text-emerald-700/90 leading-relaxed mt-1">
                    Your organic coupon code and welcome packet have been dispatched to your email. We are thrilled to have you in the Kannu community.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-organic-darkGreen/40">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-organic-green/10 focus:border-organic-green focus:outline-none rounded-full text-xs font-medium text-organic-darkGreen shadow-inner"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-organic-green hover:bg-organic-darkGreen text-white text-xs font-semibold py-3.5 px-8 rounded-full flex-shrink-0"
                >
                  Join Journal
                </Button>
              </form>
            )}
          </AnimatedReveal>

          {/* Spam promise footnote */}
          <span className="block mt-4 text-[10px] text-organic-darkGreen/40 font-medium">
            We value your inbox. Unsubscribe anytime in one click. Zero third-party ads.
          </span>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
