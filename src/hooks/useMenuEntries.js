import { useStaticQuery, graphql } from "gatsby"

const MenuEntries = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/mainPages/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  const {
    allMarkdownRemark: {
      edges: [...entriesArray],
    },
  } = data

  return entriesArray
}

export default MenuEntries
