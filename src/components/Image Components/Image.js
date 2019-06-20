import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"

const StyledImage = styled(GatsbyImage)`
  width: 100%;
`
const BackgroundImage = ({ className, children, img }) => {
  return (
    <StyledImage className={className} fluid={img}>
      {children}
    </StyledImage>
  )
}

export default BackgroundImage
