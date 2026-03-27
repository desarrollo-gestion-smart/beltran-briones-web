import type { Metadata } from "next";
import { Work_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beltranbriones.com"),
  title: {
    default: "Beltrán Briones | Desarrollador Inmobiliario en Buenos Aires",
    template: "%s | Beltrán Briones",
  },
  description:
    "Beltrán Briones, cofundador de Grupo Briones. Más de 12 edificios y 898 departamentos entregados en Buenos Aires. Referente del Real Estate en Argentina.",
  keywords: [
    "Beltrán Briones",
    "Grupo Briones",
    "desarrolladora inmobiliaria Buenos Aires",
    "inversión inmobiliaria Argentina",
    "edificios Buenos Aires",
    "real estate Argentina",
    "proyectos inmobiliarios",
    "departamentos nuevos Buenos Aires",
  ],
  authors: [{ name: "Beltrán Briones" }],
  creator: "Beltrán Briones",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://beltranbriones.com",
    siteName: "Beltrán Briones",
    title: "Beltrán Briones | Desarrollador Inmobiliario en Buenos Aires",
    description:
      "Cofundador de Grupo Briones. Más de 12 edificios y 898 departamentos entregados en Buenos Aires.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beltrán Briones | Desarrollador Inmobiliario",
    description:
      "Cofundador de Grupo Briones. Referente del Real Estate en Argentina.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://beltranbriones.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Beltrán Briones",
  jobTitle: "Desarrollador Inmobiliario - Cofundador Grupo Briones",
  description:
    "Cofundador de la desarrolladora inmobiliaria Grupo Briones, una de las más importantes de la Ciudad de Buenos Aires.",
  url: "https://beltranbriones.com",
  sameAs: [
    "https://www.instagram.com/beltranbriones/",
    "https://www.facebook.com/beltran.briones.9",
    "https://www.linkedin.com/in/beltr%C3%A1n-briones-4b6bb11b1/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Grupo Briones",
    "@id": "https://grupobriones.com.ar",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
  },
  knowsAbout: [
    "Real Estate",
    "Desarrollo Inmobiliario",
    "Inversión Inmobiliaria",
    "Construcción",
    "Marketing Inmobiliario",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${workSans.variable} ${montserrat.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
