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
        fluid: { ...heroImg },
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
        img={heroImg}
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
    file(relativePath: { regex: "/Hands/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default index
