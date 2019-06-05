import React from "react"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

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
