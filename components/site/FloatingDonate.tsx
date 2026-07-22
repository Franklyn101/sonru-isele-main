"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart } from "lucide-react";

export function FloatingDonate() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-5 z-40"
    >
      <Link
        href="/donate"
        aria-label="Donate to SONRU ISELE Charity Foundation"
        className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-105 transition-transform"
        style={{
          backgroundImage: "var(--gradient-gold)",
          backgroundColor: "var(--gold)",
          animation: "pulseGold 2.4s ease-in-out infinite",
        }}
      >
        <Heart className="h-4 w-4" />
        <span className="hidden sm:inline">Donate</span>
      </Link>
    </motion.div>
  );
}