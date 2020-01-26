import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 274px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 30px;
`;

const HeroText = () => (
  <Wrapper>
    <StyledHeading>contact@stacket.dev</StyledHeading>
    <Paragraph>
      we know everybody hates these „mailto” links that open in the mail app.
    </Paragraph>
    <Paragraph>just click our email to copy it to your clipboard</Paragraph>
  </Wrapper>
);

export default HeroText;
