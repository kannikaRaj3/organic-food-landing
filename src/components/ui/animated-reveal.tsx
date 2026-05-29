"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: "some" | "all" | number;
  className?: string;
}

export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  amount = 0.1,
  className = "",
}) => {
  const ref = useRef(null);
  // Trigger once when it enters the viewport
  const isInView = useInView(ref, { once: true, amount: amount as any });

  const directionOffsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directionOffsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: offset.y,
      x: offset.x,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1] as const, // easeOutCubic
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedReveal;
