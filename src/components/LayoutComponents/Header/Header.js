import React from "react"
import styled from "styled-components"

import Logo from "../Logo"
import Menu from "./Menu"

const HeaderWrapper = styled.div`
  grid-column: 2 / span 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5em 0;
`

const StyledLogo = styled(Logo)`
  width: 8em;
  cursor: pointer;
`

const StyledMenu = styled(Menu)`
  margin-top: 0.5em;
  justify-content: space-between;
  align-items: center;
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
