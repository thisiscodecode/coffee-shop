"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  "پرفروش": "bg-amber-100 text-amber-800",
  "محبوب": "bg-rose-100 text-rose-800",
  "ویژه": "bg-violet-100 text-violet-800",
  "پیشنهاد سرآشپز": "bg-emerald-100 text-emerald-800",
};

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-700" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 60% 80%, rgba(255,255,255,0.06) 0%, transparent 45%)",
        }}
      />

      {/* Floating coffee beans decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-6xl select-none"
            initial={{ y: 100, rotate: 0 }}
            animate={{
              y: [100, -20, 100],
              rotate: [0, 180, 360],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              fontSize: `${2 + (i % 3) * 0.8}rem`,
            }}
          >
            ☕
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/10">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-white/80 text-sm tracking-wide">
              تجربه‌ای متفاوت از قهوه
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Coffee{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 to-amber-100">
            Glacé
          </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-amber-100/70 font-light mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          کافی گلاسه
        </motion.p>

        <motion.div
          className="w-16 h-0.5 bg-gradient-to-l from-amber-400 to-transparent mx-auto my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.p
          className="text-white/60 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-10"
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
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-gray to-transparent" />
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
      setShowNav(scrollY > window.innerHeight * 0.7);

      // Detect active section
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
          className="fixed top-0 left-0 right-0 z-50 bg-warm-gray/80 backdrop-blur-xl border-b border-coffee-200/50 shadow-sm"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-lg font-bold text-coffee-800 flex items-center gap-2"
              >
                <Coffee className="w-5 h-5" />
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
                      className={`relative px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? "text-coffee-800 bg-coffee-100/60 font-medium"
                          : "text-coffee-600 hover:text-coffee-800 hover:bg-coffee-100/30"
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
                className="md:hidden p-2 rounded-lg text-coffee-700 hover:bg-coffee-100/50"
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
                className="md:hidden overflow-hidden border-t border-coffee-200/30 bg-warm-gray/95 backdrop-blur-xl"
              >
                <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
                  {categories.map((cat) => {
                    const Icon = iconMap[cat.icon] || Coffee;
                    const isActive = activeSection === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => scrollTo(cat.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${
                          isActive
                            ? "bg-coffee-100/60 text-coffee-800 font-medium"
                            : "text-coffee-600 hover:bg-coffee-100/30"
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
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-coffee-100/50"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-coffee-100">
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="img-shimmer w-full h-full flex items-center justify-center">
            <Coffee className="w-12 h-12 text-coffee-300" />
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                badgeColors[product.badge] || "bg-white/90 text-coffee-800"
              }`}
            >
              {product.badge === "پرفروش" && <Star className="w-3 h-3" />}
              {product.badge === "محبوب" && <Heart className="w-3 h-3" />}
              {product.badge === "ویژه" && <Sparkles className="w-3 h-3" />}
              {product.badge === "پیشنهاد سرآشپز" && <Star className="w-3 h-3" />}
              {product.badge}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name and Price */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-base font-semibold text-coffee-900 leading-relaxed">
            {product.name}
          </h3>
          <div className="shrink-0 bg-coffee-100/80 text-coffee-700 text-sm font-bold px-3 py-1 rounded-full">
            {formatPrice(product.price)}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-l from-coffee-200/60 via-coffee-200/30 to-transparent mb-3" />

        {/* Ingredients */}
        <div className="flex items-start gap-2">
          <span className="text-xs text-coffee-400 mt-0.5 shrink-0">مواد:</span>
          <p className="text-xs text-coffee-500 leading-relaxed">
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
function MenuSection({
  category,
  index,
}: {
  category: MenuCategory;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = iconMap[category.icon] || Coffee;

  return (
    <section
      id={`menu-${category.id}`}
      ref={ref}
      className="py-16 sm:py-20 scroll-mt-20"
    >
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-coffee-100 text-coffee-700 mb-4">
          <Icon className="w-7 h-7" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-coffee-900 mb-3">
          {category.title}
        </h2>
        <p className="text-coffee-500 max-w-md mx-auto text-sm leading-relaxed">
          {category.description}
        </p>
        <div className="w-12 h-0.5 bg-coffee-300 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4"
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
    <section ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-coffee-100/50 rounded-full px-4 py-1.5 mb-6">
            <Coffee className="w-4 h-4 text-coffee-600" />
            <span className="text-sm text-coffee-600">داستان ما</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-coffee-900 mb-6">
            درباره Coffee Glacé
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-coffee-600 leading-loose text-sm sm:text-base max-w-2xl mx-auto"
        >
          <p>
            کافی گلاسه با هدف ایجاد فضایی متفاوت برای عاشقان قهوه تأسیس شده
            است. ما معتقدیم هر فنجان قهوه، داستانی از سفر دانه‌های قهوه از
            مزرعه تا فنجان شماست. به همین دلیل، دانه‌های قهوه ما را از
            بهترین مزارع جهان انتخاب می‌کنیم.
          </p>
          <p>
            تیم باریستاهای حرفه‌ای ما با عشق و دقت، هر نوشیدنی را به
            بهترین شکل ممکن آماده می‌کنند. از اسپرسو کلاسیک تا نامرینوی
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
          className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 max-w-lg mx-auto"
        >
          {[
            { value: "+۳۰", label: "نوع نوشیدنی" },
            { value: "+۱۵", label: "دسر خانگی" },
            { value: "+۵", label: "سال تجربه" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-coffee-800">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-coffee-500 mt-1">
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
    <section ref={ref} className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-coffee-900 mb-3">
            تماس با ما
          </h2>
          <p className="text-coffee-500 text-sm">
            منتظر دیدار شما هستیم
          </p>
          <div className="w-12 h-0.5 bg-coffee-300 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
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
              detail: "@coffeeglacé",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-coffee-100/50 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-coffee-100 text-coffee-700 mb-3">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-coffee-800 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-coffee-500 leading-relaxed">
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
    <footer className="bg-coffee-900 text-white/70 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-amber-400" />
            <span className="text-white font-bold text-lg">Coffee Glacé</span>
          </div>
          <p className="text-xs text-white/40 text-center">
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
          className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-white rounded-full shadow-lg border border-coffee-200/50 flex items-center justify-center text-coffee-700 hover:bg-coffee-100 transition-colors"
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