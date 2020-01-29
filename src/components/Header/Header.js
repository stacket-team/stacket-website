import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import Link from 'components/Link/Link';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 1rem;
  }
`;

const Header = () => (
  <StyledWrapper>
    <Logo />
    <Link to="/contact" from="/">
      contact
    </Link>
  </StyledWrapper>
);

export default Header;
