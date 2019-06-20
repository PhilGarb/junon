import React from "react"
import styled from "styled-components"

import { Button, Card } from "../../ComponentsIndex"
import { netzwerk_SVG } from "../../../images/ImageIndex"

const BackgroundGradient = styled.div`
  background: rgb(var(--main-color));
  background-image: url(${netzwerk_SVG});
  background-image: url(${netzwerk_SVG}), linear-gradient(var(--main-gradient));
  background-position: center;
  background-size: 95%, cover;
  background-repeat: no-repeat;
  margin-top: 5em;
  grid-column: 1/ -1;
  display: grid;
  grid-template-columns: inherit;
  min-height: 80vmin;
`

const PositionedSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 2 / 3;
`

const PositionedCard = styled(Card)`
  max-width: 35%;
  margin: 1em 0em;

  @media (max-width: 800px) {
    max-width: 70%;
    align-self: center;
  }
`

const TopLeftCard = styled(PositionedCard)``
const BottomRightCard = styled(PositionedCard)`
  align-self: flex-end;
`

const ArbeitsweiseSection = () => {
  return (
    <BackgroundGradient>
      <PositionedSection>
        <TopLeftCard>
          <h1>Netzwerk</h1>
          <p>
            Das Junon ist ein Zusammenschluss aus zahlreichen jungen
            UN-Initiativen und Hochschulgruppen in Deutschland.
            <br />
            <br />
            Als Netzwerk wollen wir aktiv das Interesse an Politik und den
            Wissenstransfer unserer Mitgliedsgruppen fördern.
          </p>
          <Button>Mehr erfahren</Button>
        </TopLeftCard>
        <BottomRightCard>
          <h1>Partner</h1>
          <p>
            Zusammen mit unseren nationalen und internationalen Partnern
            bekennen wir uns zu den universellen Werten und der Zielen Vereinten
            Nationen.
          </p>
          <Button>Mehr erfahren</Button>
        </BottomRightCard>
      </PositionedSection>
    </BackgroundGradient>
  )
}

export default ArbeitsweiseSection
