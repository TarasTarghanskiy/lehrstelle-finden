import React, { useState } from 'react'
import './Process.css'

const steps = [
  {
    num: '01',
    title: 'Standort bestimmen',
    caption: 'Wo stehst du gerade — und was beschäftigt dich?',
    heading: 'Standort bestimmen',
    para: 'Bevor es losgeht, schauen wir gemeinsam auf die Ausgangslage: Wie geht es dir mit der Berufswahl? Was ist schon klar, was ist noch offen? Auch die Eltern kommen hier zu Wort.',
    bullets: ['Offenes Erstgespräch mit Jugendlichem und Eltern', 'Erwartungen und Zeitplan klären', 'Überblick über den bisherigen Stand'],
  },
  {
    num: '02',
    title: 'Potenzial entdecken',
    caption: 'Stärken und Interessen sichtbar machen.',
    heading: 'Potenzial entdecken',
    para: 'Wir machen Stärken, Interessen und Werte sichtbar — mit Gesprächen und einfachen Übungen. So entsteht ein ehrliches Bild davon, was wirklich zu dir passt.',
    bullets: ['Stärken- und Interessenanalyse', 'Blick auf Schulfächer, Hobbys und Alltag', 'Erste passende Berufsfelder'],
  },
  {
    num: '03',
    title: 'Möglichkeiten eingrenzen',
    caption: 'Passende Berufe und Lehrstellen finden.',
    heading: 'Möglichkeiten eingrenzen',
    para: 'Aus vielen Optionen filtern wir gemeinsam die passenden heraus. Wir schauen konkret auf Berufe, Anforderungen und offene Lehrstellen in deiner Region.',
    bullets: ['Recherche passender Berufe und Betriebe', 'Schnupperlehren gezielt auswählen', 'Realistische Einschätzung der Chancen'],
  },
  {
    num: '04',
    title: 'Entscheidungen treffen',
    caption: 'Sicher wählen, was wirklich zu dir passt.',
    heading: 'Entscheidungen treffen',
    para: 'Jetzt wird es konkret. Mit Klarheit über deine Optionen triffst du eine Wahl, hinter der du wirklich stehst — ohne Bauchweh.',
    bullets: ['Optionen abwägen und priorisieren', 'Plan A und Plan B festlegen', 'Sicher entscheiden statt zögern'],
  },
  {
    num: '05',
    title: 'Den Weg erfolgreich gehen',
    caption: 'Bewerbung, Schnuppern und ein guter Start.',
    heading: 'Den Weg erfolgreich gehen',
    para: 'Ich begleite dich beim letzten Schritt: von der Bewerbung übers Schnuppern bis zum erfolgreichen Start in die Lehre.',
    bullets: ['Bewerbungsdossier erstellen', 'Vorbereitung auf Gespräche und Schnuppern', 'Begleitung bis zum Lehrbeginn'],
  },
]

export default function Process() {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <section id="process" className="process">
      <div className="process-inner">
        <div className="process-header">
          <div className="eyebrow"><span className="eyebrow-dot" />Der Ablauf</div>
          <h2 className="process-h2">Fünf Schritte, ein klarer Weg</h2>
          <p className="process-sub">Klicke auf einen Schritt für mehr Details.</p>
        </div>

        <div className="stepper-wrap">
          <div className="stepper-connector" />
          <div className="stepper-row">
            {steps.map((s, i) => (
              <button
                key={s.num}
                className={'step-btn' + (active === i ? ' step-btn--active' : '')}
                onClick={() => setActive(i)}
              >
                <div className={'step-badge' + (active === i ? ' step-badge--active' : '')}>
                  {s.num}
                </div>
                <div className="step-title">{s.title}</div>
                <div className="step-caption">{s.caption}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-num">{step.num}</div>
          <div className="detail-right">
            <h3 className="detail-h3">{step.heading}</h3>
            <p className="detail-para">{step.para}</p>
            <ul className="detail-bullets">
              {step.bullets.map((b, i) => (
                <li key={i} className="detail-bullet">
                  <span className="bullet-dot" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
