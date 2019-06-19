import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import { SVGBackgroundImage } from "../components/LayoutComponents/layoutIndex"
import struktur from "../images/Arbeitsgruppen/Struktur.svg"

const Background = styled.div`
  background: rgb(var(--main-color));
  background-image: linear-gradient(var(--main-gradient));
  grid-column: 1/ -1;
  display: grid;
  grid: inherit;
  grid-template-rows: max-content 50vmin;
`

const Content = styled.div`
  grid-column: 2 / 3;
`

const StyledSVGBackgroundImage = styled(SVGBackgroundImage)`
  grid-column: 1 / -1;
`

const Arbeitsgruppen = () => {
  return (
    <Layout>
      <Background>
        <Content>
          <h1>Unsere Arbeit</h1>
          <p>
            Im JUNON arbeiten wir komplett ehrenamtlichen ohne eine lokale
            Anbindung. Wir organisieren uns in Arbeitsgruppen und bleiben online
            in Kontakt.
            <br /> <br />
            Unsere Vorstandsmitglieder sowie die Mitgliedsgruppen und
            Fördermitglieder verteilen sich über ganz Deutschland. Der
            geschäftsführende Vorstand setzt sich aus den beiden
            GeneralsekretärInnen und dem/der SchatzmeisterIn zusammen. Wir
            arbeiten seit 2018 in drei Arbeitsgemeinschaften, die sich mit der
            Öffentlichkeitsarbeit, dem Eventmanagement und den
            Informationstechnologien (IT) befassen. Alle Leiter von
            Arbeitsgruppen und Mitglieder des geschäftsführenden Vorstandes
            werden auf der jährlichen Delegiertenversammlung gewählt. Zudem gibt
            es mehrere Projektgruppen, die sich thematisch ausrichten und keine
            Wahl benötigen. Projektgruppen sind flexibel angelegt und stehen wie
            die Arbeitsgemeinschaften allen Mitgliedern und Interessierten zur
            Mitarbeit offen.
            <br />
            <br />
            Auf den Delegiertenversammlungen werden neue Projekte,
            Jahresberichte und Satzungsänderungen besprochen und verabschiedet.
            Jede Mitgliedsgruppe des Netzwerks ist stimmberechtigt und hat eine
            Stimme.
          </p>
        </Content>
        <StyledSVGBackgroundImage img={struktur} />
      </Background>
    </Layout>
  )
}

export default Arbeitsgruppen
