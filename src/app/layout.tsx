import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.trademark} — ${site.tagline}`,
    template: `%s — ${site.trademark}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "workforce intelligence",
    "human intelligence",
    "global workforce intelligence",
    "verified talent",
    "deployment readiness",
    "enterprise workforce",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.parent,
    title: `${site.trademark} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.trademark} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06122a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${GeistSans.variable}`}
    >
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
