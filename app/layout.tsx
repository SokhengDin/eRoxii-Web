import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Battambang } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const battambang = Battambang({
  subsets: ["khmer"],
  weight: ["400", "700", "900"],
  variable: "--font-battambang",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D1F6B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eroxii.com"),
  title: {
    default:
      "eRoxii — Intelligent Infrastructure for the Real World | AI + IoT · Cambodia",
    template: "%s | eRoxii",
  },
  description:
    "eRoxii (ElectRobonics Matrix and Innovative Integration) engineers AI vision systems and IoT platforms deployed at scale in Cambodia — smart parking ALPR gateways, solar energy monitoring, and edge hardware.",
  keywords: [
    "eRoxii",
    "ElectRobonics",
    "AI Cambodia",
    "IoT Cambodia",
    "ALPR",
    "license plate recognition",
    "smart parking Cambodia",
    "YOLOv8",
    "solar monitoring",
    "edge AI",
    "Phnom Penh tech startup",
  ],
  authors: [
    { name: "eRoxii — ElectRobonics Matrix and Innovative Integration" },
  ],
  creator: "eRoxii",
  publisher: "eRoxii",
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      km: "/",
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "eRoxii",
    title: "eRoxii — Intelligent Infrastructure. Built for the Real World.",
    description:
      "AI vision systems & IoT platforms deployed at scale — from smart parking gates to solar energy grids across Cambodia.",
    url: "https://eroxii.com/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "eRoxii — Intelligent Infrastructure",
      },
    ],
    locale: "en_US",
    alternateLocale: ["km_KH"],
  },
  twitter: {
    card: "summary_large_image",
    title: "eRoxii — Intelligent Infrastructure. Built for the Real World.",
    description:
      "AI vision systems & IoT platforms deployed at scale across Cambodia.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "eRoxii",
  alternateName: "ElectRobonics Matrix and Innovative Integration",
  url: "https://eroxii.com/",
  logo: "https://eroxii.com/logo.png",
  image: "https://eroxii.com/og-image.png",
  description:
    "Deep-tech startup building AI vision systems and IoT platforms deployed at scale across Cambodia — smart parking ALPR, solar energy monitoring, and edge hardware.",
  foundingLocation: "Phnom Penh, Cambodia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phnom Penh",
    addressCountry: "KH",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "din.sokheng08@gmail.com",
      telephone: "+855-11-542-766",
      areaServed: "KH",
      availableLanguage: ["en", "km"],
    },
  ],
  sameAs: ["https://eroxii.com"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrains.variable} ${battambang.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
