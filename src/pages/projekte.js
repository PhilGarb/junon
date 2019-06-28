import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Layout, Card, Image, Button } from "../components/ComponentsIndex"

const Content = styled.div`
  grid-column: 2/3;
  padding: 3em 0;

  h1 {
    border-bottom: 1px solid rgb(var(--dark-gray));
    padding-bottom: 1em;
  }
`

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledCard = styled(Card)`
  margin: 1em 0;
  display: grid;
  grid-template-columns: 2fr 20em;
  padding: 0;

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content 20em;
  }
`

const StyledButton = styled(Button)`
  margin-right: 2em;
`

const StyledText = styled.div`
  padding: 3em;
`
const StyledImage = styled(Image)`
  height: 100%;
`

const Projects = ({ data }) => {
  const {
    allMarkdownRemark: {
      edges: [...projects],
    },
  } = data

  return (
    <Layout>
      <Content>
        <h1>Projekte</h1>
        <ProjectList>
          {projects.map(project => {
            const {
              node: {
                excerpt,
                fields: { slug },
                frontmatter: {
                  title,
                  signup,
                  startDate,
                  endDate,
                  place,
                  titleImage: {
                    childImageSharp: {
                      fluid: { ...img },
                    },
                  },
                },
              },
            } = project

            let state = {
              title,
              startDate,
              endDate,
              place,
              img,
            }

            return (
              <StyledCard key={title}>
                <StyledText>
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
                  <p>{excerpt}</p>
                  <StyledButton to={slug} state={state}>
                    Mehr erfahren
                  </StyledButton>
                  {signup === true && <StyledButton>Anmeldung</StyledButton>}
                </StyledText>
                <StyledImage img={img} />
              </StyledCard>
            )
          })}
        </ProjectList>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query ProjektByTitle {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projekte//" } }
      sort: {
        fields: [frontmatter___startDate, frontmatter___title]
        order: DESC
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
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
    }
  }
`

export default Projects
