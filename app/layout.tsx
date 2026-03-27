import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const siteUrl = 'https://beltranbriones.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Beltrán Briones | Desarrollos Inmobiliarios en Buenos Aires — Grupo Briones',
    template: '%s | Beltrán Briones',
  },
  description:
    'Invertí en desarrollos inmobiliarios en Buenos Aires con Grupo Briones. Proyectos en pozo en Palermo, Recoleta, Núñez y Saavedra. Más de 24 edificios entregados y 1.791 departamentos. Liderado por Beltrán Briones, autor de El Método Briones.',
  keywords: [
    'inversión inmobiliaria Buenos Aires',
    'desarrollos en pozo CABA',
    'Grupo Briones inmobiliaria',
    'Beltrán Briones',
    'Brigos Palermo',
    'Brigos Recoleta',
    'Brigos Núñez',
    'Casa Huidobro Saavedra',
    'departamentos en pozo Buenos Aires',
    'invertir en real estate Argentina',
    'desarrolladores inmobiliarios CABA',
    'coach empresarial Argentina',
    'El Método Briones libro',
    'inversión inmobiliaria Argentina 2025',
    'departamentos Palermo Recoleta pozo',
  ],
  authors: [{ name: 'Beltrán Briones', url: siteUrl }],
  creator: 'Beltrán Briones',
  publisher: 'Grupo Briones',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: 'Beltrán Briones — Grupo Briones',
    title: 'Beltrán Briones | Desarrollos Inmobiliarios en Buenos Aires — Grupo Briones',
    description:
      'Invertí en desarrollos inmobiliarios premium en Buenos Aires. Palermo, Recoleta, Núñez y Saavedra. Más de 1.791 departamentos entregados.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Grupo Briones — Desarrollos Inmobiliarios Buenos Aires' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beltrán Briones | Desarrollos Inmobiliarios — Grupo Briones',
    description: 'Invertí en desarrollos en pozo en Palermo, Recoleta, Núñez y Saavedra. Grupo Briones.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: siteUrl },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Beltrán Briones',
      url: siteUrl,
      jobTitle: 'Empresario y Coach Empresarial',
      description:
        'Fundador de Grupo Briones, empresa de desarrollo inmobiliario en Buenos Aires con más de 24 edificios entregados y 1.791 departamentos. Autor de El Método Briones.',
      address: { '@type': 'PostalAddress', streetAddress: 'Cerrito 1186', addressLocality: 'Buenos Aires', addressCountry: 'AR' },
      sameAs: ['https://www.instagram.com/grupobriones', 'https://www.linkedin.com/company/grupobriones'],
    },
    {
      '@type': 'RealEstateAgent',
      '@id': `${siteUrl}/#organization`,
      name: 'Grupo Briones',
      url: 'https://www.grupobriones.com.ar',
      logo: `${siteUrl}/logo.png`,
      description: 'Desarrolladora inmobiliaria especializada en proyectos residenciales en Buenos Aires, Argentina.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cerrito 1186',
        addressLocality: 'Buenos Aires',
        addressRegion: 'CABA',
        addressCountry: 'AR',
      },
      telephone: '+54-9-11-2468-2070',
      email: 'contacto@grupobriones.com.ar',
      areaServed: [
        { '@type': 'Place', name: 'Palermo, Buenos Aires' },
        { '@type': 'Place', name: 'Recoleta, Buenos Aires' },
        { '@type': 'Place', name: 'Núñez, Buenos Aires' },
        { '@type': 'Place', name: 'Saavedra, Buenos Aires' },
      ],
      founder: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Book',
      '@id': `${siteUrl}/#book`,
      name: 'El Método Briones',
      alternativeHeadline: 'Cómo Promocionar y Vender Cualquier Cosa',
      author: { '@id': `${siteUrl}/#person` },
      publisher: { '@type': 'Organization', name: 'Conecta' },
      inLanguage: 'es',
      genre: 'Negocios y Marketing',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Beltrán Briones',
      publisher: { '@id': `${siteUrl}/#person` },
      inLanguage: 'es-AR',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={outfit.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
