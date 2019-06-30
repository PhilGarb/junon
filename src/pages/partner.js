import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import {
  Layout,
  ButtonExternalLink,
  SVGImage,
  Image,
} from "../components/ComponentsIndex"
import { DGVN_logo_SVG } from "../images/ImageIndex"

const Content = styled.section`
  grid-column: 2/3;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledText = styled.div`
  display: flex;
  flex: 4 1 25em;
  flex-direction: column;
  align-items: start;
`

const StyledSVGImage = styled(SVGImage)`
  flex-basis: 20em;
  object-position: top;
  margin: 0 3em;
`

const StyledImage = styled(Image)`
  flex-basis: 20em;
  object-fit: scale-down;
  object-position: top;
  margin: 0 3em;
`

const Partner = ({ data }) => {
  const {
    file: {
      childImageSharp: {
        fluid: { ...UNYANET_Logo },
      },
    },
  } = data

  return (
    <Layout>
      <Content>
        <Item>
          <StyledSVGImage img={DGVN_logo_SVG} />
          <StyledText>
            <h1>DGVN</h1>
            <p>
              Die DGVN setzt sich für starke Vereinte Nationen ein: Denn nur
              durch enge inter­nationale Zusammen­arbeit können wir den Frieden
              sichern, die Menschen­rechte stärken und eine nach­haltige
              Ent­wick­lung fördern. Die DGVN bietet In­for­mationen und
              Analysen zur Arbeit der Vereinten Nationen, sie ermöglicht ihren
              Mitgliedern sich zu engagieren und gibt Impulse für eine aktive
              UN-Politik. Sie unterstützt das Junon wesentlich bei seiner
              Arbeit.
            </p>
            <ButtonExternalLink to="https://dgvn.de/">
              Mehr erfahren
            </ButtonExternalLink>
          </StyledText>
        </Item>
        <Item>
          <StyledImage img={UNYANET_Logo} />
          <StyledText>
            <h1>UNYANET</h1>
            <p>
              Im August 2011 haben in Wien Jugendliche aus elf europäischen
              Ländern UNYANET gegründet. Im “United Nations Youth Associations
              Network” sind Dachverbände wie JUNON zusammengeschlossen. Zu den
              Gründungsmitgliedern zählen die nationalen UN-Jugendorganisationen
              aus Deutschland, Finnland, Norwegen, Österreich, Polen, Rumänien,
              Russland, der Schweiz, Serbien, Slowenien und Spanien.
            </p>
            <ButtonExternalLink to="http://www.facebook.com/UNYANET">
              Mehr erfahren
            </ButtonExternalLink>
          </StyledText>
        </Item>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query PartnerQuery {
    file(relativePath: { regex: "/UNYANET/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Partner
