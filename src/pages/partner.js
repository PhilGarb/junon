import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import {
  Button,
  SVGBackgroundImage,
} from "../components/LayoutComponents/layoutIndex"
import DGVN_Logo from "../images/Partner/DGVN_Bildmarke_blue_400px.svg"

const StyledSection = styled.section`
  grid-column: 2/3;
  display: flex;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const StyledSVGBackgroundImage = styled(SVGBackgroundImage)`
  min-width: 40%;
  flex-basis: 40em;
  background-position: right;
`

const Partner = () => (
  <Layout>
    <StyledSection>
      <StyledContent>
        <h1>DGVN</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptatem eos repellat fugiat, laudantium amet corporis autem
          voluptates cumque dolorem laboriosam sed placeat quos consectetur
          deserunt a. Architecto, dignissimos praesentium?
        </p>
        <Button>Mehr erfahren</Button>
      </StyledContent>
      <StyledSVGBackgroundImage img={DGVN_Logo} />
    </StyledSection>
    <StyledSection>
      <StyledContent>
        <h1>UNYANET</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptatem eos repellat fugiat, laudantium amet corporis autem
          voluptates cumque dolorem laboriosam sed placeat quos consectetur
          deserunt a. Architecto, dignissimos praesentium?
        </p>
        <Button>Mehr erfahren</Button>
      </StyledContent>
      <StyledSVGBackgroundImage img={DGVN_Logo} />
    </StyledSection>
  </Layout>
)

export default Partner
