import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://elitebarberbatam.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Elite Barber Batam · Elite Hair Studio — Premium Grooming, Batam",
  description:
    "Elite Barber Batam & Elite Hair Studio — Batam's premier premium barbershop and hair salon. Precision cuts, hot-towel shaves, and luxury studio styling across two locations: Penuin Centre & Tunas Bizpark. Book via WhatsApp.",
  keywords: [
    "Best premium barber Batam",
    "Elite Hair Studio Batam",
    "Haircut Penuin Centre Batam",
    "Luxury men hair spa Batam Centre",
    "Singaporean tourist barber Batam",
  ],
  applicationName: "Elite Barber Batam",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Elite Barber Batam · Elite Hair Studio",
    description:
      "Batam's premier premium grooming house. Precision cuts, hot-towel shaves, and luxury studio styling. Look Your Best.",
    siteName: "Elite Barber Batam",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Barber Batam · Elite Hair Studio",
    description: "Batam's premier premium grooming house. Look Your Best.",
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HairSalon", "BarberShop", "LocalBusiness"],
      "@id": `${SITE_URL}/#penuin`,
      name: "Elite Barber Batam — Penuin Centre",
      image: `${SITE_URL}/logo.png`,
      url: SITE_URL,
      telephone: "+6282283712380",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Komp. Penuin Centre No.15 Blk A, Batu Selicin",
        addressLocality: "Kec. Lubuk Baja, Kota Batam",
        addressRegion: "Kepulauan Riau",
        postalCode: "29411",
        addressCountry: "ID",
      },
      areaServed: ["Batam", "Singapore", "Malaysia"],
      sameAs: ["https://www.instagram.com/elit3barber.official/"],
    },
    {
      "@type": ["HairSalon", "BarberShop", "LocalBusiness"],
      "@id": `${SITE_URL}/#bizpark`,
      name: "Elite Hair Studio — Tunas Bizpark, Batam Centre",
      image: `${SITE_URL}/logo.png`,
      url: SITE_URL,
      telephone: "+6282283712380",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tunas Bizpark, Jl. Selasih No.08 Blok B, Belian",
        addressLocality: "Batam Centre, Kota Batam",
        addressRegion: "Kepulauan Riau",
        postalCode: "29432",
        addressCountry: "ID",
      },
      areaServed: ["Batam", "Singapore", "Malaysia"],
      sameAs: ["https://www.instagram.com/elit3barber.official/"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
