import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { GlobalStyle } from "./GlobalStyle"
import { Header, Footer } from "../ComponentsIndex"

const GlobalGrid = styled.div`
  display: grid;
  grid: max-content auto max-content / 1fr 2.5fr 1fr;
  min-height: 100vh;
  background-color: rgb(var(--light-gray));

  @media (max-width: 70em) {
    grid: max-content auto max-content / 1fr 6fr 1fr;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <GlobalGrid>
        <Header />
        {children}
        <Footer />
      </GlobalGrid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
