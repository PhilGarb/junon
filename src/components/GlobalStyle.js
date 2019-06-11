import { createGlobalStyle } from "styled-components"
import "typeface-rubik"

export const GlobalStyle = createGlobalStyle`
  html {
    ${`` /* Color Scheme */}
    --primary-color: #52F2E7;
    --secondary-color: #64F954;
    --tertiary-color: #6393F4;
    --dark-gray: #425150;
    --light-gray: #FAFBFB;
    --main-gradient: 28deg, rgba(99, 249, 85, 1) 0%, rgba(81, 242, 231, 1) 100%;

    ${`` /* Fluid Font-Scaling */}
    font-size: 0.875em;

    @media (min-width: 50em) {
      font-size: calc(0.875em + 0.5 * ((100vw - 50em) / 50))
    }

    @media (min-width: 100em) {
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
