import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Card, Layout, Hero } from "../components/ComponentsIndex"

const Content = styled.div`
  grid-column: 2/3;
  padding: 3em 0;
`

const StyledHero = styled(Hero)`
  height: 40vmin;
`

const PositionedCard = styled(Card)`
  grid-column: 2;
  align-self: center;
  justify-self: left;
`

const Projekt = ({ data }) => {
  const {
    markdownRemark: {
      html: content,
      frontmatter: {
        title,
        titleImage: {
          childImageSharp: {
            fluid: { ...img },
          },
        },
      },
    },
  } = data

  return (
    <Layout>
      <StyledHero img={img}>
        <PositionedCard>
          <h1>{title}</h1>
        </PositionedCard>
      </StyledHero>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export const query = graphql`
  query ProjektByTitle {
    markdownRemark(frontmatter: { title: { eq: "Netzwerktreffen 2019" } }) {
      html
      frontmatter {
        title
        titleImage {
          childImageSharp {
            fluid(maxWidth: 980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

// ($title: String!)

export default Projekt
