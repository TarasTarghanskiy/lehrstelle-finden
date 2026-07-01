import React, { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <a href="#" style={styles.logo}>lena hofer</a>
        <div style={styles.links}>
          <a href="#about" style={styles.link}>Über mich</a>
          <a href="#process" style={styles.link}>Ablauf</a>
          <a href="#contact" style={styles.link}>Kontakt</a>
          <a href="#contact" style={styles.cta}>Termin anfragen</a>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: '#f5f3ec',
    borderBottom: '1px solid transparent',
    padding: '0 40px',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 72,
  },
  logo: {
    fontSize: 18,
    fontWeight: 700,
    color: '#1c1c1a',
    textDecoration: 'none',
    letterSpacing: '-0.02em',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: 36,
  },
  link: {
    fontSize: 15,
    fontWeight: 400,
    color: '#1c1c1a',
    textDecoration: 'none',
    opacity: 0.85,
    transition: 'opacity 0.15s',
  },
  cta: {
    fontSize: 15,
    fontWeight: 500,
    color: '#ffffff',
    textDecoration: 'none',
    backgroundColor: '#4b7355',
    padding: '10px 22px',
    borderRadius: 100,
    transition: 'background-color 0.15s',
  },
}
