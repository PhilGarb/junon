import React from "react"
import styled from "styled-components"
import GatsbyBackgroundImage from "gatsby-background-image"

const StyledBackgroundImage = styled(GatsbyBackgroundImage)`
  width: 100%;
`
const BackgroundImage = ({ className, children, img }) => {
  return (
    <StyledBackgroundImage className={className} fluid={img}>
      {children}
    </StyledBackgroundImage>
  )
}

export default BackgroundImage
