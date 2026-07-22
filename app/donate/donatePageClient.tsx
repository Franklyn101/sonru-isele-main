"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart, ShieldCheck, Repeat, Calendar, CreditCard, Banknote, Smartphone,
  Stethoscope, GraduationCap, Briefcase, Home, ArrowRight, CheckCircle2, Lock,
} from "lucide-react";
import { PageHeader } from "../../components/site/pageHeader";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";

// In Next.js, static files in /public are referenced by path (no import needed).
const headerImg = "/assets/impact-infrastructure.jpg";

const amounts = [25, 50, 100, 250, 500, 1000];
type Frequency = "once" | "monthly";
type Currency = "USD" | "NGN";

const currencies: Record<Currency, { symbol: string; code: string; rate: number; locale: string }> = {
  USD: { symbol: "$", code: "USD", rate: 1, locale: "en-US" },
  NGN: { symbol: "₦", code: "NGN", rate: 1600, locale: "en-NG" },
};

const causes = [
  { id: "where-needed", icon: Heart, title: "Where most needed", body: "Let our team direct your gift to the most urgent need this month." },
  { id: "healthcare", icon: Stethoscope, title: "Healthcare", body: "Maternal care, medical outreach and emergency assistance." },
  { id: "education", icon: GraduationCap, title: "Education", body: "Scholarships, classrooms and digital-skills training." },
  { id: "enterprise", icon: Briefcase, title: "Enterprise", body: "Micro-grants and mentorship for women and youth." },
  { id: "homes", icon: Home, title: "Homes & infrastructure", body: "Dignified housing and community facilities." },
];

const impactLevels = [
  { min: 25, text: "feeds a family for a week" },
  { min: 50, text: "funds a child's school supplies for a term" },
  { min: 100, text: "covers a full medical outreach visit" },
  { min: 250, text: "provides a small-business starter grant" },
  { min: 500, text: "equips a village clinic for a month" },
  { min: 1000, text: "helps build a new community classroom" },
];

const methods = [
  { id: "card", icon: CreditCard, label: "Card", desc: "Visa, Mastercard, Verve" },
  { id: "transfer", icon: Banknote, label: "Bank transfer", desc: "Direct deposit, NGN/USD" },
  { id: "mobile", icon: Smartphone, label: "Mobile money", desc: "Paystack, Flutterwave" },
];

const methodDetails: Record<string, { title: string; rows: { label: string; value: string }[]; note?: string }> = {
  card: {
    title: "Pay securely by card",
    rows: [
      { label: "Accepted", value: "Visa, Mastercard, Verve, Amex" },
      { label: "Processor", value: "Paystack / Flutterwave (PCI-DSS)" },
      { label: "Currencies", value: "USD, NGN, GBP, EUR" },
    ],
    note: "You'll be redirected to a secure checkout after clicking Donate.",
  },
  transfer: {
    title: "Bank transfer details",
    rows: [
      { label: "Account name", value: "SONRU ISELE Charity Foundation" },
      { label: "Bank (NGN)", value: "First City Monument Bank (FCMB)" },
      { label: "Account number (NGN)", value: "2003947592" },
      { label: "USD domiciliary", value: "First City Monument Bank — 2003947592" },
      { label: "SWIFT / BIC", value: "ZEIBNGLA" },
    ],
    note: "Use your full name as the transfer reference and email a copy to giving@sonruisele.org for acknowledgment.",
  },
  mobile: {
    title: "Mobile money",
    rows: [
      { label: "Paystack", value: "paystack.com/pay/sonruisele" },
      { label: "Flutterwave", value: "flutterwave.com/donate/sonruisele" },
      { label: "USSD (NGN)", value: "*737*50*AMOUNT*1234#" },
      { label: "Opay / PalmPay", value: "@sonruisele" },
    ],
    note: "Mobile transfers are instant — you'll receive a confirmation within minutes.",
  },
};

const faqs = [
  { q: "Is my donation tax-deductible?", a: "SONRU ISELE Charity Foundation is a registered Nigerian nonprofit. Receipts are issued for every gift and may be tax-deductible in your jurisdiction — please consult your tax advisor." },
  { q: "How is my money used?", a: "92% of every gift goes directly to programs. The remaining 8% covers essential operations, audits and program evaluation. Our annual report is published publicly each March." },
  { q: "Can I cancel a monthly gift?", a: "Yes — anytime. You'll receive a confirmation email with a one-click cancellation link, or you can email us at hello@sonruisele.org." },
  { q: "Do you accept gifts of stock or property?", a: "Yes. Please contact our giving team at giving@sonruisele.org to coordinate." },
];

