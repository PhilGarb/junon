import React from "react"
import styled from "styled-components"

import { BackgroundImage } from "../ComponentsIndex"

const StyledBackgroundImage = styled(BackgroundImage)`
  background: linear-gradient(var(--main-gradient));
  background-repeat: no-repeat;
  grid-column: 1 / -1;
  display: grid;
  grid: inherit;
  grid-template-rows: 1fr;
`

const HeroSection = ({ className, children, img }) => {
  return (
    <StyledBackgroundImage className={className} img={img}>
      {children}
    </StyledBackgroundImage>
  )
}

export default HeroSection
