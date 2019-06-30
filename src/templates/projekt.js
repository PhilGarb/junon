import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Card, Layout, Hero } from "../components/ComponentsIndex"

const Content = styled.div`
  grid-column: 1/ -1;
  display: grid;
  grid: inherit;
`

const Text = styled.div`
  grid-column: 2/3;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
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
        place,
        startDate,
        endDate,
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
      <Content>
        <StyledHero img={img}>
          <PositionedCard>
            <h1>{title}</h1>
            {endDate === null ? (
              <h2>{startDate}</h2>
            ) : (
              <h2>{`${startDate} - ${endDate}`}</h2>
            )}
            {place !== null && <h2>in {place}</h2>}
          </PositionedCard>
        </StyledHero>
        <Text dangerouslySetInnerHTML={{ __html: content }} />
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query ProjektPageByTitle($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        place
        signup
        startDate(formatString: "DD.MM.YYYY", locale: "de-DE")
        endDate(formatString: "DD.MM.YYYY", locale: "de-DE")
        titleImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Projekt
