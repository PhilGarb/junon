import React from "react"
import styled from "styled-components"

import {
  ButtonExternalLink,
  ButtonInternalLink,
  SVGImage,
  Card,
} from "../../ComponentsIndex"
import { netzwerktreffen_2022, projekte_SVG } from "../../../images/ImageIndex"

//TODO Remove with next commit! When resizing the Browser Window larger then the desktop the Layout breaks with the grid minmaxing. I am unsure wether this is happening on larger displays by default.
const PositionedSection = styled.section`
  grid-column: 2 / 3;
  margin-top: 3rem;
  display: grid;
  grid-template-rows: 5rem 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 5em;
  min-height: 80vmin;
  justify-content: center;
  align-items: center;

  h1 {
    grid-column: 1/ -1;
    justify-self: center;
    border-bottom: 1px solid rgb(var(--dark-gray));
    padding-bottom: 1em;
  }
`

const PositionedCard = styled(Card)`
  margin-right: 5rem;
`

const PositionedSubSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
`

const ProjekteSection = () => {
  return (
    <PositionedSection>
      <h1>Projekte</h1>
      <PositionedSubSection>
        <PositionedCard>
          <div>
            <h2>Netzwerktreffen in Bonn</h2>
            <p style={{ marginTop: "0", fontSize: "0.8rem", color: "gray" }}>
              Vom 25.08.2022 - 28.08.2022
            </p>
            <p>Dieses Jahr geht es um Klima und Sicherheitspolitik.</p>
          </div>
          <ButtonExternalLink to="/netzwerktreffen.pdf" target="_blank">
            Mehr erfahren
          </ButtonExternalLink>
          <p>Komm für ein Wochenende nach Bonn!</p>
          <ButtonExternalLink href="mailto:vorstand@unya.de">
            Anmeldung per E-Mail
          </ButtonExternalLink>
        </PositionedCard>
        <div style={{ borderRadius: "10px", overflow: "hidden" }}>
          <SVGImage style={{ lineHeight: 0 }} img={netzwerktreffen_2022} />
        </div>
      </PositionedSubSection>
      <PositionedSubSection>
        <PositionedCard>
          <h2>Unsere Arbeit</h2>
          <p>
            Wir bündeln und vermitteln das Wissen unserer Mitgliedsgruppen bei
            Seminaren und Konferenzen.
          </p>
          <p>
            Jährlich veranstalten wir Study Trips, Summer Schools und
            Delegiertenversammlungen und unterstützen bei der Realisierung neuer
            Projekte.
          </p>
          <ButtonInternalLink to="/projekte">Mehr erfahren</ButtonInternalLink>
        </PositionedCard>
        <SVGImage img={projekte_SVG} />
      </PositionedSubSection>
    </PositionedSection>
  )
}

export default ProjekteSection
