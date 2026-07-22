import type { Metadata } from "next";
import DonatePageClient from "./donatePageClient";

// export const metadata: Metadata = {
//   title: "Donate — SONRU ISELE Charity Foundation",
//   description:
//     "Make a one-time or monthly gift to SONRU ISELE Charity Foundation. Fund healthcare, education, enterprise and dignified housing for Nigerian families.",
//   alternates: {
//     canonical: "/donate",
//   },
//   openGraph: {
//     title: "Donate — SONRU ISELE Charity Foundation",
//     description: "One-time or monthly giving for healthcare, education, enterprise and housing.",
//     url: "/donate",
//   },
// };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  name: "Donate to SONRU ISELE Charity Foundation",
  recipient: { "@type": "NGO", name: "SONRU ISELE Charity Foundation" },
};

export default function DonatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DonatePageClient />
    </>
  );
}