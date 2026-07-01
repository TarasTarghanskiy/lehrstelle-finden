import React from 'react'

export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.left}>
          <div style={styles.label}>
            <span style={styles.dot}>●</span>
            BERUFSCOACHING FÜR JUGENDLICHE
          </div>
          <h1 style={styles.heading}>
            Der richtige Beruf beginnt mit der richtigen Begleitung.
          </h1>
          <p style={styles.sub}>
            Ich helfe Jugendlichen und ihren Eltern, aus dem Dschungel der Möglichkeiten die Lehrstelle zu finden, die wirklich passt.
          </p>
          <div style={styles.tags}>
            <span style={styles.tag}>Persönlich</span>
            <span style={styles.tag}>Auf Augenhöhe</span>
            <span style={styles.tag}>Ohne Druck</span>
          </div>
          <div style={styles.ctaRow}>
            <a href="#contact" style={styles.btn}>Kontakt aufnehmen</a>
            <span style={styles.hint}>Kostenloses Kennenlernen.</span>
          </div>
        </div>
        <div style={styles.right}>
          <div style={styles.dashedFrame}>
            <div style={styles.photoCard}>
              <div style={styles.photoPlaceholder}>
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
                  <rect x="1" y="4" width="30" height="23" rx="3" stroke="#9ab09a" strokeWidth="1.5" fill="none"/>
                  <circle cx="11" cy="13" r="3" stroke="#9ab09a" strokeWidth="1.5" fill="none"/>
                  <path d="M1 22l7-7 5 5 4-4 8 8" stroke="#9ab09a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={styles.photoLabel}>Foto von Lena</span>
              </div>
            </div>
          </div>
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
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.12em',
    color: '#4b7355',
    textTransform: 'uppercase',
  },
  dot: {
    fontSize: 8,
  },
  heading: {
    fontSize: 'clamp(38px, 4.5vw, 58px)',
    fontWeight: 900,
    lineHeight: 1.08,
    letterSpacing: '-0.03em',
    color: '#1c1c1a',
  },
  sub: {
    fontSize: 17,
    lineHeight: 1.6,
    color: '#3a3a36',
    maxWidth: 480,
  },
  tags: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: 14,
    fontWeight: 400,
    color: '#3a5a42',
    border: '1.5px solid #b8c9b8',
    borderRadius: 100,
    padding: '6px 16px',
    backgroundColor: 'transparent',
  },
  ctaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  btn: {
    display: 'inline-block',
    fontSize: 16,
    fontWeight: 600,
    color: '#ffffff',
    backgroundColor: '#4b7355',
    padding: '14px 28px',
    borderRadius: 100,
    textDecoration: 'none',
    transition: 'background-color 0.15s',
  },
  hint: {
    fontSize: 14,
    color: '#888882',
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
  },
  dashedFrame: {
    border: '1.5px dashed #b0b8a8',
    borderRadius: 28,
    padding: 14,
    width: '100%',
    maxWidth: 440,
  },
  photoCard: {
    backgroundColor: '#4b7355',
    borderRadius: 20,
    aspectRatio: '3/4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoPlaceholder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  photoLabel: {
    fontSize: 13,
    color: '#9ab09a',
  },
}
