import React from "react"
import styled from "styled-components"

import Logo from "../../Image Components/Logo"
import Menu from "./Menu"

const Background = styled.div`
  grid-column: 1/ -1;
  box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.5);
  padding: 0.2em 0;
  display: grid;
  grid: inherit;
  z-index: 1;
`

const HeaderWrapper = styled.div`
  grid-column: 2 / span 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 50em) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const StyledLogo = styled(Logo)`
  flex: none;
  width: 8em;
  cursor: pointer;
  margin: 1em 0;
`

const StyledMenu = styled(Menu)`
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 50em) {
    flex: 100%;
  }
`

const Header = () => {
  return (
    <Background>
      <HeaderWrapper>
        <StyledLogo />
        <StyledMenu />
      </HeaderWrapper>
    </Background>
  )
}

export default Header
