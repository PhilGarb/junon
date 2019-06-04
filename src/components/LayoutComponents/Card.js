import React from "react"
import styled from "styled-components"

// import LinkButton from "../LayoutComponents/LinkButton"

const StyledCard = styled.div`
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-shadow: 8px 8px 25px 0px rgba(0, 0, 0, 0.5);
`

const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>
}

export default Card
