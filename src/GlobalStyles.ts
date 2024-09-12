// GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
     'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:black;
  }

  /* Additional global styles */
  body {
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  input, button {
    &:focus, 
    &:active {
        outline: none;
        }
  }
`;

export default GlobalStyles;
