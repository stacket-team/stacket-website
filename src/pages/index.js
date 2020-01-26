import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import HeroView from 'views/HeroView';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <HeroView />
  </ThemeProvider>
);

export default IndexPage;
