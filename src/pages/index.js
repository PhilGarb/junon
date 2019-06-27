import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import {
  Layout,
  ProjekteSection,
  ArbeitsweiseSection,
  NetzwerkSection,
  KontaktSection,
  Hero,
  Card,
} from "../components/ComponentsIndex"

const StyledHero = styled(Hero)`
  background-size: contain;
  background-position: top;
  height: 80vmin;
`

const PositionedCard = styled(Card)`
  grid-column: 2;
  align-self: flex-end;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

const index = ({ data }) => {
  const {
    file: {
      childImageSharp: {
        fluid: { ...heroImg },
      },
    },
  } = data

  return (
    <Layout>
      <StyledHero img={heroImg}>
        <PositionedCard>
          <h2>Willkommen auf der offiziellen Seite des</h2>
          <h1>Jungen UNO Netzwerk Deutschland e.V.</h1>
        </PositionedCard>
      </StyledHero>
      <ProjekteSection />
      <NetzwerkSection />
      <ArbeitsweiseSection />
      <KontaktSection />
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    file(relativePath: { regex: "/Hands/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default index
