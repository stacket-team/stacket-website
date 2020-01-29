import React from 'react';
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
`;

const Heading = styled.span`
  padding: 0;
  margin: 0 0 12px 0;
  font-size: 3.2rem;
  font-family: ${({ theme }) => theme.font.jaf};
  font-weight: ${({ theme }) => theme.font.regular};
  color: ${({ theme, green }) =>
    green ? theme.color.tertiary : theme.color.white};
`;

class ContactHeroText extends React.Component {
  state = {
    value: 'contact@stacket.dev',
    copied: false,
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  render() {
    const { value, copied } = this.state;

    return (
      <Wrapper>
        <CopyToClipboard onCopy={this.onCopy} text={value}>
          {copied ? (
            <Heading green>contact@stacket.dev</Heading>
          ) : (
            <Heading>contact@stacket.dev</Heading>
          )}
        </CopyToClipboard>
        {copied ? (
          <>
            <Paragraph>
              great! it&apos;s copied to your clipboard now!
            </Paragraph>
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
  }
}

export default ContactHeroText;
