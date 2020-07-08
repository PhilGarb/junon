import styled from "styled-components"

const StyledLink = styled.a`
  text-decoration: none;
  color: rgb(var(--dark-gray));
  padding: 0.5em;
  margin: 0.5em;
  min-width: max-content;
  border-bottom: 0.3em solid transparent;
  border-radius: 10px;
  transition: all 200ms ease;
  display: inline-block;

  :hover,
  :focus {
    border-bottom: 0.3em solid rgba(var(--tertiary-color), 0.7);
    background: rgba(var(--tertiary-color), 0.2);
  }
`

export default StyledLink
