import React, { useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Standort bestimmen',
    short: 'Wo stehst du gerade — und was beschäftigt dich?',
    detail: 'Bevor es losgeht, schauen wir gemeinsam auf die Ausgangslage: Wie geht es dir mit der Berufswahl? Was ist schon klar, was ist noch offen? Auch die Eltern kommen hier zu Wort.',
    bullets: [
      'Offenes Erstgespräch mit Jugendlichem und Eltern',
      'Erwartungen und Zeitplan klären',
      'Überblick über den bisherigen Stand',
    ],
  },
  {
    num: '02',
    title: 'Potenzial entdecken',
    short: 'Stärken und Interessen sichtbar machen.',
    detail: 'Mit gezielten Methoden bringen wir ans Licht, was wirklich liegt und begeistert — jenseits von Schulnoten und Erwartungen.',
    bullets: [
      'Stärken- und Interessenprofil erstellen',
      'Persönlichkeit und Werte reflektieren',
      'Erste Berufsrichtungen ableiten',
    ],
  },
  {
    num: '03',
    title: 'Möglichkeiten eingrenzen',
    short: 'Passende Berufe und Lehrstellen finden.',
    detail: 'Aus der Fülle der Möglichkeiten wählen wir die passendsten aus und schauen, wo realistische Chancen auf dem Lehrstellenmarkt bestehen.',
    bullets: [
      'Berufe recherchieren und vergleichen',
      'Schnupperlehren planen',
      'Lehrstellen-Recherche starten',
    ],
  },
  {
    num: '04',
    title: 'Entscheidungen treffen',
    short: 'Sicher wählen, was wirklich zu dir passt.',
    detail: 'Wenn die Optionen klar sind, unterstütze ich dabei, eine fundierte Entscheidung zu treffen — ohne Druck, aber mit Klarheit.',
    bullets: [
      'Vor- und Nachteile abwägen',
      'Eltern und Jugendlichen in Einklang bringen',
      'Bewerbungsstrategie festlegen',
    ],
  },
  {
    num: '05',
    title: 'Den Weg erfolgreich gehen',
    short: 'Bewerbung, Schnuppern und ein guter Start.',
    detail: 'Vom Bewerbungsschreiben bis zum Vorstellungsgespräch — ich begleite den gesamten Prozess bis zur unterschriebenen Lehrstelle.',
    bullets: [
      'Bewerbungsunterlagen erstellen',
      'Vorbereitung auf Vorstellungsgespräche',
      'Begleitung bis zum Vertragsabschluss',
    ],
  },
]

export default function Process() {
  const [active, setActive] = useState(0)

  return (
    <section id="process" style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.header}>
          <div style={styles.label}>DER ABLAUF</div>
          <h2 style={styles.heading}>Fünf Schritte, ein klarer Weg</h2>
          <p style={styles.sub}>Klicke auf einen Schritt für mehr Details.</p>
        </div>

        <div style={styles.stepsRow}>
          {steps.map((step, i) => (
            <button
              key={step.num}
              onClick={() => setActive(i)}
              style={{
                ...styles.stepBtn,
                opacity: active === i ? 1 : 0.45,
              }}
            >
              <div style={{
                ...styles.circle,
                backgroundColor: active === i ? '#4b7355' : '#8fa98f',
              }}>
                {step.num}
              </div>
              <div style={styles.stepTitle}>{step.title}</div>
              <div style={styles.stepShort}>{step.short}</div>
              {i < steps.length - 1 && <div style={styles.connector} />}
            </button>
          ))}
        </div>

        <div style={styles.detailCard}>
          <div style={styles.detailNum}>{steps[active].num}</div>
          <div style={styles.detailRight}>
            <h3 style={styles.detailTitle}>{steps[active].title}</h3>
            <p style={styles.detailText}>{steps[active].detail}</p>
            <ul style={styles.bullets}>
              {steps[active].bullets.map((b, i) => (
                <li key={i} style={styles.bullet}>
                  <span style={styles.bulletDot}>●</span>
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

const styles = {
  section: {
    backgroundColor: '#eae7dd',
    padding: '100px 40px',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 60,
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  label: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.12em',
    color: '#4b7355',
    textTransform: 'uppercase',
  },
  heading: {
    fontSize: 'clamp(30px, 3.5vw, 48px)',
    fontWeight: 900,
    letterSpacing: '-0.03em',
    color: '#1c1c1a',
  },
  sub: {
    fontSize: 15,
    color: '#7a7a72',
  },
  stepsRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 0,
    width: '100%',
    position: 'relative',
  },
  stepBtn: {
    flex: 1,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    padding: '0 8px',
    position: 'relative',
    transition: 'opacity 0.2s',
  },
  circle: {
    width: 54,
    height: 54,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 700,
    color: '#ffffff',
    flexShrink: 0,
    transition: 'background-color 0.2s',
  },
  connector: {
    position: 'absolute',
    top: 27,
    right: -50,
    width: 100,
    height: 1.5,
    backgroundColor: '#b0b8a8',
    zIndex: 0,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1c1c1a',
    textAlign: 'center',
    lineHeight: 1.3,
  },
  stepShort: {
    fontSize: 12,
    color: '#6b6b65',
    textAlign: 'center',
    lineHeight: 1.4,
    maxWidth: 140,
  },
  detailCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: '40px 48px',
    width: '100%',
    display: 'flex',
    gap: 36,
    alignItems: 'flex-start',
  },
  detailNum: {
    fontSize: 36,
    fontWeight: 900,
    color: '#4b7355',
    letterSpacing: '-0.04em',
    flexShrink: 0,
    minWidth: 52,
  },
  detailRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: 800,
    color: '#1c1c1a',
    letterSpacing: '-0.02em',
  },
  detailText: {
    fontSize: 16,
    lineHeight: 1.65,
    color: '#3a3a36',
    maxWidth: 640,
  },
  bullets: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  bullet: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 10,
    fontSize: 15,
    color: '#3a3a36',
  },
  bulletDot: {
    color: '#4b7355',
    fontSize: 8,
    flexShrink: 0,
  },
}
