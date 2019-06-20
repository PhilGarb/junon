import React from "react"
import { graphql } from "gatsby"

import {
  Layout,
  ProjekteSection,
  ArbeitsweiseSection,
  NetzwerkSection,
  KontaktSection,
} from "../components/ComponentsIndex"
import { useHero } from "../hooks/hookIndex"

const index = ({ data }) => {
  const Hero = useHero()

  const {
    file: {
      childImageSharp: {
        fluid: { ...backgroundImage },
      },
    },
  } = data

  return (
    <Layout>
      <Hero
        card={
          <>
            <h2>Willkommen auf der offiziellen Seite des</h2>
            <h1>Jungen UNO Netzwerk Deutschland e.V.</h1>
          </>
        }
        img={backgroundImage}
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
