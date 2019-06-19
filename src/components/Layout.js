import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { GlobalStyle } from "./GlobalStyle"
import { Header, Footer } from "./LayoutComponents/layoutIndex"

const Grid = styled.div`
  display: grid;
  grid: max-content auto / 1fr 4fr 1fr;
  min-height: 100vh;
  background-color: rgb(var(--light-gray));
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <Header />
        {children}
        <Footer />
      </Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
