import React from "react"
import styled from "styled-components"

import {
  Layout,
  ButtonInternalLink,
  SVGImage,
} from "../components/ComponentsIndex"
import {
  karte_SVG,
  MUN,
  UNimKlassenzimmer,
  YouthDelegates,
} from "../images/ImageIndex"

const Content = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
  display: flex;
  flex-direction: column;
`

const Section = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 3em 0;
`

const Text = styled.div`
  flex: 1 4 15em;
  align-self: flex-start;
  min-width: 0%;
`

const StyledSVGImage = styled(SVGImage)`
  flex: 1 1 5rem;
  margin: 2rem;
`

const StyledImg = styled.img`
  float: right;
  max-width: 40vmin;
  height: auto;
  margin: 0 0 2rem 2rem;
`

const StyledH1 = styled.h1`
  border-bottom: 1px solid rgb(var(--dark-gray));
  padding-bottom: 1em;
`

const Netzwerk = () => {
  return (
    <Layout>
      <Content>
        <Section>
          <Text>
            <h1>Mitgliedsgruppen</h1>
            <p>
              Das Junon besteht aus über 30 lokalen UN-Gruppen, die sich mit
              verschiedenen Projekten beschäftigen. Jährlich treffen sich
              Delegierte dieser Gruppen, um über die Zukunft des Junon zu
              entscheiden.
            </p>
            <p>
              Jede/r kann an diesem Treffen teilnehmen und sich aktiv in die
              Arbeit des Junon einbringen.
              <br />
              <br />
            </p>
            <strong>
              Hast du oder hat deine Gruppe Interesse mitzumachen?
            </strong>
            <h2>Dann schreib uns:</h2>
            <ButtonInternalLink to="/#contact">Kontakt</ButtonInternalLink>
          </Text>
          <StyledSVGImage img={karte_SVG} />
        </Section>
        <StyledH1>Projekte im Netzwerk</StyledH1>
        <Section>
          <Text>
            <h1>Model United Nations</h1>
            <StyledImg src={MUN} alt="" />
            <p>
              Model-United-Nations-Konferenzen (MUNs) sind Planspiele, bei denen
              die Teilnehmer*Innen in die Rolle von Delegierten bei den
              Vereinten Nationen schlüpfen. In simulierten Gremien wie dem
              Sicherheitsrat oder der Generalversammlung debattieren die
              Delegierten über weltpolitische Themen, handeln Kompromisse aus
              und verabschieden Resolutionen. Jeder der Teilnehmer*Innen
              vertritt einen Staat, in dessen Position er oder sie sich vor der
              Konferenz eingearbeitet hat. Dabei zählt nicht die persönliche
              Meinung, sondern es ist das erklärte Ziel, die offizielle Position
              des zu vertretenden Staates möglichst realistisch wiederzugeben.
            </p>
          </Text>
        </Section>
        <Section>
          <Text>
            <h1>UN im Klassenzimmer</h1>
            <StyledImg src={UNimKlassenzimmer} alt="" />
            <p>
              UN im Klassenzimmer gibt jungen Menschen die Möglichkeit,
              internationale Zusammenarbeit, politische Prozesse und die Ziele
              der Vereinten Nationen in der Praxis kennenzulernen. Studierende
              werden zu Teamerinnen und Teamern ausgebildet und vermitteln in
              den Schulen die Module.
            </p>
            <p>
              Mit UN im Klassenzimmer vermittelt die DGVN auf spielerische Art
              und Weise grundlegendes Wissen über die Arbeit und Ziele der
              Vereinten Nationen. In drei Modulen können sich Schulklassen mit
              den Arbeitsweisen der UN vertraut machen und in die Rolle von
              Diplomatinnen und Diplomaten schlüpfen.
            </p>
            <p>
              Begleitet werden die Module durch ausgebildete Teamerinnen und
              Teamer der DGVN, die sich meist im Studium oder der
              Berufsausbildung befinden und großes Interesse an Politik und den
              Vereinten Nationen haben. Interessierte Schulen und zukünftige
              Teamerinnen und Teamer können sich bei der DGVN und den
              Regionalkoordinationen melden.
            </p>
          </Text>
        </Section>
        <Section>
          <Text>
            <h1>Jugenddelegierte</h1>
            <StyledImg src={YouthDelegates} alt="" />
            <p>
              Seit 2005 begleiten jeweils zwei junge Menschen zwischen 18 und 25
              Jahre als Jugenddelegierte die deutsche Delegation zur
              Generalversammlung der Vereinten Nationen nach New York. Dort
              repräsentieren sie die Jugend Deutschlands und setzen sie sich
              zusammen mit den Jugenddelegierten anderer Länder für die Belange
              junger Menschen ein. Dabei haben die Jugendlichen jedes Jahr die
              Möglichkeit, eine Rede vor dem Ausschuss für soziale, humanitäre
              und kulturelle Fragen der Generalversammlung zu halten. So sind
              die Jugenddelegierten nicht an die deutsche Regierungsposition
              gebunden, sondern sprechen stellvertretend für junge Menschen in
              Deutschland.
            </p>
            <p>
              Vor ihrer Abreise nach New York unternehmen die Jugendlichen
              jeweils eine mehrwöchige Tour durch Deutschland. In Gesprächen und
              Projekten mit anderen Jugendlichen in Schulen und Universitäten,
              bei Jugendorganisationen und -verbänden sowie freien Trägern
              informieren sie über die Arbeit der Vereinten Nationen und
              erarbeiten gemeinsam mit den Jugendlichen, welche Anliegen in New
              York vorgebracht werden sollen. Die Jugendfragen werden dann von
              der Generalversammlung im sogenannten Dritten Hauptausschuss
              (Third Committee) behandelt. Außerdem beschäftigt sich die
              Sozialentwicklungskommission (SEK), eine funktionale Kommission
              des Wirtschafts- und Sozialrates der Vereinten Nationen (ECOSOC),
              mit dem Weltaktionsprogramm für die Jugend.
            </p>
            <p>
              Das Projekt „Jugenddelegierte zur Generalversammlung“ wird von der
              deutschen Gesellschaft für die Vereinte Nationen (DGVN) sowie dem
              Deutschen Nationalkomitee für Internationale Jugendarbeit (DNK)
              getragen und vom Auswärtigen Amt und dem Bundesministerium für
              Familie, Senioren, Frauen und Jugend unterstützt.
            </p>
          </Text>
        </Section>
      </Content>
    </Layout>
  )
}

export default Netzwerk
