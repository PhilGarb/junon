import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(var(--dark-gray));
  padding: 0.5em;
  margin: 0 0.5em;
  border-bottom: 10px solid transparent;
  border-radius: 10px;
  transition: all 200ms ease;
  display: inline-block;

  :hover,
  :focus {
    border-bottom: 10px solid rgba(var(--tertiary-color), 0.7);
    background: rgba(var(--tertiary-color), 0.2);
  }
`

export default StyledLink
