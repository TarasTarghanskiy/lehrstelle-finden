import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="eyebrow">Kontakt</div>
        <h2 className="contact-h2">Machen wir den ersten Schritt.</h2>
        <p className="contact-sub">
          Schreib mir unverbindlich — das erste Kennenlernen ist kostenlos.
        </p>

        {sent ? (
          <div className="contact-thanks">Danke! Ich melde mich bald bei dir.</div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="deine@email.ch"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="contact-input"
            />
            <button type="submit" className="contact-btn">Kontakt aufnehmen</button>
          </form>
        )}

        <div className="contact-info">
          <a href="mailto:lena@lehrstelle-finden.ch" className="contact-info-link">lena@lehrstelle-finden.ch</a>
          <span className="contact-sep">·</span>
          <a href="tel:+41441234567" className="contact-info-link">+41 44 123 45 67</a>
          <span className="contact-sep">·</span>
          <span className="contact-info-text">Zürich &amp; online</span>
        </div>
      </div>

      <footer className="footer">
        <span>© 2026 Lena Hofer — Berufscoaching</span>
        <span>Zürich</span>
      </footer>
    </section>
  )
}
