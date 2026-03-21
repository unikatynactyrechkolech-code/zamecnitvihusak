import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ceník zámečnických služeb Praha – Férové ceny předem',
  description: 'Transparentní ceník zámečnických služeb Praha – otevírání zabouchnutých dveří od 800 Kč, výměna vložek od 500 Kč, otevírání aut od 900 Kč. ✆ 734 565 987',
  alternates: { canonical: 'https://www.zamecnikhusak.cz/cenik' },
  openGraph: {
    title: 'Ceník zámečníka Praha – Zámečník Husak',
    description: 'Férové ceny zámečnických služeb. Otevírání zabouchnutých dveří od 800 Kč, výměna vložek od 500 Kč. Otevírání aut od 900 Kč.',
  },
}

const tables = [
  {
    icon: 'fa-lock-open',
    title: 'Otevírání zabouchnutých dveří',
    rows: [
      { service: 'Zabouchnuté dveře klasik (hliníkový, bakelitový štít)', price: '800 Kč' },
      { service: 'Zabouchnuté dveře s bezpečnostním kováním (R1, 802, 807 a pod.)', price: '800 Kč' },
      { service: 'Zabouchnuté bezpečnostní dveře – Next, Sherlock / plastové / euro dveře', price: '900 Kč' },
      { service: 'Zabouchnuté dveře — klíč zevnitř, otevření náhradním klíčem', price: '900 Kč' },
      { service: 'Zabouchnuté dveře s lištovými zámky, samozamykací zámky', price: '1 200 Kč' },
    ],
  },
  {
    icon: 'fa-key',
    title: 'Otevírání zamčených dveří',
    rows: [
      { service: 'Zamčeno tvarový klíč, dozický klíč', price: '900 Kč' },
      { service: 'Zamčeno bezp. kování 802, 807', price: '1 000 Kč' },
      { service: 'Zamčeno bezp. kování R1, R3', price: '1 200 Kč' },
      { service: 'Zamčeno přídavný zámek 1572 atd.', price: '1 200 Kč' },
      { service: 'Zamčeno přídavný zámek OS2, EVVA', price: '1 500 Kč' },
      { service: 'Zamčeno rozvory, závory pomocí klíče', price: '2 000 Kč' },
      { service: 'Zamčeno rozvory, závory bez klíče', price: '2 800 Kč' },
      { service: 'Zamčeno bezpečnostní dveře, vrchní zámek', price: '1 500 Kč' },
      { service: 'Zamčeno bezpečnostní dveře, spodní zámek', price: '1 500 Kč' },
      { service: 'Zamčeno vložky (Evva, Guard, Mul-T-Lock atd.)', price: '1 500 Kč' },
      { service: 'Zamčeno schránkový, skříňkový', price: '600 Kč' },
      { service: 'Prasklá střelka zámku', price: '1 200 Kč' },
    ],
  },
  {
    icon: 'fa-wrench',
    title: 'Výměny, montáž a ostatní závady',
    rows: [
      { service: 'Výměna vložky / zámku', price: '500 Kč' },
      { service: 'Výměna zadlabacího zámku', price: '500 Kč' },
      { service: 'Výměna vložky u bezpečnostních dveří', price: '600–800 Kč' },
      { service: 'Výměna vložky přídavného zámku', price: '600 Kč' },
      { service: 'Výměna modelu Atra, Cisa, Mottura', price: '900 Kč' },
      { service: 'Výměna lištového zámku a oprava protikusů', price: '1 400 Kč' },
      { service: 'Montáž kování R1, R3', price: '900 Kč' },
      { service: 'Montáž přídavného zámku 1572 atd.', price: '1 200 Kč' },
      { service: 'Montáž bezpečnostní závory', price: '2 800 Kč' },
      { service: 'Montáž bezpečnostní rozvory', price: '3 800 Kč' },
      { service: 'Montáž bezpečnostní rozvory (dvoukřídlé dveře)', price: '5 400 Kč' },
      { service: 'Montáž samozamykacích zámků', price: '1 800 Kč' },
      { service: 'Rozlomení vložky zámku bez klíče', price: '800 Kč' },
      { service: 'Vyjmutí zalomeného klíče z vložky', price: '800 Kč' },
    ],
  },
  {
    icon: 'fa-car',
    title: 'Otevírání aut / automobilů',
    rows: [
      { service: 'Otevírání aut bez poškození do roku 2000', price: '900 Kč' },
      { service: 'Otevření aut bez poškození do roku 2005 (bez spec/safe)', price: '1 200 Kč' },
      { service: 'Otevření aut bez poškození do roku 2005 (s spec/safe)', price: '1 400 Kč' },
      { service: 'Otevírání aut od roku 2006 do roku 2015 (bez spec/safe)', price: '1 500 Kč' },
      { service: 'Otevírání aut od roku 2006 do roku 2021 (s spec/safe)', price: '1 500–2 500 Kč' },
    ],
  },
  {
    icon: 'fa-vault',
    title: 'Ostatní',
    rows: [
      { service: 'Otevírání trezoru / sejfu', price: 'dle dohody' },
      { service: 'Svařecké práce', price: 'dle dohody' },
      { service: 'Hodinová sazba', price: '600 Kč' },
    ],
  },
  {
    icon: 'fa-route',
    title: 'Cestovné, paušál, příplatky',
    rows: [
      { service: 'Výjezd technika – provozní režie Praha', price: '700 Kč' },
      { service: 'Výjezd technika – provozní režie mimo Prahu', price: '200–900 Kč dle km' },
      { service: 'Každá další přeprava', price: '200 Kč' },
      { service: 'Čekací doba na zákazníka, každých započatých 30 minut', price: '200 Kč' },
      { service: 'Mimopracovní příplatek od 17:00 do 22:00', price: '+50 %', surcharge: true },
      { service: 'Noční pohotovost od 22:00 do 07:00', price: '+100 %', surcharge: true },
      { service: 'Práce o víkendu (sobota a neděle)', price: '+50 %', surcharge: true },
      { service: 'Práce ve státní svátek (Vánoce, Silvestr atd.)', price: '+100 %', surcharge: true },
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
            Otevření zabouchnutých dveří ve všední dny od 7:00–17:00 se pohybuje od 1 500 Kč
            do 1 900 Kč podle typu dveří – v ceně je výjezd technika, práce a DPH.
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
              <strong>Důležitá informace:</strong> Ceny jsou orientační a uvedeny v Kč bez materiálů, výjezdu a DPH.
              Pro bytový sektor 12 % DPH, pro nebytový sektor 21 % DPH. Při součtu položek se výjezd započítává pouze jednou.
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
              { icon: 'fa-truck', title: 'Výjezd technika', desc: 'Provozní režie Praha 700 Kč, mimo Prahu 200–900 Kč dle km.' },
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
