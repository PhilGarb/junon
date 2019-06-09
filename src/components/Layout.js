import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { GlobalStyle } from "./GlobalStyle"
import Header from "./LayoutComponents/Header"

const Grid = styled.div`
  display: grid;
  grid-template-areas: "sidebar1 content sidebar2";
  grid-area: content;
  grid-template-columns: 1fr 4fr 1fr;
  background-color: var(--light-gray);
  /* grid-gap: 1em 0; */
`

const Layout = ({ children }) => {
  return (
    <Grid>
      <GlobalStyle />
      <Header />
      {children}
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
