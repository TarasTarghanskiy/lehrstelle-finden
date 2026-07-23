import React, { useState } from 'react'
import './Nav.css'
import logo from '../assets/sagaled-logo.png'

const links = [
  { href: '#approach', label: 'So begleitet dich Sagaled' },
  { href: '#about', label: 'Über mich' },
  { href: '#contact', label: 'Kontakt' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo" aria-label="Sagaled – Startseite">
          <img src={logo} alt="Sagaled" />
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary nav-cta">Kontakt aufnehmen</a>
        </div>

        <button
          className="nav-burger"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={'burger' + (open ? ' burger--open' : '')} />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary nav-mobile-cta" onClick={() => setOpen(false)}>
            Kontakt aufnehmen
          </a>
        </div>
      )}
    </nav>
  )
}
