import React from 'react';
import styled from 'styled-components';
import Skill from 'components/Skill/Skill';
import SkillItem from 'components/Skill/SkillItem';
import Heading from 'components/Heading/Heading';

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
`;

const Skills = () => (
  <StyledWrapper>
    <Heading>skills</Heading>
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
