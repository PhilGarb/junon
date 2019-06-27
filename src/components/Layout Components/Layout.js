import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { GlobalStyle } from "./GlobalStyle"
import { Header, Footer } from "../ComponentsIndex"

const GlobalGrid = styled.div`
  display: grid;
  grid: max-content max-content auto max-content / 1fr 4fr 1fr;
  min-height: 100vh;
  background: rgb(var(--light-gray));

  @media (max-width: 70em) {
    grid: max-content max-content auto max-content / 1fr 10fr 1fr;
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
