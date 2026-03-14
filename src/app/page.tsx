import Link from 'next/link'
import ReviewCard from '@/components/ReviewCard'
import { neighborhoodData, extendedPrahaData } from './locality-data'
import { prahaZapadData, prahaVychodData } from './outskirts-data'

// Organize localities by parent district
const prahaDistricts = [
  { num: 1, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 1') },
  { num: 2, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 2') },
  { num: 3, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 3') },
  { num: 4, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 4') },
  { num: 5, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 5') },
  { num: 6, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 6') },
  { num: 7, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 7') },
  { num: 8, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 8') },
  { num: 9, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 9') },
  { num: 10, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 10') },
  { num: 11, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 11') },
  { num: 12, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 12') },
  { num: 13, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 13') },
  { num: 14, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 14') },
  { num: 15, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 15') },
  { num: 16, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 16') },
  { num: 17, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 17') },
  { num: 18, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 18') },
  { num: 19, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 19') },
  { num: 20, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 20') },
  { num: 21, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 21') },
  { num: 22, neighborhoods: neighborhoodData.filter(n => n.parentDistrict === 'Praha 22') },
]

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Zámečnická <span className="highlight">pohotovost</span> Praha 24/7
            </h1>
            <p className="hero-description">
              Zamkli jste se? Potřebujete vyměnit zámek? Jsme tu pro vás nonstop.
              Profesionální zámečník u vás do 20 minut.
            </p>
            <div className="hero-cta">
              <a href="tel:+420734565987" className="btn btn-primary btn-lg">
                <i className="fas fa-phone"></i> Zavolat nyní
              </a>
              <Link href="/cenik" className="btn btn-outline btn-lg">
                <i className="fas fa-list"></i> Ceník služeb
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-animation-wrapper">
              <div className="hero-circle-bg"></div>
              <svg className="lock-key-animation" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e63946" />
                    <stop offset="100%" stopColor="#ff6b6b" />
                  </linearGradient>
                </defs>
                
                {/* Rotating rings */}
                <circle className="ring-outer" cx="100" cy="100" r="95" stroke="rgba(230,57,70,0.15)" strokeWidth="1" fill="none" strokeDasharray="8 6" />
                <circle className="ring-inner" cx="100" cy="100" r="80" stroke="rgba(230,57,70,0.1)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
                
                {/* Lock group */}
                <g className="lock-group">
                  {/* Left leg of shackle - FIXED in lock body */}
                  <line 
                    x1="75" y1="100" x2="75" y2="72"
                    stroke="url(#lockGradient)" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                  />
                  
                  {/* Right part (arc + right leg) - pivots around connection point */}
                  <path 
                    className="lock-shackle" 
                    d="M75 72 Q75 52 100 52 Q125 52 125 72 L125 100" 
                    stroke="url(#lockGradient)" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    fill="none" 
                  />
                  {/* Lock body */}
                  <rect x="65" y="95" width="70" height="55" rx="10" fill="url(#lockGradient)" />
                  {/* Keyhole circle - center at 100, 120 */}
                  <circle cx="100" cy="120" r="8" fill="#ffffff" />
                  {/* Keyhole slot */}
                  <rect x="96" y="120" width="8" height="14" rx="2" fill="#ffffff" />
                </g>
                
                {/* Key - starts bottom right, moves to keyhole at (100, 120) */}
                <g className="key-group">
                  {/* Key handle (oval) */}
                  <ellipse cx="155" cy="175" rx="12" ry="10" stroke="#fbbf24" strokeWidth="3" fill="none" />
                  {/* Key shaft - goes toward keyhole */}
                  <line x1="145" y1="168" x2="115" y2="138" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
                  {/* Key teeth */}
                  <line x1="125" y1="148" x2="130" y2="143" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
                  <line x1="120" y1="143" x2="125" y2="138" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
                </g>
                
                {/* Sparkles */}
                <circle className="sparkle sparkle-1" cx="45" cy="45" r="3" fill="#fbbf24" />
                <circle className="sparkle sparkle-2" cx="165" cy="40" r="3" fill="#e63946" />
                <circle className="sparkle sparkle-3" cx="35" cy="160" r="3" fill="#fbbf24" />
                <circle className="sparkle sparkle-4" cx="175" cy="170" r="3" fill="#e63946" />
              </svg>
            </div>
          </div>
        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Naše služby</span>
          <h2 className="section-title animate-fade-in">Co pro vás můžeme udělat?</h2>
          <p className="section-description animate-fade-in">
            Nabízíme kompletní zámečnické služby pro domácnosti i firmy v celé Praze.
          </p>

          <div className="services-image-grid">
            {[
              { title: 'Otevírání zámků', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80&auto=format' },
              { title: 'Výměna vložek', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&auto=format' },
              { title: 'Bezpečnostní dveře', img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80&auto=format' },
              { title: 'Trezory', img: 'https://images.unsplash.com/photo-1622473590773-f588134b6ce7?w=600&q=80&auto=format' },
              { title: 'Autoklíče', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q=80&auto=format' },
              { title: 'Bezpečnostní systémy', img: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&q=80&auto=format' },
            ].map((service, i) => (
              <Link href="/sluzby" className={`service-card-image animate-fade-in delay-${i + 1}`} key={service.title}>
                <div className="service-image">
                  <img src={service.img} alt={service.title} loading="lazy" />
                  <div className="service-image-overlay"></div>
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section bg-light">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Proč my?</span>
          <h2 className="section-title animate-fade-in">Naše výhody</h2>

          <div className="advantages-grid">
            {[
              { icon: 'fa-bolt', title: 'Příjezd do 20 minut', desc: 'Rychlá reakce a příjezd kdekoliv v Praze.' },
              { icon: 'fa-clock', title: 'Nonstop 24/7', desc: 'Pracujeme nepřetržitě včetně víkendů a svátků.' },
              { icon: 'fa-shield-halved', title: 'Bez poškození', desc: 'Profesionální techniky šetrné k vašim dveřím.' },
              { icon: 'fa-tag', title: 'Férové ceny', desc: 'Cenu znáte předem, žádné skryté příplatky.' },
              { icon: 'fa-certificate', title: '15+ let praxe', desc: 'Zkušený tým certifikovaných zámečníků.' },
              { icon: 'fa-thumbs-up', title: 'Garance spokojenosti', desc: 'Záruka na veškerou práci a materiál.' },
            ].map((adv, i) => (
              <div className={`advantage-card animate-fade-in delay-${i + 1}`} key={adv.title}>
                <div className="advantage-icon">
                  <i className={`fas ${adv.icon}`}></i>
                </div>
                <h3>{adv.title}</h3>
                <p>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Ceník</span>
          <h2 className="section-title animate-fade-in">Transparentní ceny</h2>
          <p className="section-description animate-fade-in">
            Cenu vám sdělíme předem po telefonu. Žádné překvapení.
          </p>

          <div className="pricing-grid">
            <div className="pricing-card animate-slide-up delay-1">
              <div className="pricing-header">
                <h3>Otevření zámku</h3>
                <div className="pricing-price">
                  <span className="from">od</span>
                  <span className="amount">1 200</span>
                  <span className="currency">Kč</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i> Cylindrické zámky</li>
                <li><i className="fas fa-check"></i> Bez poškození dveří</li>
                <li><i className="fas fa-check"></i> Příjezd do 20 min</li>
                <li><i className="fas fa-check"></i> Nonstop dostupnost</li>
              </ul>
              <Link href="/cenik" className="btn btn-primary btn-full">Kompletní ceník</Link>
            </div>

            <div className="pricing-card featured animate-slide-up delay-2">
              <span className="pricing-badge">Nejčastější</span>
              <div className="pricing-header">
                <h3>Výměna vložky</h3>
                <div className="pricing-price">
                  <span className="from">od</span>
                  <span className="amount">1 800</span>
                  <span className="currency">Kč</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i> Včetně nové vložky</li>
                <li><i className="fas fa-check"></i> Bezpečnostní třída 3+</li>
                <li><i className="fas fa-check"></i> 3 klíče v ceně</li>
                <li><i className="fas fa-check"></i> Záruka 24 měsíců</li>
              </ul>
              <Link href="/cenik" className="btn btn-primary btn-full">Kompletní ceník</Link>
            </div>

            <div className="pricing-card animate-slide-up delay-3">
              <div className="pricing-header">
                <h3>Bezpečnostní dveře</h3>
                <div className="pricing-price">
                  <span className="from">od</span>
                  <span className="amount">15 000</span>
                  <span className="currency">Kč</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i> Třída odolnosti 3-4</li>
                <li><i className="fas fa-check"></i> Včetně montáže</li>
                <li><i className="fas fa-check"></i> Protipožární dveře</li>
                <li><i className="fas fa-check"></i> Záruka 5 let</li>
              </ul>
              <Link href="/cenik" className="btn btn-primary btn-full">Kompletní ceník</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-light">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Jak to funguje</span>
          <h2 className="section-title animate-fade-in">Jednoduchý proces</h2>

          <div className="process-timeline">
            {[
              { num: '1', title: 'Zavolejte nám', desc: 'Kontaktujte nás na čísle 734 565 987. Jsme dostupní 24/7.' },
              { num: '2', title: 'Sdělíme cenu', desc: 'Po telefonu vám řekneme přesnou cenu a odhadovaný čas příjezdu.' },
              { num: '3', title: 'Příjezd technika', desc: 'Náš zámečník dorazí k vám do 20 minut kdekoliv v Praze.' },
              { num: '4', title: 'Vyřešení problému', desc: 'Profesionálně a rychle vyřešíme váš problém se zámkem.' },
            ].map((step, i) => (
              <div className={`process-step animate-slide-up delay-${i + 1}`} key={step.num}>
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="section bg-dark">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Typické situace</span>
          <h2 className="section-title animate-fade-in">Řešíme tyto problémy</h2>

          <div className="problems-grid">
            {[
              { icon: 'fa-door-closed', text: 'Zabouchnuté dveře' },
              { icon: 'fa-key', text: 'Zlomený klíč v zámku' },
              { icon: 'fa-lock', text: 'Zaseknutý zámek' },
              { icon: 'fa-house-crack', text: 'Zabezpečení po vloupání' },
              { icon: 'fa-car', text: 'Zamknuté auto' },
              { icon: 'fa-vault', text: 'Otevření trezoru' },
              { icon: 'fa-building', text: 'Výměna zámků v bytě' },
              { icon: 'fa-shield-halved', text: 'Bezpečnostní upgrade' },
            ].map((p, i) => (
              <div className={`problem-item animate-fade-in delay-${i + 1}`} key={p.text}>
                <i className={`fas ${p.icon}`}></i>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Potřebujete zámečníka?</h2>
              <p>Zavolejte nám a budeme u vás do 20 minut!</p>
            </div>
            <a href="tel:+420734565987" className="phone-link">
              <i className="fas fa-phone"></i>
              734 565 987
            </a>
          </div>
        </div>
      </section>

      {/* Coverage - All Localities */}
      <section className="section bg-dark">
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

      {/* Team */}
      <section className="section bg-light">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Náš tým</span>
          <h2 className="section-title animate-fade-in">Profesionální zámečníci</h2>

          <div className="team-grid">
            <div className="team-card animate-slide-up delay-1">
              <div className="team-photo">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect width='300' height='300' rx='150' fill='%230d1117'/%3E%3Ccircle cx='150' cy='115' r='55' fill='%23e63946'/%3E%3Ccircle cx='150' cy='95' r='35' fill='%23f1faee'/%3E%3Cellipse cx='150' cy='250' rx='80' ry='60' fill='%23e63946'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='middle' text-anchor='middle' fill='%23f1faee' font-size='72' font-family='Arial,sans-serif' font-weight='bold'%3EJH%3C/text%3E%3C/svg%3E"
                  alt="Jan Husak - hlavní zámečník"
                  loading="lazy"
                />
              </div>
              <div className="team-info">
                <h3>Jan Husak</h3>
                <span className="team-role">Hlavní zámečník & Majitel</span>
                <p>Přes 15 let zkušeností v oboru. Certifikovaný specialista na bezpečnostní systémy a moderní zámkové technologie.</p>
              </div>
            </div>
            <div className="team-card animate-slide-up delay-2">
              <div className="team-photo">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect width='300' height='300' rx='150' fill='%230d1117'/%3E%3Ccircle cx='150' cy='115' r='55' fill='%231d3557'/%3E%3Ccircle cx='150' cy='95' r='35' fill='%23f1faee'/%3E%3Cellipse cx='150' cy='250' rx='80' ry='60' fill='%231d3557'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='middle' text-anchor='middle' fill='%23f1faee' font-size='72' font-family='Arial,sans-serif' font-weight='bold'%3EPN%3C/text%3E%3C/svg%3E"
                  alt="Petr Novotný - zámečník technik"
                  loading="lazy"
                />
              </div>
              <div className="team-info">
                <h3>Petr Novotný</h3>
                <span className="team-role">Zámečník - Technik</span>
                <p>Specialista na autoklíče a elektronické zámkové systémy. 8 let v oboru s důrazem na moderní technologie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Recenze</span>
          <h2 className="section-title animate-fade-in">Co říkají naši zákazníci</h2>

          {/* Google-style rating badge */}
          <div className="google-rating-badge animate-fade-in">
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

          <div className="reviews-bottom animate-fade-in">
            <a
              href="https://www.google.com/maps/place/%F0%9F%94%91%F0%9F%94%93z%C3%A1me%C4%8Dn%C3%ADk+pohotovost+24%2F7+Hus%C3%A1k+-+otev%C3%ADr%C3%A1n%C3%AD+z%C3%A1mk%C5%AF,+otev%C3%ADr%C3%A1n%C3%AD+aut/@50.0514323,14.4664417,18262m/data=!3m1!1e3!4m12!1m2!2m1!1shusak+zamecnik!3m8!1s0x470b9263e3b360c7:0x5ab7dee7382dbe3!8m2!3d50.0514323!4d14.5364795!9m1!1b1!15sCg5odXNhayB6YW1lY25pa1oQIg5odXNhayB6YW1lY25pa5IBCWxvY2tzbWl0aJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOUFh5MVFZVkZuRUFF4AEA-gEECCkQRQ!16s%2Fg%2F11_r_czc7?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-google-review"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" style={{flexShrink: 0}}>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Všechny recenze na Google
              <i className="fas fa-external-link-alt" style={{fontSize: '0.75rem'}}></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
