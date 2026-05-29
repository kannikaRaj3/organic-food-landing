"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "yellow" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  // Styles base mapping
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-organic-green disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const variants = {
    primary: "bg-organic-green text-organic-cream hover:bg-opacity-95 shadow-md shadow-organic-green/10 border border-organic-green/10",
    secondary: "bg-organic-sage text-organic-darkGreen hover:bg-opacity-90 border border-organic-sage/10",
    yellow: "bg-organic-yellow text-organic-darkGreen hover:bg-opacity-95 shadow-md shadow-organic-yellow/15 border border-organic-yellow/10",
    outline: "border-2 border-organic-green/30 text-organic-green hover:bg-organic-green hover:text-organic-cream",
    ghost: "text-organic-green hover:bg-organic-green/5",
    glass: "glass-panel text-organic-darkGreen hover:bg-organic-cream/40 shadow-sm border border-organic-green/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base tracking-wide font-semibold",
    icon: "h-10 w-10 p-0 rounded-full",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
export default Button;
