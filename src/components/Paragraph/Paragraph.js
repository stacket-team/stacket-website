import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.font.hero};
  font-size: 1rem;
  color: ${({ theme }) => theme.color.grey};
  text-align: center;
`;

const Paragraph = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
