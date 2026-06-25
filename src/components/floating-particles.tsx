"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const particleEmojis = ["☕", "🫖", "🍵", "☕", "✨", "☕", "🍃", "☕"];

export default function FloatingParticles() {
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
