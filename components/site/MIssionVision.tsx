"use client";

import { Target, Eye } from "lucide-react";
import { Reveal, Stagger, itemVariants } from "./Reveal";
import { motion } from "framer-motion";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To advance inclusive human development by providing accessible healthcare, quality education, enterprise support, and dignified infrastructure to underserved communities across Nigeria.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "A Nigeria where every individual — regardless of background — is empowered to live with dignity, opportunity, and the freedom to thrive in a community that cares.",
  },
];

export function MissionVision() {
  return (
    <section id="mission" className="relative bg-secondary/60 py-24 md:py-32 overflow-hidden">
      <div className="container-page">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
            <span className="h-px w-8 bg-gold" /> Purpose
          </span>
        </Reveal>
        <Reveal delay={0.5}>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            Why we exist, and where we're going.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {items.map((it) => (
            <motion.article
              key={it.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10 hover-lift"
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/10 blur-2xl transition-all duration-700 group-hover:bg-gold/20" aria-hidden />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:rotate-6">
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="relative mt-6 text-2xl sm:text-3xl font-semibold text-foreground">
                {it.title}
              </h3>
              <p className="relative mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                {it.body}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}