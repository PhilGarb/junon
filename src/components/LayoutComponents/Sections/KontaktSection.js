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
      <section>
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
      </section>
    </PositionedSection>
  )
}

export default ProjekteSection
