// TODO This is not really a hook, because it is not reusable

import React from "react"
import styled from "styled-components"

import { Button, SVGBackgroundImage, Card } from "../layoutIndex"
import { netzwerktreffen, projekte } from "../../../images/imageIndex"

const PositionedSection = styled.section`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em 1em;
  min-height: 80vmin;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    margin: 1em;
  }

  h1 {
    grid-column: 1/ -1;
    justify-self: center;
    border-bottom: 1px solid var(--dark-gray);
    padding-bottom: 1em;
  }
`

const PositionedCard = styled(Card)`
  @media (max-width: 100px) {
    width: 90%;
  }
`

const ProjekteSection = () => {
  return (
    <PositionedSection>
      <h1>Projekte</h1>
      <SVGBackgroundImage img={netzwerktreffen} />
      <PositionedCard>
        <h2>Netzwerktreffen</h2>
        <p>
          Dieses Jahr beschäftigen wir uns mit den Vereinten Nationen, Model
          United Nations und ihren Rollen zum Thema Umweltschutz.
        </p>
        <Button>Mehr erfahren</Button>
        <p>Komm für ein Wochenende nach München es geht auf uns!</p>
        <Button>Anmeldung</Button>
      </PositionedCard>
      <SVGBackgroundImage img={projekte} />
      <PositionedCard>
        <h2>Unsere Arbeit</h2>
        <p>
          Wir bündeln und vermitteln das Wissen unserer Mitgliedsgruppen bei
          Seminaren und Konferenzen, veranstalten jährlich wechselnd Study
          Trips, Summer Schools und Delegiertenversammlungen und unterstützen
          bei der Realisierung neuer Projekte.
        </p>
        <Button>Mehr erfahren</Button>
      </PositionedCard>
    </PositionedSection>
  )
}

export default ProjekteSection
