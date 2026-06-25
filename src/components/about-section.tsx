"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee } from "lucide-react";
import FloatingParticles from "./floating-particles";

export default function AboutSection() {
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
