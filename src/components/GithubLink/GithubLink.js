import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme, desktop }) =>
    desktop ? theme.color.secondary : theme.color.white};
  font-size: ${({ desktop }) => (desktop ? '2rem' : 'inherit')};
  margin-right: 1rem;
`;

const GithubLink = ({ desktop }) => (
  <StyledLink
    href="https://github.com/stacket-team"
    target="_blank"
    desktop={desktop}
  >
    github
  </StyledLink>
);

GithubLink.propTypes = {
  desktop: PropTypes.bool,
};

GithubLink.defaultProps = {
  desktop: undefined,
};

export default GithubLink;
