
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sonru Isele Charity Foundation",
  description:
    "Learn how Sonru Isele Charity Foundation collects, uses, protects, and manages your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Legal
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              At Sonru Isele Charity Foundation, we respect your privacy and
              are committed to protecting your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm font-semibold text-foreground">
                On this page
              </p>

              <nav className="mt-4 space-y-3 text-sm">
                <a
                  href="#information-we-collect"
                  className="block text-muted-foreground transition hover:text-primary"
                >
                  Information We Collect
                </a>

                <a
                  href="#how-we-use-information"
                  className="block text-muted-foreground transition hover:text-primary"
                >
                  How We Use Information
                </a>

                <a
                  href="#information-sharing"
                  className="block text-muted-foreground transition hover:text-primary"
                >
                  Information Sharing
                </a>

                <a
                  href="#data-security"
                  className="block text-muted-foreground transition hover:text-primary"
                >
                  Data Security
                </a>

                <a
                  href="#your-rights"
                  className="block text-muted-foreground transition hover:text-primary"
                >
                  Your Rights
                </a>

                <a
                  href="#acceptance"
                  className="block text-muted-foreground transition hover:text-primary"
                >
                  Policy Acceptance
                </a>
              </nav>
            </div>
          </aside>

          {/* Policy */}
          <article className="max-w-3xl">
            <div className="space-y-10 text-base leading-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Privacy at Sonru Isele Charity Foundation
                </h2>

                <p className="mt-4">
                  At Sonru Isele Charity Foundation, we respect your privacy
                  and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, protect,
                  and manage information when you interact with our website
                  and charitable activities.
                </p>
              </section>

              <section id="information-we-collect">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Information We Collect
                </h2>

                <p className="mt-4">
                  We may collect information you provide when you donate,
                  volunteer, register for our programmes, contact us, or
                  otherwise interact with our website.
                </p>

                <p className="mt-4">
                  This may include your name, contact details, payment
                  information, and other information necessary to provide our
                  services and support our charitable activities.
                </p>
              </section>

              <section id="how-we-use-information">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  How We Use Your Information
                </h2>

                <p className="mt-4">
                  We use your information to:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Process donations and related transactions.</li>
                  <li>Manage our programmes and volunteers.</li>
                  <li>Communicate with you about our activities.</li>
                  <li>Improve our website and services.</li>
                  <li>
                    Comply with applicable legal and regulatory requirements.
                  </li>
                </ul>
              </section>

              <section id="information-sharing">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Information Sharing
                </h2>

                <p className="mt-4">
                  We do not sell your personal information.
                </p>

                <p className="mt-4">
                  Where necessary, we may share information with trusted
                  service providers, programme partners, payment processors,
                  or regulatory authorities, subject to applicable data
                  protection requirements.
                </p>
              </section>

              <section id="data-security">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Data Security and Retention
                </h2>

                <p className="mt-4">
                  We take reasonable measures to keep your information secure
                  and retain it only for as long as necessary for legitimate
                  purposes.
                </p>
              </section>

              <section id="your-rights">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Your Rights
                </h2>

                <p className="mt-4">
                  You may contact us to request access to, correction or
                  deletion of your personal information, withdraw consent
                  where applicable, or raise any concerns about how your
                  information is handled.
                </p>
              </section>

              <section id="acceptance">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Policy Acceptance
                </h2>

                <p className="mt-4">
                  By using this website, you acknowledge this Privacy Policy.
                </p>
              </section>
            </div>

            {/* Contact Card */}
            <div className="mt-14 rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-foreground">
                Questions about your privacy?
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                If you have questions or concerns about how your personal
                information is handled, please contact Sonru Isele Charity
                Foundation.
              </p>

              <a
                href="/contact"
                className="mt-5 inline-flex items-center text-sm font-semibold text-primary transition hover:opacity-80"
              >
                Contact us
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

