"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { MenuCategory } from "@/lib/menu-data";
import { iconMap } from "@/lib/icon-map";
import { staggerContainer } from "@/lib/animation-variants";
import ProductCard from "./product-card";
import FloatingParticles from "./floating-particles";
import { Coffee } from "lucide-react";

const sectionBgs = [
  "section-warm-a",
  "section-warm-b",
  "section-warm-c",
  "section-warm-a",
  "section-warm-b",
];

export default function MenuSection({
  category,
  index,
}: {
  category: MenuCategory;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = iconMap[category.icon] || Coffee;

  return (
    <section
      id={`menu-${category.id}`}
      ref={ref}
      className={`py-12 sm:py-16 md:py-20 scroll-mt-20 ${sectionBgs[index % sectionBgs.length]} relative`}
    >
      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="text-center mb-8 sm:mb-12 relative z-10"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-coffee-200/60 text-coffee-700 mb-3 sm:mb-4">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-coffee-900 mb-2 sm:mb-3">
          {category.title}
        </h2>
        <p className="text-coffee-600 max-w-md mx-auto text-xs sm:text-sm leading-relaxed px-4">
          {category.description}
        </p>
        <div className="w-10 sm:w-12 h-0.5 bg-coffee-400/60 mx-auto mt-3 sm:mt-4 rounded-full" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 max-w-6xl mx-auto px-3 sm:px-4 relative z-10"
      >
        {category.products.map((product, pIndex) => (
          <ProductCard key={product.id} product={product} index={pIndex} />
        ))}
      </motion.div>
    </section>
  );
}
