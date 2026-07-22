"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Target, Eye, Sparkles, Stethoscope, GraduationCap, Briefcase, Home } from "lucide-react";
import { Hero } from "../../components/site/Hero";
import { Testimonials } from "../../components/site/Testimonials";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { Metadata } from "next";


const TITLE = "SONRU ISELE Charity Foundation — Lend a Hand, Light a Life";
const DESC =
  "SONRU ISELE Charity Foundation is a Nigerian nonprofit advancing inclusive human development through healthcare, education, enterprise support, infrastructure, accommodation and youth empowerment.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords:
    "charity foundation Nigeria, nonprofit organization Nigeria, youth empowerment foundation, healthcare charity Nigeria, education support NGO, humanitarian foundation, SONRU ISELE",
  alternates: {
    // NOTE: the original TanStack route was registered at "/mission" but its
    // canonical/og:url both pointed at "/". Carried over as-is below — if
    // this page is meant to live at the site root, put it in app/page.tsx
    // instead of app/mission/page.tsx and drop this override.
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "SONRU ISELE Charity Foundation",
  alternateName: "SONRU ISELE",
  slogan: "Lend a Hand, Light a Life",
  description: DESC,
  areaServed: "Nigeria",
  address: { "@type": "PostalAddress", addressCountry: "NG", addressLocality: "Lagos" },
};

const gallery1 = "/assets/gallery-1.jpg";
const gallery4 = "/assets/gallery-4.jpg";

const pillars = [
  { icon: Stethoscope, title: "Healthcare", body: "Free medical outreach, maternal care and emergency support.", to: "/impact" as const },
  { icon: GraduationCap, title: "Education", body: "Scholarships, classroom rebuilds and digital-skills training.", to: "/impact" as const },
  { icon: Briefcase, title: "Enterprise", body: "Micro-grants and mentorship for women and youth entrepreneurs.", to: "/impact" as const },
  { icon: Home, title: "Infrastructure", body: "Dignified accommodation and community facilities.", to: "/impact" as const },
];

export default function MissionClient() {
  return (
    <>
      <Hero />

      {/* About teaser */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative">
            <motion.img
              src={gallery1}
              alt="Volunteers distributing food in a Nigerian village"
              loading="lazy"
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-3xl bg-[var(--gradient-gold)] p-6 text-gold-foreground shadow-[var(--shadow-gold)]">
              <div className="font-display text-4xl font-semibold">12+</div>
              <div className="text-xs font-medium opacity-85 max-w-[8rem]">years of compassionate service</div>
            </div>
          </div>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
                <span className="h-px w-8 bg-gold" /> Who We Are
              </span>
            </Reveal>
            <Reveal delay={0.4}>
              <h2 className="mt-5 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                A foundation built on <span className="text-gradient-gold italic">love and dignity.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.8}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                SONRU ISELE Charity Foundation is a Nigerian humanitarian organization advancing
                inclusive human development — bringing healthcare, education, enterprise support
                and dignified accommodation to underserved communities.
              </p>
            </Reveal>
            <Reveal delay={1.1}>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
              >
                Read our story <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission + Vision teaser */}
      <section className="bg-secondary/60 py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
              <span className="h-px w-8 bg-gold" /> Purpose
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
              Why we exist, and where we&apos;re going.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              { icon: Target, title: "Mission", body: "Accessible healthcare, quality education, enterprise support and dignified infrastructure for underserved Nigerian communities." },
              { icon: Eye, title: "Vision", body: "A Nigeria where every individual is empowered to live with dignity, opportunity and the freedom to thrive." },
            ].map((it) => (
              <motion.article key={it.title} variants={itemVariants} className="group rounded-3xl border border-border bg-card p-8 sm:p-10 hover-lift">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:rotate-6">
                  <it.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">{it.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{it.body}</p>
              </motion.article>
            ))}
          </Stagger>
          <div className="mt-10">
            <Link href="/mission" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
              Explore our mission & vision <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact pillars teaser */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
                  <span className="h-px w-8 bg-gold" /> Our Impact
                </span>
              </Reveal>
              <Reveal delay={0.4}>
                <h2 className="mt-5 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
                  Four pillars. <span className="text-gradient-gold italic">One mission.</span>
                </h2>
              </Reveal>
            </div>
            <Link href="/impact" className="self-start inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
              See full impact <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <motion.div key={p.title} variants={itemVariants} className="group rounded-3xl border border-border bg-card p-6 hover-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <div className="pt-20 pb-20">
        <Testimonials />
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32 text-primary-foreground">
        <img src={gallery4} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" aria-hidden />
        <div className="container-page pb-20 relative text-center">
          <Sparkles className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-6 mx-auto max-w-3xl text-balance text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Lend a hand. <span className="text-gradient-gold italic">Light a life.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-lg text-primary-foreground/85">
            Every gift writes a new chapter for a family in Nigeria.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/donate" className="inline-flex bg-gold items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition">
              <Heart className="h-4 w-4" /> Donate Now
            </Link>
            <Link href="/get-involved" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/15 transition">
              Get Involved <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}