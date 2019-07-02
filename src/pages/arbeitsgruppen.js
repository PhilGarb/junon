import React from "react"
import styled from "styled-components"

import { Layout, SVGImage, Card } from "../components/ComponentsIndex"
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
`

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3em 0;

  h1 {
    border-bottom: 1px solid rgb(var(--dark-gray));
    padding-bottom: 1em;
  }
`

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
`

const StyledCard = styled(Card)`
  margin: 1em 0;
`

const Text = styled.div`
  flex: 2 1 50%;
`

const StyledSVGImage = styled(SVGImage)`
  flex: 1 1 40%;
  margin: 0 3em;
`

const Arbeitsgruppen = () => {
  return (
    <Layout>
      <Background>
        <Content>
          <Section>
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
                arbeiten seit 2018 in drei Arbeitsgemeinschaften, die sich mit
                der Öffentlichkeitsarbeit, dem Eventmanagement und den
                Informationstechnologien (IT) befassen. Alle Leiter von
                Arbeitsgruppen und Mitglieder des geschäftsführenden Vorstandes
                werden auf der jährlichen Delegiertenversammlung gewählt. Zudem
                gibt es mehrere Projektgruppen, die sich thematisch ausrichten
                und keine Wahl benötigen. Projektgruppen sind flexibel angelegt
                und stehen wie die Arbeitsgemeinschaften allen Mitgliedern und
                Interessierten zur Mitarbeit offen.
                <br />
                <br />
                Auf den Delegiertenversammlungen werden neue Projekte,
                Jahresberichte und Satzungsänderungen besprochen und
                verabschiedet. Jede Mitgliedsgruppe des Netzwerks ist
                stimmberechtigt und hat eine Stimme.
              </p>
            </Text>
            <StyledSVGImage img={struktur_SVG} />
          </Section>
          <Section>
            <Text>
              <h1>Mehr über die einzelnen Arbeitsgruppen</h1>
              <Cards>
                <StyledCard>
                  <h2>GeneralsekretärInnen</h2>
                  <p>
                    Die GeneralsekretärInnen sind für den strukturellen und
                    geschäftlichen Ablauf des JUNON verantwortlich. Sie
                    unterstützen und delegieren Projektplanungen und legen
                    zusammen mit den AG-LeiterInnen die inhaltliche und
                    strukturelle Jahresausrichtung des Netzwerks fest. Zu deren
                    Aufgaben zählt ebenfalls die Kooperation mit größeren
                    Projektpartnern und das Schreiben der Jahresberichte.
                    Zusammen mit dem/der SchatzmeisterIn sind sie für die
                    Übersicht der Finanzen zuständig. Zu den Aufgaben des/der
                    SchatzmeisterIn zählt die finanzielle Abwicklung des
                    Tagesgeschäfts sowie der Erhebung der Mitgliedsbeiträge. Es
                    gilt die Haushaltsplanung der Geschäftsjahre einzuhalten.
                  </p>
                </StyledCard>
                <StyledCard>
                  <h2>AG Verwaltung</h2>
                  <p>
                    Die Arbeitsgemeinschaft Verwaltung befasst sich mit allen
                    technischen Aspekten, die das Netzwerk betreffen. Dazu zählt
                    die Verwaltung der Kontaktdaten der Mitgliedsgruppen, die
                    Datenaufbereitung der vergangenen Geschäftsjahre sowie der
                    allgemeine technische Support unserer Arbeitsplattform.
                  </p>
                </StyledCard>
                <StyledCard>
                  <h2>AG Veranstaltungen</h2>
                  <p>
                    Die Arbeitsgemeinschaft Veranstaltungen strukturiert und
                    organisiert alle Veranstaltungen für unsere Mitgliedsgruppen
                    bspw. die Netzwerktreffen, die Delegiertenversammlung oder
                    andere Vorstandstreffen. Dazu zählt zum einen die
                    Koordination der Veranstaltung vor Ort (Austragungsorte,
                    Logistik etc.) sowie ebenfalls die inhaltliche Gestaltung
                    der Veranstaltungen (Themenfindung, Umsetzungsformate etc.).
                    Der/die LeiterIn der wird dabei ebenfalls von einer
                    Ortsgruppe unterstützt, damit anfallende Aufgaben
                    bestmöglich verteilt werden können.
                  </p>
                </StyledCard>
                <StyledCard>
                  <h2>AG Öffentlichkeitsarbeit</h2>
                  <p>
                    Die Arbeitsgemeinschaft Öffentlichkeitsarbeit verfolgt das
                    Ziel der Verbreitung von Projekten, Aktivitäten und
                    Veranstaltung des JUNON unter den Mitgliedsgruppen und
                    Jugendlichen insgesamt. Sie betreibt unsere
                    Social-Media-Kanäle wie Facebook, Twitter und Instagram und
                    stellt die Ansprechpersonen zu Interessierten des Netzwerks.
                    Fragen und Anliegen werden hier beantwortet. Ebenfalls fällt
                    die Anfertigung und Verbreitung von visuellen
                    Werbematerialien über das JUNON und die Vereinten Nationen
                    in den Aufgabenbereich der Arbeitsgemeinschaft.
                  </p>
                </StyledCard>
              </Cards>
            </Text>
          </Section>
        </Content>
      </Background>
    </Layout>
  )
}

export default Arbeitsgruppen
