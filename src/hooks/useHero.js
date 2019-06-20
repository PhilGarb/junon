import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { Card } from "../components/ComponentsIndex"

const StyledBackgroundImage = styled(BackgroundImage)`
  background: linear-gradient(var(--main-gradient));
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vmin;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: inherit;
`

const PositionedCard = styled(Card)`
  grid-column: 2;
  align-self: end;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

const Hero = () => {
  const HeroSection = ({ className, card, img }) => {
    return (
      <StyledBackgroundImage className={className} fluid={img}>
        <PositionedCard>{card}</PositionedCard>
      </StyledBackgroundImage>
    )
  }
  return HeroSection
}

export default Hero
