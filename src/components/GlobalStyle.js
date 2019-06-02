import { createGlobalStyle } from "styled-components"
import "typeface-rubik"

export const GlobalStyle = createGlobalStyle`
  html {
    --primary-color: #52F2E7;
    --secondary-color: #64F954;
    --tertiary-color: #6393F4;
    --dark-gray: #425150;
    --light-gray: #FAFBFB;
    font-size: 1em;

    @media (min-width: 20em) {
      font-size: calc(1em + 0.25 * ((100vw - 20em) / 50))
    }

    @media (min-width: 70em) {
      font-size: 1.25em
    }
  }

  body {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: "Rubik";
    color: var(--dark-gray);
  }

  h1 {
    font-weight: 700;
  }

  h2, h3 {
    font-weight: 500
  }

  p {
    font-weight: 400;
  }
`
