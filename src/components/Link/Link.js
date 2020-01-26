import React from 'react';
import { Link as NavLink } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { globalHistory } from '@reach/router';

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.font.jaf};
  text-decoration: none;
  font-size: 2.4rem;
  cursor: pointer;
`;

const Link = ({ to, from, children }) => {
  const path = globalHistory.location.pathname;

  return from && path === to ? (
    <StyledLink to={from}>back</StyledLink>
  ) : (
    <StyledLink to={to}>{children}</StyledLink>
  );
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  from: PropTypes.string,
};

Link.defaultProps = {
  from: undefined,
};

export default Link;
