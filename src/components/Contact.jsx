import React, { useState } from 'react'
import './Contact.css'

const FORM_NAME = 'kontakt'

function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', telefon: '', nachricht: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function update(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...values }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-inner">
          <div className="contact-head">
            <div className="eyebrow eyebrow--onteal">
              <span className="eyebrow-dot" />
              Kontakt
            </div>
            <h2 className="contact-h2">Machen wir den ersten Schritt.</h2>
            <p className="contact-sub">
              Schreib mir unverbindlich eine Nachricht und hinterlasse deine Kontaktdaten.
              Ich melde mich innerhalb von zwei Arbeitstagen persönlich bei dir, damit wir
              uns kennenlernen. Gemeinsam besprechen wir eure Ausgangslage und klären, ob
              Sagaled die passende Begleitung ist. Entscheiden wir uns für eine
              Zusammenarbeit, starten wir mit dem ersten Schritt: «Standort bestimmen».
            </p>

            <div className="contact-meta">
              <a href="mailto:info@sagaled.ch" className="contact-meta-item contact-meta-link">
                info@sagaled.ch
              </a>
              <span className="contact-meta-item">Raum Zürich &amp; online</span>
              <span className="contact-meta-item">
                Coaching auf Deutsch – auf Wunsch auch auf Englisch.
              </span>
            </div>
          </div>

          <div className="contact-card">
            {status === 'sent' ? (
              <div className="contact-success">
                <div className="contact-success-icon" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Vielen Dank!</h3>
                <p>Deine Nachricht ist angekommen. Ich melde mich innerhalb von zwei Arbeitstagen persönlich bei dir.</p>
              </div>
            ) : (
              <form
                className="contact-form"
                name={FORM_NAME}
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <p className="hp-field">
                  <label>
                    Bitte leer lassen: <input name="bot-field" onChange={update} />
                  </label>
                </p>

                <label className="field">
                  <span className="field-label">Vorname und Name</span>
                  <input name="name" type="text" required value={values.name} onChange={update} autoComplete="name" />
                </label>

                <div className="field-row">
                  <label className="field">
                    <span className="field-label">E-Mail-Adresse</span>
                    <input name="email" type="email" required value={values.email} onChange={update} autoComplete="email" />
                  </label>
                  <label className="field">
                    <span className="field-label">Telefonnummer</span>
                    <input name="telefon" type="tel" required value={values.telefon} onChange={update} autoComplete="tel" />
                  </label>
                </div>

                <label className="field">
                  <span className="field-label">
                    Nachricht <span className="field-optional">(optional)</span>
                  </span>
                  <textarea name="nachricht" rows="4" value={values.nachricht} onChange={update} />
                </label>

                <button type="submit" className="btn-primary contact-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Wird gesendet …' : 'Kontakt aufnehmen'}
                </button>

                {status === 'error' && (
                  <p className="contact-error">
                    Das hat leider nicht geklappt. Schreib mir gerne direkt an{' '}
                    <a href="mailto:info@sagaled.ch">info@sagaled.ch</a>.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-copy">© {new Date().getFullYear()} Sagaled — David Buck</span>
          <nav className="footer-links">
            <a href="mailto:info@sagaled.ch">info@sagaled.ch</a>
            <span className="footer-sep" aria-hidden="true">·</span>
            <a href="#/impressum">Impressum</a>
            <span className="footer-sep" aria-hidden="true">·</span>
            <a href="#/datenschutz">Datenschutz</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
