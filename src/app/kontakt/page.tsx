import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktujte Zámečnictví Husák – nonstop zámečnická pohotovost Praha. ☎ 606 588 222. Herbenova 727/38, Praha 10.',
  alternates: { canonical: 'https://zamecnitvihusak.vercel.app/kontakt' },
}

const faqItems = [
  { question: 'Kolik stojí otevření zabouchnutých dveří?', answer: 'Cena za otevření zabouchnutých dveří začíná na 1 200 Kč. Přesnou cenu vám sdělíme po telefonu na základě typu zámku a situace. V ceně je zahrnut výjezd po celé Praze.' },
  { question: 'Jak rychle přijedete?', answer: 'Průměrná doba příjezdu je 15–20 minut kdekoliv v Praze. Naši technici jsou strategicky rozmístěni po celém městě, aby vám mohli pomoci co nejrychleji.' },
  { question: 'Pracujete i v noci a o víkendech?', answer: 'Ano, pracujeme nonstop 24 hodin denně, 7 dní v týdnu, včetně víkendů a svátků. Za noční službu (22:00–6:00) účtujeme příplatek 500 Kč.' },
  { question: 'Poškodíte mi dveře při otevírání?', answer: 'Ve většině případů používáme nedestruktivní metody otevírání, které nezpůsobí žádné poškození. Naši technici mají profesionální vybavení a bohaté zkušenosti.' },
  { question: 'Akceptujete platbu kartou?', answer: 'Ano, akceptujeme platbu hotově i platební kartou přímo na místě. Ke každé zakázce vystavíme řádný daňový doklad.' },
  { question: 'Můžete vyměnit zámek hned na místě?', answer: 'Ano, naši technici mají s sebou zásobu nejběžnějších cylindrických vložek různých bezpečnostních tříd. Výměnu provedeme okamžitě na místě.' },
  { question: 'Poskytujete záruku na práci?', answer: 'Ano, na veškerou práci poskytujeme záruku. Na výměnu vložek a zámků je záruka 24 měsíců, na montáž bezpečnostních dveří 5 let.' },
  { question: 'Je výjezd zdarma?', answer: 'Ano, výjezd v rámci Prahy je zcela zdarma. Za výjezd mimo Prahu účtujeme poplatek podle vzdálenosti, který vám sdělíme předem.' },
  { question: 'Dokážete otevřít i bezpečnostní dveře?', answer: 'Ano, máme zkušenosti s otevíráním bezpečnostních dveří všech tříd odolnosti. Používáme specializované nástroje a techniky.' },
  { question: 'Potřebuji se prokázat jako majitel bytu?', answer: 'Pro vaši bezpečnost i bezpečnost ostatních můžeme požadovat prokázání totožnosti a oprávnění ke vstupu. Stačí občanský průkaz a doklad o bydlišti (nájemní smlouva, výpis z katastru apod.).' },
  { question: 'Opravíte i zámek, který nejde zamknout?', answer: 'Samozřejmě! Opravujeme všechny typy závad na zámcích — zaseknuté mechanismy, opotřebené vložky, poškozené klíče. Často stačí jednoduchá oprava bez nutnosti výměny celého zámku.' },
]

export default function KontaktPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Domů</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Kontakt</span>
          </div>
          <h1 className="page-title">KONTAKT</h1>
          <p className="page-subtitle">Jsme tu pro vás 24 hodin denně, 7 dní v týdnu</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="animate-slide-left">
              <span className="section-subtitle">Spojte se s námi</span>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>Kontaktní informace</h2>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-card-content">
                    <h3>Telefon – Nonstop linka</h3>
                    <a href="tel:+420606588222" className="contact-link primary">606 588 222</a>
                    <a href="tel:+420776447729" className="contact-link">776 44 77 29</a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-card-content">
                    <h3>E-mail</h3>
                    <a href="mailto:info@zamecnictvi-husak.cz" className="contact-link">info@zamecnictvi-husak.cz</a>
                    <p>Odpovídáme do 2 hodin</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-card-content">
                    <h3>Adresa</h3>
                    <p>Herbenova 727/38<br />Praha 10, 102 00</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-card-content">
                    <h3>Provozní doba</h3>
                    <p><strong>Nonstop 24/7</strong><br />Včetně víkendů a svátků</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <i className="fas fa-id-card"></i>
                  </div>
                  <div className="contact-card-content">
                    <h3>Fakturační údaje</h3>
                    <p>IČO: 24734691<br />Fyzická osoba podnikající</p>
                  </div>
                </div>
              </div>

              <div className="messengers-section">
                <h3><i className="fas fa-comment-dots"></i> Napište nám přes messenger</h3>
                <div className="messengers-grid">
                  <a href="viber://chat?number=+420606588222" className="messenger-btn viber">
                    <i className="fab fa-viber"></i>
                    <span>Viber</span>
                  </a>
                  <a href="https://wa.me/420606588222" className="messenger-btn whatsapp" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                  <a href="https://t.me/+420606588222" className="messenger-btn telegram" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-telegram-plane"></i>
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-slide-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="emergency-banner">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="emergency-text">
              <h3>Nouzová situace?</h3>
              <p>Zamkli jste se a potřebujete okamžitou pomoc?</p>
            </div>
            <a href="tel:+420606588222" className="btn btn-white btn-large">
              <i className="fas fa-phone"></i>
              Zavolat 606 588 222
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-light">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">Kde nás najdete</span>
          <h2 className="section-title animate-fade-in">Naše poloha</h2>

          <div className="coverage-details" style={{ marginTop: '3rem' }}>
            <div className="coverage-map-large animate-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d14.46!3d50.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA0JzEyLjAiTiAxNMKwMjcnMzYuMCJF!5e0!3m2!1scs!2scz!4v1"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Zámečnictví Husák"
              ></iframe>
            </div>

            <div className="coverage-info-grid animate-fade-in">
              <div className="coverage-info-card">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Sídlo firmy</h4>
                <p>Herbenova 727/38, Praha 10</p>
              </div>
              <div className="coverage-info-card">
                <i className="fas fa-car"></i>
                <h4>Příjezd po Praze</h4>
                <p>15–20 minut kdekoliv</p>
              </div>
              <div className="coverage-info-card">
                <i className="fas fa-route"></i>
                <h4>Výjezd zdarma</h4>
                <p>V celé Praze bez poplatku</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container text-center">
          <span className="section-subtitle animate-fade-in">FAQ</span>
          <h2 className="section-title animate-fade-in">Často kladené dotazy</h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  )
}
