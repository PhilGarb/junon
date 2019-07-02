import React from "react"
import styled from "styled-components"

import { Layout } from "../components/ComponentsIndex"

const Background = styled.div`
  grid-column: 1/ -1;
  display: grid;
  grid: inherit;
`

const Content = styled.div`
  grid-column: 2/3;

  h1 {
    border-bottom: 1px solid rgb(var(--dark-gray));
    padding-bottom: 1em;
  }
`

const datenschutzerklärung = () => {
  return (
    <Layout>
      <Background>
        <Content>
          <h1>Datenschutzerkl&auml;rung</h1>
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen &Uuml;berblick
            dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
            Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
            Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
            unserer unter diesem Text aufgef&uuml;hrten
            Datenschutzerkl&auml;rung.
          </p>
          <h3>Datenerfassung auf unserer Website</h3>
          <p>
            <strong>
              Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
              Website?
            </strong>
          </p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum
            dieser Website entnehmen.
          </p>
          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong>
          </p>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
            in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
            Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere
            Website betreten.
          </p>
          <p>
            <strong>Wof&uuml;r nutzen wir Ihre Daten?</strong>
          </p>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
            Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
          <p>
            <strong>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</strong>
          </p>
          <p>
            Sie haben jederzeit das Recht unentgeltlich Auskunft &uuml;ber
            Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
            Recht, die Berichtigung, Sperrung oder L&ouml;schung dieser Daten zu
            verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
            k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen
            Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht
            bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
          </p>
          <p>
            Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden
            die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen. Details hierzu entnehmen Sie der
            Datenschutzerkl&auml;rung unter &bdquo;Recht auf Einschr&auml;nkung
            der Verarbeitung&ldquo;.
          </p>
          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer
            pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerkl&auml;rung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die
            vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten
            wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch,
            wie und zu welchem Zweck das geschieht.
          </p>
          <p>
            Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
            (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
            aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem
            Zugriff durch Dritte ist nicht m&ouml;glich.
          </p>
          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p>
            Junges UNO Netzwerk Deutschland e.V.
            <br />
            United Nations Youth Association Germany
            <br />
            Zimmermannstra&szlig;e 26/27 - 10969 Berlin
          </p>
          <p>
            Telefon: &#91;Telefonnummer der verantwortlichen Stelle&#93;
            <br />
            E-Mail: support@junges-uno-netzwerk.de
          </p>
          <p>
            Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
            Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
            und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B.
            Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
          </p>
          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
            ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
            bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
            formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit
            der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
            unber&uuml;hrt.
          </p>
          <h3>
            Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
            sowie gegen Direktwerbung (Art. 21 DSGVO)
          </h3>
          <p>
            <i>
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e
              oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus
              Gr&uuml;nden, die sich aus Ihrer besonderen Situation ergeben,
              gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
              einzulegen; dies gilt auch f&uuml;r ein auf diese Bestimmungen
              gest&uuml;tztes Profiling. Die jeweilige Rechtsgrundlage, auf
              denen eine Verarbeitung beruht, entnehmen Sie dieser
              Datenschutzerkl&auml;rung. Wenn Sie Widerspruch einlegen, werden
              wir Ihre betroffenen personenbezogenen Daten nicht mehr
              verarbeiten, es sei denn, wir k&ouml;nnen zwingende
              schutzw&uuml;rdige Gr&uuml;nde f&uuml;r die Verarbeitung
              nachweisen, die Ihre Interessen, Rechte und Freiheiten
              &uuml;berwiegen oder die Verarbeitung dient der Geltendmachung,
              Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen
              (Widerspruch nach Art. 21 Abs. 1 DSGVO).
            </i>
          </p>
          <p>
            <i>
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung
              zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen
              die Verarbeitung Sie betreffender personenbezogener Daten zum
              Zwecke derartiger Werbung einzulegen; dies gilt auch f&uuml;r das
              Profiling, soweit es mit solcher Direktwerbung in Verbindung
              steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten
              anschlie&szlig;end nicht mehr zum Zwecke der Direktwerbung
              verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </i>
          </p>
          <h3>
            Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
          </h3>
          <p>
            Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
            Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
            insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
            Aufenthalts, ihres Arbeitsplatzes oder des Orts des
            mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
            unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
            Rechtsbehelfe.
          </p>
          <h3>Recht auf Daten&uuml;bertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
            sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
            Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
            &Uuml;bertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>
          <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
            &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
            Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
            senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
            verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von &bdquo;http://&ldquo; auf
            &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
          </p>
          <p>
            Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
            k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
            Dritten mitgelesen werden.
          </p>
          <h3>Auskunft, Sperrung, L&ouml;schung und Berichtigung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und
            Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
            Recht auf Berichtigung, Sperrung oder L&ouml;schung dieser Daten.
            Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
            k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen
            Adresse an uns wenden.
          </p>
          <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>
          <p>
            Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in
            folgenden F&auml;llen:
          </p>
          <ul>
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
              Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
              der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten
              unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
              der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
              verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen,
              Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung
              von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht,
              statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung
              Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
              haben, muss eine Abw&auml;gung zwischen Ihren und unseren
              Interessen vorgenommen werden. Solange noch nicht feststeht,
              wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
              Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.
            </li>
          </ul>
          <p>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
            eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
            Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
            Geltendmachung, Aus&uuml;bung oder Verteidigung von
            Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
            nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
            eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
            Union oder eines Mitgliedstaats verarbeitet werden.
          </p>
          <h2>3. Datenerfassung auf unserer Website</h2>
          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns &uuml;bermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li> <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen.
          </p>
          <p>
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
            der technisch fehlerfreien Darstellung und der Optimierung seiner
            Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst
            werden.
          </p>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r
            den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten
            erfolgt somit ausschlie&szlig;lich auf Grundlage Ihrer Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO). Sie k&ouml;nnen diese Einwilligung
            jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
            E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf
            erfolgten Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf
            unber&uuml;hrt.
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
            uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung
            entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer
            Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
            Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
          </p>
        </Content>
      </Background>
    </Layout>
  )
}

export default datenschutzerklärung
