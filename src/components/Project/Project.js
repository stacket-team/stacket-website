import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInnerWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const Date = styled.p`
  font-size: 1.4rem;
`;

const Title = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

const Description = styled.p`
  margin: 0.8rem 0;
  padding: 0.8rem;
  background: ${({ theme }) => theme.color.tertiary};
  color: ${({ theme }) => theme.color.primary};
  text-align: justify;
  border-radius: 0.3rem;
  font-size: 1.6rem;
`;

const Project = ({ title, date, link, description }) => (
  <StyledInnerWrapper>
    <Date>{date}</Date>
    <Title href={link}>{title}</Title>
    <Description>{description}</Description>
  </StyledInnerWrapper>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
