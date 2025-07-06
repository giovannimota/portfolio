// External Libraries
import React from 'react'

// Components
import { TechCard } from './components/TechCard'
import { Typography } from '@components/toolkit/Typography'

// Hooks
import { useTechsGrid } from './hooks/useTechsGrid'

// Utils
import { TECHS } from './constants'

// Styles
import { Container, TechsContainer } from './styles'

interface Props {
  // Props
}

export const TechsGrid: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // Hooks
  const {} = useTechsGrid({})

  // Constants

  // Functions
  function renderTechs() {
    return TECHS.map(tech => (
      <TechCard key={`tech_${tech.title}`} techInfo={tech} />
    ))
  }

  return (
    <Container>
      <Typography variant="h4">Choose a content to learn</Typography>

      <TechsContainer>{renderTechs()}</TechsContainer>
    </Container>
  )
}
