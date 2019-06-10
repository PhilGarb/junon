// TODO This is not really a hook, because it is not reusable

import React from "react"
import styled from "styled-components"

import { Button, SVGBackgroundImage } from "../layoutIndex"
import { netzwerktreffen, projekte } from "../../../images/imageIndex"

const PositionedSection = styled.section`
  grid-column: 2 / 3;
  height: 80vh;
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  justify-items: center;
  grid-gap: 2em 1em;
`
const SectionHeading = styled.h1`
  grid-column: 1/ -1;
  justify-self: start;
`
const SectionParagraph = styled.div`
  width: 30em;
`

const ProjekteSection = () => {
  return (
    <PositionedSection>
      <SectionHeading>Projekte</SectionHeading>
      <SectionParagraph>
        <h2>Netzwerktreffen</h2>
        <p>
          Dieses Jahr beschäftigen wir uns mit den Vereinten Nationen, Model
          United Nations und ihren Rollen zum Thema Umweltschutz.
        </p>
        <Button>Mehr erfahren</Button>
        <p>Komm für ein Wochenende nach München es geht auf uns!</p>
        <Button>Anmeldung</Button>
      </SectionParagraph>
      <SVGBackgroundImage img={netzwerktreffen} />
      <SVGBackgroundImage img={projekte} />
      <SectionParagraph>
        <h2>Unsere Arbeit</h2>
        <p>
          Wir bündeln und vermitteln das Wissen unserer Mitgliedsgruppen bei
          Seminaren und Konferenzen, veranstalten jährlich wechselnd Study
          Trips, Summer Schools und Delegiertenversammlungen und unterstützen
          bei der Realisierung neuer Projekte.
        </p>
        <Button>Mehr erfahren</Button>
      </SectionParagraph>
    </PositionedSection>
  )
}

export default ProjekteSection
