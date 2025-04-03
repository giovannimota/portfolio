// External Libraries
import React from 'react'

// Components

// Hooks
import { useSWPlanets } from './hooks/useSWPlanets'

// Styles
import { Container } from './styles'

interface Props {
  // Props
}

export const PlanetsView: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // Hooks
  const {} = useSWPlanets()

  return <Container>{/* Code */}</Container>
}
