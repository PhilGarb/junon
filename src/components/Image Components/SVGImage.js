import React from "react"
import styled from "styled-components"

const Image = styled.img`
  width: 100%;
  min-width: 0%;
`
const SVGImage = ({ className, img }) => {
  return <Image className={className} src={img} />
}

export default SVGImage
