import React from "react"
import useMenuEntries from "../hooks/useMenuEntries"
import styled from "styled-components"
import Logo from "./Logo"

const HeaderWrapper = styled.div`
  background: #fafbfb;
  display: flex;
  align-items: center;
  padding: 1vh 5vw;
  justify-content: space-between;
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
