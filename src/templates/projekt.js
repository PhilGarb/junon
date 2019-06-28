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
      <StyledHero img={img}>
        <PositionedCard>
          <h1>{title}</h1>
          {(() => {
            switch ((startDate, endDate)) {
              case startDate && endDate === null:
                return null
              case endDate === null:
                return <h2>{startDate}</h2>
              default:
                return <h2>{`${startDate} - ${endDate}`}</h2>
            }
          })()}
          {place !== null && <h2>in {place}</h2>}
        </PositionedCard>
      </StyledHero>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
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
