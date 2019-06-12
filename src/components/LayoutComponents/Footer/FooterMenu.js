import React from "react"
import styled from "styled-components"

import { Link } from "../layoutIndex"

const StyledMenu = styled.div`
  display: flex;
`

const FooterMenu = ({ className }) => {
  return (
    <StyledMenu className={className}>
      <Link to="/impressum">Impressum</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/datenschutz">Datenschutzerklärung</Link>
    </StyledMenu>
  )
}

export default FooterMenu
