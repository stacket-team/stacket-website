import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/zei8qhj.css");
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: hero-new, sans-serif;
  }
`;

export default GlobalStyle;
