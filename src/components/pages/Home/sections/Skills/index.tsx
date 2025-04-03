// External Libraries
import React from 'react'

// Components

// Utils
import { MY_SKILLS } from './constants'

// Styles
import { Container } from './styles'

interface Props {
  // Props
}

export const Skills: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // Functions
  function renderSkills() {
    return MY_SKILLS.map((skill, index) => (
      <div key={index}>
        <p>{skill.description}</p>
      </div>
    ))
  }

  return (
    <Container>
      <h1>My skills</h1>

      {renderSkills()}
    </Container>
  )
}
