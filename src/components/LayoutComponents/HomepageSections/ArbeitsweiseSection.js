// TODO This is not really a hook, because it is not reusable

import React from "react"
import styled from "styled-components"

import { Button, Card } from "../layoutIndex"
import { teams } from "../../../images/imageIndex"

const PositionedSection = styled.section`
  grid-column: 2 / 3;
  min-height: 80vmin;
  display: grid;
  background-image: url(${teams});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  align-items: flex-start;
`
const SectionParagraph = styled(Card)`
  width: 40%;
  @media (max-width: 1000px) {
    justify-self: center;
  }
`

const ProjekteSection = () => {
  return (
    <PositionedSection>
      <SectionParagraph>
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
      </SectionParagraph>
    </PositionedSection>
  )
}

export default ProjekteSection
