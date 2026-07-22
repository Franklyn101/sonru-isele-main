"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  crumb,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  crumb: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary pt-36 pb-20 md:pt-44 md:pb-28 text-primary-foreground">
      {image && (
        <motion.img
          src={image}
          alt={imageAlt ?? ""}
          aria-hidden={!imageAlt}
          loading="eager"
          decoding="async"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {image && (
        <>
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" aria-hidden />
        </>
      )}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary-foreground/5 blur-3xl" aria-hidden />

      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-primary-foreground/70">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gold">{crumb}</span>
        </nav>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold"
        >
          <span className="h-px w-8 bg-gold" /> {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl"
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gradient-gold italic">{highlight}</span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}