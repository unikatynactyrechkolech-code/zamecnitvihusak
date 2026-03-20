import Link from 'next/link'
import { neighborhoodData, extendedPrahaData } from '@/app/locality-data'
import { prahaZapadData, prahaVychodData } from '@/app/outskirts-data'

const prahaDistricts = Array.from({ length: 22 }, (_, i) => ({
  num: i + 1,
  neighborhoods: neighborhoodData.filter(n => n.parentDistrict === `Praha ${i + 1}`),
}))

export default function CoverageSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section bg-dark">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle animate-fade-in">Pokrytí</span>
          <h2 className="section-title animate-fade-in">Působíme v celé Praze a okolí</h2>
          <p className="section-description animate-fade-in" style={{ color: '#adb5bd' }}>
            Vyberte svou lokalitu – jsme připraveni přijet kamkoliv v Praze i okolních obcích.
          </p>
        </div>

        {/* Praha 1-22 s městskými částmi */}
        <div className="coverage-full-section">
          <h3 className="coverage-region-title">
            <i className="fas fa-city"></i> Praha
          </h3>
          <div className="coverage-districts-grid">
            {prahaDistricts.map(({ num, neighborhoods }) => (
              <div key={num} className="coverage-district-block">
                <Link
                  href={num <= 10 ? `/zamecnik-praha-${num}` : `/praha-${num}`}
                  className="coverage-district-main"
                >
                  Praha {num}
                </Link>
                {neighborhoods.length > 0 && (
                  <div className="coverage-neighborhoods">
                    {neighborhoods.map(n => (
                      <Link
                        key={n.slug}
                        href={`/${n.slug.replace('zamecnik-', '')}`}
                        className="coverage-neighborhood-link"
                      >
                        {n.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Praha-západ */}
        <div className="coverage-full-section">
          <h3 className="coverage-region-title">
            <i className="fas fa-map-marker-alt"></i> Praha-západ
          </h3>
          <div className="coverage-villages-grid">
            {prahaZapadData.filter(v => v.type === 'village').map(village => (
              <Link
                key={village.slug}
                href={`/${village.slug.replace('zamecnik-', '')}`}
                className="coverage-village-link"
              >
                {village.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Praha-východ */}
        <div className="coverage-full-section">
          <h3 className="coverage-region-title">
            <i className="fas fa-map-marker-alt"></i> Praha-východ
          </h3>
          <div className="coverage-villages-grid">
            {prahaVychodData.filter(v => v.type === 'village').map(village => (
              <Link
                key={village.slug}
                href={`/${village.slug.replace('zamecnik-', '')}`}
                className="coverage-village-link"
              >
                {village.name}
              </Link>
            ))}
          </div>
        </div>

        <p className="coverage-note animate-fade-in" style={{ marginTop: '2rem' }}>
          <i className="fas fa-info-circle"></i>
          Nenašli jste svou obec? Zavolejte nám – pokrýváme i další lokality do 50 km od Prahy.
        </p>
      </div>
    </section>
  )
}
