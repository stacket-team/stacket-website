import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.h1`
  padding: 0;
  margin: 0 0 12px 0;
  font-size: ${({ big }) => (big ? '3.2rem' : '2.2rem')};
  font-family: ${({ theme }) => theme.font.jaf};
  font-weight: ${({ theme }) => theme.font.regular};
`;

const Heading = ({ children, big }) => (
  <StyledHeading big={big}>{children}</StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  big: PropTypes.bool,
};

Heading.defaultProps = {
  big: false,
};

export default Heading;