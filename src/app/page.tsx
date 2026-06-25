"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import {
  Coffee,
  GlassWater,
  Flame,
  Leaf,
  CakeSlice,
  MapPin,
  Phone,
  Clock,
  Instagram,
  ChevronUp,
  Menu,
  X,
  Star,
  Heart,
  Sparkles,
  } from "lucide-react";
import { menuCategories, formatPrice, type Product, type MenuCategory } from "@/lib/menu-data";

/* ───────── Icon Map ───────── */
const iconMap: Record<string, React.ElementType> = {
  Coffee,
  GlassWater,
  Flame,
  Leaf,
  CakeSlice,
};

/* ───────── Animation Variants ───────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

/* ───────── Badges ───────── */
const badgeColors: Record<string, string> = {
  "پرفروش": "bg-amber-200/80 text-amber-900",
  "محبوب": "bg-rose-200/80 text-rose-900",
  "ویژه": "bg-violet-200/80 text-violet-900",
  "پیشنهاد سرآشپز": "bg-emerald-200/80 text-emerald-900",
};

/* ═══════════════════════════════════════════
   STEAMING COFFEE CUP SVG
   ═══════════════════════════════════════════ */
function SteamCup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Saucer */}
        <ellipse cx="52" cy="118" rx="44" ry="8" fill="#d4c4a8" opacity="0.5" />
        <ellipse cx="52" cy="115" rx="40" ry="7" fill="#e8ddd0" />

        {/* Cup body */}
        <path
          d="M22 55 L28 108 C28 108 30 115 52 115 C74 115 76 108 76 108 L82 55 Z"
          fill="#f2ebe2"
          stroke="#c9a87c"
          strokeWidth="1.5"
        />
        {/* Coffee surface */}
        <ellipse cx="52" cy="58" rx="30" ry="7" fill="#5e3b24" />
        <ellipse cx="48" cy="57" rx="12" ry="3" fill="#7d5230" opacity="0.6" />

        {/* Cup rim */}
        <ellipse cx="52" cy="55" rx="31" ry="7.5" fill="none" stroke="#c9a87c" strokeWidth="1.5" />

        {/* Handle */}
        <path
          d="M82 62 C92 62 98 72 98 82 C98 92 92 98 82 98"
          fill="none"
          stroke="#c9a87c"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Decorative line on cup */}
        <path
          d="M30 72 L74 72"
          stroke="#c9a87c"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <path
          d="M30 76 L74 76"
          stroke="#c9a87c"
          strokeWidth="0.5"
          opacity="0.3"
        />

        {/* Steam wisps */}
        <path
          d="M38 48 C35 38 42 32 39 22 C36 12 44 6 41 0"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="steam-wisp-1"
        />
        <path
          d="M52 46 C49 36 56 30 53 20 C50 10 58 4 55 -2"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="steam-wisp-2"
        />
        <path
          d="M66 48 C63 38 70 32 67 22 C64 12 72 6 69 0"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="steam-wisp-3"
        />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════
   FLOATING BACKGROUND PARTICLES
   ═══════════════════════════════════════════ */
const particleEmojis = ["☕", "🫖", "🍵", "☕", "✨", "☕", "🍃", "☕"];

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        emoji: particleEmojis[i % particleEmojis.length],
        left: `${8 + (i * 6.5) % 85}%`,
        top: `${5 + (i * 7) % 90}%`,
        size: `${0.9 + (i % 3) * 0.5}rem`,
        delay: i * 0.8,
        duration: 5 + (i % 4) * 2,
        opacity: 0.04 + (i % 3) * 0.015,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none"
          style={{
            left: p.left,
            top: p.top,
            fontSize: p.size,
            opacity: p.opacity,
            color: "#5e3b24",
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, p.id % 2 === 0 ? 8 : -8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */
function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const contentY = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
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

      {/* Floating coffee beans decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute select-none"
            initial={{ y: 100, rotate: 0 }}
            animate={{
              y: [100, -20, 100],
              rotate: [0, 180, 360],
              x: [0, (i % 2 === 0 ? 25 : -25), 0],
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

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Steam Cup */}
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
            <Sparkles className="w-4 h-4 text-amber-300" />
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-warm-gray to-transparent" />
    </section>
  );
}

/* ═══════════════════════════════════════════
   STICKY NAVIGATION
   ═══════════════════════════════════════════ */
function StickyNav({ categories }: { categories: MenuCategory[] }) {
  const [activeSection, setActiveSection] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNav(scrollY > window.innerHeight * 0.6);

      const sections = categories.map((c) => document.getElementById(`menu-${c.id}`));
      let current = "";
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id.replace("menu-", "");
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`menu-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          ref={navRef}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-warm-gray/85 backdrop-blur-xl border-b border-coffee-300/40 shadow-md"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Logo */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-base sm:text-lg font-bold text-coffee-800 flex items-center gap-1.5 sm:gap-2"
              >
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Coffee Glacé</span>
              </button>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1">
                {categories.map((cat) => {
                  const Icon = iconMap[cat.icon] || Coffee;
                  const isActive = activeSection === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => scrollTo(cat.id)}
                      className={`relative px-3 lg:px-4 py-2 text-sm rounded-lg transition-all duration-300 flex items-center gap-1.5 ${
                        isActive
                          ? "text-coffee-800 bg-coffee-200/60 font-medium shadow-sm"
                          : "text-coffee-600 hover:text-coffee-800 hover:bg-coffee-200/30"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {cat.title}
                    </button>
                  );
                })}
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2.5 rounded-xl text-coffee-700 hover:bg-coffee-200/40 transition-colors active:scale-95"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden overflow-hidden border-t border-coffee-300/30 bg-warm-gray/95 backdrop-blur-xl"
              >
                <nav className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-0.5">
                  {categories.map((cat) => {
                    const Icon = iconMap[cat.icon] || Coffee;
                    const isActive = activeSection === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => scrollTo(cat.id)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-coffee-200/50 text-coffee-800 font-medium"
                            : "text-coffee-600 hover:bg-coffee-200/25 active:bg-coffee-200/40"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {cat.title}
                      </button>
                    );
                  })}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════
   PRODUCT CARD
   ═══════════════════════════════════════════ */
