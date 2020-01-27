import React from 'react';
import { Link as NavLink } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { globalHistory } from '@reach/router';

const StyledLink = styled(NavLink)`
  color: ${({ theme, white }) =>
    white ? theme.color.white : theme.color.secondary};
  font-family: ${({ theme }) => theme.font.jaf};
  text-decoration: none;
  font-size: ${({ small }) => (small ? '1.5rem' : '2.4rem')};
  cursor: pointer;
`;

const Link = ({ to, from, children, white, small }) => {
  const path = globalHistory.location.pathname;

  return from && path === to ? (
    <StyledLink to={from} white={white} small={small}>
      back
    </StyledLink>
  ) : (
    <StyledLink to={to} white={white} small={small}>
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  from: PropTypes.string,
  white: PropTypes.bool,
  small: PropTypes.bool,
};

Link.defaultProps = {
  from: undefined,
  white: undefined,
  small: undefined,
};

export default Link;
