import React from "react"
import styled from "styled-components"

import { Layout, SVGBackgroundImage, Card } from "../components/ComponentsIndex"
import { struktur_SVG } from "../images/ImageIndex"

const Background = styled.div`
  background: rgb(var(--main-color));
  background-image: linear-gradient(var(--main-gradient));
  grid-column: 1/ -1;
  display: grid;
  grid: inherit;
  align-content: center;
`

const Content = styled.div`
  grid-column: 2 / 3;
  display: flex;
`

const Text = styled(Card)`
  flex-basis: 50%;
  margin: 2em 2em 2em 0;
`

const StyledSVGBackgroundImage = styled(SVGBackgroundImage)`
  flex-basis: 50%;
  margin: 2em 0 2em 2em;
`

const Arbeitsgruppen = () => {
  return (
    <Layout>
      <Background>
        <Content>
          <Text>
            <h1>Unsere Arbeit</h1>
            <p>
              Im JUNON arbeiten wir komplett ehrenamtlichen ohne eine lokale
              Anbindung. Wir organisieren uns in Arbeitsgruppen und bleiben
              online in Kontakt.
              <br /> <br />
              Unsere Vorstandsmitglieder sowie die Mitgliedsgruppen und
              Fördermitglieder verteilen sich über ganz Deutschland. Der
              geschäftsführende Vorstand setzt sich aus den beiden
              GeneralsekretärInnen und dem/der SchatzmeisterIn zusammen. Wir
              arbeiten seit 2018 in drei Arbeitsgemeinschaften, die sich mit der
              Öffentlichkeitsarbeit, dem Eventmanagement und den
              Informationstechnologien (IT) befassen. Alle Leiter von
              Arbeitsgruppen und Mitglieder des geschäftsführenden Vorstandes
              werden auf der jährlichen Delegiertenversammlung gewählt. Zudem
              gibt es mehrere Projektgruppen, die sich thematisch ausrichten und
              keine Wahl benötigen. Projektgruppen sind flexibel angelegt und
              stehen wie die Arbeitsgemeinschaften allen Mitgliedern und
              Interessierten zur Mitarbeit offen.
              <br />
              <br />
              Auf den Delegiertenversammlungen werden neue Projekte,
              Jahresberichte und Satzungsänderungen besprochen und
              verabschiedet. Jede Mitgliedsgruppe des Netzwerks ist
              stimmberechtigt und hat eine Stimme.
            </p>
          </Text>
          <StyledSVGBackgroundImage img={struktur_SVG} />
        </Content>
      </Background>
    </Layout>
  )
}

export default Arbeitsgruppen
