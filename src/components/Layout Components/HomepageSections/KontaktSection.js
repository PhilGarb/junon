import React from "react"
import styled from "styled-components"

import { ContactForm } from "../../ComponentsIndex"
import { kontakt_SVG } from "../../../images/ImageIndex"

const Background = styled.div`
  background: rgb(var(--main-color));
  background-image: url(${kontakt_SVG});
  background-image: url(${kontakt_SVG}), linear-gradient(var(--main-gradient));
  grid-column: 1/ -1;
  background-repeat: no-repeat;
  background-size: 70%, cover;
  background-position: bottom;
  margin-top: 5em;
  min-height: 80vmin;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const ProjekteSection = () => {
  return (
    <Background id="contact">
      <ContactForm />
    </Background>
  )
}

export default ProjekteSection
