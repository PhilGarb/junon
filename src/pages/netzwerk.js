/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const Netzwerk = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but I definitely enjoy building
        websites.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default Netzwerk
