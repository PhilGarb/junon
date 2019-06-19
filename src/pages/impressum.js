/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

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
