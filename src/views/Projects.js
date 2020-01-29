import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Project from 'components/Project/Project';
import projectsData from '../data/projects';

const StyledWrapper = styled.div`
  margin-top: 10vh;
`;

const Projects = () => (
  <StyledWrapper>
    <Heading>projects</Heading>
    {projectsData.map(item => (
      <Project key={item.title} {...item} />
    ))}
  </StyledWrapper>
);

export default Projects;
