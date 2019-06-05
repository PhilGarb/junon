import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Button from "../components/LayoutComponents/Button"
import useHero from "../components/hooks/useHero"
import Card from "../components/LayoutComponents/Card"

const PositionedSection = styled.section`
  grid-column: 2 / 3;
`

const index = ({ data }) => {
  const Hero = useHero()

  const {
    file: {
      childImageSharp: {
        fluid: { ...backgroundImage },
      },
    },
  } = data

  return (
    <Layout>
      <Hero
        card={
          <Card>
            <h2>Willkommen auf der offiziellen Seite des</h2>
            <h1>Jungen UNO Netzwerk Deutschland e.V.</h1>
          </Card>
        }
        img={backgroundImage}
      />
      <PositionedSection>
        <h1>Projekte</h1>
        <div>
          <h2>Netzwerktreffen</h2>
          <p>
            Dieses Jahr beschäftigen wir uns mit den Vereinten Nationen, Model
            United Nations und ihren Rollen zum Thema Umweltschutz.
          </p>
          <Button>Mehr erfahren</Button>
          <p>Komm für ein Wochenende nach München es geht auf uns!</p>
          <Button>Anmeldung</Button>
        </div>
        <div>
          <h2>Unsere Arbeit</h2>
          <p>
            Wir bündeln und vermitteln das Wissen unserer Mitgliedsgruppen bei
            Seminaren und Konferenzen, veranstalten jährlich wechselnd Study
            Trips, Summer Schools und Delegiertenversammlungen und unterstützen
            bei der Realisierung neuer Projekte.
          </p>
          <Button>Mehr erfahren</Button>
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
          <Button>Mehr erfahren</Button>
        </div>
        <div>
          <h1>Partner</h1>
          <p>
            Zusammen mit unseren nationalen und internationalen Partnern
            bekennen wir uns zu den universellen Werten und der Zielen Vereinten
            Nationen.
          </p>
          <Button>Mehr erfahren</Button>
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
        <Button>Mehr erfahren</Button>
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
          <Button>Senden</Button>
        </form>
      </PositionedSection>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    file(relativePath: { regex: "/Background/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default index