export default function DonatePageClient() {
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [amount, setAmount] = useState<number>(100);
  const [custom, setCustom] = useState<string>("");
  const [cause, setCause] = useState<string>("where-needed");
  const [method, setMethod] = useState<string>("card");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const cur = currencies[currency];

  const effectiveAmount = useMemo(() => {
    const c = parseFloat(custom);
    return !isNaN(c) && c > 0 ? c : amount;
  }, [amount, custom]);

  const format = (usd: number) => {
    const converted = Math.round(usd * cur.rate);
    return `${cur.symbol}${converted.toLocaleString(cur.locale)}`;
  };

  const impact = useMemo(() => {
    const match = [...impactLevels].reverse().find((l) => effectiveAmount >= l.min);
    return match?.text ?? impactLevels[0].text;
  }, [effectiveAmount]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageHeader
        crumb="Donate"
        eyebrow="Lend a Hand"
        title="Light a life"
        highlight="today."
        description="Every gift — large or small, one-time or monthly — translates directly into healthcare, education, enterprise and homes for Nigerian families."
        image={headerImg}
        imageAlt="A newly built community home funded by SONRU ISELE donors"
      />

      <section className="bg-background py-20 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          {/* Donation form */}
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-elegant">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
              >
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
                <h2 className="mt-5 font-display text-3xl font-semibold text-foreground">Thank you, {name || "friend"}.</h2>
                <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                  Your {frequency === "monthly" ? "monthly" : "one-time"} gift of{" "}
                  <span className="font-semibold text-foreground">{format(effectiveAmount)}</span>{" "}
                  has been received. A receipt is on its way to {email || "your email"}.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link href="/impact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
                    See your impact <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary transition">
                    Back home
                  </Link>
                </div>
              </motion.div>
            ) : (
              <>
                {/* Frequency */}
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">Make a gift</h2>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <div className="inline-flex rounded-full border border-border bg-secondary p-1 text-sm">
                      {(["monthly", "once"] as const).map((f) => (
                        <button
                          key={f}
                          type="button"
                          onClick={() => setFrequency(f)}
                          className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 font-medium transition ${
                            frequency === f ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {f === "monthly" ? <Repeat className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
                          {f === "monthly" ? "Monthly" : "One-time"}
                        </button>
                      ))}
                    </div>
                    <div className="inline-flex rounded-full border border-border bg-secondary p-1 text-sm" role="group" aria-label="Currency">
                      {(["USD", "NGN"] as const).map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setCurrency(c)}
                          className={`rounded-full px-4 py-2 font-semibold transition ${
                            currency === c ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {currencies[c].symbol} {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  {frequency === "monthly" && (
                    <p className="mt-3 text-xs text-primary/80">
                      ★ Monthly gifts fund long-term programs and cost 30% less to process.
                    </p>
                  )}
                </div>

                {/* Amounts */}
                <div className="mt-8">
                  <div className="text-sm font-medium text-foreground">Choose an amount</div>
                  <div className="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-6">
                    {amounts.map((a) => {
                      const active = !custom && amount === a;
                      return (
                        <button
                          key={a}
                          type="button"
                          onClick={() => { setAmount(a); setCustom(""); }}
                          className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                            active
                              ? "border-primary bg-primary text-primary-foreground shadow-soft"
                              : "border-border bg-background text-foreground hover:border-primary/40"
                          }`}
                        >
                          {format(a)}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-3 flex items-center gap-2 rounded-xl border border-input bg-background px-4 py-3 text-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15">
                    <span className="text-muted-foreground">$</span>
                    <input
                      inputMode="decimal"
                      placeholder="Other amount (USD)"
                      aria-label="Custom amount in USD"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value.replace(/[^0-9.]/g, ""))}
                      className="flex-1 bg-transparent outline-none"
                    />
                    <span className="text-xs text-muted-foreground">USD</span>
                  </div>
                  {currency === "NGN" && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Displayed in ₦ at approx. ₦{cur.rate.toLocaleString()} / $1. Final rate set at checkout.
                    </p>
                  )}
                </div>

                {/* Cause */}
                <div className="mt-8">
                  <div className="text-sm font-medium text-foreground">Direct your gift to</div>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {causes.map((c) => {
                      const active = cause === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setCause(c.id)}
                          className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                            active ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                          }`}
                        >
                          <c.icon className={`mt-0.5 h-5 w-5 ${active ? "text-primary" : "text-muted-foreground"}`} />
                          <div>
                            <div className="text-sm font-semibold text-foreground">{c.title}</div>
                            <div className="mt-0.5 text-xs text-muted-foreground">{c.body}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Method */}
                <div className="mt-8">
                  <div className="text-sm font-medium text-foreground">Payment method</div>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                    {methods.map((m) => {
                      const active = method === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMethod(m.id)}
                          className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${
                            active ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                          }`}
                        >
                          <m.icon className={`h-5 w-5 ${active ? "text-primary" : "text-muted-foreground"}`} />
                          <div>
                            <div className="text-sm font-semibold text-foreground">{m.label}</div>
                            <div className="text-xs text-muted-foreground">{m.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {methodDetails[method] && (
                    <motion.div
                      key={method}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-5"
                    >
                      <div className="text-sm font-semibold text-foreground">{methodDetails[method].title}</div>
                      <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                        {methodDetails[method].rows.map((r) => (
                          <div key={r.label} className="flex flex-col rounded-lg bg-background/70 px-3 py-2">
                            <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">{r.label}</dt>
                            <dd className="font-medium text-foreground break-words">{r.value}</dd>
                          </div>
                        ))}
                      </dl>
                      {methodDetails[method].note && (
                        <p className="mt-3 text-xs text-muted-foreground">{methodDetails[method].note}</p>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Donor info */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" aria-label="Full name" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" />
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" aria-label="Email" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" />
                </div>

                <button
                  type="submit"
                  className="mt-8 group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--gradient-gold)] px-6 py-4 text-base font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition hover:scale-[1.01]"
                >
                  <Heart className="h-5 w-5" />
                  {frequency === "monthly" ? "Give" : "Donate"} {format(effectiveAmount)} {frequency === "monthly" ? "/ month" : ""}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" /> Secure, encrypted checkout — your details are never shared.
                </div>
              </>
            )}
          </form>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[var(--gradient-green)] p-7 text-primary-foreground shadow-elegant"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-gold">Your impact</div>
              <div className="mt-3 font-display text-4xl font-semibold">
                {format(effectiveAmount)}{frequency === "monthly" ? <span className="text-lg font-medium text-primary-foreground/80"> / month</span> : ""}
              </div>
              <p className="mt-3 text-primary-foreground/90 leading-relaxed">
                {frequency === "monthly" ? "Every month" : "Your gift"} {impact}.
              </p>
            </motion.div>

            <div className="rounded-3xl border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-foreground">Where your gift goes</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  { label: "Programs", pct: 92 },
                  { label: "Operations", pct: 5 },
                  { label: "Evaluation & audit", pct: 3 },
                ].map((row) => (
                  <li key={row.label}>
                    <div className="flex justify-between text-foreground">
                      <span>{row.label}</span>
                      <span className="font-semibold">{row.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-[var(--gradient-gold)]" style={{ width: `${row.pct}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7">
              <h3 className="font-semibold text-foreground">Other ways to give</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><span className="font-medium text-foreground">Bank transfer:</span> SONRU ISELE Charity Foundation — FCMB 2003947592 (NGN)</li>
                <li><span className="font-medium text-foreground">USD wire:</span> Available on request — email giving@sonruisele.org</li>
                <li><span className="font-medium text-foreground">Stock or property gifts:</span> giving@sonruisele.org</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60 py-24 md:py-32">
        <div className="container-page max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
              <span className="h-px w-8 bg-gold" /> Donor questions
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="mt-5 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
              Honest answers, before you give.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-4">
            {faqs.map((f) => (
              <motion.details key={f.q} variants={itemVariants} className="group rounded-2xl border border-border bg-card p-6 hover-lift">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-semibold text-foreground">{f.q}</span>
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </motion.details>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}