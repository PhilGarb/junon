import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/ComponentsIndex"

const Impressum = () => <Layout />

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Impressum
