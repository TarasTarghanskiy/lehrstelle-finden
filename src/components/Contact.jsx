import React, { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.header}>
          <div style={styles.label}>KONTAKT</div>
          <h2 style={styles.heading}>Machen wir den ersten Schritt.</h2>
          <p style={styles.sub}>
            Schreib mir unverbindlich — das erste<br />Kennenlernen ist kostenlos.
          </p>
        </div>

        <form
          style={styles.form}
          onSubmit={(e) => { e.preventDefault(); alert('Danke! Wir melden uns bald.') }}
        >
          <input
            type="email"
            placeholder="deine@email.ch"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.btn}>Kontakt aufnehmen</button>
        </form>

        <div style={styles.contactInfo}>
          <a href="mailto:lena@lehrstelle-finden.ch" style={styles.infoLink}>lena@lehrstelle-finden.ch</a>
          <span style={styles.dot}>·</span>
          <a href="tel:+41441234567" style={styles.infoLink}>+41 44 123 45 67</a>
          <span style={styles.dot}>·</span>
          <span style={styles.infoText}>Zürich &amp; online</span>
        </div>
      </div>

      <footer style={styles.footer}>
        <span>© 2026 Lena Hofer — Berufscoaching</span>
        <span>Zürich</span>
      </footer>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: '#f5f3ec',
    padding: '100px 40px 0',
    display: 'flex',
    flexDirection: 'column',
  },
  inner: {
    maxWidth: 800,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 40,
    width: '100%',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  label: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.12em',
    color: '#4b7355',
    textTransform: 'uppercase',
  },
  heading: {
    fontSize: 'clamp(36px, 5vw, 68px)',
    fontWeight: 900,
    letterSpacing: '-0.03em',
    color: '#1c1c1a',
    lineHeight: 1.05,
  },
  sub: {
    fontSize: 17,
    lineHeight: 1.6,
    color: '#6b6b65',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    gap: 12,
    width: '100%',
    maxWidth: 520,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: '14px 20px',
    border: '1.5px solid #d0cdc4',
    borderRadius: 100,
    backgroundColor: '#ffffff',
    outline: 'none',
    color: '#1c1c1a',
  },
  btn: {
    fontSize: 15,
    fontWeight: 600,
    color: '#ffffff',
    backgroundColor: '#4b7355',
    border: 'none',
    padding: '14px 24px',
    borderRadius: 100,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.15s',
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  infoLink: {
    fontSize: 14,
    color: '#3a3a36',
    textDecoration: 'none',
  },
  dot: {
    color: '#aaa',
  },
  infoText: {
    fontSize: 14,
    color: '#3a3a36',
  },
  footer: {
    marginTop: 80,
    borderTop: '1px solid #ddd9cf',
    padding: '24px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 13,
    color: '#888882',
    maxWidth: '100%',
    width: '100%',
    alignSelf: 'stretch',
  },
}
