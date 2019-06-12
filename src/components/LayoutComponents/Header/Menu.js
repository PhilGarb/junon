import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import useMenuEntries from "../../hooks/useMenuEntries"

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: var(--dark-gray);
  margin: 0.5em 1em;

  :hover {
    background-color: var(--primary-color);
  }
`

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
`

const Menu = ({ className }) => {
  const Entries = useMenuEntries()

  return (
    <StyledMenu className={className}>
      {Entries.map(entry => {
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

export default Menu
