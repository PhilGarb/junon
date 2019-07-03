import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled.button`
  /* style resets */
  border: none;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
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

const Button = ({ children, type, state, className }) => {
  return (
    <StyledButton type={type} state={state} className={className}>
      {children}
    </StyledButton>
  )
}

const ButtonInternalLink = ({ children, to, state, className }) => {
  return (
    <StyledButton as={Link} to={to} state={state} className={className}>
      {children}
    </StyledButton>
  )
}

const ButtonExternalLink = ({ children, to, className }) => {
  return (
    <StyledButton as="a" href={to} className={className}>
      {children}
    </StyledButton>
  )
}

export { Button, ButtonInternalLink, ButtonExternalLink }
