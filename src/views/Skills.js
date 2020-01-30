import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import Skill from 'components/Skill/Skill';
import SkillItem from 'components/Skill/SkillItem';
import Heading from 'components/Heading/Heading';
import Divider from '../components/Divider/Divider';

const frontSkills = [
  'javascript',
  'react',
  'gatsby',
  'html',
  'css',
  'styled-components',
  'apollo-client',
];

const backSKills = [
  'graphql',
  'express',
  'mysql',
  'mongodb',
  'apollo-server',
  'php',
];

const StyledWrapper = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 15vh;

  @media (min-width: 1024px) {
    padding-left: 35vh;
    height: 80vh;
  }
`;

const StyledHeading = styled(Heading)`
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const Skills = () => (
  <StyledWrapper>
    <StyledHeading>skills</StyledHeading>
    <Media queries={{ desktop: '(min-width: 1024px)' }}>
      {matches => <>{matches.desktop && <Divider />}</>}
    </Media>
    <Skill paragraph="front-end">
      {frontSkills.map(item => (
        <SkillItem key={item}>{item}</SkillItem>
      ))}
    </Skill>
    <Skill paragraph="back-end">
      {backSKills.map(item => (
        <SkillItem key={item}>{item}</SkillItem>
      ))}
    </Skill>
  </StyledWrapper>
);

export default Skills;
