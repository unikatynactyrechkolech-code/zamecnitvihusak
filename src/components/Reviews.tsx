import ReviewCard from './ReviewCard'

const GOOGLE_REVIEW_URL = 'https://www.google.com/search?sca_esv=53f9ef8ad52bf813&sxsrf=ANbL-n7xEx3o5fzriNXOablgpInjzZDjgg:1773514603073&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWaoaQdUp8BD8bsZkIJ82Un35ZOHH2oqi_dEXWHkH2-AJD-sKw3Xxl32gmYiKPFQaE81hHGUw7_s2XMu40k9QV0CMpR7SCKOQ0Cl1VVguo99rZAulXtKD6xcefIglP3yGglz31hY%3D&q=Z%C3%A1me%C4%8Dnick%C3%A1+Pohotovost+Praha+NONSTOP+Recenze&sa=X&ved=2ahUKEwj29a3fiKCTAxWgnf0HHQX2ApoQ0bkNegQIRhAH&biw=600&bih=745&dpr=2'

const reviews = [
  {
    name: 'Martin Novák',
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' rx='60' fill='%23e63946'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='48' font-family='Arial'%3EMN%3C/text%3E%3C/svg%3E",
    date: 'před 2 týdny',
    text: 'Zamkl jsem se v noci a pan Husak přijel během 15 minut. Profesionální přístup, zámek otevřel bez poškození.',
    moreText: 'Navíc mi poradil s výměnou vložky za bezpečnější variantu. Férová cena, rozhodně doporučuji každému, kdo potřebuje rychlou a spolehlivou pomoc.',
  },
  {
    name: 'Jana Procházková',
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' rx='60' fill='%231d3557'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='48' font-family='Arial'%3EJP%3C/text%3E%3C/svg%3E",
    date: 'před měsícem',
    text: 'Výborná zkušenost! Potřebovala jsem vyměnit zámky v celém bytě po stěhování.',
    moreText: 'Pan Husak vše zvládl za jedno odpoledne, poradil s výběrem bezpečnostních vložek a cena odpovídala předem dohodnuté nabídce. Žádné skryté příplatky.',
  },
  {
    name: 'Petr Dvořák',
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' rx='60' fill='%23457b9d'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='48' font-family='Arial'%3EPD%3C/text%3E%3C/svg%3E",
    date: 'před 3 měsíci',
    text: 'Montáž bezpečnostních dveří proběhla přesně podle plánu. Pan Husak je opravdový profesionál — přesný, čistá práce a hlavně férové jednání. Doporučuji!',
  },
]

interface ReviewsProps {
  serviceName: string
}

export default function Reviews({ serviceName }: ReviewsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Zámečnictví Husak',
      telephone: '+420734565987',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Herbenova 727/38',
        addressLocality: 'Praha 10',
        postalCode: '100 00',
        addressCountry: 'CZ',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      ratingCount: '710',
    },
  }

  return (
    <section className="section reviews-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container text-center">
        <h2 className="section-title">⭐ Recenze našich zákazníků</h2>

        {/* Google-style rating badge */}
        <div className="google-rating-badge">
          <div className="google-rating-logo">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          <div className="google-rating-info">
            <div className="google-rating-score">4.9</div>
            <div className="google-rating-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="google-rating-count">Na základě 710 recenzí</div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        <div className="reviews-bottom">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <i className="fab fa-google"></i> PŘIDAT RECENZI
          </a>
        </div>
      </div>
    </section>
  )
}
