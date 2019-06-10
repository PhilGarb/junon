import React from "react"
import useMenuEntries from "../hooks/useMenuEntries"
import styled from "styled-components"
import Logo from "./Logo"

const Grid = styled.div`
  background: #fafbfb;
  padding: 0.4em;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
`
const HeaderWrapper = styled.div`
  grid-column: 2 / span 1;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Header = () => {
  const Menu = useMenuEntries()

  return (
    <Grid>
      <HeaderWrapper>
        <Logo />
        <Menu />
      </HeaderWrapper>
    </Grid>
  )
}

export default Header
