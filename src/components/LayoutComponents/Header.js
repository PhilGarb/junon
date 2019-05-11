import React from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"
import useMenuEntries from "../hooks/useMenuEntries"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderWrapper = styled.div`
  background: lightblue;
  display: flex;
  align-items: center;
  padding: 0.8rem 3rem;
  justify-content: space-between;
`

const StyledLogo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
`

const Header = () => {
  const { title } = useSiteMetadata()
  const Menu = useMenuEntries()

  return (
    <HeaderWrapper>
      <StyledLogo to="/">{title}</StyledLogo>
      <Menu />
    </HeaderWrapper>
  )
}

export default Header
