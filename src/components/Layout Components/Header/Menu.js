import React from "react"
import styled from "styled-components"
import { Link } from "../../ComponentsIndex"
import useMenuEntries from "../../../hooks/useMenuEntries"

const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Menu = ({ className }) => {
  const entries = useMenuEntries()

  return (
    <StyledMenu className={className}>
      {entries.map(entry => {
        return (
          <Link
            key={entry.node.frontmatter.title}
            to={`/${entry.node.frontmatter.title.toLowerCase()}`}
          >
            {entry.node.frontmatter.title}
          </Link>
        )
      })}
    </StyledMenu>
  )
}

export default Menu
