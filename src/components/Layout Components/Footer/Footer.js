import React from "react"
import styled from "styled-components"

import Logo from "../../Image Components/Logo"
import FooterMenu from "./FooterMenu"

const Background = styled.div`
  grid-column: 1/ -1;
  box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.5);

  display: grid;
  grid: inherit;
  z-index: 1;
`

const Wrapper = styled.div`
  grid-column: 2 / span 1;
  padding: 2em 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 50em) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const StyledAdress = styled.div`
  font-size: smaller;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledLogo = styled(Logo)`
  width: 8em;
  margin: 1em 0;
`

const StyledFooterMenu = styled(FooterMenu)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 50em) {
    flex-direction: row;
  }
`

const Footer = () => {
  return (
    <Background>
      <Wrapper>
        <StyledAdress>
          <StyledLogo />
          <div>
            <p>Junges UNO Netzwerk Deutschland e.V.</p>
            <p>United Nations Youth Association Germany</p>
            <br />
            <p>Zimmermannstraße 26/27 - 10969 Berlin</p>
          </div>
        </StyledAdress>
        <StyledFooterMenu />
      </Wrapper>
    </Background>
  )
}

export default Footer
