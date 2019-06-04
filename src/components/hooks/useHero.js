//#FIXME This Hook is not really isolated code. It has hardcoded content. This needs to be fixed if the Hero component is to be reuseable.
// TODO Try to move the Query from here to the page. The component cannot query the data, because useStaticQuery does not accept variables. So the component could not be truly reusable. By passing the information from the page the component becomes reusable.

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
// import Card from "../LayoutComponents/Card"

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 80vh;
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
`

const PositionedCard = styled.div`
  grid-column: 2;
  grid-row: 2;
`

const Hero = ({ img }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { regex: ${img}}) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  const HeroSection = ({ card }) => {
    return (
      <StyledBackgroundImage fluid={data.file.childImageSharp.fluid}>
        <PositionedCard>{card}</PositionedCard>
      </StyledBackgroundImage>
    )
  }
  return HeroSection
}

export default Hero
