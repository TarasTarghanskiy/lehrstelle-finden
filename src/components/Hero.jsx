import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Berufscoaching für Jugendliche
          </div>
          <h1 className="hero-h1">
            Der richtige Beruf beginnt mit der richtigen Begleitung.
          </h1>
          <p className="hero-p">
            Ich helfe Jugendlichen und ihren Eltern, aus dem Dschungel der Möglichkeiten die Lehrstelle zu finden, die wirklich passt.
          </p>
          <div className="hero-tags">
            <span className="tag">Persönlich</span>
            <span className="tag">Auf Augenhöhe</span>
            <span className="tag">Ohne Druck</span>
          </div>
          <div className="hero-cta-row">
            <a href="#contact" className="btn-primary">Kontakt aufnehmen</a>
            <span className="hero-hint">Kostenloses Kennenlernen.</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="photo-accent" />
          <div className="photo-img">
            <div className="photo-cap">
              <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                <rect x="1" y="3" width="26" height="19" rx="3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
                <circle cx="10" cy="11" r="2.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
                <path d="M1 18.5l6-6 4 4 4-4 7 7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Foto von Lena</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
