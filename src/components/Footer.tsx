import Link from 'next/link'

const prahaLinks = Array.from({ length: 10 }, (_, i) => ({
  href: `/zamecnik-praha-${i + 1}`,
  label: `Praha ${i + 1}`,
}))

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="footer-logo">
              <span className="logo-text">
                <span className="logo-title">HUSAK</span>
                <span className="logo-subtitle">ZÁMEČNÍK</span>
              </span>
            </Link>
            <p>
              Profesionální zámečnické služby v Praze a okolí. Jsme tu pro vás 24 hodin denně,
              7 dní v týdnu. Rychlý příjezd, férové ceny, kvalitní práce.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigace</h4>
            <ul>
              <li><Link href="/">Domů</Link></li>
              <li><Link href="/sluzby">Služby</Link></li>
              <li><Link href="/cenik">Ceník</Link></li>
              <li><Link href="/o-nas">O nás</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Pokrytí</h4>
            <ul>
              {prahaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Kontakt</h4>
            <ul>
              <li>
                <i className="fas fa-phone"></i>
                <div>
                  <a href="tel:+420734565987">734 565 987</a>
                  <a href="tel:+420776447729">776 44 77 29</a>
                </div>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@zamecnictvi-husak.cz">info@zamecnictvi-husak.cz</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Herbenova 727/38, Praha 10, 102 00</span>
              </li>
              <li>
                <i className="fas fa-id-card"></i>
                <span>IČO: 24734691</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">web by <a href="https://www.webpojede.cz" target="_blank" rel="noopener noreferrer" className="footer-credit-link">webpojede.cz</a></p>
          <p>&copy; {new Date().getFullYear()} Zámečník Husak. Všechna práva vyhrazena.</p>
          <div className="footer-bottom-links">
            <Link href="/kontakt">Kontaktujte nás</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
