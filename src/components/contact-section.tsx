"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const contactItems = [
  { icon: MapPin, title: "آدرس", detail: "تهران، خیابان ولیعصر، پلاک ۱۲۳" },
  { icon: Phone, title: "تلفن", detail: "۰۲۱-۱۲۳۴۵۶۷۸" },
  { icon: Clock, title: "ساعت کاری", detail: "همه روزه ۸ صبح تا ۱۲ شب" },
  { icon: Instagram, title: "اینستاگرام", detail: "@coffeeglace" },
];

export default function ContactSection() {
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
          {contactItems.map((item) => (
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
