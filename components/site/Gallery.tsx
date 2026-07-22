"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const g1 = "/assets/gallery-1.jpg";
const g2 = "/assets/gallery-2.jpg";
const g3 = "/assets/gallery-3.jpg";
const g4 = "/assets/gallery-4.jpg";
const g5 = "/assets/gallery-5.jpeg";
const g6 = "/assets/gallery-6.jpeg";
const g7 = "/assets/gallery-7.jpeg";
const g8 = "/assets/gallery-8.jpeg";
const g9 = "/assets/gallery-9.jpeg";
const g10 = "/assets/gallery-10.jpeg";
const g11 = "/assets/gallery-11.jpeg";
const g12 = "/assets/gallery-12.jpeg";
const g13 = "/assets/gallery-13.jpeg";
const g14 = "/assets/gallery-14.jpeg";
const g15 = "/assets/gallery-15.jpeg";
const g17 = "/assets/gallery-17.jpeg";
const g18 = "/assets/gallery-18.jpeg";
const g19 = "/assets/gallery-19.jpeg";
const g20 = "/assets/gallery-20.jpeg";
const g21 = "/assets/gallery-21.jpeg";
const g22 = "/assets/gallery-22.jpeg";
const g23 = "/assets/gallery-23.jpeg";
const healthcareImg = "/assets/impact-health.jpg";
const enterpriseImg = "/assets/impact-enterprise.jpg";
const educationImg = "/assets/impact-education.jpg";

const items = [
  { src: g1, alt: "Outreach: distributing food packages to a village", span: "row-span-2" },
  { src: g2, alt: "Youth in a digital-skills training workshop", span: "" },
  { src: g3, alt: "Mother and baby at a free medical checkup", span: "" },
  { src: g4, alt: "Community gathering under a tree at sunset", span: "col-span-2" },
  { src: g5, alt: "Local leader addressing the community", span: "" },
  { src: g6, alt: "Volunteers helping with a community project", span: "row-span-2" },
  { src: g7, alt: "Local community members participating in a meeting", span: "" },
  { src: g8, alt: "Community members working together on a project", span: "" },
  { src: g9, alt: "Community members working together on a project", span: "col-span-2" },
  { src: g10, alt: "Community members working together on a project", span: "col-span-2" },
  { src: g11, alt: "Community members working together on a project", span: "" },
  { src: g12, alt: "Community members working together on a project", span: "" },
  { src: g13, alt: "Community members working together on a project", span: "" },
  { src: g14, alt: "Community members working together on a project", span: "col-span-2" },
  { src: g15, alt: "Community members working together on a project", span: "" },
  { src: g17, alt: "Community members working together on a project", span: "" },
  { src: g18, alt: "Community members working together on a project", span: "col-span-2" },
  { src: g19, alt: "Community members working together on a project", span: "col-span-2" },
  { src: g20, alt: "Community members working together on a project", span: "" },
  { src: g21, alt: "Community members working together on a project", span: "row-span-2" },
  { src: g22, alt: "Community members working together on a project", span: "" },
  { src: g23, alt: "Community members working together on a project", span: "col-span-2" },
  { src: healthcareImg, alt: "Nurse caring for an elderly patient", span: "" },
  { src: enterpriseImg, alt: "Young entrepreneur in her tailoring business", span: "row-span-2" },
  { src: educationImg, alt: "Children smiling in a classroom", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-background py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
                <span className="h-px w-8 bg-gold" /> Gallery
              </span>
            </Reveal>
            <Reveal delay={0.5}>
              <h2 className="mt-5 max-w-2xl text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Moments from the field.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <p className="max-w-md text-muted-foreground">
              Photographs from outreach programs, youth empowerment and community development across
              Nigeria.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-4 right-4 translate-y-2 text-xs text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {it.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}