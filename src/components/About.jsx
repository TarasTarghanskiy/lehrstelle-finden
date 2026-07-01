import React from 'react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-lead">
          <span className="about-muted">Über mich.</span>{' '}
          Ich begleite seit über zehn Jahren junge Menschen an einem entscheidenden Wendepunkt.
        </div>
        <div className="about-body">
          <p>«Was mache ich nach der Schule?» — diese Frage bringt viel Druck mit sich, für Jugendliche wie für Eltern. Ich schaffe Raum, in dem in Ruhe überlegt werden darf.</p>
          <p>Wir schauen nicht nur auf Noten, sondern auf Stärken, Interessen und das echte Leben. So entsteht kein Zufallsentscheid, sondern eine Wahl, die trägt.</p>
        </div>
      </div>
    </section>
  )
}
