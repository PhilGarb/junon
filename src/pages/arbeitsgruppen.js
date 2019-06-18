import React from "react"

import Layout from "../components/Layout"
import useHero from "../components/hooks/useHero"

const Arbeitsgruppen = () => {
  const Hero = useHero()
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default Arbeitsgruppen
