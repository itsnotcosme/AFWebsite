import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Alberto Ferreira — Brand Strategist, Porto Portugal",
  description:
    "Alberto Ferreira is a brand strategist and marketing professional based in Porto, specialising in luxury brand strategy, consumer psychology, and brand identity.",
  metadataBase: new URL("https://albertoferreira.pt"),
  alternates: {
    canonical: "https://albertoferreira.pt",
  },
  openGraph: {
    title: "Alberto Ferreira — Brand Strategist, Porto Portugal",
    description:
      "Alberto Ferreira is a brand strategist and marketing professional based in Porto, specialising in luxury brand strategy, consumer psychology, and brand identity.",
    url: "https://albertoferreira.pt",
    siteName: "Alberto Ferreira",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/fotoofme.jpeg",
        width: 1200,
        height: 630,
        alt: "Alberto Ferreira — Brand Strategist, Porto Portugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alberto Ferreira — Brand Strategist, Porto Portugal",
    description:
      "Alberto Ferreira is a brand strategist and marketing professional based in Porto, specialising in luxury brand strategy, consumer psychology, and brand identity.",
    images: ["/fotoofme.jpeg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alberto Ferreira",
  jobTitle: "Brand Strategist",
  url: "https://albertoferreira.pt",
  image: "https://albertoferreira.pt/fotoofme.jpeg",
  worksFor: {
    "@type": "Organization",
    name: "CAETSU TWO",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Católica Porto Business School",
  },
  sameAs: ["https://www.linkedin.com/in/albertocferreira/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto",
    addressCountry: "PT",
  },
  knowsAbout: [
    "Brand Strategy",
    "Luxury Brand Marketing",
    "Consumer Psychology",
    "Brand Identity",
    "Marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
