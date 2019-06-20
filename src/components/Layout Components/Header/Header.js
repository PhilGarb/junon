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
  flex-wrap: wrap;
  justify-content: space-between;

  align-items: center;
`

const StyledLogo = styled(Logo)`
  width: 8em;
  cursor: pointer;
`

const StyledMenu = styled(Menu)`
  margin-top: 0.5em;
  justify-content: space-between;
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
