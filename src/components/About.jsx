import React from 'react'

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.left}>
          <h2 style={styles.heading}>
            <span style={styles.muted}>Über mich.</span>{' '}
            Ich begleite seit über zehn Jahren junge Menschen an einem entscheidenden Wendepunkt.
          </h2>
        </div>
        <div style={styles.right}>
          <p style={styles.p}>
            «Was mache ich nach der Schule?» — diese Frage bringt viel Druck mit sich, für Jugendliche wie für Eltern. Ich schaffe Raum, in dem in Ruhe überlegt werden darf.
          </p>
          <p style={styles.p}>
            Wir schauen nicht nur auf Noten, sondern auf Stärken, Interessen und das echte Leben. So entsteht kein Zufallsentscheid, sondern eine Wahl, die trägt.
          </p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '80px 40px 100px',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
    alignItems: 'start',
  },
  left: {},
  heading: {
    fontSize: 'clamp(30px, 3.5vw, 48px)',
    fontWeight: 900,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    color: '#1c1c1a',
  },
  muted: {
    color: '#a8bea8',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    paddingTop: 8,
  },
  p: {
    fontSize: 17,
    lineHeight: 1.65,
    color: '#3a3a36',
  },
}
