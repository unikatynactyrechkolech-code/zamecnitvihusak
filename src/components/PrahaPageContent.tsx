import type { Metadata } from 'next'
import Link from 'next/link'
import { prahaData } from '@/app/zamecnik-praha-data'
import { neighborhoodData } from '@/app/locality-data'
import Reviews from '@/components/Reviews'
import CrossLinks from '@/components/CrossLinks'
import CoverageSection from '@/components/CoverageSection'

export function generatePrahaMetadata(num: string): Metadata {
  const data = prahaData[num]
  if (!data) return {}

  const areas = data.areas.slice(0, 5).join(', ')
  return {
    title: `Zámečník Praha ${num} – Nonstop pohotovost 24/7 | Otevírání zámků`,
    description: `Zámečník Praha ${num} – nonstop zámečnická pohotovost. Otevírání zámků, výměna vložek, bezpečnostní dveře. Oblast: ${areas}. Příjezd do ${data.time}. ✆ 734 565 987`,
    alternates: { canonical: `https://www.zamecnikhusak.cz/zamecnik-praha-${num}` },
    openGraph: {
      title: `Zámečník Praha ${num} – Nonstop zámečnická pohotovost`,
      description: `Profesionální zámečnické služby v Praze ${num}. ${areas}. Příjezd do ${data.time}. Otevírání zámků, výměna vložek, bezpečnostní dveře.`,
    },
  }
}

const pricingCards = [
  {
    icon: 'fa-lock-open',
    title: 'Otevírání zámků',
    items: [
      { service: 'Otevření zabouchnutých dveří', price: 'od 1 200 Kč' },
      { service: 'Otevření bezpečnostních dveří', price: 'od 1 800 Kč' },
      { service: 'Otevření zámku po vloupání', price: 'od 2 000 Kč' },
    ],
  },
  {
    icon: 'fa-key',
    title: 'Výměna zámků a vložek',
    items: [
      { service: 'Výměna cylindrické vložky', price: 'od 1 800 Kč' },
      { service: 'Bezpečnostní vložka FAB', price: 'od 2 500 Kč' },
      { service: 'Montáž bezp. kování', price: 'od 1 500 Kč' },
    ],
  },
  {
    icon: 'fa-door-closed',
    title: 'Bezpečnostní dveře',
    items: [
      { service: 'Dveře třída 2', price: 'od 15 000 Kč' },
      { service: 'Dveře třída 3', price: 'od 25 000 Kč' },
      { service: 'Montáž dveří', price: 'od 3 000 Kč' },
    ],
  },
  {
    icon: 'fa-vault',
    title: 'Trezory a autoklíče',
    items: [
      { service: 'Otevření trezoru', price: 'od 3 000 Kč' },
      { service: 'Otevření zamknutého auta', price: 'od 1 500 Kč' },
      { service: 'Autoklíč s čipem', price: 'od 3 000 Kč' },
    ],
  },
]

export default function PrahaPageContent({ num }: { num: string }) {
  const data = prahaData[num]
  if (!data) return null

  const relatedLocalities = neighborhoodData
    .filter((n) => n.parentDistrict === `Praha ${num}`)
    .slice(0, 8)

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Domů</Link>
            <i className="fas fa-chevron-right"></i>
            <span>{data.title}</span>
          </div>
          <h1 className="page-title">{data.title.toUpperCase()}</h1>
          <p className="page-subtitle">Nonstop zámečnická pohotovost – příjezd do {data.time}</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="locality-stats-bar">
        <div className="container">
          <div className="locality-stats-row">
            <div className="locality-stat">
              <i className="fas fa-clock"></i>
              <div>
                <strong>Příjezd</strong>
                <span>{data.time}</span>
              </div>
            </div>
            <div className="locality-stat">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Nonstop linka</strong>
                <span>734 565 987</span>
              </div>
            </div>
            <div className="locality-stat">
              <i className="fas fa-shield-alt"></i>
              <div>
                <strong>Garance</strong>
                <span>Cena předem</span>
              </div>
            </div>
            <div className="locality-stat">
              <i className="fas fa-truck"></i>
              <div>
                <strong>Výjezd</strong>
                <span>Zdarma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="locality-intro">
            <h2>🔑 {data.title} – Rychlá pomoc 24/7</h2>
            <p>{data.intro}</p>

            <div className="location-image">
              <img src={data.imageUrl} alt={data.imageAlt} loading="lazy" />
              <p className="image-caption">
                <i className="fas fa-map-marker-alt"></i> {data.imageCaption}
              </p>
            </div>

            <h3><i className="fas fa-map-marker-alt"></i> {data.district} – Kde přesně působíme</h3>
            <p>{data.description}</p>
          </div>
        </div>
      </section>

      {/* Cross-links - clickable localities */}
      <CrossLinks localities={relatedLocalities} currentName={`Praha ${data.num}`} />

      {/* Areas */}
      <section className="section">
        <div className="container">
          <div className="locality-intro">
            <div className="locality-areas">
              <h3><i className="fas fa-map-marker-alt"></i> Městské části a lokality</h3>
              <div className="locality-areas-grid">
                {data.areas.map((area) => (
                  <div key={area} className="locality-area-tag">{area}</div>
                ))}
              </div>
            </div>

            <div className="locality-description-box">
              <div className="locality-description-box-icon"><i className="fas fa-clock"></i></div>
              <div>
                <strong>Příjezd do {data.time}</strong>
                <p>{data.coverage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">🔧 Naše služby v Praze {data.num}</h2>
          </div>
          <div className="locality-services-grid">
            {data.services.map((svc) => (
              <div key={svc} className="locality-service-item">
                <i className="fas fa-check-circle"></i>
                <span>{svc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">📋 Jak to funguje</h2>
          </div>
          <div className="locality-process-grid">
            {data.process.map((step, i) => (
              <div key={step.title} className="locality-process-card">
                <div className="locality-process-number">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">💰 Orientační ceník</h2>
            <p className="section-description">Přesnou cenu vám sdělíme předem po telefonu. Výjezd po Praze zdarma.</p>
          </div>
          <div className="locality-pricing-grid">
            {pricingCards.map((card) => (
              <div key={card.title} className="locality-pricing-card">
                <div className="locality-pricing-card-header">
                  <i className={`fas ${card.icon}`}></i>
                  <h3>{card.title}</h3>
                </div>
                <div className="locality-pricing-card-body">
                  {card.items.map((item) => (
                    <div key={item.service} className="locality-pricing-row">
                      <span className="locality-pricing-service">{item.service}</span>
                      <span className="locality-pricing-price">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="locality-pricing-note">
            <i className="fas fa-info-circle"></i>
            <span>Ceny jsou orientační včetně DPH. Noční příplatek (22:00–6:00): +500 Kč. <Link href="/cenik">Kompletní ceník →</Link></span>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews serviceName={`Zámečník Praha ${data.num} – Nonstop pohotovost`} />

      {/* Coverage - All Localities */}
      <CoverageSection />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Potřebujete zámečníka v Praze {data.num}?</h2>
              <p>Zavolejte nám a budeme u vás co nejdříve!</p>
            </div>
            <a href="tel:+420734565987" className="phone-link">
              <i className="fas fa-phone"></i>
              734 565 987
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
