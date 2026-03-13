import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCall from '@/components/FloatingCall'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollAnimations from '@/components/ScrollAnimations'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Zámečnictví Husák – Nonstop zámečník Praha | Otevírání zámků 24/7',
    template: '%s | Zámečnictví Husák',
  },
  description: 'Zámečnictví Husák – Nonstop zámečnická pohotovost v Praze. Otevírání zámků, výměna vložek, montáž bezpečnostních dveří. Příjezd do 20 minut. ☎ 606 588 222',
  keywords: 'zámečník Praha, zámečnická pohotovost, otevírání zámků, výměna zámků, nonstop zámečník, bezpečnostní dveře Praha',
  authors: [{ name: 'Zámečnictví Husák' }],
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://zamecnictvi-husak.vercel.app',
    siteName: 'Zámečnictví Husák',
    title: 'Zámečnictví Husák – Nonstop zámečník Praha',
    description: 'Profesionální zámečnické služby v Praze. Otevírání zámků, výměna vložek, montáž bezpečnostních dveří. Nonstop pohotovost 24/7.',
    images: [
      {
        url: 'https://zamecnictvi-husak.cz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zámečnictví Husák Praha',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://zamecnictvi-husak.vercel.app',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={poppins.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Locksmith',
              name: 'Zámečnictví Husák',
              url: 'https://zamecnictvi-husak.vercel.app',
              telephone: ['+420606588222', '+420776447729'],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Herbenova 727/38',
                addressLocality: 'Praha 10',
                postalCode: '102 00',
                addressCountry: 'CZ',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 50.0755,
                longitude: 14.4378,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                  'Friday', 'Saturday', 'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              areaServed: {
                '@type': 'City',
                name: 'Praha',
              },
              priceRange: 'od 1200 Kč',
              image: 'https://zamecnictvi-husak.cz/og-image.jpg',
              description: 'Profesionální zámečnické služby v Praze 24/7. Otevírání zámků, výměna vložek, montáž bezpečnostních dveří.',
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        <LoadingScreen />
        <Header />
        {children}
        <Footer />
        <FloatingCall />
        <ScrollAnimations />
      </body>
    </html>
  )
}
