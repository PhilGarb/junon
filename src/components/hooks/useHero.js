//#FIXME This Hook is not really isolated code. It has hardcoded content. This needs to be fixed if the Hero component is to be reuseable.

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import Overlay from "../LayoutComponents/Overlay"

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 80vh;
  background-size: cover;
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 1fr;
  grid-template-rows: 1fr 2fr 2fr;
`

const PositionedOverlay = styled(Overlay)`
  grid-column-start: 2;
  grid-row-start: 2;
`
const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { regex: "/Background/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  const HeroSection = () => {
    return (
      <StyledBackgroundImage fluid={data.file.childImageSharp.fluid}>
        <PositionedOverlay>
          <h2>Willkommen auf der offiziellen Seite des</h2>
          <h1>Jungen UNO Netzwerk Deutschland e.V.</h1>
        </PositionedOverlay>
      </StyledBackgroundImage>
    )
  }
  return HeroSection
}

export default Hero
