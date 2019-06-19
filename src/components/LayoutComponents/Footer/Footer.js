import React from "react"
import styled from "styled-components"

import Logo from "../Logo"
import FooterMenu from "./FooterMenu"

const Wrapper = styled.div`
  grid-column: 2 / span 1;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 1em;
`

const StyledAdress = styled.div`
  width: max-content;
  font-size: smaller;
`
const StyledLogo = styled(Logo)`
  width: 8em;
`

const StyledFooterMenu = styled(FooterMenu)`
  display: flex;
  min-width: min-content;
  align-self: flex-start;
`

const Footer = () => {
  return (
    <Wrapper>
      <StyledAdress>
        <StyledLogo />
        <p>Junges UNO Netzwerk Deutschland e.V.</p>
        <p>United Nations Youth Association Germany</p>
        <br />
        <p>Zimmermannstraße 26/27 - 10969 Berlin</p>
      </StyledAdress>
      <StyledFooterMenu />
    </Wrapper>
  )
}

export default Footer
