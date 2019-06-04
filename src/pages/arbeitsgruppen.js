import React from "react"

import Layout from "../components/Layout"
import useHero from "../components/hooks/useHero"

const Arbeitsgruppen = () => {
  const Hero = useHero()
  return (
    <Layout>
      <Hero />
      <h1>Hi! I&aposm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but I definitely enjoy building
        websites.
      </p>
    </Layout>
  )
}

export default Arbeitsgruppen
