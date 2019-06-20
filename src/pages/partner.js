import React from "react"
import styled from "styled-components"

import {
  Layout,
  Button,
  SVGBackgroundImage,
} from "../components/ComponentsIndex"
import { DGVN_logo_SVG } from "../images/ImageIndex"

const Content = styled.section`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Item = styled.div`
  display: flex;
`

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const StyledSVGBackgroundImage = styled(SVGBackgroundImage)`
  flex-basis: 40em;
  background-position: top;
`

const Partner = () => (
  <Layout>
    <Content>
      <Item>
        <StyledSVGBackgroundImage img={DGVN_logo_SVG} />
        <StyledText>
          <h1>DGVN</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            voluptatem eos repellat fugiat, laudantium amet corporis autem
            voluptates cumque dolorem laboriosam sed placeat quos consectetur
            deserunt a. Architecto, dignissimos praesentium?
          </p>
          <Button>Mehr erfahren</Button>
        </StyledText>
      </Item>
      <Item>
        <StyledSVGBackgroundImage img={DGVN_logo_SVG} />
        <StyledText>
          <h1>UNYANET</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            voluptatem eos repellat fugiat, laudantium amet corporis autem
            voluptates cumque dolorem laboriosam sed placeat quos consectetur
            deserunt a. Architecto, dignissimos praesentium?
          </p>
          <Button>Mehr erfahren</Button>
        </StyledText>
      </Item>
    </Content>
  </Layout>
)

export default Partner
