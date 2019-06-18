import React from "react"
import styled from "styled-components"

import Logo from "../Logo"
import FooterMenu from "./FooterMenu"

const Grid = styled.div`
  background: #fafbfb;
  padding: 5em 0 2em;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`
const Wrapper = styled.div`
  grid-column: 2 / span 1;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const StyledAdress = styled.div`
  width: max-content;
`
const StyledLogo = styled(Logo)`
  width: 8em;
`

const StyledFooterMenu = styled(FooterMenu)`
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  min-height: 100%;
  min-width: min-content;
`

const Footer = () => {
  return (
    <Grid>
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
    </Grid>
  )
}

export default Footer
