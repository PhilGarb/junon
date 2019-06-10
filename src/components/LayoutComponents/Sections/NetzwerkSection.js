// TODO This is not really a hook, because it is not reusable

import React from "react"
import styled from "styled-components"

import { Button, Card } from "../layoutIndex"
import { netzwerk } from "../../../images/imageIndex"

const BackgroundGradient = styled.div`
  background: rgb(99, 249, 85);
  background-image: url(${netzwerk});
  background-image: url(${netzwerk}), linear-gradient(var(--main-gradient));
  background-position: center;
  background-size: 95%, cover;
  background-repeat: no-repeat;
  grid-column: 1/ -1;
  display: grid;
  grid-template-columns: inherit;
  height: 80vh;
`

const PositionedSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 2 / 3;
`

const PositionedCard = styled(Card)`
  max-width: 20em;
  margin: 1em;
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
