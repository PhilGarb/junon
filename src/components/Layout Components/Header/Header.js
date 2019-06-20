import React from "react"
import styled from "styled-components"

import Logo from "../../Image Components/Logo"
import Menu from "./Menu"

const HeaderWrapper = styled.div`
  grid-column: 2 / span 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5em 0;
  align-items: center;

  @media (max-width: 70em) {
    justify-content: center;
  }
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
    <HeaderWrapper>
      <StyledLogo />
      <StyledMenu />
    </HeaderWrapper>
  )
}

export default Header
