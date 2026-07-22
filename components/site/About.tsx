"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const g19 = "/assets/gallery-19.jpeg";
const g3 = "/assets/gallery-3.jpg";
const g4 = "/assets/gallery-4.jpg";

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
        {/* Image collage */}
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 aspect-square max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-4 row-span-4 overflow-hidden rounded-3xl shadow-elegant"
            >
              <img
                src={g19}
                alt="Volunteers in green t-shirts distributing food to villagers"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="col-span-2 row-span-3 col-start-5 overflow-hidden rounded-3xl shadow-soft"
            >
              <img
                src={g3}
                alt="Mother holding her smiling baby at a free medical checkup"
                width={900}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-3 row-span-2 col-start-4 row-start-5 overflow-hidden rounded-3xl shadow-soft"
            >
              <img
                src={g4}
                alt="Community gathering under a large tree at sunset"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </motion.div>
            <div className="col-span-3 row-span-2 col-start-1 row-start-5 rounded-3xl bg-[var(--gradient-gold)] p-5 sm:p-6 text-gold-foreground shadow-[var(--shadow-gold)] flex flex-col justify-center">
              <div className="font-display text-3xl sm:text-4xl font-semibold">12+</div>
              <div className="text-xs sm:text-sm font-medium opacity-85">years of compassionate service across Nigeria</div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
              <span className="h-px w-8 bg-gold" /> Who We Are
            </span>
          </Reveal>

          <Reveal delay={0.5}>
            <h2 className="mt-5 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              A foundation built on{" "}
              <span className="text-gradient-gold italic">love, dignity</span> and lasting impact.
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              SONRU ISELE Charity Foundation is a Nigerian humanitarian organization committed to
              advancing inclusive human development. From quiet beginnings — one family lifting
              another — we have grown into a movement that brings healthcare, education, enterprise
              support, and dignified accommodation to underserved communities.
            </p>
          </Reveal>

          <Reveal delay={1.5}>
            <figure className="mt-8 rounded-2xl border border-border bg-secondary/60 p-6 sm:p-7">
              <Quote className="h-7 w-7 text-gold" aria-hidden />
              <blockquote className="mt-3 text-base sm:text-lg font-display italic text-foreground/90">
                “We do not ask how big our help can be. We ask how deeply it can heal — one life,
                one home, one community at a time.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                — Founder&apos;s note, SONRU ISELE Charity Foundation
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}