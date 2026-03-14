import Link from 'next/link'
import type { LocalityData } from '@/app/locality-data'

interface CrossLinksProps {
  localities: LocalityData[]
  currentName: string
}

export default function CrossLinks({ localities, currentName }: CrossLinksProps) {
  if (localities.length === 0) return null

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">🗺️ Zámečník v okolí – {currentName}</h2>
          <p className="section-description">Působíme i v dalších částech Prahy a okolí</p>
        </div>
        <div className="crosslinks-grid">
          {localities.map((loc) => (
            <Link
              key={loc.slug}
              href={`/${loc.slug.replace('zamecnik-', '')}`}
              className="crosslink-card"
            >
              <div className="crosslink-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="crosslink-info">
                <h3>{loc.name}</h3>
                <span>{loc.arrivalTime}</span>
              </div>
              <i className="fas fa-chevron-right crosslink-arrow"></i>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
