import React from "react"
import styled from "styled-components"

import { ButtonInternalLink, SVGImage, Card } from "../../ComponentsIndex"
import { netzwerktreffen_SVG, projekte_SVG } from "../../../images/ImageIndex"

//FIXME When resizing the Browser Window larger then the desktop the Layout breaks with the grid minmaxing. I am unsure wether this is happening on larger displays by default.
const PositionedSection = styled.section`
  grid-column: 2 / 3;
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  grid-gap: 5em;
  min-height: 80vmin;
  justify-content: center;
  align-items: center;

  h1 {
    grid-column: 1/ -1;
    justify-self: center;
    border-bottom: 1px solid rgb(var(--dark-gray));
    padding-bottom: 1em;
  }
`

const ProjekteSection = () => {
  return (
    <PositionedSection>
      <h1>Projekte</h1>
      <Card>
        <h2>Netzwerktreffen</h2>
        <p>
          Dieses Jahr beschäftigen wir uns mit den Vereinten Nationen, Model
          United Nations und ihren Rollen zum Thema Umweltschutz.
        </p>
        <ButtonInternalLink to="/Netzwerktreffen 2019">
          Mehr erfahren
        </ButtonInternalLink>
        <p>Komm für ein Wochenende nach München es geht auf uns!</p>
        <ButtonInternalLink to="/Netzwerktreffen 2019">
          Anmeldung
        </ButtonInternalLink>
      </Card>
      <SVGImage img={netzwerktreffen_SVG} />
      <Card>
        <h2>Unsere Arbeit</h2>
        <p>
          Wir bündeln und vermitteln das Wussen unserer Mitgliedsgruppen bei
          Seminaren und Konferenzen.
        </p>
        <p>
          Jährlich veranstalten wir Study Trips, Summer Schools und
          Delegiertenversammlungen und unterstützen bei der Realisierung neuer
          Projekte.
        </p>
        <ButtonInternalLink to="/projekte">Mehr erfahren</ButtonInternalLink>
      </Card>
      <SVGImage img={projekte_SVG} />
    </PositionedSection>
  )
}

export default ProjekteSection
