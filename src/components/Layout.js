import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <h3>{data.site.siteMetadata.title}</h3>
      <div>{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
