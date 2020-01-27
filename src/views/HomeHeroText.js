import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';

const Wrapper = styled.div`
  margin: 0 auto;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    color: ${({ theme }) => theme.color.tertiary};
  }
`;

const HomeHeroText = () => (
  <Wrapper>
    <Heading>
      we are small developer team <br /> specializing in <span>javascript</span>
    </Heading>
  </Wrapper>
);

export default HomeHeroText;
