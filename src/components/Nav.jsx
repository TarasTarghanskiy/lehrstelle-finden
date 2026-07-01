import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">lena&nbsp;hofer</a>
      <div className="nav-links">
        <a href="#about" className="nav-link">Über mich</a>
        <a href="#process" className="nav-link">Ablauf</a>
        <a href="#contact" className="nav-link">Kontakt</a>
        <a href="#contact" className="nav-cta">Termin anfragen</a>
      </div>
    </nav>
  )
}
