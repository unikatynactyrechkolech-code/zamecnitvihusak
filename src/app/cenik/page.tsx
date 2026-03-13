import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ceník',
  description: 'Transparentní ceník zámečnických služeb – otevírání zámků od 1200 Kč, výměna vložek od 1800 Kč, bezpečnostní dveře od 15 000 Kč.',
  alternates: { canonical: 'https://zamecnictvi-husak.vercel.app/cenik' },
}

const tables = [
  {
    icon: 'fa-lock-open',
    title: 'Otevírání zámků',
    rows: [
      { service: 'Otevření cylindrického zámku', price: 'od 1 200 Kč' },
      { service: 'Otevření bezpečnostního zámku', price: 'od 1 800 Kč' },
      { service: 'Otevření zámku s vložkou FAB', price: 'od 1 500 Kč' },
      { service: 'Otevření visacího zámku', price: 'od 800 Kč' },
      { service: 'Nouzové otevření zabouchnutých dveří', price: 'od 1 200 Kč' },
      { service: 'Otevření zámku po vloupání', price: 'od 2 000 Kč', highlight: true },
      { service: 'Příplatek za noční službu (22:00–6:00)', price: '+500 Kč', surcharge: true },
    ],
  },
  {
    icon: 'fa-key',
    title: 'Výměna zámků a vložek',
    rows: [
      { service: 'Výměna cylindrické vložky (základní)', price: 'od 1 800 Kč' },
      { service: 'Výměna bezpečnostní vložky FAB', price: 'od 2 500 Kč' },
      { service: 'Výměna vložky EVVA/ASSA ABLOY', price: 'od 3 500 Kč' },
      { service: 'Montáž přídavného zámku', price: 'od 2 000 Kč' },
      { service: 'Výroba klíče na místě', price: 'od 300 Kč' },
      { service: 'Masterkey systém (za vložku)', price: 'od 3 000 Kč' },
    ],
  },
  {
    icon: 'fa-door-closed',
    title: 'Bezpečnostní dveře',
    rows: [
      { service: 'Bezpečnostní dveře třída 2', price: 'od 15 000 Kč' },
      { service: 'Bezpečnostní dveře třída 3', price: 'od 25 000 Kč' },
      { service: 'Bezpečnostní dveře třída 4', price: 'od 40 000 Kč' },
      { service: 'Protipožární dveře', price: 'od 20 000 Kč' },
      { service: 'Montáž dveří (standardní)', price: 'od 3 000 Kč' },
      { service: 'Demontáž starých dveří', price: 'od 1 500 Kč' },
    ],
  },
  {
    icon: 'fa-vault',
    title: 'Trezory',
    rows: [
      { service: 'Otevření mechanického trezoru', price: 'od 3 000 Kč' },
      { service: 'Otevření elektronického trezoru', price: 'od 4 000 Kč' },
      { service: 'Změna kombinace trezoru', price: 'od 1 500 Kč' },
      { service: 'Montáž trezoru do zdi', price: 'od 2 500 Kč' },
      { service: 'Prodej + montáž trezoru', price: 'od 8 000 Kč' },
    ],
  },
  {
    icon: 'fa-car',
    title: 'Autoklíče',
    rows: [
      { service: 'Otevření zamknutého auta', price: 'od 1 500 Kč' },
      { service: 'Výroba autoklíče bez čipu', price: 'od 1 000 Kč' },
      { service: 'Výroba autoklíče s čipem', price: 'od 3 000 Kč' },
      { service: 'Programování dálkového ovladače', price: 'od 2 000 Kč' },
      { service: 'Oprava klíče / ovladače', price: 'od 800 Kč' },
    ],
  },
  {
    icon: 'fa-shield-halved',
    title: 'Bezpečnostní systémy',
    rows: [
      { service: 'Elektronický zámek – dodání + montáž', price: 'od 8 000 Kč' },
      { service: 'Přístupový systém (na klíčenku/kartu)', price: 'od 12 000 Kč' },
      { service: 'Kamerový systém (2 kamery)', price: 'od 15 000 Kč' },
      { service: 'Alarm – dodání + instalace', price: 'od 10 000 Kč' },
      { service: 'Videovrátník', price: 'od 8 000 Kč' },
    ],
  },
]

export default function CenikPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Domů</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Ceník</span>
          </div>
          <h1 className="page-title">CENÍK SLUŽEB</h1>
          <p className="page-subtitle">Transparentní ceny bez skrytých poplatků</p>
          <p className="page-description">
            Přesnou cenu vám vždy sdělíme předem po telefonu. Ceny jsou orientační
            a mohou se lišit podle náročnosti práce.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container pricing-tables">
          {tables.map((table) => (
            <div className="pricing-table-wrapper animate-fade-in" key={table.title}>
              <div className="pricing-table-header">
                <i className={`fas ${table.icon}`}></i>
                <h2>{table.title}</h2>
              </div>
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Služba</th>
                    <th>Cena</th>
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row) => (
                    <tr key={row.service} className={(row as { highlight?: boolean }).highlight ? 'highlight-row' : ''}>
                      <td>{row.service}</td>
                      <td>
                        <span className={`price${(row as { surcharge?: boolean }).surcharge ? ' surcharge' : ''}`}>
                          {row.price}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      <section className="price-info-banner">
        <div className="container">
          <div className="price-info-content">
            <i className="fas fa-info-circle"></i>
            <p>
              <strong>Důležitá informace:</strong> Všechny ceny jsou uvedeny včetně DPH.
              Výjezd po Praze je zdarma. Přesnou cenu vám sdělíme vždy předem po telefonu.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Dobré vědět</span>
          <h2 className="section-title animate-fade-in">Důležité informace k cenám</h2>

          <div className="price-notes-grid" style={{ marginTop: '3rem' }}>
            {[
              { icon: 'fa-truck', title: 'Výjezd zdarma', desc: 'V rámci Prahy neúčtujeme žádný poplatek za výjezd.' },
              { icon: 'fa-file-invoice', title: 'Cena předem', desc: 'Přesnou cenu znáte vždy před zahájením práce.' },
              { icon: 'fa-credit-card', title: 'Platba hotově i kartou', desc: 'Akceptujeme hotovost i platební karty.' },
              { icon: 'fa-receipt', title: 'Doklad o zaplacení', desc: 'Ke každé zakázce vystavíme řádný doklad.' },
            ].map((note, i) => (
              <div className={`price-note animate-fade-in delay-${i + 1}`} key={note.title}>
                <i className={`fas ${note.icon}`}></i>
                <h3>{note.title}</h3>
                <p>{note.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Chcete znát přesnou cenu?</h2>
              <p>Zavolejte nám a sdělíme vám cenu ještě před příjezdem.</p>
            </div>
            <a href="tel:+420606588222" className="phone-link">
              <i className="fas fa-phone"></i>
              606 588 222
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
