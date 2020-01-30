import React, { useState } from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 274px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: auto;
  }
`;

const Heading = styled.span`
  padding: 0;
  margin: 0 0 12px 0;
  font-size: 3.2rem;
  font-family: ${({ theme }) => theme.font.jaf};
  font-weight: ${({ theme }) => theme.font.regular};
  color: ${({ theme, green }) =>
    green ? theme.color.tertiary : theme.color.white};

  @media (min-width: 1024px) {
    font-size: 5.2rem;
  }
`;

const ContactHeroText = () => {
  const value = 'contact@stacket.dev';
  const [copied, setCopied] = useState(false);

  const handleCopied = () => setCopied(true);

  return (
    <Wrapper>
      <CopyToClipboard onCopy={handleCopied} text={value}>
        {copied ? <Heading green>{value}</Heading> : <Heading>{value}</Heading>}
      </CopyToClipboard>
      {copied ? (
        <>
          <Paragraph>great! it&apos;s copied to your clipboard now!</Paragraph>
        </>
      ) : (
        <>
          <Paragraph>
            we know everybody hates these „mailto” links that open in the mail
            app.
          </Paragraph>
          <Paragraph down>
            just click our email to copy it to your clipboard
          </Paragraph>
        </>
      )}
    </Wrapper>
  );
};

export default ContactHeroText;
