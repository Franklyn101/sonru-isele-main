"use client";

import Link from "next/link";
import { Impact } from "../../components/site/Impact";
import { PageHeader } from "../../components/site/pageHeader";
import { Counter } from "../../components/site/counter";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Our Impact — SONRU ISELE Charity Foundation",
  description:
    "Healthcare, education, enterprise and infrastructure outcomes — measured by the lives changed across Nigeria.",
  alternates: {
    canonical: "/impact",
  },
  openGraph: {
    title: "Our Impact — SONRU ISELE Charity Foundation",
    description: "Healthcare, education, enterprise and infrastructure outcomes across Nigeria.",
    url: "/impact",
  },
};

const headerImg = "/assets/impact-health.jpg";

const headline = [
  { value: 24500, suffix: "+", label: "Lives impacted" },
  { value: 86, label: "Communities reached" },
  { value: 3200, suffix: "+", label: "Youth empowered" },
  { value: 142, label: "Projects completed" },
];

const stories = [
  {
    title: "A clinic that came back to life",
    body: "In Asaba, we rebuilt a shuttered village clinic, equipped it with a generator, and partnered with two physicians to provide weekly care to over 1,400 residents.",
    tag: "Healthcare",
  },
  {
    title: "From classroom to coding bootcamp",
    body: "Our digital-skills program graduated 320 young Nigerians in 2024 — 78% are now earning income through freelancing or local employers.",
    tag: "Education",
  },
  {
    title: "Mama Blessing's tailoring shop",
    body: "A ₦150,000 micro-grant grew into a three-woman tailoring business in Ibadan, paying for two children's full school year.",
    tag: "Enterprise",
  },
];

export default function ImpactPageClient() {
  return (
    <>
      <PageHeader
        crumb="Impact"
        eyebrow="Our Impact"
        title="Measured by lives changed,"
        highlight="not dollars spent."
        description="Every program is built around real outcomes — and every outcome is verified at the community level."
        image={headerImg}
        imageAlt="Healthcare workers tending to patients at a SONRU ISELE medical outreach"
      />

      <section className="bg-background py-20">
        <div className="container-page grid grid-cols-2 gap-4 md:grid-cols-4">
          {headline.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft"
            >
              <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <Impact />

      <section className="bg-secondary/60 py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
              <span className="h-px w-8 bg-gold" /> Stories from the field
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
              Real lives. Real outcomes.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <motion.article key={s.title} variants={itemVariants} className="rounded-3xl border border-border bg-card p-7 hover-lift">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-primary">{s.tag}</span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl font-semibold">
            Your support builds the next story.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/donate" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition">
              <Heart className="h-4 w-4" /> Donate now
            </Link>
            <Link href="/get-involved" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition">
              Volunteer with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}