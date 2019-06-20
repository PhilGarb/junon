import React from "react"
import { graphql } from "gatsby"

import {
  Layout,
  ProjekteSection,
  ArbeitsweiseSection,
  NetzwerkSection,
  KontaktSection,
  HeroSection,
} from "../components/ComponentsIndex"

const index = ({ data }) => {
  const {
    file: {
      childImageSharp: {
        fluid: { ...img },
      },
    },
  } = data

  return (
    <Layout>
      <HeroSection
        card={
          <>
            <h2>Willkommen auf der offiziellen Seite des</h2>
            <h1>Jungen UNO Netzwerk Deutschland e.V.</h1>
          </>
        }
        img={img}
      />
      <ProjekteSection />
      <NetzwerkSection />
      <ArbeitsweiseSection />
      <KontaktSection />
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    file(relativePath: { regex: "/Background/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default index
