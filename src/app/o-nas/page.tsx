import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O nás – Zámečník Husak Praha | 15+ let zkušeností',
  description: 'Poznejte tým Zámečník Husak – více než 15 let zkušeností se zámečnickými službami v Praze. Certifikovaní specialisté, pokrytí celé Prahy a okolí 24/7. Otevírání zámků, aut, bytů a trezorů.',
  alternates: { canonical: 'https://zamecnitvihusak.vercel.app/o-nas' },
  openGraph: {
    title: 'O nás – Zámečník Husak Praha',
    description: 'Více než 15 let zkušeností. Certifikovaní zámečníci. Pokrytí celé Prahy a okolí 24/7.',
  },
}

export default function ONasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Domů</Link>
            <i className="fas fa-chevron-right"></i>
            <span>O nás</span>
          </div>
          <h1 className="page-title">O NÁS</h1>
          <p className="page-subtitle">Profesionální zámečnické služby s tradicí</p>
        </div>
      </section>

      {/* Main About */}
      <section className="section">
        <div className="container">
          <div className="about-main-grid">
            <div className="about-main-content animate-fade-in">
              <span className="section-subtitle">Náš příběh</span>
              <h2 className="section-title">Zámečník s tradicí a moderním přístupem</h2>
              <p>
                Zámečník Husak je rodinná firma s více než 15letou tradicí na pražském trhu.
                Založil ji Jan Husak, který se zámečnickému řemeslu věnuje od svých učednických let
                a postupně vybudoval tým profesionálů, kteří sdílí jeho vášeň pro kvalitní práci.
              </p>
              <p>
                Naší prioritou je vždy spokojenost zákazníka. Víme, že situace jako zabouchnuté
                dveře nebo nefunkční zámek mohou být stresující, proto klademe důraz na rychlost,
                profesionalitu a lidský přístup. Každého klienta bereme jako jedinečného.
              </p>
              <p>
                Pracujeme s nejmodernějšími nástroji a neustále sledujeme novinky v oboru
                bezpečnostní techniky. Naši technici pravidelně procházejí školením u předních
                výrobců zámků a bezpečnostních systémů.
              </p>
              <div className="about-highlight">
                <i className="fas fa-quote-left"></i>
                <p>
                  &ldquo;Každý zámek má svůj příběh a každý zákazník si zaslouží individuální
                  přístup. To je filozofie, která nás provází od samého začátku.&rdquo;
                </p>
                <p><strong>— Jan Husak, zakladatel</strong></p>
              </div>
            </div>

            <div className="about-image-card animate-slide-right">
              <div className="image-placeholder large">
                <i className="fas fa-tools"></i>
              </div>
              <div className="experience-box">
                <span className="number">15+</span>
                <span className="text">Let zkušeností</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section bg-light">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Kvalifikace</span>
          <h2 className="section-title animate-fade-in">Proč nám můžete důvěřovat</h2>

          <div className="qualifications-grid" style={{ marginTop: '3rem' }}>
            {[
              { icon: 'fa-certificate', title: 'Certifikovaní specialisté', desc: 'Všichni naši technici jsou certifikovaní a pravidelně proškolení u předních výrobců bezpečnostní techniky.' },
              { icon: 'fa-id-card', title: 'Živnostenské oprávnění', desc: 'Podnikáme na základě platného živnostenského oprávnění. IČO: 24734691. Vše transparentně a legálně.' },
              { icon: 'fa-shield-halved', title: 'Pojištění odpovědnosti', desc: 'Jsme pojištěni pro případ škody. Vaše dveře a majetek jsou v bezpečí při jakémkoliv zásahu.' },
            ].map((q, i) => (
              <div className={`qualification-card animate-fade-in delay-${i + 1}`} key={q.title}>
                <div className="qualification-icon">
                  <i className={`fas ${q.icon}`}></i>
                </div>
                <h3>{q.title}</h3>
                <p>{q.desc}</p>
              </div>
            ))}
          </div>

          <div className="difference-section animate-fade-in" style={{ marginTop: '2rem' }}>
            <h3>
              <i className="fas fa-star"></i>
              Co nás odlišuje od konkurence?
            </h3>
            <p>
              Na trhu je mnoho zámečnických služeb, ale ne všechny pracují férově.
              My se odlišujeme transparentním přístupem k cenám — cenu znáte vždy
              předem, než začneme pracovat. Nepoužíváme žádné triky, falešné
              &ldquo;výjezdní poplatky&rdquo; ani skryté příplatky.
            </p>
            <p>
              Navíc klademe velký důraz na nedestruktivní metody otevírání.
              Díky našim zkušenostem a profesionálnímu vybavení dokážeme otevřít
              většinu zámků bez jakéhokoliv poškození, což vám ušetří peníze za
              případné opravy.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Výhody</span>
          <h2 className="section-title animate-fade-in">Proč si vybrat Zámečníka Husaka</h2>

          <div className="advantages-grid" style={{ marginTop: '3rem' }}>
            {[
              { icon: 'fa-bolt', title: 'Příjezd do 20 minut', desc: 'Díky strategickému rozmístění techniků po Praze jsme u vás bleskově.' },
              { icon: 'fa-clock', title: 'Nonstop 24/7', desc: 'Pracujeme nepřetržitě včetně víkendů, svátků a nocí.' },
              { icon: 'fa-hand-holding-dollar', title: 'Férové ceny', desc: 'Cenu znáte předem. Žádné skryté příplatky ani dodatečné poplatky.' },
              { icon: 'fa-shield-halved', title: 'Bez poškození', desc: 'Používáme nedestruktivní metody. Vaše dveře zůstanou nepoškozené.' },
              { icon: 'fa-users', title: 'Zkušený tým', desc: 'Více než 15 let praxe v oboru a stovky spokojených zákazníků.' },
              { icon: 'fa-thumbs-up', title: 'Záruka na práci', desc: 'Na veškerou práci i materiál poskytujeme plnou záruku.' },
            ].map((a, i) => (
              <div className={`advantage-card animate-fade-in delay-${i + 1}`} key={a.title}>
                <div className="advantage-icon">
                  <i className={`fas ${a.icon}`}></i>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section bg-light">
        <div className="container">
          <div className="coverage-about-grid">
            <div className="coverage-about-content animate-slide-left">
              <span className="section-subtitle">Pokrytí</span>
              <h2 className="section-title">Působíme v celé Praze</h2>
              <p>
                Naši technici jsou strategicky rozmístěni po celé Praze, abychom
                vám mohli poskytnout co nejrychlejší servis. Průměrná doba
                příjezdu je 15–20 minut.
              </p>
              <p>
                Pokrýváme všechny městské části od <Link href="/zamecnik-praha-1">Prahy 1</Link> až
                po <Link href="/zamecnik-praha-10">Prahu 10</Link>, včetně okrajových čtvrtí.
                V případě potřeby vyjíždíme i do okolí Prahy.
              </p>
              <div className="coverage-list">
                {[
                  'Praha 1–10 kompletní pokrytí',
                  'Příjezd do 20 minut',
                  'Bez poplatku za výjezd v Praze',
                  'Okolí Prahy do 30 km',
                ].map((item) => (
                  <div className="coverage-item-check" key={item}>
                    <i className="fas fa-check"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-right">
              <div className="coverage-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {Array.from({ length: 10 }, (_, i) => (
                  <Link href={`/zamecnik-praha-${i + 1}`} className="coverage-item" key={i}>
                    Praha {i + 1}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="trust-section">
        <div className="container text-center">
          <div className="trust-content animate-fade-in">
            <i className="fas fa-handshake"></i>
            <h2>Vaše důvěra je pro nás to nejcennější</h2>
            <p>
              Za více než 15 let naší činnosti jsme pomohli tisícům lidí v nouzi.
              Každý zákazník pro nás není jen číslo — je to člověk, který potřebuje
              pomoc. A přesně tak k vám přistupujeme.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Náš tým</span>
          <h2 className="section-title animate-fade-in">Seznamte se s námi</h2>

          <div className="team-grid" style={{ marginTop: '3rem' }}>
            <div className="team-card animate-slide-up delay-1">
              <div className="team-photo">
                <img
                  src="https://locksmith-prague.cz/wp-content/uploads/2026/02/andrej_husak.png"
                  alt="Andrej Husák - profesionální zámečník Praha"
                  loading="lazy"
                />
              </div>
              <div className="team-info">
                <h3>Andrej Husák</h3>
                <span className="team-role">Profesionální zámečník</span>
              </div>
            </div>
            <div className="team-card animate-slide-up delay-2">
              <div className="team-photo">
                <img
                  src="https://locksmith-prague.cz/wp-content/uploads/2026/02/artur_husak.png"
                  alt="Artur Husák - profesionální zámečník Praha"
                  loading="lazy"
                />
              </div>
              <div className="team-info">
                <h3>Artur Husák</h3>
                <span className="team-role">Profesionální zámečník</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Chcete se dozvědět více?</h2>
              <p>Kontaktujte nás a rádi zodpovíme vaše dotazy.</p>
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
