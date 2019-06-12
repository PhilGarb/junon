import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  background-color: rgb(var(--tertiary-color));
  padding: 0.3rem 1.3rem;
  border-radius: 0.4rem;
  font-weight: 500;
  text-decoration: none;
  color: rgb(var(--light-gray));
  display: inline-block;
  text-align: center;
  margin: 0.125rem 0;
  border: solid 0.0625rem transparent;
`

const Button = ({ children }) => {
  return <StyledLink>{children}</StyledLink>
}

export default Button
