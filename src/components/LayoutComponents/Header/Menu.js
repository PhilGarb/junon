import React from "react"
import styled from "styled-components"
import { Link } from "../layoutIndex"
import useMenuEntries from "../../hooks/useMenuEntries"

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
