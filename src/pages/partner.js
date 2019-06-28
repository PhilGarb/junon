import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Layout, Button, SVGImage, Image } from "../components/ComponentsIndex"
import { DGVN_logo_SVG } from "../images/ImageIndex"

const Content = styled.section`
  grid-column: 2/3;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledText = styled.div`
  display: flex;
  flex: 4 1 25em;
  flex-direction: column;
  align-items: start;
`

const StyledSVGImage = styled(SVGImage)`
  flex-basis: 20em;
  object-position: top;
  margin: 0 3em;
`

const StyledImage = styled(Image)`
  flex-basis: 20em;
  object-fit: scale-down;
  object-position: top;
  margin: 0 3em;
`

const Partner = ({ data }) => {
  const {
    file: {
      childImageSharp: {
        fluid: { ...UNYANET_Logo },
      },
    },
  } = data

  return (
    <Layout>
      <Content>
        <Item>
          <StyledSVGImage img={DGVN_logo_SVG} />
          <StyledText>
            <h1>DGVN</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur voluptatem eos repellat fugiat, laudantium amet
              corporis autem voluptates cumque dolorem laboriosam sed placeat
              quos consectetur deserunt a. Architecto, dignissimos praesentium?
            </p>
            <Button>Mehr erfahren</Button>
          </StyledText>
        </Item>
        <Item>
          <StyledImage img={UNYANET_Logo} />
          <StyledText>
            <h1>UNYANET</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur voluptatem eos repellat fugiat, laudantium amet
              corporis autem voluptates cumque dolorem laboriosam sed placeat
              quos consectetur deserunt a. Architecto, dignissimos praesentium?
            </p>
            <Button>Mehr erfahren</Button>
          </StyledText>
        </Item>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query PartnerQuery {
    file(relativePath: { regex: "/UNYANET/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Partner
