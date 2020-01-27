import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header/Header';
import HomeHeroText from 'views/HomeHeroText';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <HomeHeroText />
  </ThemeProvider>
);

export default IndexPage;
