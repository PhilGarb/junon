import React from "react"
import styled from "styled-components"

const StyledOverlay = styled.div`
  background-color: var(--light-gray);
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
  display: inline-block;
  max-width: 35rem;
`

const StyledContent = styled.div`
  padding: 3rem;
  color: var(--dark-gray);
  opacity: 1;
`

const Overlay = ({ children }) => {
  return (
    <StyledOverlay>
      <StyledContent>{children}</StyledContent>
    </StyledOverlay>
  )
}

export default Overlay
