import type { Metadata } from "next";
import Link from "next/link";
import { Gallery } from "@/components/site/Gallery";
import { PageHeader } from "../../components/site/pageHeader";
import { ArrowRight, Heart } from "lucide-react";

const headerImg = "/assets/gallery-3.jpg";

// export const metadata: Metadata = {
//   title: "Gallery — SONRU ISELE Charity Foundation",
//   description:
//     "Photographs from the field: outreach programs, youth empowerment and community development across Nigeria.",
//   alternates: {
//     canonical: "/gallery",
//   },
//   openGraph: {
//     title: "Gallery — SONRU ISELE Charity Foundation",
//     description: "Photographs from outreach and community programs across Nigeria.",
//     url: "/gallery",
//   },
// };

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        crumb="Gallery"
        eyebrow="In Pictures"
        title="Moments from"
        highlight="the field."
        description="A growing archive of the people, partners and places that make this work possible."
        image={headerImg}
        imageAlt="Children laughing during a SONRU ISELE outreach program"
      />

      <Gallery />

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-3xl sm:text-4xl font-semibold">
            Help us capture the next chapter.
          </h2>
          <div className="flex flex-wrap gap-3">
            {/* <Link href="/donate" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition">
              <Heart className="h-4 w-4" /> Donate
            </Link> */}
            <Link href="/get-involved" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition">
              Volunteer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}