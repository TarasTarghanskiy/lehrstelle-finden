import React from 'react'
import './Why.css'

const audiences = [
  'Jugendliche, die Orientierung suchen.',
  'Jugendliche, die sich zwischen mehreren Berufen entscheiden müssen.',
  'Eltern, die ihr Kind konstruktiv begleiten möchten.',
  'Jugendliche, die sich auf Schnupperlehren und Bewerbungen vorbereiten wollen.',
]

export default function Why() {
  return (
    <section className="why">
      <div className="why-inner">
        <div className="why-top">
          <div className="why-intro">
            <div className="eyebrow eyebrow--onteal">
              <span className="eyebrow-dot" />
              Warum Sagaled?
            </div>
            <h2 className="why-h2">Kein Weg von der Stange.</h2>
          </div>
          <p className="why-text">
            Jeder Jugendliche geht seinen eigenen Weg. Deshalb setzt Sagaled nicht auf
            standardisierte Lösungen, sondern auf eine persönliche und strukturierte
            Begleitung. Im Mittelpunkt stehen nicht Noten oder Zufall, sondern die
            individuellen Stärken, Interessen und Potenziale. Daraus entsteht Schritt für
            Schritt eine fundierte Grundlage für eine selbstbewusste Berufswahl. Der
            gesamte Prozess bleibt praxisnah und orientiert sich an den realen
            Anforderungen der Berufswelt. Eltern werden sinnvoll einbezogen – ohne dem
            Jugendlichen die Entscheidung abzunehmen.
          </p>
        </div>

        <div className="why-audience">
          <h3 className="why-audience-h">Für wen eignet sich Sagaled?</h3>
          <ul className="why-list">
            {audiences.map((a, i) => (
              <li key={i} className="why-item">
                <span className="why-check" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
