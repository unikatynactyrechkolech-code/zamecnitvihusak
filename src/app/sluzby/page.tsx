import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Služby',
  description: 'Kompletní přehled zámečnických služeb – otevírání zámků, výměna vložek, montáž bezpečnostních dveří, trezory a autoklíče.',
  alternates: { canonical: 'https://zamecnitvihusak.vercel.app/sluzby' },
}

const services = [
  {
    icon: 'fa-lock-open',
    title: 'Otevírání zámků',
    desc: 'Zabouchli jste dveře? Zlomil se vám klíč v zámku? Naši zkušení zámečníci otevřou jakýkoli typ zámku rychle a bez poškození dveří. Používáme profesionální nástroje a nedestruktivní metody.',
    features: ['Cylindrické zámky', 'Bezpečnostní zámky', 'Visací zámky', 'Zámky na auta', 'Trezorové zámky', 'Elektromechanické zámky'],
    img: 'https://images.pexels.com/photos/792034/pexels-photo-792034.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Otevírání zámků',
    reverse: false,
  },
  {
    icon: 'fa-key',
    title: 'Výměna zámků a vložek',
    desc: 'Potřebujete vyměnit staré zámky za nové bezpečnější? Nabízíme výměnu cylindrických vložek všech bezpečnostních tříd. Pracujeme s prověřenými značkami jako FAB, EVVA, ASSA ABLOY a další.',
    features: ['Bezpečnostní vložky FAB', 'Vložky EVVA', 'ASSA ABLOY systémy', 'Masterkey systémy', 'Oboustranné vložky', 'Knoflíkové vložky'],
    img: 'https://d15-a.sdn.cz/d_15/c_img_E_G/viPcFk.jpeg?fl=cro,0,0,800,533%7Cres,1200,,1%7Cjpg,80,,1',
    alt: 'Výměna zámků',
    reverse: true,
  },
  {
    icon: 'fa-door-closed',
    title: 'Bezpečnostní dveře',
    desc: 'Montáž a výměna bezpečnostních dveří všech tříd odolnosti. Nabízíme dveře od předních výrobců s certifikací proti vloupání. Kompletní servis včetně zaměření, dodání a profesionální montáže.',
    features: ['Třída odolnosti 2-4', 'Protipožární dveře', 'Protihlukové dveře', 'Dveře do bytů', 'Dveře do domů', 'Technické dveře'],
    img: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Bezpečnostní dveře',
    reverse: false,
  },
  {
    icon: 'fa-vault',
    title: 'Trezory',
    desc: 'Profesionální otevírání trezorů bez poškození mechanismu. Dodáváme a montujeme trezory pro domácnosti i firmy. Poradíme s výběrem správného trezoru podle vašich potřeb a pojistných požadavků.',
    features: ['Otevírání trezorů', 'Prodej trezorů', 'Montáž do zdi/podlahy', 'Změna kombinace', 'Oprava mechanismu', 'Výměna zámku trezoru'],
    img: 'https://images.pexels.com/photos/32334240/pexels-photo-32334240.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Trezory',
    reverse: true,
  },
  {
    icon: 'fa-car',
    title: 'Autoklíče',
    desc: 'Výroba a programování autoklíčů všech značek. Otevírání zamknutých aut, kopírování transponderových klíčů, opravy dálkových ovladačů. Řešíme i situace, kdy jste ztratili všechny klíče od auta.',
    features: ['Výroba autoklíčů', 'Programování čipů', 'Kopírování klíčů', 'Otevírání aut', 'Opravy ovladačů', 'Nouzové otevření'],
    img: 'https://www.zamecnictvipraha-nonstop.cz/assets/images/otevirani-aut-automobilu1.png',
    alt: 'Autoklíče',
    reverse: false,
  },
]

export default function SluzbyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Domů</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Služby</span>
          </div>
          <h1 className="page-title">NAŠE SLUŽBY</h1>
          <p className="page-subtitle">Kompletní zámečnické služby pro váš klid a bezpečí</p>
        </div>
      </section>

      {services.map((svc, i) => (
        <section className={`service-detail${i % 2 === 1 ? ' bg-light' : ''}`} key={svc.title}>
          <div className="container">
            <div className={`service-detail-grid${svc.reverse ? ' reverse' : ''}`}>
              <div className="service-detail-content animate-fade-in">
                <div className="service-detail-icon">
                  <i className={`fas ${svc.icon}`}></i>
                </div>
                <h2>{svc.title}</h2>
                <p>{svc.desc}</p>
                <div className="service-features">
                  {svc.features.map((f) => (
                    <div className="service-feature-item" key={f}>
                      <i className="fas fa-check-circle"></i>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-detail-image animate-fade-in">
                <img src={svc.img} alt={svc.alt} className="service-img" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Potřebujete některou z našich služeb?</h2>
              <p>Zavolejte nám a poradíme vám s nejlepším řešením.</p>
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
