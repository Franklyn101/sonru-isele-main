"use client"
import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Calendar, Award } from "lucide-react";

import { About } from "../../components/site/About";
import { PageHeader } from "../../components/site/pageHeader";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";


// export const metadata: Metadata = {
//   title: "About — SONRU ISELE Charity Foundation",
//   description:
//     "Learn the story, leadership and journey of SONRU ISELE Charity Foundation — a Nigerian humanitarian organization advancing inclusive human development.",
//   openGraph: {
//     title: "About — SONRU ISELE Charity Foundation",
//     description:
//       "The story, leadership and journey of a Nigerian humanitarian foundation.",
//     url: "/about",
//   },
//   alternates: {
//     canonical: "/about",
//   },
// };

const milestones = [
  {
    year: "2013",
    title: "Founded in Delta State",
    body: "Began as a family-led initiative supporting one village clinic.",
  },
  {
    year: "2016",
    title: "First scholarship cohort",
    body: "120 secondary-school students placed and fully sponsored.",
  },
  {
    year: "2019",
    title: "Statewide expansion",
    body: "Programs scaled across six Nigerian states.",
  },
  {
    year: "2022",
    title: "Healthcare partnership",
    body: "Joined Lagos and Enugu hospital networks for outreach.",
  },
  {
    year: "2025",
    title: "24,500+ lives impacted",
    body: "Now serving communities across Nigeria with four pillars.",
  },
];

const facts = [
  {
    icon: MapPin,
    label: "Based in",
    value: "Ogulagha Delta State, Nigeria",
  },
  {
    icon: Users,
    label: "Team & volunteers",
    value: "180+",
  },
  {
    icon: Calendar,
    label: "Founded",
    value: "2025",
  },
  {
    icon: Award,
    label: "Active programs",
    value: "12",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="Who We Are"
        title="A movement of"
        highlight="quiet, daily compassion."
        description="SONRU ISELE CHARITY FOUNDATION began with a simple idea: that lifting one neighbor lifts a whole community. A decade later, that idea has become a Nigerian humanitarian movement."
        image={"/assets/hero-community.jpg"}
        imageAlt="SONRU ISELE volunteers gathered with community members in Nigeria"
      />

      <About />

      {/* Stats */}
      <section className="bg-secondary/60 py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
              <span className="h-px w-8 bg-gold" />
              At a glance
            </span>
          </Reveal>

          <Reveal delay={0.4}>
            <h2 className="mt-5 text-balance text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              The foundation, in numbers.
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={itemVariants}
                className="rounded-3xl border border-border bg-card p-6 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <fact.icon className="h-5 w-5" />
                </div>

                <div className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {fact.label}
                </div>

                <div className="mt-1 font-display text-2xl font-semibold text-foreground">
                  {fact.value}
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="bg-background py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
              <span className="h-px w-8 bg-gold" />
              Our journey
            </span>
          </Reveal>

          <Reveal delay={0.4}>
            <h2 className="mt-5 text-balance text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              From one village to a nationwide mission.
            </h2>
          </Reveal>

          <div className="relative mt-14">
            <div
              className="absolute bottom-0 left-4 top-0 w-px bg-border sm:left-1/2"
              aria-hidden
            />

            <ol className="space-y-10">
              {milestones.map((milestone, index) => (
                <motion.li
                  key={milestone.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className={`relative grid sm:grid-cols-2 sm:gap-12 ${
                    index % 2 === 1
                      ? "sm:[&>div:first-child]:order-2"
                      : ""
                  }`}
                >
                  <div className="pl-12 sm:pr-12 sm:pl-0 sm:text-right">
                    <div className="font-display text-3xl font-semibold text-gradient-gold">
                      {milestone.year}
                    </div>
                  </div>

                  <div className="pl-12 sm:pl-12">
                    <h3 className="text-xl font-semibold text-foreground">
                      {milestone.title}
                    </h3>

                    <p className="mt-2 text-muted-foreground">
                      {milestone.body}
                    </p>
                  </div>

                  <span
                    className="absolute top-2 left-4 h-3 w-3 -translate-x-1/2 rounded-full bg-gold ring-4 ring-background sm:left-1/2"
                    aria-hidden
                  />
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
            Want to learn how we work, and where every gift goes?
          </h2>

          <Link
            href="/impact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition hover:scale-[1.03]"
          >
            See our impact
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}