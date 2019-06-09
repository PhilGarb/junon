import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { Card } from "../LayoutComponents"

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 80vh;
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: inherit;
`

const PositionedCard = styled(Card)`
  grid-column: 2;
  align-self: end;
  justify-self: stretch;
`

const Hero = () => {
  const HeroSection = ({ card, img }) => {
    return (
      <StyledBackgroundImage fluid={img}>
        <PositionedCard>{card}</PositionedCard>
      </StyledBackgroundImage>
    )
  }
  return HeroSection
}

export default Hero
