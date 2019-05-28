import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Img from "gatsby-image"

const index = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Img fluid={data.file.childImageSharp.fluid} />
      <h1>{frontmatter.title}</h1>
      <h2>Test</h2>
      <h3>Test</h3>
      <p>{frontmatter.textDE}</p>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    markdownRemark(frontmatter: { title: { eq: "Homepage" } }) {
      frontmatter {
        title
        textDE
      }
    }
    file(relativePath: { regex: "/Background/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default index
