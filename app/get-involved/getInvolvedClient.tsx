"use client";

import { JoinMission } from "../../components/site/JoinMission";
import { PageHeader } from "../../components/site/pageHeader";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { HandHeart, Handshake, Building2, Megaphone } from "lucide-react";
import { Metadata } from "next";

const headerImg = "/assets/impact-enterprise.jpg";
export const metadata: Metadata = {
  title: "Get Involved — SONRU ISELE Charity Foundation",
  description:
    "Volunteer, partner, fundraise or advocate. Find the role that fits you and join the SONRU ISELE Charity Foundation mission.",
  alternates: {
    canonical: "/get-involved",
  },
  openGraph: {
    title: "Get Involved — SONRU ISELE Charity Foundation",
    description: "Volunteer, partner, fundraise or advocate with SONRU ISELE.",
    url: "/get-involved",
  },
};

const ways = [
  { icon: HandHeart, title: "Volunteer", body: "Give a few hours a month — in the field or remotely. Healthcare, teaching, logistics, design and more." },
  { icon: Handshake, title: "Partner", body: "Companies, NGOs and faith communities — co-design programs and amplify reach together." },
  { icon: Building2, title: "Corporate giving", body: "Matched gifts, payroll giving, and CSR sponsorship of named programs." },
  { icon: Megaphone, title: "Advocate", body: "Share our stories, host a fundraiser or speak up for the communities we serve." },
];

export default function GetInvolvedPageClient() {
  return (
    <>
      <PageHeader
        crumb="Get Involved"
        eyebrow="Join the Mission"
        title="There's a place"
        highlight="for every kind of helper."
        description="Whether you have an hour, a skill, or a business — there's a meaningful way to lend a hand."
        image={headerImg}
        imageAlt="A SONRU ISELE volunteer mentoring a young entrepreneur"
      />

      <section className="bg-background py-20">
        <div className="container-page">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
              <span className="h-px w-8 bg-gold" /> Ways to help
            </span>
          </Reveal>
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ways.map((w) => (
              <motion.article key={w.title} variants={itemVariants} className="group rounded-3xl border border-border bg-card p-6 hover-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>

      <JoinMission />
    </>
  );
}