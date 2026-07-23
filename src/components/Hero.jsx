import React from 'react'
import './Hero.css'
import heroImg from '../assets/hero.jpg'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Dein Weg. Deine Geschichte.
          </div>
          <h1 className="hero-h1">Berufswahl beginnt mit dir.</h1>
          <p className="hero-p">
            Entdecke deine Stärken, gewinne Orientierung und finde Schritt für
            Schritt den Beruf, der wirklich zu dir passt.
          </p>
          <div className="hero-pills">
            <span className="pill">Persönlich</span>
            <span className="pill">Strukturiert</span>
            <span className="pill">Praxisnah</span>
          </div>
          <div className="hero-cta-row">
            <a href="#contact" className="btn-primary">Kontakt aufnehmen</a>
            <span className="hero-hint">Das Kennenlernen ist kostenlos.</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-accent" />
          <img
            className="hero-img"
            src={heroImg}
            alt="Jugendliche blickt bei Sonnenaufgang über ein weites Tal – Sinnbild für Orientierung und Aufbruch."
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
