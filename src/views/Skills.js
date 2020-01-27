import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading/Heading';

const OuterWrapper = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 15vh;
`;

const StyledWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const StyledParagraph = styled.p`
  color: ${({ theme, green }) =>
    green ? theme.color.tertiary : theme.color.grey};
  font-size: 1.5rem;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
`;

const StyledInnerWrapper = styled.div`
  margin: 0.5rem 0 0 0.5rem;

  &:last-child {
    margin-bottom: 2.5rem;
  }
`;

const Skills = () => (
  <OuterWrapper>
    <Heading>skills</Heading>
    <StyledWrapper>
      <StyledParagraph green>front-end</StyledParagraph>
      <StyledInnerWrapper>
        <StyledParagraph>javascript</StyledParagraph>
        <StyledParagraph>react</StyledParagraph>
        <StyledParagraph>gatsby</StyledParagraph>
        <StyledParagraph>html</StyledParagraph>
        <StyledParagraph>css</StyledParagraph>
        <StyledParagraph>styled-components</StyledParagraph>
      </StyledInnerWrapper>
    </StyledWrapper>
    <StyledWrapper>
      <StyledParagraph green>back-end</StyledParagraph>
      <StyledInnerWrapper>
        <StyledParagraph>graphql</StyledParagraph>
        <StyledParagraph>express</StyledParagraph>
        <StyledParagraph>mysql</StyledParagraph>
        <StyledParagraph>mongodb</StyledParagraph>
      </StyledInnerWrapper>
    </StyledWrapper>
  </OuterWrapper>
);

export default Skills;
