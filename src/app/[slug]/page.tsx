import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getLocalityBySlug,
  getAllLocalitySlugs,
  getServicesForLocality,
  getProcessSteps,
} from '@/app/locality-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Helper to convert URL slug back to full slug
function resolveFullSlug(urlSlug: string): string {
  // Try all possible formats and return the one that exists
  const possibleSlugs = [
    `zamecnik-${urlSlug}`,        // e.g. zamecnik-praha-11 or zamecnik-praha-zizkov
    `zamecnik-praha-${urlSlug}`,  // e.g. zamecnik-praha-hostivice (if urlSlug is just "hostivice")
  ]
  return possibleSlugs[0] // We'll check existence in the function
}

export async function generateStaticParams() {
  const slugs = getAllLocalitySlugs()
  return slugs.map((slug) => ({
    // Remove 'zamecnik-' prefix for URL
    // zamecnik-praha-11 -> praha-11
    // zamecnik-praha-zizkov -> praha-zizkov  
    // zamecnik-hostivice -> hostivice
    slug: slug.replace('zamecnik-', ''),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  // Add 'zamecnik-' prefix back
  const fullSlug = `zamecnik-${slug}`
  const data = getLocalityBySlug(fullSlug)
  
  if (!data) return {}

  const title = `Zámečník ${data.name} – Nonstop pohotovost 24/7`
  const description = `Zámečnická pohotovost ${data.name} – rychlý příjezd do ${data.arrivalTime}. Otevírání zámků, výměna vložek, bezpečnostní dveře. ☎ 606 588 222`

  return {
    title,
    description,
    alternates: { canonical: `https://zamecnitvihusak.vercel.app/${slug}` },
    openGraph: {
      title,
      description,
    },
  }
}

export default async function LocalityPage({ params }: PageProps) {
  const { slug } = await params
  // Add 'zamecnik-' prefix back
  const fullSlug = `zamecnik-${slug}`
  const data = getLocalityBySlug(fullSlug)

  if (!data) {
    notFound()
  }

  const services = getServicesForLocality()
  const process = getProcessSteps()

  return (
    <>
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

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>🔑 Zámečník {data.name} – Rychlá pomoc 24/7</h2>
            <p className="animate-fade-in">
              Potřebujete zámečníka v lokalitě {data.name}? Zámečnictví Husak poskytuje 
              profesionální zámečnické služby nonstop – 24 hodin denně, 7 dní v týdnu.
              {data.parentDistrict && ` Působíme v celé oblasti ${data.parentDistrict} a okolí.`}
            </p>

            <div className="highlight-box animate-fade-in">
              <h3><i className="fas fa-clock"></i> Příjezd do {data.arrivalTime}</h3>
              <p>{data.description}</p>
            </div>

            {data.highlights.length > 0 && (
              <>
                <h3>Oblasti které pokrýváme:</h3>
                <ul className="location-list">
                  {data.highlights.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </>
            )}

            <h2>🔧 Naše služby v lokalitě {data.name}</h2>
            <ul className="check-list">
              {services.map((svc) => (
                <li key={svc}><i className="fas fa-check"></i> {svc}</li>
              ))}
            </ul>

            <h2>📋 Jak to funguje</h2>
            <ol className="process-list">
              {process.map((step) => (
                <li key={step.title}><strong>{step.title}:</strong> {step.desc}</li>
              ))}
            </ol>

            <div className="problems-grid">
              <div className="problem-card animate-fade-in">
                <div className="problem-icon">
                  <i className="fas fa-door-closed"></i>
                </div>
                <h3>Zabouchnuté dveře</h3>
                <p>Otevřeme jakékoli zabouchnuté dveře bez poškození. Rychlý příjezd a profesionální přístup.</p>
              </div>
              <div className="problem-card animate-fade-in delay-1">
                <div className="problem-icon">
                  <i className="fas fa-key"></i>
                </div>
                <h3>Ztracené klíče</h3>
                <p>Po ztrátě klíčů doporučujeme výměnu vložky. Máme skladem bezpečnostní vložky všech typů.</p>
              </div>
              <div className="problem-card animate-fade-in delay-2">
                <div className="problem-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h3>Zlomený klíč</h3>
                <p>Vyjmeme zlomený klíč ze zámku a v případě potřeby vyměníme vložku za novou.</p>
              </div>
              <div className="problem-card animate-fade-in delay-3">
                <div className="problem-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Po vloupání</h3>
                <p>Zajistíme poškozené dveře a vyměníme zámky. Poradíme s lepším zabezpečením.</p>
              </div>
            </div>

            <h2>💰 Orientační ceník</h2>
            <div className="price-table-wrapper">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Služba</th>
                    <th>Cena od</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Otevření zabouchnutých dveří</td>
                    <td><strong>1 200 Kč</strong></td>
                  </tr>
                  <tr>
                    <td>Otevření bezpečnostních dveří</td>
                    <td><strong>1 800 Kč</strong></td>
                  </tr>
                  <tr>
                    <td>Výměna cylindrické vložky</td>
                    <td><strong>800 Kč</strong></td>
                  </tr>
                  <tr>
                    <td>Montáž bezpečnostního kování</td>
                    <td><strong>1 500 Kč</strong></td>
                  </tr>
                  <tr>
                    <td>Otevření trezoru</td>
                    <td><strong>2 500 Kč</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-center">
              <small>* Ceny jsou orientační. Přesnou cenu vám sdělíme po telefonu. Noční příplatek (22:00-6:00): +500 Kč</small>
            </p>

            <div className="cta-box">
              <h3>Potřebujete zámečníka v lokalitě {data.name}?</h3>
              <p>Zavolejte nám a budeme u vás co nejdříve!</p>
              <a href="tel:+420606588222" className="btn btn-primary btn-lg">
                <i className="fas fa-phone"></i> 606 588 222
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
