import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import {
  Layout,
  Card,
  Image,
  ButtonInternalLink,
  ButtonExternalLink,
} from "../components/ComponentsIndex"

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

  p {
    font-size: 0.9rem;
  }

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content 20em;
  }
`

const StyledButton = styled(ButtonInternalLink)`
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
                  signupLink,
                  startDate,
                  endDate,
                  titleImage: {
                    childImageSharp: {
                      fluid: { ...img },
                    },
                  },
                },
              },
            } = project

            return (
              <StyledCard key={title}>
                <StyledText>
                  <h1>{title}</h1>
                  {endDate === null ? (
                    <h4>{startDate}</h4>
                  ) : (
                    <h4>{`${startDate} - ${endDate}`}</h4>
                  )}
                  <p dangerouslySetInnerHTML={{ __html: excerpt }} />
                  <StyledButton to={slug}>Mehr erfahren</StyledButton>
                  {signup === true && (
                    <StyledButton as={ButtonExternalLink} to={signupLink}>
                      Anmeldung
                    </StyledButton>
                  )}
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
          excerpt(pruneLength: 200, format: HTML)
          fields {
            slug
          }
          frontmatter {
            title
            place
            signup
            signupLink
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
