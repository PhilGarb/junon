import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledBackgroundImage = styled(BackgroundImage)`
  background: linear-gradient(var(--main-gradient));
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vmin;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: inherit;
`

const Content = styled.div`
  grid-column: 2 / 3;
`

const Section = ({ className, img, children }) => {
  return (
    <StyledBackgroundImage className={className} fluid={img}>
      <Content>{children}</Content>
    </StyledBackgroundImage>
  )
}

export default Section
