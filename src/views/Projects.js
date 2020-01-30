import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import Heading from 'components/Heading/Heading';
import Project from 'components/Project/Project';
import projectsData from '../data/projects';
import Divider from '../components/Divider/Divider';

const StyledWrapper = styled.div`
  margin-top: 10vh;

  @media (min-width: 1024px) {
    padding-left: 35vh;
    height: 90vh;
  }
`;

const Projects = () => (
  <StyledWrapper>
    <Heading>projects</Heading>
    <Media queries={{ desktop: '(min-width: 1024px)' }}>
      {matches => <>{matches.desktop && <Divider />}</>}
    </Media>
    {projectsData.map(item => (
      <Project key={item.title} {...item} />
    ))}
  </StyledWrapper>
);

export default Projects;
