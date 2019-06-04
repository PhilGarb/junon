import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import LinkButton from "../components/LayoutComponents/LinkButton"
import useHero from "../components/hooks/useHero"

const PositionedSection = styled.section`
  grid-column: 2 / 3;
`

const index = () => {
  const Hero = useHero()

  return (
    <Layout>
      <Hero />
      <PositionedSection>
        <h1>Projekte</h1>
        <div>
          <h2>Netzwerktreffen</h2>
          <p>
            Dieses Jahr beschäftigen wir uns mit den Vereinten Nationen, Model
            United Nations und ihren Rollen zum Thema Umweltschutz.
          </p>
          <LinkButton>Mehr erfahren</LinkButton>
          <p>Komm für ein Wochenende nach München es geht auf uns!</p>
          <LinkButton>Anmeldung</LinkButton>
        </div>
        <div>
          <h2>Unsere Arbeit</h2>
          <p>
            Wir bündeln und vermitteln das Wissen unserer Mitgliedsgruppen bei
            Seminaren und Konferenzen, veranstalten jährlich wechselnd Study
            Trips, Summer Schools und Delegiertenversammlungen und unterstützen
            bei der Realisierung neuer Projekte.
          </p>
          <LinkButton>Mehr erfahren</LinkButton>
        </div>
      </PositionedSection>
      <PositionedSection>
        <div>
          <h1>Netzwerk</h1>
          <p>
            Das Junon ist ein Zusammenschluss aus zahlreichen jungen
            UN-Initiativen und Hochschulgruppen in Deutschland.
            <br />
            <br />
            Als Netzwerk wollen wir aktiv das Interesse an Politik und den
            Wissenstransfer unserer Mitgliedsgruppen fördern.
          </p>
          <LinkButton>Mehr erfahren</LinkButton>
        </div>
        <div>
          <h1>Partner</h1>
          <p>
            Zusammen mit unseren nationalen und internationalen Partnern
            bekennen wir uns zu den universellen Werten und der Zielen Vereinten
            Nationen.
          </p>
          <LinkButton>Mehr erfahren</LinkButton>
        </div>
      </PositionedSection>
      <PositionedSection>
        <h1>Arbeitsweise</h1>
        <p>
          Im JUNON arbeiten wir komplett ehrenamtlichen ohne eine lokale
          Anbindung. Wir organisieren uns in Arbeitsgruppen und bleiben online
          in Kontakt.
          <br />
          <br />
          Unsere Vorstandsmitglieder sowie die Mitgliedsgruppen und
          Fördermitglieder verteilen sich über ganz Deutschland.{` `}
        </p>
        <LinkButton>Mehr erfahren</LinkButton>
      </PositionedSection>
      <PositionedSection>
        <h1>Interesse oder Fragen?</h1>
        <h2>Schreib uns:</h2>
        <form action="#">
          <input type="email" name="email" id="email" placeholder="E-Mail" />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Anliegen"
          />
          <LinkButton>Senden</LinkButton>
        </form>
      </PositionedSection>
    </Layout>
  )
}

export default index
