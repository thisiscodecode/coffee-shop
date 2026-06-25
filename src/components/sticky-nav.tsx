"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Menu, X } from "lucide-react";
import type { MenuCategory } from "@/lib/menu-data";
import { iconMap } from "@/lib/icon-map";

export default function StickyNav({ categories }: { categories: MenuCategory[] }) {
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
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-base sm:text-lg font-bold text-coffee-800 flex items-center gap-1.5 sm:gap-2"
              >
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Coffee Glacé</span>
              </button>

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

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2.5 rounded-xl text-coffee-700 hover:bg-coffee-200/40 transition-colors active:scale-95"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

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
