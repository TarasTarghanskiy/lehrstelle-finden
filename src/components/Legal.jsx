import React from 'react'
import './Legal.css'

// Rechtstexte als Entwurf/Vorlage. Platzhalter in [ ] muss David ergänzen;
// vor dem Livegang idealerweise juristisch prüfen lassen.

function Impressum() {
  return (
    <>
      <h1>Impressum</h1>
      <p className="legal-lead">Angaben gemäss den gesetzlichen Vorschriften.</p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        [Vollständiger Name]
        <br />
        Sagaled – Berufswahlbegleitung
        <br />
        [Strasse und Hausnummer]
        <br />
        [PLZ und Ort]
        <br />
        Schweiz
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{' '}
        <a href="mailto:info@sagaled.ch">info@sagaled.ch</a>
      </p>

      <h2>Handelsregister / Mehrwertsteuer</h2>
      <p>[Falls vorhanden: Firmenname, UID-Nummer (CHE-xxx.xxx.xxx), Handelsregistereintrag – andernfalls diesen Abschnitt entfernen.]</p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
        übernommen werden.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf dieser Website veröffentlichten Inhalte, Bilder und das Logo unterliegen
        dem schweizerischen Urheberrecht. Eine Verwendung ausserhalb der Grenzen des
        Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.
      </p>
    </>
  )
}

function Datenschutz() {
  return (
    <>
      <h1>Datenschutzerklärung</h1>
      <p className="legal-lead">
        Der Schutz deiner persönlichen Daten ist mir ein wichtiges Anliegen. Nachfolgend
        informiere ich dich über die Bearbeitung von Personendaten auf dieser Website.
      </p>

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        [Vollständiger Name]
        <br />
        Sagaled – Berufswahlbegleitung
        <br />
        [Strasse und Hausnummer], [PLZ und Ort], Schweiz
        <br />
        E-Mail: <a href="mailto:info@sagaled.ch">info@sagaled.ch</a>
      </p>

      <h2>2. Bearbeitung von Daten über das Kontaktformular</h2>
      <p>
        Wenn du das Kontaktformular nutzt, bearbeite ich die von dir eingegebenen Daten
        (Vor- und Nachname, E-Mail-Adresse, Telefonnummer sowie – optional – deine
        Nachricht) ausschliesslich zur Bearbeitung deiner Anfrage und zur Kontaktaufnahme
        mit dir.
      </p>
      <p>
        Die Angabe dieser Daten erfolgt freiwillig auf Grundlage deiner Einwilligung. Ohne
        diese Angaben kann ich deine Anfrage nicht bearbeiten. Ich bewahre die Daten nur so
        lange auf, wie es für die Bearbeitung deines Anliegens erforderlich ist,
        anschliessend werden sie gelöscht – sofern keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>

      <h2>3. Hosting und Formularübermittlung</h2>
      <p>
        Diese Website wird bei Netlify (Netlify, Inc., USA) gehostet. Beim Aufruf der Seite
        sowie beim Absenden des Kontaktformulars werden technisch notwendige Daten (z. B.
        IP-Adresse, Zeitpunkt des Zugriffs) verarbeitet. Die über das Formular übermittelten
        Angaben werden von Netlify entgegengenommen und an meine E-Mail-Adresse
        weitergeleitet. Dabei können Daten in Länder ausserhalb der Schweiz und der EU (USA)
        übermittelt werden.
      </p>

      <h2>4. Schriftarten</h2>
      <p>
        Die verwendeten Schriftarten werden lokal von diesem Server ausgeliefert. Es findet
        keine Verbindung zu externen Anbietern (z. B. Google Fonts) und damit keine
        Übermittlung deiner IP-Adresse an Dritte statt.
      </p>

      <h2>5. Cookies und Analyse</h2>
      <p>
        Diese Website setzt keine Tracking-Cookies ein und verwendet keine Analyse- oder
        Marketing-Dienste.
      </p>

      <h2>6. Deine Rechte</h2>
      <p>
        Du hast im Rahmen der geltenden Datenschutzgesetzgebung das Recht auf Auskunft,
        Berichtigung, Löschung und Einschränkung der Bearbeitung deiner Personendaten sowie
        das Recht, eine erteilte Einwilligung jederzeit zu widerrufen. Wende dich dazu bitte
        an <a href="mailto:info@sagaled.ch">info@sagaled.ch</a>.
      </p>

      <h2>7. Änderungen</h2>
      <p>
        Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den
        aktuellen rechtlichen Anforderungen entspricht.
      </p>

      <p className="legal-date">Stand: [Datum eintragen]</p>
    </>
  )
}

export default function Legal({ page }) {
  return (
    <main className="legal">
      <div className="legal-inner">
        <a href="#top" className="legal-back">← Zurück zur Startseite</a>
        <article className="legal-doc">
          {page === 'impressum' ? <Impressum /> : <Datenschutz />}
        </article>
      </div>
    </main>
  )
}
