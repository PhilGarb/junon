import React from "react"
import styled from "styled-components"

import { Card, BackgroundImage } from "../../ComponentsIndex"

const StyledBackgroundImage = styled(BackgroundImage)`
  background: linear-gradient(var(--main-gradient));
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

const HeroSection = ({ className, card, backgroundImg }) => {
  return (
    <StyledBackgroundImage className={className} backgroundImg={backgroundImg}>
      <PositionedCard>{card}</PositionedCard>
    </StyledBackgroundImage>
  )
}

export default HeroSection
