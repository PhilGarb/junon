import React from "react"
import PropTypes from "prop-types"

import { GlobalStyle } from "./GlobalStyle"
import Header from "./LayoutComponents/Header"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
