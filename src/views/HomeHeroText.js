import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import Heading from 'components/Heading/Heading';

const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

  span {
    color: ${({ theme }) => theme.color.tertiary};
  }

  @media (min-width: 1024px) {
    margin-left: 20%;
    margin-bottom: 40vh;
  }
`;

const HomeHeroText = () => (
  <Wrapper>
    <div>
      <Media
        queries={{
          mobile: '(max-width: 1023px)',
          desktop: '(min-width: 1024px)',
        }}
      >
        {matches => (
          <>
            {matches.mobile && (
              <>
                <Heading>
                  we are small full-stack developer team based in Poland,
                  specializing in <span>javascript</span>
                </Heading>
                <Heading>
                  we spend most of our time building custom APIs and react
                  applications
                </Heading>
              </>
            )}
            {matches.desktop && (
              <>
                <Heading>
                  we are small full-stack developer team <br /> based in Poland,
                  specializing in <span>javascript</span>
                </Heading>
                <Heading>
                  we spend most of our time building <br /> custom api and react
                  applications
                </Heading>
              </>
            )}
          </>
        )}
      </Media>
    </div>
  </Wrapper>
);

export default HomeHeroText;
