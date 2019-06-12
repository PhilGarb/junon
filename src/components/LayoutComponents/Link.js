import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(var(--dark-gray));
  padding: 0.5em;
  margin: 1em;
  border-bottom: 0px solid rgba(var(--tertiary-color), 0.7);
  border-radius: 10px;
  transition: all 200ms ease;

  :hover {
    border-width: 10px;
    background: rgba(var(--tertiary-color), 0.2);
  }
`

export default StyledLink
