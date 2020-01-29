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
    font-size: ${({ big }) => (big ? '5.2rem' : '3.6rem')};
  }
`;

const Heading = ({ className, children, big }) => (
  <StyledHeading className={className} big={big}>
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  big: PropTypes.bool,
  className: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  big: false,
};

export default Heading;
