import React from "react"
import styled from "styled-components"

import Logo from "../Logo"
import Menu from "./Menu"

const Grid = styled.div`
  background: #fafbfb;
  padding: 0.4em;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`
const HeaderWrapper = styled.div`
  grid-column: 2 / span 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const StyledLogo = styled(Logo)`
  width: 8em;
  height: 100%;
`

const StyledMenu = styled(Menu)`
  min-width: min-content;
  max-width: max-content;
  justify-content: space-between;
`

const Header = () => {
  return (
    <Grid>
      <HeaderWrapper>
        <StyledLogo />
        <StyledMenu />
      </HeaderWrapper>
    </Grid>
  )
}

export default Header
