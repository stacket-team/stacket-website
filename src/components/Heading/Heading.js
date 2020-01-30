import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.h1`
  padding: 0;
  margin: 0 0 12px 0;
  font-size: ${({ big }) => (big ? '3.2rem' : '2.6rem')};
  font-family: ${({ theme }) => theme.font.jaf};
  font-weight: ${({ theme }) => theme.font.regular};

  @media (min-width: 1024px) {
    font-size: 5rem;
    letter-spacing: 0.1rem;
  }
`;

const Heading = ({ className, children, big }) => (
  <StyledHeading big={big} className={className}>
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  big: PropTypes.bool,
  className: PropTypes.string,
};

Heading.defaultProps = {
  big: false,
  className: undefined,
};

export default Heading;
