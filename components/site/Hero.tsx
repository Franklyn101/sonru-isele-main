"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, Users } from "lucide-react";
import { Counter } from "./counter";

const hero = "/assets/hero-community.jpg";

const stats = [
  { label: "Lives Impacted", value: 24500, suffix: "+" },
  { label: "Communities Reached", value: 86 },
  { label: "Youth Empowered", value: 3200, suffix: "+" },
  { label: "Projects Completed", value: 142 },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-primary">
      <motion.img
        src={hero}
        alt="Joyful children of a Nigerian community gathering at sunset, representing the people SONRU ISELE Charity Foundation serves"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" aria-hidden />

      {/* Floating gold orb */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary-foreground/5 blur-3xl" aria-hidden />

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-end pt-28 pb-12 sm:pb-16 md:justify-center md:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          SONRU ISELE
          <br />
          <span className="text-gradient-gold italic">Charity Foundation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-5 text-2xl font-display italic text-gold sm:text-3xl"
        >
          “Lend a Hand, Light a Life.”
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
        >
          Advancing inclusive human development across Nigeria through healthcare, education,
          enterprise support, infrastructure, accommodation, and youth empowerment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/donate"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03]"
          >
            <Heart className="h-4 w-4" />
            Donate Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/get-involved"
            className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-md transition-all hover:bg-primary-foreground/15"
          >
            <Users className="h-4 w-4" />
            Join the Mission
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-16 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              className="rounded-2xl glass-dark border border-primary-foreground/10 p-4 sm:p-5"
            >
              <div className="font-display text-2xl font-semibold text-gold sm:text-3xl md:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-primary-foreground/75 sm:text-xs">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}