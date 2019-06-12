// TODO This is not really a hook, because it is not reusable

import React from "react"
import styled from "styled-components"

import { Button, Card } from "../layoutIndex"
import { kontakt } from "../../../images/imageIndex"

const Background = styled.div`
  background: rgb(var(--main-color));
  background-image: url(${kontakt});
  background-image: url(${kontakt}), linear-gradient(var(--main-gradient));
  grid-column: 1/ -1;
  background-repeat: no-repeat;
  background-size: 70%, cover;
  background-position: bottom;
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
  }

  form {
    align-self: stretch;
  }

  input {
    display: block;
    width: 100%;
    height: 3em;
    background-color: rgb(var(--light-gray));
    border: 1px solid rgb(var(--dark-gray));
    border-radius: 10px;
    margin: 1em 0em;

    ::placeholder {
      text-align: left;
    }
  }

  #description {
    height: 10em;
  }
`

const ProjekteSection = () => {
  return (
    <Background>
      <PositionedCard>
        <h1>Interesse oder Fragen?</h1>
        <h2>Schreib uns:</h2>
        <form action="#">
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="description">Anliegen</label>
          <input type="text" name="description" id="description" />
          <Button>Senden</Button>
        </form>
      </PositionedCard>
    </Background>
  )
}

export default ProjekteSection
