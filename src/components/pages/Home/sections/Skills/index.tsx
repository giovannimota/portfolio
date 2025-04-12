// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Utils
import {
  BACK_SKILLS,
  FRONT_SKILLS,
  GENERAL_SKILLS,
  MY_SKILLS
} from './constants'

// Styles
import { Container, Content, SkillsContainer } from './styles'
import TextScramble from '@components/toolkit/TextScramble'

interface Props {
  // Props
}

export const Skills: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // Functions
  function renderSkills(type: string) {
    var skills = MY_SKILLS

    if (type === 'front') skills = FRONT_SKILLS
    if (type === 'back') skills = BACK_SKILLS
    if (type === 'general') skills = GENERAL_SKILLS

    return skills.map((skill, index) => (
      <div key={index}>
        <li>{skill.description}</li>
      </div>
    ))
  }

  return (
    <Container>
      <Content>
        <Typography variant="h2">My skills</Typography>

        <SkillsContainer>
          <TextScramble textVariant="b1" text="FRONT-END" />

          {renderSkills('front')}
        </SkillsContainer>

        <SkillsContainer>
          <TextScramble textVariant="b1" text="BACK-END" />

          {renderSkills('back')}
        </SkillsContainer>

        <SkillsContainer>
          <TextScramble textVariant="b1" text="GENERAL" />

          {renderSkills('general')}
        </SkillsContainer>
      </Content>
    </Container>
  )
}
