import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import HeroView from 'views/HeroView';
import HeroText from 'views/HeroText';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <HeroView />
    <HeroText />
  </ThemeProvider>
);

export default IndexPage;
