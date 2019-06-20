import { createGlobalStyle } from "styled-components"
import "typeface-rubik"

export const GlobalStyle = createGlobalStyle`
  html {

    ${`` /* Color Scheme */}
    --primary-color: 82, 242, 231; //rgb(82, 242, 231)
    --secondary-color: 100, 249, 84; //rgb(100, 249, 84)
    --tertiary-color: 99, 147, 244; //rgb(99, 147, 244)
    --dark-gray: 66, 81, 80; //rgb(66, 81, 80)
    --light-gray: 250, 251, 251; //rgb(250, 251, 251)
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
    font-family: "Rubik", sans-serif;
    color: rgb(var(--dark-gray));
  }

  h1 {
    font-weight: 700;
  }

  h2, h3 {
    font-weight: 500
  }

  p {
    font-weight: 400;
    line-height: 1.5em;
  }
`
