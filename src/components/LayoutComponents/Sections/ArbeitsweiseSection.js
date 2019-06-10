// TODO This is not really a hook, because it is not reusable

import React from "react"
import styled from "styled-components"

import { Button } from "../layoutIndex"

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

const ProjekteSection = () => {
  return (
    <PositionedSection>
      <h1>Arbeitsweise</h1>
      <p>
        Im JUNON arbeiten wir komplett ehrenamtlichen ohne eine lokale
        Anbindung. Wir organisieren uns in Arbeitsgruppen und bleiben online in
        Kontakt.
        <br />
        <br />
        Unsere Vorstandsmitglieder sowie die Mitgliedsgruppen und
        Fördermitglieder verteilen sich über ganz Deutschland.{` `}
        <Button>Mehr erfahren</Button>
      </p>
    </PositionedSection>
  )
}

export default ProjekteSection
