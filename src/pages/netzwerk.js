import React from "react"
import styled from "styled-components"

import { Layout, Button, SVGImage } from "../components/ComponentsIndex"
import { struktur_SVG } from "../images/ImageIndex"

const Content = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`

const StyledSVGImage = styled(SVGImage)`
  flex: 1 1 45%;
`

const Text = styled.div`
  flex: 1 1 50%;
  min-width: min-content;
  align-self: flex-start;
  margin: 1em 1em 1em 0em;
`

const Netzwerk = () => {
  return (
    <Layout>
      <Content>
        <Text>
          <h1>Mitgliedsgruppen</h1>
          <p>
            Das Junon besteht aus über 30 lokalen UN-Gruppen die sich mit
            verschiedenen Projekten beschäftigen. Jährlich treffen sich
            Delegierte dieser Gruppen um über die Zukunft des Junon zu
            entscheiden.
          </p>
          <p>
            Jede/r kann an diesem Treffen teilnehmen und sich aktiv in die
            Arbeit des Junon einbringen.
          </p>
          <p>Hast du oder hat deine Gruppe Interesse mitzumachen?</p>
          <h2>Dann schreib uns:</h2>
          <Button to="/#contact">Kontakt</Button>
        </Text>
        <StyledSVGImage img={struktur_SVG} />
      </Content>
    </Layout>
  )
}

export default Netzwerk
