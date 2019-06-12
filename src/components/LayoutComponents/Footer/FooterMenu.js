import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--dark-gray);

  :hover {
    background-color: var(--primary-color);
  }
`

const StyledMenu = styled.div`
  display: flex;
`

const FooterMenu = ({ className }) => {
  return (
    <StyledMenu className={className}>
      <StyledLink to="/impressum">Impressum</StyledLink>
      <StyledLink to="/downloads">Downloads</StyledLink>
      <StyledLink to="/datenschutz">Datenschutzerklärung</StyledLink>
    </StyledMenu>
  )
}

export default FooterMenu
