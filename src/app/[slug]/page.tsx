import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getLocalityBySlug,
  getAllLocalitySlugs,
  getServicesForLocality,
  getProcessSteps,
  getRelatedLocalities,
  getUniqueIntro,
  getUniqueProblemIntro,
  getUniqueCta,
} from '@/app/locality-data'
import Reviews from '@/components/Reviews'
import CrossLinks from '@/components/CrossLinks'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllLocalitySlugs()
  return slugs.map((slug) => ({
    slug: slug.replace('zamecnik-', ''),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const fullSlug = `zamecnik-${slug}`
  const data = getLocalityBySlug(fullSlug)
  
  if (!data) return {}

  const highlights = data.highlights.length > 0 ? ` Oblast: ${data.highlights.slice(0, 4).join(', ')}.` : ''
  const title = `Zámečník ${data.name} – Nonstop pohotovost 24/7 | Otevírání zámků`
  const description = `Zámečnická pohotovost ${data.name} – rychlý příjezd do ${data.arrivalTime}. Otevírání zámků, výměna vložek, bezpečnostní dveře.${highlights} ✆ 734 565 987`

  return {
    title,
    description,
    alternates: { canonical: `https://www.zamecnikhusak.cz/${slug}` },
    openGraph: {
      title: `Zámečník ${data.name} – Nonstop zámečnická pohotovost`,
      description: `Profesionální zámečnické služby v lokalitě ${data.name}. Příjezd do ${data.arrivalTime}. Otevírání zámků, výměna vložek.`,
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

export default async function LocalityPage({ params }: PageProps) {
  const { slug } = await params
  const fullSlug = `zamecnik-${slug}`
  const data = getLocalityBySlug(fullSlug)

  if (!data) {
    notFound()
  }

  const services = getServicesForLocality()
  const process = getProcessSteps()
  const relatedLocalities = getRelatedLocalities(fullSlug)
  const uniqueIntro = getUniqueIntro(fullSlug, data.name, data.parentDistrict)
  const problemIntro = getUniqueProblemIntro(fullSlug, data.name)
  const cta = getUniqueCta(fullSlug, data.name)

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Domů</Link>
            <i className="fas fa-chevron-right"></i>
            {data.parentDistrict && (
              <>
                <Link href={`/zamecnik-praha-${data.parentDistrict.replace('Praha ', '')}`}>
                  {data.parentDistrict}
                </Link>
                <i className="fas fa-chevron-right"></i>
              </>
            )}
            <span>Zámečník {data.name}</span>
          </div>
          <h1 className="page-title">ZÁMEČNÍK {data.name.toUpperCase()}</h1>
          <p className="page-subtitle">Nonstop zámečnická pohotovost – příjezd do {data.arrivalTime}</p>
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
                <span>{data.arrivalTime}</span>
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
            <h2>🔑 Zámečník {data.name} – Rychlá pomoc 24/7</h2>
            <p>{uniqueIntro}</p>

            <div className="locality-description-box">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links - clickable localities */}
      <CrossLinks localities={relatedLocalities} currentName={data.name} />

      {/* Areas */}
      <section className="section">
        <div className="container">
          <div className="locality-intro">
            {data.highlights.length > 0 && (
              <div className="locality-areas">
                <h3><i className="fas fa-map-marker-alt"></i> Oblasti které pokrýváme</h3>
                <div className="locality-areas-grid">
                  {data.highlights.map((area) => (
                    <div key={area} className="locality-area-tag">{area}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">🔧 Naše služby v lokalitě {data.name}</h2>
          </div>
          <div className="locality-services-grid">
            {services.map((svc) => (
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
            {process.map((step, i) => (
              <div key={step.title} className="locality-process-card">
                <div className="locality-process-number">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common problems */}
      <section className="section bg-dark">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title" style={{ color: '#fff' }}>Nejčastější situace v {data.name}</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 2rem' }}>{problemIntro}</p>
          </div>
          <div className="locality-problems-grid">
            <div className="locality-problem-card">
              <div className="locality-problem-icon"><i className="fas fa-door-closed"></i></div>
              <h3>Zabouchnuté dveře</h3>
              <p>Otevřeme jakékoli zabouchnuté dveře bez poškození.</p>
            </div>
            <div className="locality-problem-card">
              <div className="locality-problem-icon"><i className="fas fa-key"></i></div>
              <h3>Ztracené klíče</h3>
              <p>Po ztrátě klíčů doporučujeme výměnu vložky.</p>
            </div>
            <div className="locality-problem-card">
              <div className="locality-problem-icon"><i className="fas fa-lock"></i></div>
              <h3>Zlomený klíč</h3>
              <p>Vyjmeme zlomený klíč a vyměníme vložku za novou.</p>
            </div>
            <div className="locality-problem-card">
              <div className="locality-problem-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Po vloupání</h3>
              <p>Zajistíme dveře a vyměníme zámky. Poradíme s lepším zabezpečením.</p>
            </div>
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
      <Reviews serviceName={`Zámečník ${data.name} – Nonstop pohotovost`} />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>{cta.heading}</h2>
              <p>{cta.sub}</p>
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
