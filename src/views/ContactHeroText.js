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

const ContactHeroText = () => (
  <Wrapper>
    <Heading big>contact@stacket.dev</Heading>
    <Paragraph>
      we know everybody hates these „mailto” links that open in the mail app.
    </Paragraph>
    <Paragraph down>
      just click our email to copy it to your clipboard
    </Paragraph>
  </Wrapper>
);

export default ContactHeroText;
