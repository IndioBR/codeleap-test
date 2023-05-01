import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    background-color: #DDDDDD;
  }
  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3 {
    font-weight: 700;
  }

  a {
    all: unset;
    cursor: pointer;
    pointer-events: all;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
