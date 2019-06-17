import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { GlobalStyle } from "./GlobalStyle"
import { Header, Footer } from "./LayoutComponents/layoutIndex"

const Grid = styled.div`
  display: grid;
  grid-template-areas: "sidebar1 content sidebar2";
  grid-area: content;
  grid-template-columns: 1fr 4fr 1fr;
  background-color: rgb(var(--light-gray));
  grid-gap: 5em 0;

  @media (max-width: 35em) {
    grid-template-columns: 1fr;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Grid>{children}</Grid>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
