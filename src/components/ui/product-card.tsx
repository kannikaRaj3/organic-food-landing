"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "./button";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-[#FFFDF9] rounded-[2rem] p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-organic-green/5 flex flex-col justify-between"
    >
      {/* Favorite & Badges top bar */}
      <div className="absolute top-8 left-8 right-8 z-10 flex justify-between items-center pointer-events-none">
        <div>
          {product.badge && (
            <span className="pointer-events-auto bg-organic-yellow text-organic-darkGreen text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="pointer-events-auto h-9 w-9 bg-white hover:bg-organic-cream text-organic-darkGreen rounded-full flex items-center justify-center shadow-sm border border-organic-green/5 transition-colors cursor-pointer"
          aria-label="Add to favorites"
        >
          <Heart
            className={`h-4.5 w-4.5 transition-all ${
              isFavorite ? "fill-organic-coral text-organic-coral scale-110" : "text-organic-darkGreen/60"
            }`}
          />
        </button>
      </div>

      <div>
        {/* Product Image Area */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-organic-cream/40 mb-5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
              imgLoaded ? "blur-0" : "blur-md"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setImgLoaded(true)}
            priority={false}
          />
          {/* Subtle bottom shadow cast from within */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
        </div>

        {/* Categories & Star Rating */}
        <div className="flex justify-between items-center mb-2 px-1">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-organic-sage">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-organic-yellow text-organic-yellow" />
            <span className="text-xs font-semibold text-organic-darkGreen">{product.rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-organic-green group-hover:text-organic-darkGreen transition-colors px-1 mb-2">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-organic-darkGreen/75 leading-relaxed px-1 mb-5 line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Pricing & Checkout trigger */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-organic-green/5 px-1">
        <div className="flex flex-col">
          <span className="text-xs text-organic-darkGreen/50 font-medium">Price</span>
          <div className="flex items-baseline">
            <span className="text-xl font-extrabold text-organic-green">${product.price}</span>
            <span className="text-xs text-organic-darkGreen/60 ml-0.5">/{product.unit}</span>
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          variant="primary"
          size="icon"
          className="h-10 w-10 bg-organic-green hover:bg-organic-darkGreen text-white shadow-sm flex items-center justify-center"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-4.5 w-4.5" />
        </Button>
      </div>
    </motion.div>
  );
};
export default ProductCard;
