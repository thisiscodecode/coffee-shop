"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import SteamCup from "./steam-cup";
import FloatingParticles from "./floating-particles";
import { ChevronUp } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const contentY = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-700"
        style={{ y: bgY }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 45%, rgba(217,165,100,0.15) 0%, transparent 50%), radial-gradient(circle at 85% 25%, rgba(255,220,150,0.12) 0%, transparent 40%), radial-gradient(circle at 55% 75%, rgba(200,150,80,0.1) 0%, transparent 45%), radial-gradient(circle at 40% 15%, rgba(255,200,100,0.08) 0%, transparent 35%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute select-none"
            initial={{ y: 100, rotate: 0 }}
            animate={{
              y: [100, -20, 100],
              rotate: [0, 180, 360],
              x: [0, i % 2 === 0 ? 25 : -25, 0],
            }}
            transition={{
              duration: 7 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
            style={{
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 3) * 28}%`,
              fontSize: `${1.8 + (i % 3) * 0.7}rem`,
              opacity: 0.04 + (i % 3) * 0.01,
              color: "#d4c4a8",
            }}
          >
            {i % 3 === 0 ? "☕" : i % 3 === 1 ? "🫖" : "🍃"}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto mb-6 w-24 sm:w-28 md:w-32"
        >
          <SteamCup />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/10">
            <span className="w-4 h-4 text-amber-300">✨</span>
            <span className="text-white/80 text-sm tracking-wide">
              تجربه‌ای متفاوت از قهوه
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Coffee{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 via-amber-200 to-amber-100">
            Glacé
          </span>
        </motion.h1>

        <motion.p
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-100/80 mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          کافی گلاسه
        </motion.p>

        <motion.div
          className="w-20 h-0.5 bg-gradient-to-l from-amber-400 via-amber-300 to-transparent mx-auto my-7"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.p
          className="text-white/60 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          مرغوب‌ترین دانه‌های قهوه از بهترین مزارع جهان، با عطر و طعمی
          بی‌نظیر. هر فنجان، داستانی از سفر قهوه است.
        </motion.p>

        <motion.a
          href="#menu-coffee"
          className="inline-flex items-center gap-2 bg-white text-coffee-800 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-amber-50 transition-colors shadow-lg shadow-black/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          مشاهده منو
          <ChevronUp className="w-4 h-4 rotate-90" />
        </motion.a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-warm-gray to-transparent" />
    </section>
  );
}
