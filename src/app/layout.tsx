import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCall from '@/components/FloatingCall'
import LoadingScreen from '@/components/LoadingScreen'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Zámečník Husak – Nonstop zámečník Praha | Otevírání zámků 24/7',
    template: '%s | Zámečník Husak',
  },
  description: 'Zámečník Husak – Nonstop zámečnická pohotovost v Praze. Otevírání zámků, výměna vložek, montáž bezpečnostních dveří. Příjezd do 20 minut. ☎ 734 565 987',
  keywords: 'zámečník Praha, zámečnická pohotovost, otevírání zámků, výměna zámků, nonstop zámečník, bezpečnostní dveře Praha',
  authors: [{ name: 'Zámečník Husak' }],
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://zamecnitvihusak.vercel.app',
    siteName: 'Zámečník Husak',
    title: 'Zámečník Husak – Nonstop zámečník Praha',
    description: 'Profesionální zámečnické služby v Praze. Otevírání zámků, výměna vložek, montáž bezpečnostních dveří. Nonstop pohotovost 24/7.',
    images: [
      {
        url: 'https://zamecnitvihusak.vercel.app/favicon.svg',
        width: 100,
        height: 120,
        alt: 'Zámečník Husak Praha',
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
    canonical: 'https://zamecnitvihusak.vercel.app',
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
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          as="style"
          crossOrigin="anonymous"
        />
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
              name: 'Zámečník Husak',
              url: 'https://zamecnitvihusak.vercel.app',
              telephone: ['+420734565987', '+420776447729'],
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
              image: 'https://zamecnitvihusak.vercel.app/favicon.svg',
              description: 'Profesionální zámečnické služby v Praze 24/7. Otevírání zámků, výměna vložek, montáž bezpečnostních dveří.',
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
      </body>
    </html>
  )
}
