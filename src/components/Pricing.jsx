import React from 'react'
import './Pricing.css'

const included = [
  'Persönliche Begleitung',
  'Individuelles Potenzialprofil',
  'Strukturierter Marktcheck',
  'Begründete Berufsempfehlung',
  'Unterstützung bis zum erfolgreichen Einstieg',
]

export default function Pricing() {
  return (
    <section id="investition" className="pricing">
      <div className="pricing-inner">
        <div className="pricing-left">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Investition
          </div>
          <h2 className="pricing-h2">Eine Investition in die Zukunft.</h2>
          <p className="pricing-text">
            Sagaled begleitet Jugendliche und ihre Eltern während des gesamten
            Berufswahlprozesses – vom Kennenlernen bis zum erfolgreichen Einstieg.
          </p>
          <ul className="pricing-list">
            {included.map((item, i) => (
              <li key={i} className="pricing-item">
                <span className="pricing-check" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pricing-card">
          <span className="pricing-card-label">Berufswahlbegleitung Sagaled</span>
          <div className="pricing-price">
            CHF 1'500<span>.–</span>
          </div>
          <p className="pricing-free">Das unverbindliche Kennenlernen ist kostenlos.</p>
          <a href="#contact" className="pricing-cta">Kontakt aufnehmen</a>
        </div>
      </div>
    </section>
  )
}
