import Link from "next/link";
import { Mail, MapPin, Phone, Heart } from "lucide-react";

const logo = "/assets/logo.png";

// lucide-react 1.0 removed trademarked brand/logo icons, so these are
// small inline replacements sized to match the rest of the icon set.
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.5-3H13.5V8.25c0-.87.24-1.46 1.49-1.46H16.5V4.14A20 20 0 0 0 14.13 4C11.85 4 10.3 5.39 10.3 8V10.5H8v3h2.3V21h3.2z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3H21l-6.7 7.6L22.2 21h-6.2l-4.9-6.4L5.5 21H3.4l7.2-8.2L2 3h6.3l4.4 5.8zM17.8 19h1.7L7.3 4.9H5.5z" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.4c0-1.3-.02-2.97-1.82-2.97-1.82 0-2.1 1.4-2.1 2.87V21H9z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="Home">
              <span className="inline-flex items-center justify-center rounded-2xl bg-primary-foreground p-3">
                <img src={logo} alt="SONRU ISELE Charity Foundation" width={140} height={140} className="h-24 w-auto" />
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              A Nigerian humanitarian foundation lending a hand and lighting lives through
              healthcare, education, enterprise and dignified accommodation.
            </p>
            <div className="mt-6 flex gap-2">
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-gold">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-gold transition">About</Link></li>
              <li><Link href="/mission" className="hover:text-gold transition">Mission & Vision</Link></li>
              <li><Link href="/impact" className="hover:text-gold transition">Our Impact</Link></li>
              <li><Link href="/values" className="hover:text-gold transition">Core Values</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-gold">Get Involved</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/donate" className="hover:text-gold transition">Donate</Link></li>
              <li><Link href="/get-involved" className="hover:text-gold transition">Volunteer</Link></li>
              <li><Link href="/get-involved" className="hover:text-gold transition">Partner with us</Link></li>
              <li><Link href="/get-involved" className="hover:text-gold transition">Newsletter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3"><MapPin className="h-10 w-10 mt-0.5 text-gold" /><span>1,LETTHEMSAY COUNTRY HOME KALA OGULAGHA QUARTERS, DELTA STATE</span></li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold" /><span>LETTHEMSAYFOUNDATION@GMAIL.COM</span></li>
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold" /><span>+234 800 000 0000</span></li>
            </ul>
            <Link
              href="/donate"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition"
            >
              <Heart className="h-4 w-4" /> Donate Now
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SONRU ISELE Charity Foundation. All rights reserved.</p>
          <p className="font-display italic text-gold/90">“Lend a Hand, Light a Life.”</p>
        </div>
      </div>
    </footer>
  );
}