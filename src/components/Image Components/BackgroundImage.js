import React from "react"
import styled from "styled-components"
import GatsbyBackgroundImage from "gatsby-background-image"

const StyledBackgroundImage = styled(GatsbyBackgroundImage)`
  width: 100%;
  background-image: url(${props => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
const BackgroundImage = ({ className, img }) => {
  return <StyledBackgroundImage className={className} imgUrl={img} />
}

export default BackgroundImage
