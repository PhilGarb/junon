import React from "react"
import styled from "styled-components"

import { Layout, Hero } from "../components/ComponentsIndex"

const StyledHero = styled(Hero)`
  grid-column: 2/3;
`

const Projekte = () => {
  return (
    <Layout>
      <StyledHero>
        <h1>test</h1>
      </StyledHero>
    </Layout>
  )
}

export default Projekte
