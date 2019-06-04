import React from "react"
import useMenuEntries from "../hooks/useMenuEntries"
import styled from "styled-components"
import Logo from "./Logo"

const HeaderWrapper = styled.div`
  background: #fafbfb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: span 3;
  grid-column: 2 / 3;
`

const Header = () => {
  const Menu = useMenuEntries()

  return (
    <HeaderWrapper>
      <Logo />
      <Menu />
    </HeaderWrapper>
  )
}

export default Header
