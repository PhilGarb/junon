import React from "react"
import styled from "styled-components"

import Logo from "../../Image Components/Logo"
import FooterMenu from "./FooterMenu"

const Background = styled.div`
  grid-column: 1/ -1;
  box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.5);
  padding: 0.2em 0;
  display: grid;
  grid: inherit;
  z-index: 1;
`

const Wrapper = styled.div`
  grid-column: 2 / span 1;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1em;

  @media (max-width: 50em) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const StyledAdress = styled.div`
  font-size: smaller;
`

const StyledLogo = styled(Logo)`
  width: 8em;
`

const StyledFooterMenu = styled(FooterMenu)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 50em) {
    /* flex: 100%; */
    flex-direction: row;
  }
`

const Footer = () => {
  return (
    <Background>
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
    </Background>
  )
}

export default Footer
