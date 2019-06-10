// TODO This is not really a hook, because it is not reusable

import React from "react"
import styled from "styled-components"

import { Button, Card } from "../layoutIndex"
import { teams } from "../../../images/imageIndex"

const PositionedSection = styled.section`
  grid-column: 2 / 3;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2em;
  background-image: url(${teams});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
const SectionParagraph = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
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
