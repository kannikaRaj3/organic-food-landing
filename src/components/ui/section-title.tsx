import React from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
  dark = false,
}) => {
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right",
  };

  return (
    <div className={`max-w-2xl ${alignments[align]} ${className}`}>
      {subtitle && (
        <span
          className={`inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full mb-3 ${
            dark
              ? "bg-organic-cream/10 text-organic-yellow"
              : "bg-organic-yellow/25 text-organic-green"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${
          dark ? "text-organic-cream" : "text-organic-green"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm md:text-base leading-relaxed ${
            dark ? "text-organic-cream/70" : "text-organic-darkGreen/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
export default SectionTitle;
