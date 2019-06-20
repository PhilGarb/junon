import React from "react"
import styled from "styled-components"

const Image = styled.div`
  width: 100%;
  background-image: url(${props => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
const SVGBackgroundImage = ({ className, img }) => {
  return <Image className={className} imgUrl={img} />
}

export default SVGBackgroundImage
