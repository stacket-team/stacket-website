import React from 'react';
import styled from 'styled-components';
import Link from 'components/Link/Link';

const StyledWrapper = styled.div`
  margin: 10vh auto 0 auto;
  width: 90%;
  text-align: left;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.font.jaf};
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  margin-right: 1rem;
`;

const Footer = () => (
  <StyledWrapper>
    <StyledLink href="https://github.com/stacket-team" target="_blank">
      github
    </StyledLink>
    <Link to="/contact" white small>
      contact
    </Link>
  </StyledWrapper>
);

export default Footer;
