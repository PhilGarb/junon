import React from "react"
import styled from "styled-components"

import { Layout, Card, ButtonInternalLink } from "../components/ComponentsIndex"

const Background = styled.div`
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PositionedCard = styled(Card)``

const ThankYou = () => {
  return (
    <Layout>
      <Background>
        <PositionedCard>
          <h1>Kontakt</h1>
          <p>
            Vielen Dank für deine Nachricht. Wir melden uns schnellstmöglich bei
            dir.
          </p>
          <ButtonInternalLink to="/">Zurück zur Website</ButtonInternalLink>
        </PositionedCard>
      </Background>
    </Layout>
  )
}

export default ThankYou
