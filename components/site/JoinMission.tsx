"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HandHeart, Handshake, Mail, Heart } from "lucide-react";
import { Reveal } from "./Reveal";

export function JoinMission() {
  const [submitted, setSubmitted] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
 const [volunteerName, setVolunteerName] = useState("");
const [volunteerEmail, setVolunteerEmail] = useState("");
const [volunteerMessage, setVolunteerMessage] = useState("");

const onVolunteer = (e: FormEvent) => {
  e.preventDefault();

  const subject = `Volunteer Application - ${volunteerName}`;

  const body = `
Volunteer Application

Name: ${volunteerName}
Email: ${volunteerEmail}

How I'd like to help:
${volunteerMessage}
`.trim();

  const mailto = `mailto:volunteer@sonruisele.org?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
};
  const onNewsletter = (e: FormEvent) => {
    e.preventDefault();
    setNewsletter(true);
  };

  return (
    <section className="relative bg-secondary/40 py-24 md:py-32 overflow-hidden">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-10 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
                <span className="h-px w-8 bg-gold" /> Join the Mission
              </span>
            </Reveal>
            <Reveal delay={0.5}>
              <h2 className="mt-5 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Lend a hand.{" "}
                <span className="text-gradient-gold italic">Light a life.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Whether you give your time, your skills, or your support — every contribution
                writes a new chapter for a family in Nigeria.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href="/donate"
                className="group relative overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-elegant hover-lift"
              >
                <Heart className="h-7 w-7 text-gold" />
                <div className="mt-4 font-display text-xl font-semibold">Donate</div>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  Fund a child's education, a medical visit, or a new home.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  Give now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link
                href="https://docs.google.com/forms/d/17E6rk6KK64wKECMXrIilaNQacO4htekaqLm5AUVN4us" target="blank"
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover-lift"
              >
                <Handshake className="h-7 w-7 text-primary" />
                <div className="mt-4 font-display text-xl font-semibold text-foreground">Partner</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Corporations, NGOs and faith communities — let's build together.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Become a partner <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>

          {/* Forms */}
          <div className="space-y-6">
            <Reveal delay={0.5}>
              <form
                onSubmit={onVolunteer}
                className="rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <HandHeart className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Volunteer with us</h3>
                </div>

                {submitted ? (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 rounded-xl bg-primary/5 p-4 text-sm text-primary"
                  >
                    Thank you — we'll reach out within 48 hours.
                  </motion.p>
                ) : (
                  <div className="mt-5 grid gap-3">
                    <input
                    value={volunteerName}
  onChange={(e) => setVolunteerName(e.target.value)}
                      required
                      placeholder="Full name"
                      aria-label="Full name"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                    <input
                    required
  value={volunteerEmail}
  onChange={(e) => setVolunteerEmail(e.target.value)}
                      type="email"
                      placeholder="Email address"
                      aria-label="Email address"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                    <textarea

value={volunteerMessage}
  onChange={(e) => setVolunteerMessage(e.target.value)}
                      rows={3}
                      placeholder="How would you like to help?"
                      aria-label="Message"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                    >
                      Apply to Volunteer <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </form>
            </Reveal>

            <Reveal delay={1}>
              <form
                onSubmit={onNewsletter}
                className="rounded-3xl bg-[var(--gradient-green)] p-7 text-primary-foreground shadow-elegant"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10 text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl text-black font-semibold">Stories from the field</h3>
                </div>
                <p className="mt-3 text-black text-sm ">
                  Monthly updates on real lives changed. No spam, ever.
                </p>
                {newsletter ? (
                  <p className="mt-4 rounded-xl bg-primary-foreground/10 p-3 text-sm">
                    You're in. Watch your inbox.
                  </p>
                ) : (
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      aria-label="Email for newsletter"
                      className="flex-1 rounded-xl border border-black bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-gold focus:ring-2 focus:ring-gold/40"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-5 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition hover:scale-[1.03]"
                    >
                      Subscribe
                    </button>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}