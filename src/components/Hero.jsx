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
            <span className="photo-cap">Foto von Lena</span>
          </div>
        </div>
      </div>
    </section>
  )
}
