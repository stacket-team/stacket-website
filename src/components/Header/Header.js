import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import Logo from 'components/Logo/Logo';
import Link from 'components/Link/Link';
import GithubLink from '../GithubLink/GithubLink';

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
    <Media
      queries={{
        mobile: '(max-width: 1024px)',
        desktop: '(min-width: 1024px)',
      }}
    >
      {matches => (
        <>
          {matches.mobile && (
            <Link to="/contact" from="/">
              contact
            </Link>
          )}
          {matches.desktop && (
            <div>
              <GithubLink desktop />
              <Link to="/contact" from="/">
                contact
              </Link>
            </div>
          )}
        </>
      )}
    </Media>
  </StyledWrapper>
);

export default Header;
