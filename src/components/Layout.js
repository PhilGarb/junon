import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { GlobalStyle } from "./GlobalStyle"
import Header from "./LayoutComponents/Header"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 3rem auto;
  background-color: var(--light-gray);
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
