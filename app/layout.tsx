import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingDonate } from "@/components/site/FloatingDonate";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SONRU ISELE Charity Foundation",
  description:
    "SONRU ISELE Charity Foundation is a Nigerian nonprofit advancing inclusive human development through healthcare, education, enterprise support, infrastructure, accommodation and youth empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${merriweather.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingDonate />
      </body>
    </html>
  );
}