import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
  margin: ${({ down }) => (down ? '12px 0 0 0' : '0')};
  padding: 0;
  font-family: ${({ theme }) => theme.font.hero};
  font-size: 1rem;
  color: ${({ theme }) => theme.color.grey};
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = ({ children, down }) => (
  <StyledParagraph down={down}>{children}</StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  down: PropTypes.bool,
};

Paragraph.defaultProps = {
  down: false,
};

export default Paragraph;
