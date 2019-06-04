import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  padding: 0 0.8rem;
  margin: 0;
  color: var(--dark-gray);

  :hover {
    background-color: var(--primary-color);
  }
`

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

//for the moment this function works as intended and outputs menu links for all pages save in /src/pages/mainPages. In the future this should should maybe be changed into two functions to allow for a reuse of the data sourcing logic in any other kind of menu.
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

  const Menu = () => {
    return (
      <StyledMenu>
        {entriesArray.map(entry => {
          return (
            <StyledMenuLink
              key={entry.node.frontmatter.title}
              to={`/${entry.node.frontmatter.title.toLowerCase()}`}
            >
              {entry.node.frontmatter.title}
            </StyledMenuLink>
          )
        })}
      </StyledMenu>
    )
  }

  return Menu
}

export default MenuEntries
