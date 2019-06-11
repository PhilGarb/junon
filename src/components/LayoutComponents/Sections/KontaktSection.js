// TODO This is not really a hook, because it is not reusable

import React from "react"
import styled from "styled-components"

import { Button } from "../layoutIndex"

const PositionedSection = styled.section`
  grid-column: 2 / 3;
  height: 80vh;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

const ProjekteSection = () => {
  return (
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
  )
}

export default ProjekteSection
