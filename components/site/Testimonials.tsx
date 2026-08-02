"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import Image from "next/image";

const a1 = "/assets/pastorgodgift.jpeg";
const a2 = "/assets/msdeborah.jpeg";
const a3 = "/assets/mr morfort.jpeg";

const testimonials = [
  {
    quote:
      "Their medical outreach reached our village when no one else would. My grandmother is alive today because of their care.",
    name: "Pastor Godgift",
    role: "Community member, Delta",
    img: a1,
  },
  {
    quote:
      "The micro-grant gave my tailoring business a real start. Two years later I employ three other women from my street.",
    name: "MS Deborah",
    role: "Entrepreneur, Delta",
    img: a2,
  },
  {
    quote:
      "Partnering with SONRU ISELE has been one of the most transparent and impact-focused experiences of my career.",
    name: "Mr morfort",
    role: "Partner, Delta",
    img: a3,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  return (
    <section className="relative bg-primary py-24 md:py-32 overflow-hidden text-primary-foreground">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary-foreground/5 blur-3xl" aria-hidden />

      <div className="container-page relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold/90">
            <span className="h-px w-8 bg-gold" /> Voices of Hope
          </span>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Quote className="h-10 w-10 text-gold" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-3xl font-display text-2xl italic leading-[1.35] sm:text-3xl md:text-4xl"
              >
                “{t.quote}”
              </motion.blockquote>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`m-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-8 flex items-center gap-4"
              >
                <Image
                  src={t.img}
                  alt={t.name}
                  width={56}
                  height={56}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/60"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-primary-foreground/70">{t.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Show testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-gold" : "w-3 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}