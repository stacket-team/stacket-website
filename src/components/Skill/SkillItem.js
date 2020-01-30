import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
  color: ${({ theme, green }) =>
    green ? theme.color.tertiary : theme.color.grey};
  font-size: 1.5rem;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};

  @media (min-width: 1024px) {
    font-size: 2.6rem;
  }
`;

const SkillItem = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
);

SkillItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SkillItem;
