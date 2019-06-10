import React from "react"
import styled from "styled-components"

const Image = styled.div`
  height: auto;
  width: 100%;
  background-image: url(${props => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
const CSSBackgroundImage = ({ img }) => {
  return <Image imgUrl={img} />
}

export default CSSBackgroundImage
