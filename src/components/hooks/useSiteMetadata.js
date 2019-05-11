import { useStaticQuery, graphql } from "gatsby"

const Metadata = () => {
  const { site } = useStaticQuery(
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
  return site.siteMetadata
}

export default Metadata
