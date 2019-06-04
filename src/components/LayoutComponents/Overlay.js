import React from "react"
import styled from "styled-components"

// import LinkButton from "../LayoutComponents/LinkButton"

const StyledOverlay = styled.div`
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-shadow: 8px 8px 25px 0px rgba(0, 0, 0, 0.5);
`

// const StyledContent = styled.div`
//   padding: 1rem;
// `

// const PositionedLinkButton = styled(LinkButton)``

const Overlay = ({ className, children }) => {
  return (
    <StyledOverlay className={className}>
      <div>{children}</div>
      {/* <PositionedLinkButton>Mehr erfahren</PositionedLinkButton> */}
    </StyledOverlay>
  )
}

export default Overlay
