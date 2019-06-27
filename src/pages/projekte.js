import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Layout, Card, Image } from "../components/ComponentsIndex"

const Content = styled.div`
  grid-column: 2/3;
`

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledCard = styled(Card)`
  margin: 1em 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
`

const StyledText = styled.div`
  padding: 3em;
  flex: 3 1;
  min-width: 30em;
`

const StyledImage = styled(Image)`
  object-fit: cover;
  height: 25em;
  overflow: hidden;
  flex: 1 1 10em;
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
            return (
              <StyledCard key={project.node.frontmatter.title}>
                <StyledText>
                  <h1>{project.node.frontmatter.title}</h1>
                  <p>{project.node.excerpt}</p>
                </StyledText>
                <StyledImage
                  img={
                    project.node.frontmatter.titleImage.childImageSharp.fluid
                  }
                />
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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projekte//" } }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          frontmatter {
            title
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
