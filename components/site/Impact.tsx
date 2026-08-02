"use client";

import { motion } from "framer-motion";
import { Stagger, Reveal, itemVariants } from "./Reveal";
import { Counter } from "./counter";

const healthcareImg = "/assets/impact-health.jpg";
const educationImg = "/assets/impact-education.jpg";
const enterpriseImg = "/assets/impact-enterprise.jpg";
const infraImg = "/assets/impact-infrastructure.jpg";
const infraimg2 = "/assets/infraimg2.jpg"

const pillars = [
  {
    title: "Healthcare Support",
    body: "Free medical outreach, maternal care, and emergency assistance reaching remote villages.",
    img: infraImg,

    alt: "Nurse caring for an elderly patient during a community health outreach",
    metric: 120,
    metricLabel: "patients treated",
    progress: 84,
  },
  {
    title: "Education & Skills",
    body: "Scholarships, classroom rebuilds and digital-skills programs for the next generation.",
    img: educationImg,
    alt: "African schoolchildren smiling at their desks in a bright classroom",
    metric: 790,
    metricLabel: "students supported",
    progress: 72,
  },
  {
    title: "Enterprise Support",
    body: "Micro-grants, mentorship and equipment for women and youth entrepreneurs.",
    img: enterpriseImg,
    alt: "Young African entrepreneur smiling beside her sewing machine in a tailoring shop",
    metric: 280,
    metricLabel: "businesses funded",
    progress: 65,
  },
  {
    title: "Infrastructure & Homes",
    body: "Building safe, dignified accommodation and community facilities where they're needed most.",
     img: infraimg2,

    alt: "Newly built community housing in a Nigerian village with residents outside",
    metric: 21,
    metricLabel: "homes & facilities built",
    progress: 58,
  },
];

export function Impact() {
  return (
    <section id="impact" className="relative bg-background py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
                <span className="h-px w-8 bg-gold" /> Our Impact
              </span>
            </Reveal>
            <Reveal delay={0.5}>
              <h2 className="mt-5 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Four pillars. <span className="text-gradient-gold italic">One mission.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <p className="max-w-md text-muted-foreground">
              Every program is measured by the lives transformed — not the dollars spent. Here's
              where your support goes.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <motion.article
              key={p.title}
              variants={itemVariants}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" aria-hidden />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>

                <div className="mt-5">
                  <div className="font-display text-3xl font-semibold text-primary">
                    <Counter value={p.metric} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {p.metricLabel}
                  </div>
                </div>

                {/* <div className="mt-4">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.progress}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-[var(--gradient-gold)]"
                    />
                  </div>
                  <div className="mt-1.5 flex justify-between text-[11px] text-muted-foreground">
                    <span>2025 progress</span>
                    <span>{p.progress}%</span>
                  </div>
                </div> */}
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}