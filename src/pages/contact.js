import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header/Header';
import ContactHeroText from 'views/ContactHeroText';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <ContactHeroText />
  </ThemeProvider>
);

export default IndexPage;
