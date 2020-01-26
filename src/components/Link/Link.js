import React from 'react';
import { Link as NavLink } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.font.jaf};
  text-decoration: none;
  font-size: 2.4rem;
  cursor: pointer;
`;

const Link = ({ children }) => (
  <StyledLink to="/contact">{children}</StyledLink>
);

Link.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Link;
