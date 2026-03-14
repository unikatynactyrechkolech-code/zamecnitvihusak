'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In production, this would send data to an API endpoint
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form-card">
        <h3><i className="fas fa-check-circle" style={{ color: '#22c55e' }}></i> Odesláno!</h3>
        <p>Děkujeme za vaši zprávu. Ozveme se vám co nejdříve.</p>
        <button className="btn btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
          Odeslat další zprávu
        </button>
      </div>
    )
  }

  return (
    <div className="contact-form-card">
      <h3><i className="fas fa-paper-plane"></i> Napište nám</h3>
      <p>Odpovíme vám co nejdříve, obvykle do 2 hodin.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Jméno a příjmení *</label>
            <input type="text" id="name" name="name" placeholder="Vaše jméno" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefon *</label>
            <input type="tel" id="phone" name="phone" placeholder="+420" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="vas@email.cz" />
        </div>

        <div className="form-group">
          <label htmlFor="service">Typ služby</label>
          <select id="service" name="service">
            <option value="">Vyberte službu...</option>
            <option value="otevreni">Otevření zámku</option>
            <option value="vymena">Výměna zámku/vložky</option>
            <option value="dvere">Bezpečnostní dveře</option>
            <option value="trezor">Trezory</option>
            <option value="auto">Autoklíče</option>
            <option value="system">Bezpečnostní systémy</option>
            <option value="jine">Jiné</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Zpráva *</label>
          <textarea id="message" name="message" placeholder="Popište váš problém nebo požadavek..." rows={5} required></textarea>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input type="checkbox" required />
            <span className="checkmark"></span>
            Souhlasím se zpracováním osobních údajů
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-full">
          <i className="fas fa-paper-plane"></i>
          Odeslat zprávu
        </button>

        <div className="form-note">
          <i className="fas fa-bolt"></i>
          <span>Pro urgentní případy volejte <a href="tel:+420734565987">734 565 987</a></span>
        </div>
      </form>
    </div>
  )
}
