import React from "react"
import styled from "styled-components"

import { Layout } from "../components/ComponentsIndex"

const Background = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid: inherit;
`

const Content = styled.div`
  grid-column: 2/ 3;
`

const Impressum = () => {
  return (
    <Layout>
      <Background>
        <Content>
          <h1>Impressum</h1>
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>
            Junges UNO Netzwerk Deutschland e.V.
            <br />
            Zimmermannstra&szlig;e 26/27
            <br />
            10969 Berlin
          </p>
          <p>
            Vereinsregister: VR 26881 B<br />
            Registergericht: Amtsgericht Charlottenburg
          </p>
          <p>
            <strong>Vertreten durch:</strong>
            <br />
            Dahlia Arora und Natalie Eymann (Generalsekret&auml;re)
            <br />
            Shayan Mirmoayedi (Schatzmeister)
          </p>
          <h2>Kontakt</h2>
          <p>E-Mail: support@junges-uno-netzwerk.de</p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <h3>Haftung f&uuml;r Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs. 1 TMG
            f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
            gespeicherte fremde Informationen zu &uuml;berwachen oder nach
            Umst&auml;nden zu forschen, die auf eine rechtswidrige
            T&auml;tigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
            dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            m&ouml;glich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <h3>Haftung f&uuml;r Links</h3>
          <p>
            Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
            f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
            &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
            &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
            bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
            den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </Content>
      </Background>
    </Layout>
  )
}

export default Impressum
