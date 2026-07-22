"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";

const logo = "/assets/logo.png";

const links = [
  { to: "/about", label: "About" },
  { to: "/mission", label: "Mission" },
  { to: "/impact", label: "Impact" },
  // { to: "/values", label: "Values" },
  { to: "/gallery", label: "Gallery" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) => pathname === to;

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-100 transition-all duration-500 ${
          scrolled ? "glass border-b border-border/60 py-2" : "bg-white py-3"
        }`}
      >
        <div className="container-page flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="SONRU ISELE Charity Foundation — Home">
            <img
              src={logo}
              alt="SONRU ISELE Charity Foundation logo"
              width={180}
              height={64}
              className="h-12 w-auto md:h-14 transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className={`relative px-3.5 py-2 text-sm transition-colors after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-1 after:h-px after:bg-gold after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive(l.to)
                    ? "text-primary after:scale-x-100"
                    : "text-foreground/80 hover:text-primary after:scale-x-0"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-involved"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Volunteer
            </Link>
            <Link
              href="/donate"
              style={{ backgroundImage: "var(--gradient-gold)", backgroundColor: "var(--gold)" }}
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:shadow-elegant transition-all hover:scale-[1.03]"
            >
              <Heart className="h-4 w-4 transition-transform group-hover:scale-110" />
              Donate Now
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full glass border border-border"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <motion.div
          style={{ scaleX, transformOrigin: "0% 50%" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--gradient-gold)]"
          aria-hidden
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-3 top-24 z-50 lg:hidden rounded-2xl glass border border-border shadow-elegant p-4"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {links.map((l) => (
                <Link
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-3 rounded-lg hover:bg-secondary transition-colors ${
                    isActive(l.to) ? "bg-secondary text-primary" : "text-foreground/90"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-gold)] px-5 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)]"
              >
                <Heart className="h-4 w-4" /> Donate Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}