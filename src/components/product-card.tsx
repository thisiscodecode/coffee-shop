"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Star, Heart, Sparkles } from "lucide-react";
import type { Product } from "@/lib/menu-data";
import { formatPrice } from "@/lib/menu-data";
import { badgeColors } from "@/lib/badge-colors";
import { fadeUp } from "@/lib/animation-variants";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="group relative bg-warm-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-coffee-200/50 hover:border-coffee-300/60"
    >
      <div className="relative aspect-square overflow-hidden bg-coffee-200/40">
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 48vw, (max-width: 768px) 32vw, (max-width: 1024px) 28vw, 22vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="img-shimmer w-full h-full flex items-center justify-center">
            <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-coffee-400" />
          </div>
        )}

        {product.badge && (
          <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
            <span
              className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium backdrop-blur-sm ${
                badgeColors[product.badge] || "bg-white/90 text-coffee-800"
              }`}
            >
              {product.badge === "پرفروش" && <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
              {product.badge === "محبوب" && <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
              {product.badge === "ویژه" && <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
              {product.badge === "پیشنهاد سرآشپز" && <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
              {product.badge}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <h3 className="text-sm sm:text-base font-semibold text-coffee-900 leading-relaxed">
            {product.name}
          </h3>
          <div className="shrink-0 bg-coffee-200/60 text-coffee-700 text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full self-start sm:self-auto">
            {formatPrice(product.price)}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-l from-coffee-300/40 via-coffee-200/30 to-transparent mb-2 sm:mb-3" />

        <div className="flex items-start gap-1.5 sm:gap-2">
          <span className="text-[10px] sm:text-xs text-coffee-500 mt-0.5 shrink-0">مواد:</span>
          <p className="text-[10px] sm:text-xs text-coffee-600 leading-relaxed">
            {product.ingredients}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
