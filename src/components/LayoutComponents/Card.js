import React from "react"
import styled from "styled-components"

// import LinkButton from "../LayoutComponents/LinkButton"

const StyledCard = styled.div`
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-blend-mode: overlay;
  background-color: #ffffffe6;
  box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`

const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>
}

export default Card
