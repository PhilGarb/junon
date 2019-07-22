import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  min-width: 0%;
`
const Image = ({ className, children, img }) => {
  return (
    <StyledImage className={className} fluid={img}>
      {children}
    </StyledImage>
  )
}

export default Image