function ProductCard({ product, index }: { product: Product; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="group relative bg-warm-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-coffee-200/50 hover:border-coffee-300/60"
    >
      {/* Image */}
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

        {/* Badge */}
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

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Name and Price */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <h3 className="text-sm sm:text-base font-semibold text-coffee-900 leading-relaxed">
            {product.name}
          </h3>
          <div className="shrink-0 bg-coffee-200/60 text-coffee-700 text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full self-start sm:self-auto">
            {formatPrice(product.price)}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-l from-coffee-300/40 via-coffee-200/30 to-transparent mb-2 sm:mb-3" />

        {/* Ingredients */}
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

/* ═══════════════════════════════════════════
   MENU SECTION
   ═══════════════════════════════════════════ */
const sectionBgs = [
  "section-warm-a",
  "section-warm-b",
  "section-warm-c",
  "section-warm-a",
  "section-warm-b",
];

function MenuSection({
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
      {/* Subtle floating particles */}
      <FloatingParticles />

      {/* Category Header */}
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

      {/* Product Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 max-w-6xl mx-auto px-3 sm:px-4 relative z-10"
      >
        {category.products.map((product, pIndex) => (
          <ProductCard
            key={product.id}
            product={product}
            index={pIndex}
          />
        ))}
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ABOUT SECTION
   ═══════════════════════════════════════════ */
function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-warm-alt/50 relative overflow-hidden">
      <FloatingParticles />
      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-coffee-200/40 rounded-full px-4 py-1.5 mb-5 sm:mb-6">
            <Coffee className="w-4 h-4 text-coffee-600" />
            <span className="text-xs sm:text-sm text-coffee-600">داستان ما</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-coffee-900 mb-5 sm:mb-6">
            درباره Coffee Glacé
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 sm:space-y-4 text-coffee-600 leading-loose text-sm sm:text-base max-w-2xl mx-auto"
        >
          <p>
            کافی گلاسه با هدف ایجاد فضایی متفاوت برای عاشقان قهوه تأسیس شده
            است. ما معتقدیم هر فنجان قهوه، داستانی از سفر دانه‌های قهوه از
            مزرعه تا فنجان شماست. به همین دلیل، دانه‌های قهوه ما را از
            بهترین مزارع جهان انتخاب می‌کنیم.
          </p>
          <p>
            تیم باریستاهای حرفه‌ای ما با عشق و دقت، هر نوشیدنی را به
            بهترین شکل ممکن آماده می‌کنند. از اسپرسو کلاسیک تا قهوه ترک
            خاص ما، همه چیز با تازه‌ترین مواد اولیه و بیشترین کیفیت تهیه
            می‌شود.
          </p>
          <p>
            فضای دنج و آرام کافی گلاسه، مکانی است که می‌توانید لحظاتی
            آرام را در کنار یک فنجان قهوه تازه دم شده تجربه کنید. ما به شما
            دعوت می‌کنیم تا بخشی از این تجربه زیبا باشید.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-3 sm:gap-8 mt-10 sm:mt-12 max-w-md sm:max-w-lg mx-auto"
        >
          {[
            { value: "+۳۵", label: "نوع نوشیدنی" },
            { value: "+۱۸", label: "دسر خانگی" },
            { value: "+۵", label: "سال تجربه" },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-warm-card rounded-xl p-3 sm:p-4 border border-coffee-200/30">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-coffee-800">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs sm:text-sm text-coffee-500 mt-0.5 sm:mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════════ */
function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-coffee-900 mb-2 sm:mb-3">
            تماس با ما
          </h2>
          <p className="text-coffee-500 text-xs sm:text-sm">
            منتظر دیدار شما هستیم
          </p>
          <div className="w-10 sm:w-12 h-0.5 bg-coffee-400/60 mx-auto mt-3 sm:mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
        >
          {[
            {
              icon: MapPin,
              title: "آدرس",
              detail: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
            },
            {
              icon: Phone,
              title: "تلفن",
              detail: "۰۲۱-۱۲۳۴۵۶۷۸",
            },
            {
              icon: Clock,
              title: "ساعت کاری",
              detail: "همه روزه ۸ صبح تا ۱۲ شب",
            },
            {
              icon: Instagram,
              title: "اینستاگرام",
              detail: "@coffeeglace",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-warm-card rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-coffee-200/40 hover:shadow-md hover:border-coffee-300/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-coffee-200/50 text-coffee-700 mb-2.5 sm:mb-3">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-coffee-800 mb-1">
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-coffee-500 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-coffee-900 text-white/70 py-8 sm:py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-amber-400" />
            <span className="text-white font-bold text-base sm:text-lg">Coffee Glacé</span>
          </div>
          <p className="text-[10px] sm:text-xs text-white/40 text-center">
            تمامی حقوق مادی و معنوی این وب‌سایت متعلق به Coffee Glacé می‌باشد.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   SCROLL TO TOP
   ═══════════════════════════════════════════ */
function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 left-5 z-40 w-11 h-11 bg-warm-card rounded-full shadow-lg border border-coffee-300/40 flex items-center justify-center text-coffee-700 hover:bg-coffee-200/50 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <StickyNav categories={menuCategories} />

      <main className="flex-1">
        {menuCategories.map((category, index) => (
          <MenuSection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}