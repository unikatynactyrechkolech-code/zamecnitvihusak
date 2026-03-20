import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
    default: 'Zámečník Praha – Nonstop zámečnická pohotovost 24/7 | Zámečník Husak',
    template: '%s | Zámečník Husak Praha',
  },
  description: 'Zámečník Husak – nonstop zámečnická pohotovost Praha a okolí. Otevírání zámků, výměna vložek, montáž bezpečnostních dveří, otevírání aut, trezorů. Příjezd do 20 minut. ☎ 734 565 987',
  keywords: 'zámečník Praha, zámečnická pohotovost, otevírání zámků, výměna zámků, nonstop zámečník, bezpečnostní dveře Praha, otevírání aut, otevírání bytů, výměna vložek, zámečník pohotovost Praha, zámečník nonstop, zamknuté dveře, zabouchnuté dveře, autoklíče, montáž kování, zámečník Husak',
  authors: [{ name: 'Zámečník Husak' }],
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://www.zamecnikhusak.cz',
    siteName: 'Zámečník Husak',
    title: 'Zámečník Praha – Nonstop zámečnická pohotovost 24/7',
    description: 'Profesionální zámečnické služby v Praze a okolí. Otevírání zámků, výměna vložek, montáž bezpečnostních dveří. Nonstop pohotovost 24/7. Příjezd do 20 minut.',
    images: [
      {
        url: 'https://www.zamecnikhusak.cz/favicon.svg',
        width: 100,
        height: 120,
        alt: 'Zámečník Husak Praha – zámečnická pohotovost nonstop',
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
    canonical: 'https://www.zamecnikhusak.cz',
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
              alternateName: 'Zámečnictví Husak',
              url: 'https://www.zamecnikhusak.cz',
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
              areaServed: [
                { '@type': 'City', name: 'Praha' },
                { '@type': 'AdministrativeArea', name: 'Praha-západ' },
                { '@type': 'AdministrativeArea', name: 'Praha-východ' },
              ],
              serviceType: ['Otevírání zámků', 'Výměna vložek a zámků', 'Montáž bezpečnostních dveří', 'Otevírání aut', 'Otevírání trezorů', 'Výroba autoklíčů', 'Montáž kování'],
              priceRange: 'od 1200 Kč',
              currenciesAccepted: 'CZK',
              paymentAccepted: 'Hotovost, Platební karta, Převod',
              image: 'https://www.zamecnikhusak.cz/favicon.svg',
              description: 'Profesionální zámečnické služby v Praze a okolí 24/7. Otevírání zámků, výměna vložek, montáž bezpečnostních dveří, otevírání aut a trezorů.',
              sameAs: [
                'https://www.google.com/maps/place/%F0%9F%94%91%F0%9F%94%93z%C3%A1me%C4%8Dn%C3%ADk+pohotovost+24%2F7+Hus%C3%A1k',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                bestRating: '5',
                ratingCount: '20',
                reviewCount: '20',
              },
              review: [
                {
                  '@type': 'Review',
                  author: { '@type': 'Person', name: 'Robert Dykovský' },
                  datePublished: '2026-02-15',
                  reviewBody: 'Skvělý přístup a naprostá spokojenost. Řešila jsem atypický zámek a chybějící klíče, se kterými mě předtím několik zámečníků odmítlo, že to dělat nebudou. Tady žádný problém – pán přijel rychle, vše si vzal, poradil si i s atypem a do druhého dne bylo hotovo. Velmi šikovný, ochotný, sympatický, profesionální a lidský přístup.',
                  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                },
                {
                  '@type': 'Review',
                  author: { '@type': 'Person', name: 'Josef Sekava' },
                  datePublished: '2026-01-15',
                  reviewBody: 'Zabouchl jsem dveře v noci a pan zámečník přijel do 20 minut. Otevřel bez poškození, navíc rovnou vyměnil starou vložku za bezpečnostní. Cena odpovídala tomu, co řekl předem po telefonu – žádné navyšování. Seriózní jednání, čistá práce.',
                  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                },
                {
                  '@type': 'Review',
                  author: { '@type': 'Person', name: 'Alice Neugebauerová' },
                  datePublished: '2025-12-15',
                  reviewBody: 'Po stěhování jsem potřebovala vyměnit všechny zámky v bytě. Pan Husák přijel přesně na čas, poradil s výběrem bezpečnostních vložek a vše zvládl za jedno odpoledne. Profesionální přístup, férová cena bez skrytých příplatků.',
                  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        {/* Prevent any flash before React hydrates */}
        <div
          id="ssr-loading"
          style={{
            position: 'fixed',
            inset: 0,
            background: '#fff',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          suppressHydrationWarning
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 28 V14 A11 11 0 0 1 43 14 V28" stroke="#e63946" strokeWidth="5" strokeLinecap="round" fill="none" />
            <rect x="14" y="26" width="36" height="28" rx="5" fill="#e63946" />
            <circle cx="32" cy="38" r="4" fill="white" />
            <rect x="30" y="38" width="4" height="8" rx="1" fill="white" />
          </svg>
        </div>
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
        <Analytics />
      </body>
    </html>
  )
}
