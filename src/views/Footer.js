import React from 'react';
import styled from 'styled-components';
import Link from 'components/Link/Link';
import GithubLink from '../components/GithubLink/GithubLink';

const StyledWrapper = styled.div`
  margin: 10vh auto 0 auto;
  width: 90%;
  text-align: left;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.font.jaf};
`;

const Footer = () => (
  <StyledWrapper>
    <GithubLink />
    <Link to="/contact" white small>
      contact
    </Link>
  </StyledWrapper>
);

export default Footer;
