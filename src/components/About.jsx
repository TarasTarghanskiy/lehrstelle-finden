import React from 'react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <aside className="about-side">
          <div className="about-photo">
            <div className="about-photo-accent" />
            <div className="about-photo-frame">
              <svg width="30" height="26" viewBox="0 0 30 26" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="28" height="20" rx="3" stroke="rgba(15,61,74,0.35)" strokeWidth="1.5" />
                <circle cx="10.5" cy="11" r="2.5" stroke="rgba(15,61,74,0.35)" strokeWidth="1.5" />
                <path d="M1 19l6.5-6 4 4 5-5 7.5 7.5" stroke="rgba(15,61,74,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Profilfoto folgt</span>
            </div>
          </div>
          <div className="about-name">David Buck</div>
          <div className="about-role">Berufswahlbegleitung · Sagaled</div>
          <a
            className="about-linkedin"
            href="https://www.linkedin.com/in/david-buck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            LinkedIn-Profil
          </a>
        </aside>

        <div className="about-body">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Über mich
          </div>
          <p className="about-lead">
            Die Berufswahl gehört zu den ersten grossen Entscheidungen im Leben. Ich weiss
            das nicht nur aus meiner beruflichen Erfahrung – sondern auch aus meiner
            eigenen Geschichte.
          </p>
          <p>
            Nach dem Gymnasium musste ich mich unter Zeitdruck für einen Ausbildungsweg
            entscheiden. Rückblickend war dies nicht die richtige Entscheidung – nicht
            wegen der kaufmännischen Lehre selbst, sondern weil der gewählte Lehrbetrieb
            nicht zu mir passte. Damals fehlte mir die Orientierung, um bewusst abzuwägen,
            welcher Beruf und welches Umfeld wirklich zu mir passen. Diese Erfahrung hat
            mich bis heute geprägt und mir gezeigt, wie wichtig Orientierung vor einer
            Entscheidung ist. Genau deshalb begleite ich heute Jugendliche auf ihrem Weg
            in die Berufswelt.
          </p>
          <p>
            Seit mehr als zehn Jahren begleite ich Jugendliche, Mitarbeitende und
            Führungskräfte bei wichtigen beruflichen Entscheidungen. Mein eigener
            Berufsweg führte mich von der öffentlichen Verwaltung über die
            Personalberatung bis in internationale Unternehmen und KMU. Dabei erhielt ich
            Einblicke in unterschiedlichste Branchen und Unternehmensgrössen – vom
            Kleinbetrieb bis hin zu Konzernstrukturen. Diese Erfahrungen haben mir
            gezeigt: Jeder Beruf, jeder Betrieb und jeder Mensch ist unterschiedlich.
            Genau deshalb gibt es keine Berufswahl «von der Stange».
          </p>
          <p>
            Ich bin überzeugt, dass unser duales Berufsbildungssystem eine grosse Stärke
            der Schweiz ist. Die Berufslehre eröffnet jungen Menschen echte Chancen,
            schafft Durchlässigkeit und ermöglicht vielfältige Karrierewege. Genau deshalb
            liegt es mir am Herzen, Jugendliche dabei zu unterstützen, einen Weg zu finden,
            der zu ihnen passt – nicht nur für den ersten Beruf, sondern als Fundament für
            ihre weitere Entwicklung.
          </p>
          <blockquote className="about-quote">
            Denn jeder Berufsweg beginnt mit einer Entscheidung – und jede Geschichte
            verdient einen guten Anfang.
          </blockquote>
        </div>
      </div>
    </section>
  )
}
