import React, { useState } from 'react'
import './Approach.css'

const steps = [
  {
    num: '01',
    title: 'Standort bestimmen',
    caption: 'Wo stehst du – und was beschäftigt dich?',
    para: 'Bevor es losgeht, nehmen wir uns Zeit für deine Ausgangslage. Gemeinsam schauen wir, wo du im Berufswahlprozess stehst, welche Fragen dich beschäftigen und welche Erwartungen du und deine Eltern mitbringen. So schaffen wir eine gemeinsame Grundlage für die nächsten Schritte.',
    bullets: [
      'Offenes Erstgespräch mit Jugendlichen und Eltern',
      'Erwartungen und Ziele klären',
      'Überblick über den bisherigen Berufswahlprozess',
      'Gemeinsame Planung des weiteren Vorgehens',
    ],
  },
  {
    num: '02',
    title: 'Potenzial entdecken',
    caption: 'Sichtbar machen, was dich auszeichnet.',
    para: 'Jeder Mensch bringt unterschiedliche Stärken, Interessen und Persönlichkeitsmerkmale mit. Gemeinsam machen wir sichtbar, was dich auszeichnet und welche Tätigkeiten zu dir passen. Daraus entsteht dein persönliches Potenzialprofil – die Grundlage für alle weiteren Entscheidungen.',
    bullets: [
      'Strukturierte Gespräche und Reflexion',
      'Einbezug von Eltern und – wenn möglich – Lehrpersonen',
      'Individuelles Potenzialprofil',
      'Stärken, Interessen und Motivation sichtbar machen',
    ],
  },
  {
    num: '03',
    title: 'Möglichkeiten eingrenzen',
    caption: 'Passende Berufsfelder finden und vergleichen.',
    para: 'Auf Basis deines Potenzialprofils gleichen wir deine Stärken mit der Berufswelt ab. Gemeinsam grenzen wir passende Berufsfelder ein, vergleichen verschiedene Möglichkeiten und entwickeln daraus eine begründete Berufsempfehlung.',
    bullets: [
      'Passende Berufsfelder identifizieren',
      'Berufe systematisch vergleichen',
      'Chancen und Entwicklungsmöglichkeiten aufzeigen',
      'Persönliche Berufsempfehlung erarbeiten',
    ],
  },
  {
    num: '04',
    title: 'Entscheidungen treffen',
    caption: 'Aus guten Optionen die richtige Wahl treffen.',
    para: 'Nun geht es darum, aus den passenden Möglichkeiten die richtige Wahl zu treffen. Gemeinsam priorisieren wir Berufe, planen Schnupperlehren und bereiten die nächsten Schritte gezielt vor.',
    bullets: [
      'Berufe priorisieren',
      'Schnupperlehren planen',
      'Bewerbungsunterlagen vorbereiten',
      'Entscheidungsgrundlage festigen',
    ],
  },
  {
    num: '05',
    title: 'Den Weg erfolgreich gehen',
    caption: 'Begleitung bis zum gelungenen Einstieg.',
    para: 'Mit der Entscheidung endet die Begleitung nicht. Ich unterstütze dich auch bei den letzten Schritten bis zum gelungenen Einstieg.',
    bullets: [
      'Vorbereitung auf Bewerbungsgespräche',
      'Unterstützung bei offenen Fragen',
      'Begleitung bis zum Lehrbeginn',
      'Abschlussgespräch und Ausblick',
    ],
  },
]

export default function Approach() {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <section id="approach" className="approach">
      <div className="approach-inner">
        <div className="approach-head">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            So begleitet dich Sagaled
          </div>
          <div className="approach-head-grid">
            <p className="approach-lead">
              Die Berufswahl ist eine der ersten grossen Entscheidungen im Leben.
              Gleichzeitig stehen Jugendlichen heute mehr Möglichkeiten offen als je
              zuvor – das eröffnet Chancen, kann aber auch Unsicherheit schaffen.
            </p>
            <div className="approach-philo">
              <p>
                Sagaled begleitet Jugendliche und ihre Eltern Schritt für Schritt
                durch diesen Prozess – persönlich, strukturiert und praxisnah.
              </p>
              <p>
                Im Mittelpunkt stehen nicht Noten oder vorgefertigte Berufsvorschläge.
                Gemeinsam entdecken wir Stärken, Interessen und Potenziale – und
                bauen daraus eine fundierte Entscheidungsgrundlage.
              </p>
            </div>
          </div>
        </div>

        <div className="stepper-caption">
          Fünf Schritte, ein klarer Weg. <span>Tippe auf einen Schritt für die Details.</span>
        </div>

        <div className="stepper-wrap">
          <div className="stepper-line" />
          <div className="stepper-row">
            {steps.map((s, i) => (
              <button
                key={s.num}
                className={'step-btn' + (active === i ? ' step-btn--active' : '')}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
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
            <h3 className="detail-h3">{step.title}</h3>
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
