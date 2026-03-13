import type { Metadata } from 'next'
import Link from 'next/link'
import { prahaData } from '@/app/zamecnik-praha-data'

export function generatePrahaMetadata(num: string): Metadata {
  const data = prahaData[num]
  if (!data) return {}

  return {
    title: data.title,
    description: `Zámečník Praha ${num} – nonstop zámečnická pohotovost v oblasti ${data.areas.join(', ')}. Příjezd do ${data.time}. ☎ 606 588 222`,
    alternates: { canonical: `https://zamecnitvihusak.vercel.app/zamecnik-praha-${num}` },
    openGraph: {
      title: `${data.title} – Nonstop zámečnická pohotovost`,
      description: `Profesionální zámečnické služby v Praze ${num}. ${data.areas.join(', ')}. Příjezd do ${data.time}.`,
    },
  }
}

export default function PrahaPageContent({ num }: { num: string }) {
  const data = prahaData[num]
  if (!data) return null

  return (
    <>
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

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>🔑 {data.title} – Rychlá pomoc 24/7</h2>
            <p>{data.intro}</p>

            <div className="location-image animate-fade-in">
              <img src={data.imageUrl} alt={data.imageAlt} loading="lazy" />
              <p className="image-caption">
                <i className="fas fa-map-marker-alt"></i> {data.imageCaption}
              </p>
            </div>

            <h2>📍 {data.district} – Kde přesně působíme</h2>
            <p>{data.description}</p>

            <h3>Městské části a lokality:</h3>
            <ul className="location-list">
              {data.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>

            <div className="highlight-box">
              <h3><i className="fas fa-clock"></i> Příjezd do {data.time}</h3>
              <p>{data.coverage}</p>
            </div>

            <h2>🔧 Naše služby v Praze {data.num}</h2>
            <ul className="check-list">
              {data.services.map((svc) => (
                <li key={svc}><i className="fas fa-check"></i> {svc}</li>
              ))}
            </ul>

            <h2>📋 Jak to funguje</h2>
            <ol className="process-list">
              {data.process.map((step) => (
                <li key={step.title}><strong>{step.title}:</strong> {step.desc}</li>
              ))}
            </ol>

            <div className="cta-box">
              <h3>Potřebujete zámečníka v Praze {data.num}?</h3>
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
