import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header/Header';
import HomeHeroText from 'views/HomeHeroText';
import Skills from 'views/Skills';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <HomeHeroText />
    <Skills />
  </ThemeProvider>
);

export default IndexPage;
