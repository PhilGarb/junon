import React from "react"
import styled from "styled-components"

import { Button, Card } from "../../ComponentsIndex"
import { kontakt_SVG } from "../../../images/ImageIndex"

const Background = styled.div`
  background: rgb(var(--main-color));
  background-image: url(${kontakt_SVG});
  background-image: url(${kontakt_SVG}), linear-gradient(var(--main-gradient));
  grid-column: 1/ -1;
  background-repeat: no-repeat;
  background-size: 70%, cover;
  background-position: bottom;
  margin-top: 5em;
  min-height: 80vmin;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const PositionedCard = styled(Card)`
  margin: 3em;

  h1 {
    border-bottom: 1px solid rgb(var(--dark-gray));
    padding-bottom: 1em;
    margin: 0;
  }

  h2 {
    margin: 0.5em 0 1em 0;
  }

  form {
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }

  .input {
    display: block;
    height: 3em;
    padding: 0 1em;
    background-color: rgb(var(--dark-gray), 0.5);
    border: none;

    border-bottom: 5px solid transparent;
    border-radius: 5px;
    margin: 1em 0em;
    outline: none;
    transition: all 100ms ease-in;

    :focus {
      background-color: rgb(var(--tertiary-color));
      border-bottom: 5px solid rgb(var(--dark-gray), 0.5);
      color: white;
    }
  }

  #description {
    resize: none;
    padding: 1em 1em;
  }
`

const ProjekteSection = () => {
  return (
    <Background>
      <PositionedCard>
        <h1 id="contact">Interesse oder Fragen?</h1>
        <h2>Schreib uns:</h2>
        <form action="#">
          <label htmlFor="email">E-Mail:</label>
          <input type="email" name="email" id="email" className="input" />
          <label htmlFor="description">Anliegen:</label>
          <textarea
            type="text"
            name="description"
            id="description"
            className="input"
          />
          <Button>Senden</Button>
        </form>
      </PositionedCard>
    </Background>
  )
}

export default ProjekteSection
