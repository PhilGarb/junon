import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  cursor: pointer;

  background: rgb(var(--tertiary-color));
  padding: 0.3rem 1.3rem;
  border-radius: 0.4rem;

  font-weight: 500;
  text-decoration: none;
  color: rgb(var(--light-gray));
  display: inline-block;
  text-align: center;

  margin: 1em 0;
  box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.5);
  transition: all 100ms ease-in;

  :hover,
  :focus {
    background: linear-gradient(var(--main-gradient));
    color: rgb(var(--dark-gray));
  }
`

const ButtonInternalLink = ({ children, to, state, className }) => {
  return (
    <StyledLink to={to} state={state} className={className}>
      {children}
    </StyledLink>
  )
}

export default ButtonInternalLink
