import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 95%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

const StyledInnerWrapper = styled.div`
  margin: 0.5rem 0 0 0.5rem;

  &:last-child {
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5rem;
    margin: 0;
  }
`;

const StyledParagraph = styled.p`
  color: ${({ theme, green }) =>
    green ? theme.color.tertiary : theme.color.grey};
  font-size: 1.5rem;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};

  @media (min-width: 1024px) {
    margin-right: 10rem;
    font-size: 3rem;
  }
`;

const Skill = ({ paragraph, children }) => (
  <StyledWrapper>
    <StyledParagraph green>{paragraph}</StyledParagraph>
    <StyledInnerWrapper>{children}</StyledInnerWrapper>
  </StyledWrapper>
);

Skill.propTypes = {
  paragraph: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Skill;
