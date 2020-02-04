/* eslint-disable no-undef */
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions

  const { data } = await graphql(`
  {
    allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug

    createPage({
      path: slug,
      component: require.resolve(`./src/templates/projekt.js`),
      context: { slug: slug },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter }

      type Frontmatter {
      signup: Boolean
      signupLink: String
    }
  `
  createTypes(typeDefs)
}