import React from "react"
import styled from "styled-components"

import { Card, BackgroundImage } from "../../ComponentsIndex"

const StyledBackgroundImage = styled(BackgroundImage)`
  background: linear-gradient(var(--main-gradient));
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  height: 80vmin;
  grid-column: 1 / -1;
  display: grid;
  grid: inherit;
  grid-template-rows: 1fr;
`

const PositionedCard = styled(Card)`
  grid-column: 2;
  align-self: flex-end;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

const HeroSection = ({ className, card, img }) => {
  return (
    <StyledBackgroundImage className={className} img={img}>
      <PositionedCard>{card}</PositionedCard>
    </StyledBackgroundImage>
  )
}

export default HeroSection
