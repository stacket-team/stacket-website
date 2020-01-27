import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header/Header';
import HomeHeroText from 'views/HomeHeroText';
import Skills from 'views/Skills';
import Projects from 'views/Projects';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <HomeHeroText />
    <Skills />
    <Projects />
  </ThemeProvider>
);

export default IndexPage;
