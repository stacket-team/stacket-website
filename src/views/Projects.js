import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';

const OuterWrapper = styled.div`
  margin-top: 10vh;
`;

const StyledInnerWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const Date = styled.p`
  font-size: 1.4rem;
`;

const Title = styled.p`
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

const Description = styled.p`
  margin: 0.8rem 0;
  padding: 0.8rem;
  background: ${({ theme }) => theme.color.tertiary};
  color: ${({ theme }) => theme.color.primary};
  text-align: justify;
  border-radius: 0.3rem;
  font-size: 1.6rem;
`;

const Projects = () => (
  <OuterWrapper>
    <Heading>projects</Heading>
    <StyledInnerWrapper>
      <Date>01.2020</Date>
      <Title>Photos API</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique
        dictum dignissim. Nulla porta velit ornare, pharetra arcu non, faucibus
        sem. Sed id luctus lectus. Donec tellus justo, imperdiet.
      </Description>
    </StyledInnerWrapper>
  </OuterWrapper>
);

export default Projects;
