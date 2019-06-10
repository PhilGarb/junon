import React from "react"
import styled from "styled-components"

// import LinkButton from "../LayoutComponents/LinkButton"

const StyledCard = styled.div`
  background-color: var(--light-gray);
  display: grid;
  flex-direction: column;
  justify-items: center;
  /* justify-content: left; */
  /* align-items: flex-end; */
  padding: 2rem;
  /* box-shadow: 8px 8px 25px 0px rgba(0, 0, 0, 0.5); */
`

const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>
}

export default Card
