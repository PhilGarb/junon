// TODO This is not really a hook, because it is not reusable

import React from "react"
import styled from "styled-components"

import { Button } from "../layoutIndex"
import { backgroundGradient } from "../../../images/imageIndex"

const Background = styled.div`
  background-image: url(${backgroundGradient});
  background-size: cover;
  grid-column: 1/ -1;
  display: grid;
  grid-template-columns: inherit;
`

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
const ArbeitsweiseSection = () => {
  return (
    <Background>
      <PositionedSection>
        <div>
          <SectionHeading>Netzwerk</SectionHeading>
          <SectionParagraph>
            Das Junon ist ein Zusammenschluss aus zahlreichen jungen
            UN-Initiativen und Hochschulgruppen in Deutschland.
            <br />
            <br />
            Als Netzwerk wollen wir aktiv das Interesse an Politik und den
            Wissenstransfer unserer Mitgliedsgruppen fördern.
          </SectionParagraph>
          <Button>Mehr erfahren</Button>
        </div>
        <div>
          <SectionHeading>Partner</SectionHeading>
          <SectionParagraph>
            Zusammen mit unseren nationalen und internationalen Partnern
            bekennen wir uns zu den universellen Werten und der Zielen Vereinten
            Nationen.
          </SectionParagraph>
          <Button>Mehr erfahren</Button>
        </div>
      </PositionedSection>
    </Background>
  )
}

export default ArbeitsweiseSection
